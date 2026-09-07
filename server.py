#!/usr/bin/env python3
"""
IG ViralAudit Backend Server
Serves the web dashboard and handles live Instagram profile audit requests via REST API.
"""

import http.server
import socketserver
import urllib.parse
import json
import os
import sys
from audit_service import audit_instagram_account, sanitize_username

PORT = int(os.environ.get("PORT", 3000))
WORKSPACE_DIR = os.path.dirname(os.path.abspath(__file__))

class ViralAuditRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=WORKSPACE_DIR, **kwargs)

    def end_headers(self):
        # Enable CORS for API requests
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        parsed_url = urllib.parse.urlparse(self.path)
        
        # API Route: /api/audit
        if parsed_url.path == '/api/audit':
            query_params = urllib.parse.parse_qs(parsed_url.query)
            target = query_params.get('url', [''])[0] or query_params.get('username', [''])[0] or query_params.get('handle', [''])[0]
            
            if not target:
                self.send_response(400)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'error': 'Missing required parameter: url or username'}).encode('utf-8'))
                return

            try:
                print(f"[API] Received audit request for target: {target}")
                result = audit_instagram_account(target)
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps(result).encode('utf-8'))
            except Exception as e:
                print(f"[API Error] Failed auditing {target}: {e}")
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'error': str(e)}).encode('utf-8'))
            return

        # API Route: /api/health
        if parsed_url.path == '/api/health':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'status': 'ok', 'service': 'IG ViralAudit Server'}).encode('utf-8'))
            return

        # Default: Serve static files
        super().do_GET()

def run_server(port=PORT):
    # Allow port reuse
    socketserver.TCPServer.allow_reuse_address = True
    
    # Try preferred port or next available
    current_port = port
    while current_port < port + 20:
        try:
            with socketserver.ThreadingTCPServer(("", current_port), ViralAuditRequestHandler) as httpd:
                print(f"\n========================================================")
                print(f"🚀 IG ViralAudit App is running locally!")
                print(f"👉 Open in your browser: http://localhost:{current_port}")
                print(f"🔗 Audit API: http://localhost:{current_port}/api/audit?url=https://www.instagram.com/thepulkitproject/")
                print(f"========================================================\n")
                httpd.serve_forever()
                break
        except OSError as e:
            if "Address already in use" in str(e):
                current_port += 1
            else:
                raise e

if __name__ == '__main__':
    p = int(sys.argv[1]) if len(sys.argv) > 1 and sys.argv[1].isdigit() else PORT
    run_server(p)
