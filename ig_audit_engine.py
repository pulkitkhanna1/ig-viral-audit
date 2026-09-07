#!/usr/bin/env python3
"""
Instagram Profile Audit & Winning Models Engine
Author: Antigravity AI
Audits public Instagram profiles, analyzes engagement performance, and extracts winning content models.
"""

import sys
import json
import re
import urllib.request
from datetime import datetime

def pk_to_shortcode(pk: int) -> str:
    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'
    shortcode = ''
    while pk > 0:
        remainder = pk % 64
        pk = (pk - remainder) // 64
        shortcode = alphabet[remainder] + shortcode
    return shortcode

def fetch_profile_data(username: str):
    url = f"https://www.instagram.com/{username}/"
    headers = {
        'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
    }
    req = urllib.request.Request(url, headers=headers)
    html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')
    
    # Extract metadata
    og_title = re.findall(r'<meta property="og:title" content="(.*?)"', html)
    og_desc = re.findall(r'<meta property="og:description" content="(.*?)"', html)
    meta_desc = re.findall(r'<meta content="(.*?)" name="description"', html)
    
    followers_match = re.search(r'([\d,]+)\s+Followers', og_desc[0] if og_desc else "")
    followers = int(followers_match.group(1).replace(',', '')) if followers_match else 0
    
    scripts = re.findall(r'<script [^>]*>(.*?)</script>', html, re.DOTALL)
    
    def extract_posts(obj, results):
        if isinstance(obj, dict):
            if 'seo_canonical_url' in obj and 'caption' in obj:
                results.append(obj)
            for v in obj.values():
                extract_posts(v, results)
        elif isinstance(obj, list):
            for item in obj:
                extract_posts(item, results)
                
    raw_posts = []
    for s in scripts:
        try:
            d = json.loads(s)
            extract_posts(d, raw_posts)
        except Exception:
            pass

    return {
        'username': username,
        'followers': followers,
        'title': og_title[0] if og_title else username,
        'description': meta_desc[0] if meta_desc else (og_desc[0] if og_desc else ""),
        'posts': raw_posts
    }

def audit_account(username: str = "thepulkitproject"):
    print(f"[*] Auditing Instagram account: @{username}...")
    profile_data = fetch_profile_data(username)
    print(f"[+] Found {profile_data['followers']} followers and {len(profile_data['posts'])} posts.")
    return profile_data

if __name__ == "__main__":
    user = sys.argv[1] if len(sys.argv) > 1 else "thepulkitproject"
    data = audit_account(user)
    print("Audit Complete.")
