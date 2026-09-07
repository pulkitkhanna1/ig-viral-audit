import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IG ViralAudit • Instagram Page Audit & Winning Models Platform',
  description: 'AI-Powered Instagram profile audit engine. Extract real-time engagement telemetry, viral outlier analysis, and 4 proven winning models with ready-to-record Reel scripts.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="background-glow">
          <div className="glow-orb orb-1"></div>
          <div className="glow-orb orb-2"></div>
          <div className="glow-orb orb-3"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
