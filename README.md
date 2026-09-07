# 🚀 IG ViralAudit • Instagram Page Audit & Winning Models Platform

An open-source, AI-powered Instagram profile audit engine and content intelligence platform. Enter any public Instagram profile URL or `@handle` to extract real-time engagement telemetry, viral outlier analysis, and **4 tailored "Winning Models" & ready-to-record Reel scripts**.

---

## ✨ Key Features

- **🔍 Universal Profile Auditing:** Paste any Instagram URL (`https://instagram.com/thepulkitproject`), `@handle`, or username.
- **⚡ Parallel Telemetry Extraction:** High-speed, multi-threaded scraper (`ThreadPoolExecutor`) that extracts live likes, comments, reels, view counts, and engagement rates in under 2 seconds.
- **📊 Statistical & Benchmark Analysis:**
  - Account Average Engagement Rate vs. Industry Niche Benchmarks (~2.1%).
  - Median Post Engagement Rate & 10x Outlier Multipliers.
  - Comment-to-Like Velocity Ratios (Direct Lead Capture Funnel health).
- **🏆 4 Automated "Winning Models":**
  1. **Visual Transformation & Proof Demo:** Show-not-tell instant gratification frameworks (top viral outliers).
  2. **Disruption & Replacement Lead Magnet:** Fear of obsolescence & FOMO hooks with automated keyword DM triggers.
  3. **De-Schooled Authority & Frameworks:** High-status credibility translated into practical blueprints for maximum saves and shares.
  4. **Secret Exposure & Creator Mythbuster:** Us vs. Them transparency building instant rapport and comment velocity.
- **🎬 Interactive AI Reel Script Generator:** Live, copy-pasteable 20–45s reel scripts (Hook, B-roll action, Value delivery, DM CTA) customized to the active profile's niche.
- **📑 One-Click Report Export:** Download comprehensive Markdown audit reports instantly.
- **⚡ Zero-Dependency Python Server:** Works out of the box on any machine with built-in Python 3 standard libraries.

---

## 🚀 Quick Start

### 1. Run Locally
```bash
# Clone repository
git clone https://github.com/pulkitkhanna1/ig-viral-audit.git
cd ig-viral-audit

# Start the local server
python3 server.py 3000
```

Open your browser at **[http://localhost:3000](http://localhost:3000)**.

---

## 📡 REST API Documentation

### `GET /api/audit`
Audits any public Instagram account in real-time.

**Query Parameters:**
- `url` or `username`: The Instagram profile link or handle (e.g. `thepulkitproject`, `askyukta`, `hubspot`).

**Example Request:**
```bash
curl "http://localhost:3000/api/audit?username=thepulkitproject"
```

**Example Response:**
```json
{
  "profile": {
    "username": "thepulkitproject",
    "name": "Pulkit Khanna | Certified AI coach",
    "followers": 3578,
    "following": 0,
    "posts_count": 8,
    "bio": "Making AI simpler for humans 🤖...",
    "profile_url": "https://www.instagram.com/thepulkitproject/",
    "profile_pic": "https://..."
  },
  "metrics_summary": {
    "total_likes": 28337,
    "total_comments": 6975,
    "total_engagements": 35312,
    "avg_engagement_rate": "123.4%",
    "median_engagement_rate": "9.84%",
    "top_performing_outlier_er": "844.2%"
  },
  "posts": [ ... ],
  "winning_models": [ ... ]
}
```

---

## 📂 Project Architecture

```
IG audit/
├── index.html          # Dark-mode, glassmorphic UI dashboard
├── style.css           # Modern CSS design system & micro-animations
├── app.js              # Client controller, API client & script generator
├── server.py           # Multi-threaded Python server & REST API
├── audit_service.py    # Core extraction engine & statistical modeling
├── ig_audit_engine.py  # CLI audit utility
├── audit_data.json     # Sample audited telemetry dataset
└── README.md           # Documentation & setup guide
```

---

## 🛡️ Privacy & Rate-Limiting Architecture
- Uses public web telemetry and open Meta hydration graphs with client-agnostic parsing.
- Does **not** require user passwords or account credentials (zero risk of account bans).
- Built-in in-memory caching prevents repeated external queries for the same handle.

---

## 📜 License
MIT License. Free for personal and commercial use.
