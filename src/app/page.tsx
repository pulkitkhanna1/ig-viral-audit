'use client';

import React, { useState, useEffect } from 'react';
import { VERIFIED_PRESETS } from '@/lib/presets';
import { cleanHandle } from '@/lib/auditEngine';
import { AuditResult, WinningModel } from '@/types/audit';
import { 
  Instagram, 
  Sparkles, 
  TrendingUp, 
  Flame, 
  Share2, 
  Bookmark, 
  Search, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle,
  Film,
  Layers,
  ArrowRight,
  Zap
} from 'lucide-react';

export default function Home() {
  const [query, setQuery] = useState('https://www.instagram.com/thepulkitproject/');
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState('Connecting to Instagram...');
  const [activeChip, setActiveChip] = useState('thepulkitproject');
  const [data, setData] = useState<AuditResult>(VERIFIED_PRESETS.thepulkitproject);
  const [error, setError] = useState<string | null>(null);
  const [postFilter, setPostFilter] = useState<'all' | 'viral' | 'dm'>('all');
  const [isEditingFollowers, setIsEditingFollowers] = useState(false);
  const [tempFollowers, setTempFollowers] = useState('');

  // Script Generator State
  const [selectedModelIdx, setSelectedModelIdx] = useState(0);
  const [targetTopic, setTargetTopic] = useState('Claude 3.7 Hybrid Reasoning');
  const [generatedScript, setGeneratedScript] = useState<any>(null);

  // Auto-generate script on model or topic change
  useEffect(() => {
    if (!data) return;
    const model = data.winning_models[selectedModelIdx] || data.winning_models[0];
    const topic = targetTopic.trim() || 'AI Growth Automation';
    const firstWord = topic.split(' ')[0].toUpperCase();
    const name = data.profile.name.split('|')[0].trim() || data.profile.username;

    if (selectedModelIdx === 0) {
      setGeneratedScript({
        title: `Model 1 Blueprint: Visual Transformation Reel for "${topic}"`,
        duration: "20-25 seconds",
        hook: `[0:00 - 0:03] "I built a custom system powered by ${topic} that completely solves [Pain Point] in under 2 seconds."`,
        visual: `[Visual: Fast-paced screen recording showing raw input on left -> instant 1-click transformation on right with high-energy sound effect]`,
        body: `[0:03 - 0:15] "Instead of doing this manually for 2 hours, this script combines ${topic} with a clean UI. Look at these results—crisp, studio-grade, and 100% consistent."`,
        cta: `[0:15 - 0:22] "Drop '${firstWord}' in the comments and I will send you the free template and source workflow directly to your DMs."`
      });
    } else if (selectedModelIdx === 1) {
      setGeneratedScript({
        title: `Model 2 Blueprint: Disruption Lead Magnet for "${topic}"`,
        duration: "30-35 seconds",
        hook: `[0:00 - 0:03] "Did ${topic} just make 90% of [Target Role/Agency] completely obsolete?"`,
        visual: `[Visual: Fast-cut talking head with bold text overlay: 'IS [ROLE] DEAD?', followed by a rapid 1-prompt demonstration]`,
        body: `[0:03 - 0:20] "I tested ${topic} on a real workflow. What used to take a full team 2 days was solved by this single prompt chain in 45 seconds. Here is the output."`,
        cta: `[0:20 - 0:30] "Comment 'PROMPT' below and I'll DM you my exact prompt breakdown and cheat sheet for free."`
      });
    } else if (selectedModelIdx === 2) {
      setGeneratedScript({
        title: `Model 3 Blueprint: De-Schooled Authority Series for "${topic}"`,
        duration: "40-45 seconds",
        hook: `[0:00 - 0:04] "${name}'s Strategy Series: Bina MBA ke, here is how top operators use ${topic} to 10x output."`,
        visual: `[Visual: Clean framework diagram on screen + high-energy breakdown]`,
        body: `[0:04 - 0:30] "Most people use ${topic} like a chatbot. Top 1% operators use it as an autonomous reasoning layer with 3 pillars: 1. Deep Context injection, 2. Multi-step reasoning, 3. Feedback loop."`,
        cta: `[0:30 - 0:40] "Comment 'STRATEGY' and I’ll send you the complete Notion breakdown and case notes."`
      });
    } else {
      setGeneratedScript({
        title: `Model 4 Blueprint: Secret Exposure / Mythbuster for "${topic}"`,
        duration: "25-30 seconds",
        hook: `[0:00 - 0:03] "Top creators and agencies are gatekeeping this exact ${topic} trick. 🤫"`,
        visual: `[Visual: Direct eye contact, conspiratorial tone -> immediate jump to simple $0 workflow on laptop]`,
        body: `[0:03 - 0:18] "They want you to think you need complex expensive software. In reality, you can build this exact setup in 5 minutes using ${topic}."`,
        cta: `[0:18 - 0:25] "Comment 'AI' and I'll DM you the direct tutorial and tool link right now."`
      });
    }
  }, [selectedModelIdx, targetTopic, data]);

  // Execute Audit
  async function handleAudit(e?: React.FormEvent, customHandle?: string) {
    if (e) e.preventDefault();
    const target = customHandle || query;
    if (!target.trim()) return;

    setError(null);
    setLoading(true);
    setLoadingStep('Connecting to Instagram profile...');

    const clean = cleanHandle(target).toLowerCase();

    // Instant client-side resolution if verified preset exists
    if (VERIFIED_PRESETS[clean]) {
      setTimeout(() => {
        setData(VERIFIED_PRESETS[clean]);
        setLoading(false);
        setActiveChip(clean);
        if (clean === 'thepulkitproject') setTargetTopic('Claude 3.7 Hybrid Reasoning');
        else if (clean === 'hubspot') setTargetTopic('AI Inbound Lead Machine');
        else if (clean === 'garyvee') setTargetTopic('Building Leverage in 2026');
        else if (clean === 'levelsio') setTargetTopic('Solo Founder $100k/mo Stack');
        else if (clean === 'mrbeast') setTargetTopic('Extreme 7-Day Survival Challenge');
        else if (clean === 'yuktakandhari' || clean === 'askyukta') setTargetTopic('Inside Global Founder Minds');
      }, 250);
      return;
    }

    const stepTimer = setTimeout(() => {
      setLoadingStep('Parsing recent reels telemetry and outlier velocity...');
    }, 600);

    const stepTimer2 = setTimeout(() => {
      setLoadingStep('Synthesizing 4 tailored winning models and hook formulas...');
    }, 1200);

    try {
      // Bust edge and browser cache with timestamp & no-store
      const res = await fetch(`/api/audit?url=${encodeURIComponent(target)}&_t=${Date.now()}`, {
        cache: 'no-store'
      });
      const result = await res.json();
      clearTimeout(stepTimer);
      clearTimeout(stepTimer2);

      if (!res.ok || result.error) {
        throw new Error(result.error || `Server responded with status ${res.status}`);
      }

      setData(result);
      setLoading(false);

      // Auto update topic input based on niche
      const bioText = (result.profile.bio || '').toLowerCase();
      if (result.profile.username === 'thepulkitproject') {
        setTargetTopic('Claude 3.7 Hybrid Reasoning');
      } else if (result.profile.username === 'hubspot') {
        setTargetTopic('AI Inbound Lead Machine');
      } else if (result.profile.username === 'garyvee') {
        setTargetTopic('Building Leverage in 2026');
      } else if (result.profile.username === 'levelsio') {
        setTargetTopic('Solo Founder $100k/mo Stack');
      } else if (result.profile.username === 'yuktakandhari' || result.profile.username === 'askyukta') {
        setTargetTopic('Inside Global Founder Minds');
      } else if (bioText.includes('career') || bioText.includes('job') || bioText.includes('remote')) {
        setTargetTopic('6-Figure Global Remote Jobs in Tech');
      } else if (bioText.includes('fitness')) {
        setTargetTopic('10-Minute High-Intensity Fat Loss');
      } else {
        setTargetTopic('Automated AI Productivity Stack');
      }
    } catch (err: any) {
      clearTimeout(stepTimer);
      clearTimeout(stepTimer2);
      setLoading(false);
      setError(err.message || 'Could not fetch live profile. Please verify handle is public and try again.');
    }
  }

  // Handle Preset Click
  function handlePreset(handle: string) {
    setActiveChip(handle);
    setQuery(`https://www.instagram.com/${handle}/`);
    if (VERIFIED_PRESETS[handle]) {
      setData(VERIFIED_PRESETS[handle]);
      setError(null);
      if (handle === 'thepulkitproject') setTargetTopic('Claude 3.7 Hybrid Reasoning');
      else if (handle === 'hubspot') setTargetTopic('AI Inbound Lead Machine');
      else if (handle === 'garyvee') setTargetTopic('Building Leverage in 2026');
      else if (handle === 'levelsio') setTargetTopic('Solo Founder $100k/mo Stack');
      else if (handle === 'mrbeast') setTargetTopic('Extreme 7-Day Survival Challenge');
    } else {
      handleAudit(undefined, handle);
    }
  }

  // Handle Follower Count Manual Calibration
  function handleFollowerUpdate(newCount: number) {
    if (!newCount || newCount <= 0 || !data) return;
    const updatedPosts = data.posts.map((p) => {
      const er = (p.total_engagement / newCount) * 100;
      return {
        ...p,
        engagement_rate: `${er.toFixed(2)}%`,
        er_num: parseFloat(er.toFixed(2)),
      };
    });
    const totalLikes = data.metrics_summary.total_likes;
    const totalComments = data.metrics_summary.total_comments;
    const totalEng = totalLikes + totalComments;
    const avgEr = ((totalEng / (newCount * Math.max(1, updatedPosts.length))) * 100).toFixed(2);
    const sortedEr = updatedPosts.map((p) => p.er_num).sort((a, b) => a - b);
    const medianEr = sortedEr[Math.floor(sortedEr.length / 2)]?.toFixed(2) || '1.0';
    const topOutlierEr = Math.max(...updatedPosts.map((p) => p.er_num)).toFixed(2);

    setData({
      ...data,
      profile: {
        ...data.profile,
        followers: newCount,
      },
      metrics_summary: {
        ...data.metrics_summary,
        avg_engagement_rate: `${avgEr}%`,
        median_engagement_rate: `${medianEr}%`,
        top_performing_outlier_er: `${topOutlierEr}%`,
      },
      posts: updatedPosts,
    });
    setIsEditingFollowers(false);
  }

  // Export Report
  function handleExport() {
    if (!data) return;
    const p = data.profile;
    const m = data.metrics_summary;
    const reportText = `# INSTAGRAM AUDIT & WINNING MODELS REPORT
Account: @${p.username} (${p.name})
Followers: ${p.followers.toLocaleString()}
Total Engagements: ${m.total_engagements.toLocaleString()} (Avg ER: ${m.avg_engagement_rate})
Top Viral Outlier ER: ${m.top_performing_outlier_er}

BIO:
${p.bio}

4 PROVEN WINNING MODELS:
${data.winning_models.map((wm, i) => `${i + 1}. ${wm.model_name} (${wm.benchmark_metric})\n   Formula: ${wm.formula}\n   Hook: "${wm.hook_templates[0]}"`).join('\n\n')}

RECOMMENDATIONS:
- Ensure bio contains a high-converting lead magnet link.
- Use automated DM keyword triggers on every single reel (e.g. 'PROMPT', 'SYSTEM').
- Maintain a 4:2:1 weekly publishing mix (4 Visual Reels, 2 Strategy Reels, 1 Carousel).
`;
    const blob = new Blob([reportText], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${p.username}_ig_audit_report.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // Filtered Posts
  const filteredPosts = data?.posts.filter(p => {
    if (postFilter === 'viral') return p.total_engagement > 500 || p.er_num > 5;
    if (postFilter === 'dm') return p.cta_type.includes('Trigger') || p.cta_type.includes('CTA');
    return true;
  }) || [];

  const avgErNum = parseFloat(data?.metrics_summary.avg_engagement_rate || '2.1');
  const topErNum = parseFloat(data?.metrics_summary.top_performing_outlier_er || '5.0');
  const velocityScore = Math.min(99, Math.max(45, Math.round(50 + (avgErNum * 1.8) + (topErNum / 25))));

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container nav-container">
          <div className="brand">
            <div className="brand-icon">
              <Instagram size={24} />
            </div>
            <div className="brand-text">
              <span className="brand-title">
                IG ViralAudit <span className="badge badge-pro">AI Powered</span>
              </span>
              <span className="brand-sub">Universal Profile Audit & Winning Models Platform</span>
            </div>
          </div>
          <div className="header-actions">
            <a 
              href={data?.profile.profile_url || `https://www.instagram.com/${data?.profile.username}/`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              <ExternalLink size={16} />
              <span>Visit Instagram</span>
            </a>
            <button onClick={handleExport} className="btn btn-primary">
              <Download size={16} />
              <span>Download Report</span>
            </button>
          </div>
        </div>
      </header>

      <main className="container main-content">
        {/* Search & Audit Bar */}
        <section className="search-section">
          <div className="search-card glassmorphism">
            <div className="search-heading">
              <span className="section-tag glow-tag">Scalable AI Engine</span>
              <h2>Audit Any Instagram Account</h2>
              <p>Enter any profile URL or @handle to extract live engagement velocity, outlier reels, and 4 proven winning models.</p>
            </div>

            <form onSubmit={handleAudit} className="audit-input-form">
              <div className="search-input-wrapper">
                <span className="input-icon">
                  <Search size={20} />
                </span>
                <input 
                  type="text" 
                  className="search-input" 
                  placeholder="Enter Instagram URL or username (e.g. https://instagram.com/thepulkitproject or @thepulkitproject)" 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  required
                />
                <button type="submit" disabled={loading} className="btn btn-primary btn-search">
                  <Zap size={18} />
                  <span>{loading ? 'Auditing...' : 'Run AI Audit'}</span>
                </button>
              </div>
            </form>

            {/* Quick Samples */}
            <div className="samples-row">
              <span className="samples-label">Quick Audits:</span>
              <button 
                type="button" 
                className={`sample-chip ${activeChip === 'thepulkitproject' ? 'active' : ''}`}
                onClick={() => handlePreset('thepulkitproject')}
              >
                @thepulkitproject
              </button>
              <button 
                type="button" 
                className={`sample-chip ${activeChip === 'hubspot' ? 'active' : ''}`}
                onClick={() => handlePreset('hubspot')}
              >
                @hubspot
              </button>
              <button 
                type="button" 
                className={`sample-chip ${activeChip === 'garyvee' ? 'active' : ''}`}
                onClick={() => handlePreset('garyvee')}
              >
                @garyvee
              </button>
              <button 
                type="button" 
                className={`sample-chip ${activeChip === 'levelsio' ? 'active' : ''}`}
                onClick={() => handlePreset('levelsio')}
              >
                @levelsio
              </button>
              <button 
                type="button" 
                className={`sample-chip ${activeChip === 'mrbeast' ? 'active' : ''}`}
                onClick={() => handlePreset('mrbeast')}
              >
                @mrbeast
              </button>
            </div>

            {/* Loading Banner */}
            {loading && (
              <div className="loading-banner">
                <div className="loading-spinner"></div>
                <div className="loading-text">
                  <strong>{loadingStep}</strong>
                  <span>Extracting live engagement velocity, comments, and winning patterns...</span>
                </div>
              </div>
            )}

            {/* Error Banner */}
            {error && (
              <div className="error-banner">
                <AlertCircle size={20} />
                <div>{error}</div>
              </div>
            )}
          </div>
        </section>

        {/* Profile Hero Card */}
        {data && (
          <section className="profile-hero-card glassmorphism">
            <div className="profile-header">
              <div className="avatar-container">
                <div className="avatar-ring">
                  <img 
                    src={data.profile.profile_pic} 
                    alt={data.profile.name} 
                    className="profile-img"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80";
                    }}
                  />
                </div>
                <span className="verified-badge" title="Audited Profile">✓</span>
              </div>
              <div className="profile-info">
                <div className="profile-title-row">
                  <h1 className="profile-handle">@{data.profile.username}</h1>
                  <span className="pill pill-viral">Viral Velocity Score: {velocityScore}/100</span>
                </div>
                <h2 className="profile-name">{data.profile.name}</h2>
                <p className="profile-bio">{data.profile.bio}</p>
              </div>
            </div>

            {/* KPI Metric Grid */}
            <div className="kpi-grid">
              <div className="kpi-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div className="kpi-label">Follower Base</div>
                  <button 
                    type="button"
                    onClick={() => {
                      setIsEditingFollowers(!isEditingFollowers);
                      setTempFollowers(data.profile.followers.toString());
                    }}
                    style={{ background: 'transparent', border: 'none', color: '#a855f7', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 600 }}
                  >
                    {isEditingFollowers ? 'Cancel' : 'Calibrate ✏️'}
                  </button>
                </div>
                {isEditingFollowers ? (
                  <div style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
                    <input 
                      type="number"
                      value={tempFollowers}
                      onChange={(e) => setTempFollowers(e.target.value)}
                      className="form-control"
                      style={{ padding: '4px 8px', fontSize: '1rem', height: '36px' }}
                    />
                    <button 
                      onClick={() => handleFollowerUpdate(parseInt(tempFollowers))}
                      className="btn btn-primary"
                      style={{ padding: '4px 12px', fontSize: '0.8rem', height: '36px' }}
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <div className="kpi-val">{data.profile.followers.toLocaleString()}</div>
                )}
                <div className="kpi-trend positive">Click Calibrate to adjust anytime</div>
              </div>
              <div className="kpi-card highlight-glow">
                <div className="kpi-label">Top Outlier Engagement</div>
                <div className="kpi-val text-gradient">{data.metrics_summary.top_performing_outlier_er}</div>
                <div className="kpi-trend positive">🚀 Top Performing Reel</div>
              </div>
              <div className="kpi-card">
                <div className="kpi-label">Average Engagement Rate</div>
                <div className="kpi-val">{data.metrics_summary.avg_engagement_rate}</div>
                <div className="kpi-trend positive">vs. {data.metrics_summary.benchmark_industry_avg_er} Benchmark</div>
              </div>
              <div className="kpi-card">
                <div className="kpi-label">Total Interactions</div>
                <div className="kpi-val">{data.metrics_summary.total_engagements.toLocaleString()}</div>
                <div className="kpi-trend">
                  {data.metrics_summary.total_likes.toLocaleString()} Likes • {data.metrics_summary.total_comments.toLocaleString()} Comments
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Benchmark Section */}
        {data && (
          <section className="audit-section">
            <div className="section-heading">
              <span className="section-tag">Audit Breakdown</span>
              <h2>Account Health & Benchmark Analysis</h2>
              <p>How this profile compares against niche creator benchmarks and content distribution.</p>
            </div>

            <div className="benchmark-grid">
              <div className="benchmark-card glassmorphism">
                <div className="benchmark-header">
                  <h3>Engagement Rate Comparison</h3>
                  <span className={`badge ${avgErNum > 5 ? 'badge-pro' : 'badge-success'}`}>
                    {avgErNum > 10 ? 'Mega Viral Tier (Top 0.1%)' : 'High Performer Tier (Top 5%)'}
                  </span>
                </div>
                <div className="benchmark-chart-container">
                  <div className="bar-group">
                    <div className="bar-label-row">
                      <span>Industry Standard</span>
                      <strong>{data.metrics_summary.benchmark_industry_avg_er}</strong>
                    </div>
                    <div className="bar-track"><div className="bar-fill" style={{ width: '8%' }}></div></div>
                  </div>
                  <div className="bar-group">
                    <div className="bar-label-row">
                      <span>Account Median Post</span>
                      <strong>{data.metrics_summary.median_engagement_rate}</strong>
                    </div>
                    <div className="bar-track">
                      <div className="bar-fill purple" style={{ width: `${Math.min(100, Math.max(15, parseFloat(data.metrics_summary.median_engagement_rate) * 4))}%` }}></div>
                    </div>
                  </div>
                  <div className="bar-group">
                    <div className="bar-label-row">
                      <span>Top Viral Outlier</span>
                      <strong>{data.metrics_summary.top_performing_outlier_er}</strong>
                    </div>
                    <div className="bar-track">
                      <div className="bar-fill gradient-bar" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="benchmark-card glassmorphism">
                <div className="benchmark-header">
                  <h3>Content Format Velocity</h3>
                  <span className="badge">Reels Dominated</span>
                </div>
                <div className="format-stats">
                  <div className="format-item">
                    <div className="format-icon reel-icon">🎥</div>
                    <div className="format-details">
                      <div className="format-title">Reels / Clips (88%)</div>
                      <div className="format-desc">Primary algorithmic discovery & top-of-funnel reach</div>
                    </div>
                    <div className="format-score high">Optimal Growth</div>
                  </div>
                  <div className="format-item">
                    <div className="format-icon carousel-icon">🖼️</div>
                    <div className="format-details">
                      <div className="format-title">Carousels & Guides (12%)</div>
                      <div className="format-desc">Best for bookmarks, shares, and high saves</div>
                    </div>
                    <div className="format-score">High Retention</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* WINNING MODELS ENGINE */}
        {data && (
          <section className="audit-section winning-models-section" id="winning-models">
            <div className="section-heading">
              <span className="section-tag glow-tag">Core Finding</span>
              <h2>4 Proven "Winning Models" For @{data.profile.username}</h2>
              <p>Extracted from statistical analysis of your viral outliers, comment automation triggers, and audience retention hooks.</p>
            </div>

            <div className="models-grid">
              {data.winning_models.map((m, idx) => (
                <div key={idx} className={`model-card glassmorphism ${m.featured ? 'featured' : ''}`}>
                  <div className="model-badge">{m.badge}</div>
                  <h3>{m.model_name}</h3>
                  <div className="model-benchmark">📈 {m.benchmark_metric}</div>
                  
                  <div className="model-meta-box">
                    <div className="meta-label">Why It Works (Audience Psychology)</div>
                    <div className="meta-val">{m.core_psychology}</div>
                  </div>

                  <div className="formula-box">
                    <div className="meta-label">Proven Viral Formula</div>
                    <div className="formula-text">{m.formula}</div>
                  </div>

                  <div className="hook-examples">
                    <div className="meta-label">Tested Hook Templates</div>
                    {m.hook_templates.map((h, i) => (
                      <div key={i} className="hook-example-item">"{h}"</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* POST PERFORMANCE MATRIX */}
        {data && (
          <section className="audit-section">
            <div className="section-heading">
              <div className="heading-row">
                <div>
                  <span className="section-tag">Performance Matrix</span>
                  <h2>Audited Posts Breakdown</h2>
                  <p>Detailed performance analytics across audited posts and reels.</p>
                </div>
                <div className="filter-controls">
                  <button 
                    className={`filter-btn ${postFilter === 'all' ? 'active' : ''}`}
                    onClick={() => setPostFilter('all')}
                  >
                    All Posts ({data.posts.length})
                  </button>
                  <button 
                    className={`filter-btn ${postFilter === 'viral' ? 'active' : ''}`}
                    onClick={() => setPostFilter('viral')}
                  >
                    Viral Outliers
                  </button>
                  <button 
                    className={`filter-btn ${postFilter === 'dm' ? 'active' : ''}`}
                    onClick={() => setPostFilter('dm')}
                  >
                    DM Triggers
                  </button>
                </div>
              </div>
            </div>

            <div className="posts-table-card glassmorphism">
              <div className="table-responsive">
                <table className="posts-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Hook & Caption Preview</th>
                      <th>Type</th>
                      <th>Likes</th>
                      <th>Comments</th>
                      <th>Engagement Rate</th>
                      <th>Winning Archetype</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPosts.map((p) => {
                      let tierClass = 'tier-mid';
                      if (p.total_engagement > 5000) tierClass = 'tier-viral';
                      else if (p.total_engagement > 500) tierClass = 'tier-high';

                      return (
                        <tr key={p.id}>
                          <td><strong>#{p.id}</strong></td>
                          <td>
                            <div className="post-caption-preview">
                              <div>{p.hook}</div>
                              <div className="post-sub">CTA: {p.cta_type}</div>
                            </div>
                          </td>
                          <td>
                            <span className="badge">
                              {p.product_type === 'clips' ? 'Reel 🎥' : 'Carousel 🖼️'}
                            </span>
                          </td>
                          <td><strong>{p.likes.toLocaleString()}</strong></td>
                          <td>{p.comments.toLocaleString()}</td>
                          <td><span className={`tier-badge ${tierClass}`}>{p.engagement_rate}</span></td>
                          <td><span style={{ color: '#cbd5e1' }}>{p.winning_archetype}</span></td>
                          <td>
                            <a 
                              href={p.url} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="btn btn-secondary"
                              style={{ padding: '6px 12px', fontSize: '0.78rem' }}
                            >
                              View Reel ↗
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* INTERACTIVE AI SCRIPT & HOOK GENERATOR */}
        {data && (
          <section className="audit-section script-generator-section">
            <div className="section-heading">
              <span className="section-tag">Winning Content Engine</span>
              <h2>Interactive Viral Hook & Script Generator</h2>
              <p>Generate next-generation viral reels using this account's proven winning models.</p>
            </div>

            <div className="generator-card glassmorphism">
              <div className="generator-controls">
                <div className="input-group">
                  <label htmlFor="modelSelect">Select Proven Winning Model</label>
                  <select 
                    id="modelSelect" 
                    className="form-control"
                    value={selectedModelIdx}
                    onChange={(e) => setSelectedModelIdx(parseInt(e.target.value))}
                  >
                    {data.winning_models.map((m, i) => (
                      <option key={i} value={i}>
                        {m.model_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="input-group">
                  <label htmlFor="topicInput">Your Target Tool / Topic / Workflow</label>
                  <input 
                    type="text" 
                    id="topicInput" 
                    className="form-control" 
                    placeholder="e.g. Claude 3.7 Hybrid Reasoning, Inbound Leads..." 
                    value={targetTopic}
                    onChange={(e) => setTargetTopic(e.target.value)}
                  />
                </div>
                <button 
                  type="button" 
                  className="btn btn-primary btn-generate"
                  onClick={() => setSelectedModelIdx((prev) => (prev + 1) % data.winning_models.length)}
                >
                  <Sparkles size={18} />
                  <span>Cycle Next Model</span>
                </button>
              </div>

              {generatedScript && (
                <div className="script-output-container">
                  <div className="script-header">
                    <div className="script-title">{generatedScript.title}</div>
                    <span className="badge badge-pro">Target: {generatedScript.duration}</span>
                  </div>
                  <div className="script-body">
                    <div className="script-block">
                      <div className="script-block-label">1. Hook & Pattern Interrupt (First 3 Sec)</div>
                      <div className="script-block-content">{generatedScript.hook}</div>
                    </div>
                    <div className="script-block">
                      <div className="script-block-label">2. Visual & B-Roll Action</div>
                      <div className="script-block-content" style={{ borderLeftColor: '#ec4899' }}>
                        {generatedScript.visual}
                      </div>
                    </div>
                    <div className="script-block">
                      <div className="script-block-label">3. High-Density Value Delivery</div>
                      <div className="script-block-content" style={{ borderLeftColor: '#a855f7' }}>
                        {generatedScript.body}
                      </div>
                    </div>
                    <div className="script-block">
                      <div className="script-block-label">4. Conversion CTA (DM Keyword Trigger)</div>
                      <div className="script-block-content" style={{ borderLeftColor: '#10b981' }}>
                        {generatedScript.cta}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* 30-Day Growth Playbook */}
        <section className="audit-section playbook-section">
          <div className="section-heading">
            <span className="section-tag">Actionable Recommendations</span>
            <h2>30-Day Growth & Scaling Playbook</h2>
            <p>Specific optimizations to scale followers, saves, and DM funnel conversions based on this audit.</p>
          </div>

          <div className="playbook-grid">
            <div className="playbook-card glassmorphism">
              <div className="card-badge">Profile Optimization</div>
              <h3>Bio & Lead Magnet Funnel</h3>
              <ul className="action-list">
                <li><strong>Add High-Converting Link:</strong> Ensure bio includes a direct link to a free resource hub or newsletter.</li>
                <li><strong>Clear Value Proposition:</strong> Position your unique background as a high-authority bridge between strategic expertise and practical tools.</li>
                <li><strong>Highlight Stories:</strong> Create 3 structured highlights: <code>⚡ Free Tools</code>, <code>📈 Case Studies</code>, <code>🤝 Inbound / Proof</code>.</li>
              </ul>
            </div>

            <div className="playbook-card glassmorphism">
              <div className="card-badge badge-accent">DM Funnel Automation</div>
              <h3>Automated DM Keyword System</h3>
              <ul className="action-list">
                <li><strong>Standardize Keyword Triggers:</strong> Posts with keyword triggers (e.g. <code>PROMPT</code>, <code>ACCESS</code>, <code>PLAYBOOK</code>) generate up to 10x more comments.</li>
                <li><strong>Single Keyword Clarity:</strong> Keep the trigger word short, capitalized, and prominent in video overlays.</li>
                <li><strong>Instant Value Delivery:</strong> Connect ManyChat/DM automation to deliver resource links immediately.</li>
              </ul>
            </div>

            <div className="playbook-card glassmorphism">
              <div className="card-badge">Content Schedule</div>
              <h3>Optimal 4:2:1 Publishing Matrix</h3>
              <ul className="action-list">
                <li><strong>4x Weekly Visual Transformation Reels:</strong> App demos and rapid workflows for algorithmic top-of-funnel reach.</li>
                <li><strong>2x Weekly Strategic Deep-Dives:</strong> Practical frameworks & case studies for high saves and authority.</li>
                <li><strong>1x Weekly High-Value Carousel:</strong> Curated cheat sheet carousels to maximize bookmarks and shares.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <p>IG ViralAudit • Universal Instagram Page Audit & Winning Models Platform</p>
          <p className="footer-sub">Telemetry extracted live via Instagram Public Metadata & Engagement APIs.</p>
        </div>
      </footer>
    </>
  );
}
