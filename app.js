// IG ViralAudit • Universal Interactive App & Live Audit Controller

document.addEventListener('DOMContentLoaded', () => {
    let currentAuditData = null;

    // Elements
    const auditForm = document.getElementById('auditForm');
    const accountInput = document.getElementById('accountInput');
    const auditSubmitBtn = document.getElementById('auditSubmitBtn');
    const loadingBanner = document.getElementById('loadingBanner');
    const loadingStepTitle = document.getElementById('loadingStepTitle');
    const loadingStepDesc = document.getElementById('loadingStepDesc');
    const errorBanner = document.getElementById('errorBanner');
    const errorMessage = document.getElementById('errorMessage');
    const sampleChips = document.querySelectorAll('.sample-chip');
    
    // Profile DOM elements
    const profileAvatar = document.getElementById('profileAvatar');
    const profileHandle = document.getElementById('profileHandle');
    const profileName = document.getElementById('profileName');
    const profileBio = document.getElementById('profileBio');
    const headerProfileLink = document.getElementById('headerProfileLink');
    const viralScorePill = document.getElementById('viralScorePill');

    // KPI DOM elements
    const kpiFollowers = document.getElementById('kpiFollowers');
    const kpiFollowersSub = document.getElementById('kpiFollowersSub');
    const kpiTopEr = document.getElementById('kpiTopEr');
    const kpiTopErSub = document.getElementById('kpiTopErSub');
    const kpiAvgEr = document.getElementById('kpiAvgEr');
    const kpiAvgErSub = document.getElementById('kpiAvgErSub');
    const kpiTotalInteractions = document.getElementById('kpiTotalInteractions');
    const kpiTotalInteractionsSub = document.getElementById('kpiTotalInteractionsSub');

    // Benchmark elements
    const medianVal = document.getElementById('medianVal');
    const medianBarFill = document.getElementById('medianBarFill');
    const topOutlierVal = document.getElementById('topOutlierVal');
    const topOutlierBarFill = document.getElementById('topOutlierBarFill');
    const benchmarkBadge = document.getElementById('benchmarkBadge');

    // Tables & Models
    const winningModelsList = document.getElementById('winningModelsList');
    const postsTableBody = document.getElementById('postsTableBody');
    const exportReportBtn = document.getElementById('exportReportBtn');

    // Script Generator DOM
    const modelSelect = document.getElementById('modelSelect');
    const topicInput = document.getElementById('topicInput');
    const generateBtn = document.getElementById('generateScriptBtn');
    const scriptOutput = document.getElementById('scriptOutput');

    // Helper: clean handle
    function cleanHandle(input) {
        let cleaned = input.trim().replace(/[?#].*$/, '');
        const matchUrl = cleaned.match(/instagram\.com\/([a-zA-Z0-9._]+)\/?/);
        if (matchUrl && !['p', 'reel', 'stories', 'explore', 'direct'].includes(matchUrl[1])) {
            return matchUrl[1];
        }
        const matchHandle = cleaned.match(/@?([a-zA-Z0-9._]+)/);
        return matchHandle ? matchHandle[1] : cleaned.replace(/[@/]/g, '');
    }

    // Render Function
    function renderDashboard(data) {
        currentAuditData = data;
        const profile = data.profile;
        const metrics = data.metrics_summary;
        const posts = data.posts || [];
        const models = data.winning_models || [];

        // 1. Profile Header
        profileHandle.textContent = `@${profile.username}`;
        profileName.textContent = profile.name || `@${profile.username}`;
        profileBio.innerHTML = (profile.bio || "No bio description found.")
            .replace(/\n/g, '<br>')
            .replace(/(Ex Bain|Claude certified|AI Growth Hacker)/gi, '<strong>$1</strong>');
        
        if (profile.profile_pic) {
            profileAvatar.src = profile.profile_pic;
        }
        if (headerProfileLink) {
            headerProfileLink.href = profile.profile_url || `https://www.instagram.com/${profile.username}/`;
        }

        // Calculate dynamic velocity score (0 - 100)
        const avgErNum = parseFloat(metrics.avg_engagement_rate) || 2.1;
        const topErNum = parseFloat(metrics.top_performing_outlier_er) || 5.0;
        const velocityScore = Math.min(99, Math.max(45, Math.round(50 + (avgErNum * 2) + (topErNum / 20))));
        viralScorePill.textContent = `Viral Velocity Score: ${velocityScore}/100`;

        // 2. KPIs
        kpiFollowers.textContent = (profile.followers || 0).toLocaleString();
        kpiTopEr.textContent = metrics.top_performing_outlier_er;
        const topPost = posts.reduce((prev, current) => ((prev.total_engagement || 0) > (current.total_engagement || 0)) ? prev : current, posts[0] || {});
        kpiTopErSub.textContent = `🚀 ${(topPost.total_engagement || 0).toLocaleString()} Peak Engagements`;

        kpiAvgEr.textContent = metrics.avg_engagement_rate;
        kpiTotalInteractions.textContent = (metrics.total_engagements || 0).toLocaleString();
        kpiTotalInteractionsSub.textContent = `${(metrics.total_likes || 0).toLocaleString()} Likes • ${(metrics.total_comments || 0).toLocaleString()} Comments`;

        // 3. Benchmarks
        medianVal.textContent = metrics.median_engagement_rate || "4.5%";
        const medPercent = Math.min(100, Math.max(10, parseFloat(metrics.median_engagement_rate || 5) * 3));
        medianBarFill.style.width = `${medPercent}%`;
        
        topOutlierVal.textContent = metrics.top_performing_outlier_er;
        topOutlierBarFill.style.width = '100%';

        if (avgErNum > 20) {
            benchmarkBadge.textContent = "Mega Viral Tier (Top 0.1%)";
            benchmarkBadge.className = "badge badge-pro";
        } else if (avgErNum > 5) {
            benchmarkBadge.textContent = "High Performer Tier (Top 5%)";
            benchmarkBadge.className = "badge badge-success";
        } else {
            benchmarkBadge.textContent = "Standard Growth Tier";
            benchmarkBadge.className = "badge";
        }

        // 4. Winning Models Cards
        if (winningModelsList) {
            winningModelsList.innerHTML = models.map(m => `
                <div class="model-card glassmorphism ${m.featured ? 'featured' : ''}">
                    <div class="model-badge">${m.badge || 'Proven Winning Model'}</div>
                    <h3>${m.model_name}</h3>
                    <div class="model-benchmark">📈 ${m.benchmark_metric}</div>
                    
                    <div class="model-meta-box">
                        <div class="meta-label">Why It Works (Audience Psychology)</div>
                        <div class="meta-val">${m.core_psychology}</div>
                    </div>

                    <div class="formula-box">
                        <div class="meta-label">Proven Viral Formula</div>
                        <div class="formula-text">${m.formula}</div>
                    </div>

                    <div class="hook-examples">
                        <div class="meta-label">Tested Hook Templates</div>
                        ${(m.hook_templates || []).map(h => `<div class="hook-example-item">"${h}"</div>`).join('')}
                    </div>
                </div>
            `).join('');
        }

        // 5. Render Posts Table
        renderPostsTable('all');

        // 6. Update Script Generator Defaults
        if (topicInput) {
            const bioText = (profile.bio || '').toLowerCase();
            if (profile.username === 'thepulkitproject') {
                topicInput.value = 'Claude 3.7 Hybrid Reasoning';
            } else if (bioText.includes('career') || bioText.includes('job') || bioText.includes('remote') || profile.username === 'askyukta') {
                topicInput.value = '6-Figure Global Remote Jobs in Tech';
            } else if (bioText.includes('fitness')) {
                topicInput.value = '10-Minute High Intensity Fat Loss Routine';
            } else if (bioText.includes('marketing') || profile.username.includes('hubspot')) {
                topicInput.value = 'AI Inbound Lead Machine';
            } else {
                topicInput.value = 'Automated AI Productivity Stack';
            }
        }
        generateScript();
    }

    // Render Posts in Table
    function renderPostsTable(filter = 'all') {
        if (!currentAuditData || !currentAuditData.posts) return;
        
        let filtered = currentAuditData.posts;
        if (filter === 'viral') {
            filtered = currentAuditData.posts.filter(p => (p.total_engagement || 0) > 500);
        } else if (filter === 'dm-triggers') {
            filtered = currentAuditData.posts.filter(p => (p.cta_type || '').includes('Trigger') || (p.cta_type || '').includes('CTA'));
        }

        if (filtered.length === 0) {
            filtered = currentAuditData.posts;
        }

        postsTableBody.innerHTML = filtered.map(p => {
            let tierClass = 'tier-mid';
            const eng = p.total_engagement || 0;
            if (eng > 5000) tierClass = 'tier-viral';
            else if (eng > 500) tierClass = 'tier-high';

            return `
                <tr>
                    <td><strong>#${p.id}</strong></td>
                    <td>
                        <div class="post-caption-preview">
                            <div>${p.hook || 'High-Performing Post'}</div>
                            <div class="post-sub">CTA: ${p.cta_type || 'Direct'}</div>
                        </div>
                    </td>
                    <td><span class="badge">${p.product_type === 'clips' ? 'Reel 🎥' : 'Carousel 🖼️'}</span></td>
                    <td><strong>${(p.likes || 0).toLocaleString()}</strong></td>
                    <td>${(p.comments || 0).toLocaleString()}</td>
                    <td><span class="tier-badge ${tierClass}">${p.engagement_rate || '3.5%'}</span></td>
                    <td><span style="color: #cbd5e1;">${p.winning_archetype || 'Content Showcase'}</span></td>
                    <td>
                        <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="padding: 6px 12px; font-size: 0.78rem;">
                            View ↗
                        </a>
                    </td>
                </tr>
            `;
        }).join('');
    }

    // Filter Buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderPostsTable(btn.dataset.filter);
        });
    });

    // Run Live Audit
    async function executeAudit(query) {
        const username = cleanHandle(query);
        if (!username) {
            alert('Please enter a valid Instagram URL or username');
            return;
        }

        // Show loading state
        errorBanner.style.display = 'none';
        loadingBanner.style.display = 'flex';
        auditSubmitBtn.disabled = true;
        loadingStepTitle.textContent = `Connecting to Instagram for @${username}...`;
        loadingStepDesc.textContent = 'Querying live profile, reels telemetry, and comment velocity...';

        let progressTimer = setTimeout(() => {
            loadingStepTitle.textContent = `Analyzing engagement outliers for @${username}...`;
            loadingStepDesc.textContent = 'Extracting top 20% viral patterns & comment keyword funnels...';
        }, 1200);

        try {
            // Attempt API call to backend server
            const res = await fetch(`/api/audit?url=${encodeURIComponent(query)}`);
            if (res.ok) {
                const data = await res.json();
                clearTimeout(progressTimer);
                loadingBanner.style.display = 'none';
                auditSubmitBtn.disabled = false;
                renderDashboard(data);
                window.scrollTo({ top: document.querySelector('.profile-hero-card').offsetTop - 80, behavior: 'smooth' });
                return;
            } else {
                throw new Error(`Server returned status ${res.status}`);
            }
        } catch (err) {
            console.warn('API error, falling back to local dataset if available:', err);
            clearTimeout(progressTimer);

            // If query is thepulkitproject or matching default
            if (username.toLowerCase() === 'thepulkitproject') {
                try {
                    const localRes = await fetch('audit_data.json');
                    const localData = await localRes.json();
                    loadingBanner.style.display = 'none';
                    auditSubmitBtn.disabled = false;
                    renderDashboard(localData);
                    return;
                } catch (e) {}
            }

            loadingBanner.style.display = 'none';
            auditSubmitBtn.disabled = false;
            errorBanner.style.display = 'flex';
            errorMessage.textContent = `Could not fetch live profile for @${username}. Please check that the account is public and try again.`;
        }
    }

    // Form Submit Event
    auditForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputVal = accountInput.value.trim();
        if (inputVal) {
            executeAudit(inputVal);
        }
    });

    // Sample Chips Event
    sampleChips.forEach(chip => {
        chip.addEventListener('click', () => {
            sampleChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            const handle = chip.dataset.handle;
            accountInput.value = `https://www.instagram.com/${handle}/`;
            executeAudit(handle);
        });
    });

    // Dynamic Script Generator
    function generateScript() {
        if (!currentAuditData) return;
        const model = modelSelect ? modelSelect.value : 'model1';
        const topic = (topicInput && topicInput.value.trim()) || 'AI Workflow Automation';
        const name = currentAuditData.profile.name || currentAuditData.profile.username;
        const firstWord = topic.split(' ')[0].toUpperCase();

        let script = {};

        if (model === 'model1') {
            script = {
                title: `Model 1 Blueprint: Visual Transformation Reel for "${topic}"`,
                duration: "20-25 seconds",
                hook: `[0:00 - 0:03] "I built a custom AI system powered by ${topic} that completely solves [Pain Point] in 2 seconds."`,
                visual: `[Visual: Fast-paced screen recording showing raw messy input -> 1-click transformation into studio-grade output with dynamic sound effect]`,
                body: `[0:03 - 0:15] "Instead of doing this manually for 2 hours, this workflow combines ${topic} with a clean script. Look at the speed and precision."`,
                cta: `[0:15 - 0:22] "Drop '${firstWord}' in the comments and I'll send you the free template and workflow link directly to your DMs."`
            };
        } else if (model === 'model2') {
            script = {
                title: `Model 2 Blueprint: Disruption Lead Magnet for "${topic}"`,
                duration: "30-35 seconds",
                hook: `[0:00 - 0:03] "Did ${topic} just make 90% of [Target Role / Agency] completely obsolete?"`,
                visual: `[Visual: Bold text sticker on screen: 'IS [ROLE] DEAD?' + rapid 1-prompt demonstration proof]`,
                body: `[0:03 - 0:20] "I tested ${topic} against an entire team's workflow. What took 3 days was solved by this single prompt chain in 45 seconds."`,
                cta: `[0:20 - 0:30] "Comment 'PROMPT' below and I'll DM you the exact breakdown and cheat sheet for free."`
            };
        } else if (model === 'model3') {
            script = {
                title: `Model 3 Blueprint: De-Schooled Strategic Series for "${topic}"`,
                duration: "40-45 seconds",
                hook: `[0:00 - 0:04] "${name}'s Strategy Series: Bina MBA ke, here is how top operators use ${topic} to 10x output."`,
                visual: `[Visual: Clean 3-pillar diagram overlay + high-energy breakdown]`,
                body: `[0:04 - 0:30] "99% of people use ${topic} as a simple chatbot. Top 1% founders use it as a strategic execution layer with 3 pillars: 1. Deep Context, 2. Multi-step reasoning, 3. Feedback loop."`,
                cta: `[0:30 - 0:40] "Comment 'STRATEGY' and I’ll send you the complete Notion breakdown and case notes."`
            };
        } else {
            script = {
                title: `Model 4 Blueprint: Secret Exposure / Mythbuster for "${topic}"`,
                duration: "25-30 seconds",
                hook: `[0:00 - 0:03] "Your favorite creators and agencies are gatekeeping this exact ${topic} trick. 🤫"`,
                visual: `[Visual: Direct eye-contact hook, conspiratorial tone -> immediate jump to simple $0 laptop setup]`,
                body: `[0:03 - 0:18] "They want you to think you need complex $5k software. In reality, you can build this exact setup in 5 minutes using ${topic}."`,
                cta: `[0:18 - 0:25] "Comment 'AI' and I'll DM you the direct tutorial and tool link right now."`
            };
        }

        if (scriptOutput) {
            scriptOutput.innerHTML = `
                <div class="script-header">
                    <div class="script-title">${script.title}</div>
                    <span class="badge badge-pro">Target Duration: ${script.duration}</span>
                </div>
                <div class="script-body">
                    <div class="script-block">
                        <div class="script-block-label">1. Hook & Pattern Interrupt (First 3 Seconds)</div>
                        <div class="script-block-content">${script.hook}</div>
                    </div>
                    <div class="script-block">
                        <div class="script-block-label">2. Visual & B-Roll Action</div>
                        <div class="script-block-content" style="border-left-color: #ec4899;">${script.visual}</div>
                    </div>
                    <div class="script-block">
                        <div class="script-block-label">3. High-Density Value Delivery</div>
                        <div class="script-block-content" style="border-left-color: #a855f7;">${script.body}</div>
                    </div>
                    <div class="script-block">
                        <div class="script-block-label">4. Conversion CTA (DM Keyword Trigger)</div>
                        <div class="script-block-content" style="border-left-color: #10b981;">${script.cta}</div>
                    </div>
                </div>
            `;
        }
    }

    if (generateBtn) {
        generateBtn.addEventListener('click', generateScript);
    }
    if (modelSelect) {
        modelSelect.addEventListener('change', generateScript);
    }

    // Export Report
    if (exportReportBtn) {
        exportReportBtn.addEventListener('click', () => {
            if (!currentAuditData) return;
            const p = currentAuditData.profile;
            const m = currentAuditData.metrics_summary;
            const reportText = `# INSTAGRAM AUDIT & WINNING MODELS REPORT
Account: @${p.username} (${p.name})
Followers: ${(p.followers || 0).toLocaleString()}
Total Engagements: ${(m.total_engagements || 0).toLocaleString()} (Avg ER: ${m.avg_engagement_rate})
Top Viral Outlier ER: ${m.top_performing_outlier_er}

AUDITED BIO:
${p.bio}

4 PROVEN WINNING MODELS:
1. Visual App / Tangible Proof Demo (${m.top_performing_outlier_er} Peak Outlier)
2. 'X Just Replaced Y?' Disruption Lead Magnet (High Comment-to-Like Ratio)
3. De-Schooled Authority & Frameworks (High Saves & Long-term Trust)
4. Secret Exposure / Creator Mythbuster (High Conversion & Rapport)

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
        });
    }

    // Initial Load: Fetch default audit data
    fetch('audit_data.json')
        .then(r => r.json())
        .then(data => renderDashboard(data))
        .catch(() => {
            console.log('Running default render');
        });
});
