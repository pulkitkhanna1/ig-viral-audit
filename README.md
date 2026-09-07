# 🚀 IG ViralAudit • Next.js Instagram Page Audit & Winning Models Platform

A modern, high-performance **Next.js 14 (React + TypeScript)** application for auditing Instagram profiles and generating **4 customized "Winning Models" & ready-to-record Reel scripts**. Built to deploy seamlessly on Vercel with zero extra configuration.

---

## ✨ Features

- **⚡ Native Next.js 14 App Router:** Built with React 18, TypeScript, Lucide Icons, and modern glassmorphic design.
- **🔍 Universal Profile Auditing:** Paste any Instagram URL (`https://instagram.com/thepulkitproject`), `@handle`, or username.
- **🛡️ Vercel-Ready Serverless Architecture:** Native Next.js Route Handlers (`/api/audit`) that run globally on Vercel Edge/Serverless with built-in fallback intelligence.
- **📊 Statistical & Benchmark Analysis:**
  - Account Average Engagement Rate vs. Industry Niche Benchmarks (~2.1%).
  - Median Post Engagement Rate & 10x Outlier Multipliers.
  - Comment-to-Like Velocity Ratios (Lead Capture Funnel health).
- **🏆 4 Automated "Winning Models":**
  1. **Visual Transformation & Proof Demo:** Show-not-tell instant gratification frameworks (top viral outliers).
  2. **Disruption & Replacement Lead Magnet:** Fear of obsolescence & FOMO hooks with automated keyword DM triggers.
  3. **De-Schooled Authority & Frameworks:** High-status credibility translated into practical blueprints for maximum saves and shares.
  4. **Secret Exposure & Creator Mythbuster:** Us vs. Them transparency building instant rapport and comment velocity.
- **🎬 Interactive AI Reel Script Generator:** Live, copy-pasteable 20–45s reel scripts (Hook, B-roll action, Value delivery, DM CTA) customized to the active profile's niche.
- **📑 One-Click Report Export:** Download comprehensive Markdown audit reports instantly.

---

## 🚀 Quick Start

### 1. Run Locally
```bash
# Clone repository
git clone https://github.com/pulkitkhanna1/ig-viral-audit.git
cd ig-viral-audit

# Install dependencies
npm install

# Start development server
npm run dev
```

Open your browser at **[http://localhost:3000](http://localhost:3000)**.

---

## ☁️ Deploy to Vercel

Because this is a native Next.js application, deploying to Vercel takes 1 click with **zero configuration**:

1. Push your repository to GitHub.
2. Import the project in [Vercel Dashboard](https://vercel.com/new).
3. Vercel automatically detects **Next.js** and deploys both the frontend and API routes instantly!

---

## 📡 REST API Documentation

### `GET /api/audit`
Audits any public Instagram account in real-time.

**Query Parameters:**
- `url` or `username`: The Instagram profile link or handle (e.g. `thepulkitproject`, `hubspot`, `garyvee`).

**Example Request:**
```bash
curl "http://localhost:3000/api/audit?username=thepulkitproject"
```

---

## 📜 License
MIT License. Free for personal and commercial use.
