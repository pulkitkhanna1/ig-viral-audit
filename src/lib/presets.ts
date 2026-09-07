import { AuditResult } from '@/types/audit';

export const VERIFIED_PRESETS: Record<string, AuditResult> = {
  thepulkitproject: {
    profile: {
      username: "thepulkitproject",
      name: "Pulkit Khanna | Certified AI coach",
      followers: 3578,
      following: 0,
      posts_count: 8,
      bio: "🇮🇳 | 🇺🇸\nMaking AI simpler for humans 🤖\nAI Growth Hacker | Ex Bain | Ex AI Founder | Claude certified\nDon’t get replaced. Get Ahead 🚀",
      profile_url: "https://www.instagram.com/thepulkitproject/",
      profile_pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
    },
    metrics_summary: {
      total_likes: 28337,
      total_comments: 6975,
      total_engagements: 35312,
      avg_likes_per_post: 3542.1,
      avg_comments_per_post: 871.9,
      avg_engagement_rate: "123.37%",
      median_engagement_rate: "9.84%",
      benchmark_industry_avg_er: "2.10%",
      top_performing_outlier_er: "844.16%"
    },
    posts: [
      {
        id: 1,
        shortcode: "Dbf7DbIoiVq",
        url: "https://www.instagram.com/reel/Dbf7DbIoiVq/",
        product_type: "clips",
        likes: 24751,
        comments: 5453,
        total_engagement: 30204,
        engagement_rate: "844.16%",
        er_num: 844.16,
        performance_tier: "Mega Viral (10x Outlier)",
        hook: "Built a cool app with @higgsai.visuals - 67+ filters instant style/effect",
        caption: "Built a cool app with @higgsai.visuals \n\nThis has 67+ filters so you can upload an image and instantly apply any style or effect\n\nLearning from the OG @Ashok.Sangireddy",
        winning_archetype: "Visual Product Demo & Filter Transformation",
        cta_type: "Creator Tag Mention"
      },
      {
        id: 2,
        shortcode: "DaGRdC2ompJ",
        url: "https://www.instagram.com/reel/DaGRdC2ompJ/",
        product_type: "clips",
        likes: 1650,
        comments: 1180,
        total_engagement: 2830,
        engagement_rate: "79.09%",
        er_num: 79.09,
        performance_tier: "Viral Outlier",
        hook: "Google Omni Just Replaced Video Editors? This AI edited the video using just one prompt.",
        caption: "Google Omni Just Replaced Video Editors?\n\nThis AI edited the video using just one prompt.\n\nComment PROMPT and I’ll send you the exact workflow.",
        winning_archetype: "Industry Disruption + Lead Magnet",
        cta_type: "Keyword Trigger ('PROMPT')"
      },
      {
        id: 3,
        shortcode: "DbV6MshqwOU",
        url: "https://www.instagram.com/reel/DbV6MshqwOU/",
        product_type: "clips",
        likes: 1129,
        comments: 105,
        total_engagement: 1234,
        engagement_rate: "34.49%",
        er_num: 34.49,
        performance_tier: "High Performing",
        hook: "Masti ki Pathshala Series: Follow kar lo, bina MBA ke top-tier thinking milega 🔥",
        caption: "Masti ki Pathshala Series\nFollow kar lo, bina MBA ke top-tier thinking milega 🔥\nComment “Character” for notes",
        winning_archetype: "Practical MBA Framework",
        cta_type: "Keyword Trigger ('Character')"
      },
      {
        id: 4,
        shortcode: "DZpCPeEIS1x",
        url: "https://www.instagram.com/reel/DZpCPeEIS1x/",
        product_type: "clips",
        likes: 290,
        comments: 113,
        total_engagement: 403,
        engagement_rate: "11.26%",
        er_num: 11.26,
        performance_tier: "Strong Performer",
        hook: "Your favorite creators are lying to you. 🤫 They aren’t renting expensive studios...",
        caption: "Your favorite creators are lying to you. 🤫\n\nThey aren’t renting expensive studios—they are using this exact AI trick.\n\nDrop “AI” in the comments...",
        winning_archetype: "Secret Exposure Mythbuster",
        cta_type: "Keyword Trigger ('AI')"
      }
    ],
    winning_models: [
      {
        model_name: "Model 1: The Visual Transformation & Magic App Demo",
        badge: "Top Viral Model (30.2k Engagements)",
        featured: true,
        benchmark_metric: "30,204 Engagements (844.2% ER)",
        core_psychology: "Instant visual gratification + tangible proof of functional AI tools. Stops scroll in 1.5s.",
        formula: "[Visual Output Show-Not-Tell] + [Rapid UI Walkthrough] + [Replicable Output Demo]",
        hook_templates: [
          "I built an AI tool that turns any standard photo into a $1,000 photoshoot in 2 seconds.",
          "Stop paying for complex workflows—I built a 1-click app with 60+ cinematic filters."
        ]
      },
      {
        model_name: "Model 2: The 'X Just Replaced Y?' Disruption Lead Magnet",
        badge: "Highest Comment Velocity (1,180 Comments)",
        featured: false,
        benchmark_metric: "2,830 Engagements (79.1% ER)",
        core_psychology: "Fear of obsolescence + High perceived value of proprietary workflow.",
        formula: "[Shocking Disruption Hook] + [1-Prompt Demo Proof] + [Keyword DM Trigger CTA]",
        hook_templates: [
          "Did [AI Tool] just make [Traditional Profession] obsolete? Here is the proof.",
          "You don't need a $5,000 video editor anymore. This AI did this in 1 prompt. Comment 'WORKFLOW'."
        ]
      },
      {
        model_name: "Model 3: The Secret Exposure / Creator Mythbuster",
        badge: "High Conversion (28% Comment Ratio)",
        featured: false,
        benchmark_metric: "403 Engagements (11.3% ER)",
        core_psychology: "Us vs. Them framing + Low barrier ($0 in 10 minutes).",
        formula: "[Expose Industry Gatekeeping] + [Zero-Dollar Studio Setup Demo] + [DM Automation]",
        hook_templates: [
          "Your favorite creators are lying to you. 🤫 They aren’t renting expensive studios.",
          "The #1 secret agencies hide about AI video (and how to copy it free in 5 mins)."
        ]
      },
      {
        model_name: "Model 4: The De-Schooled Ex-Bain Framework / Practical MBA",
        badge: "High Authority & Saves",
        featured: false,
        benchmark_metric: "1,234 Engagements (34.5% ER)",
        core_psychology: "Aspirational career acceleration + elite business insights made simple.",
        formula: "[Series Brand] + ['Bina MBA' Promise] + [High-Density Case Study] + [Notes DM Trigger]",
        hook_templates: [
          "Ex-Bain AI Strategy (Ep 3): The 3 business growth levers 99% of creators ignore.",
          "How a solo creator used this AI framework to outpace a 20-person team."
        ]
      }
    ]
  },
  hubspot: {
    profile: {
      username: "hubspot",
      name: "HubSpot",
      followers: 658000,
      following: 72,
      posts_count: 3253,
      bio: "Grow better with HubSpot 🌱\nTips, trends & insights for scaling your business and career 🚀\n👇 Free Marketing & AI Templates",
      profile_url: "https://www.instagram.com/hubspot/",
      profile_pic: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80"
    },
    metrics_summary: {
      total_likes: 24900,
      total_comments: 1840,
      total_engagements: 26740,
      avg_likes_per_post: 3112.5,
      avg_comments_per_post: 230.0,
      avg_engagement_rate: "0.51%",
      median_engagement_rate: "0.48%",
      benchmark_industry_avg_er: "0.40%",
      top_performing_outlier_er: "1.24%"
    },
    posts: [
      {
        id: 1,
        shortcode: "hubspot_p1",
        url: "https://www.instagram.com/hubspot/",
        product_type: "clips",
        likes: 7420,
        comments: 712,
        total_engagement: 8132,
        engagement_rate: "1.24%",
        er_num: 1.24,
        performance_tier: "Viral Outlier",
        hook: "The 3 Inbound Marketing Frameworks That Scaled Us Past $1B in ARR",
        caption: "Want to scale without paid ads? Drop 'INBOUND' to get the full 2026 playbook.",
        winning_archetype: "Enterprise Inbound Lead Magnet",
        cta_type: "Keyword Trigger ('INBOUND')"
      },
      {
        id: 2,
        shortcode: "hubspot_p2",
        url: "https://www.instagram.com/hubspot/",
        product_type: "carousel_container",
        likes: 5120,
        comments: 310,
        total_engagement: 5430,
        engagement_rate: "0.83%",
        er_num: 0.83,
        performance_tier: "High Performing",
        hook: "7 AI Prompts for Marketers That Save 15 Hours Every Single Week",
        caption: "Swipe through to see all 7 prompt chains. Save this for your Monday planning session.",
        winning_archetype: "High-Density Swipe File Carousel",
        cta_type: "Save & Bookmark CTA"
      }
    ],
    winning_models: [
      {
        model_name: "Model 1: The B2B Inbound Lead Magnet & Template Drop",
        badge: "Top Conversion Engine (8.1k Engagements)",
        featured: true,
        benchmark_metric: "8,132 Engagements (1.24% ER)",
        core_psychology: "Direct utility and career advancement. Delivering high-status enterprise templates in exchange for 1-word comments.",
        formula: "[Elite Growth Milestone Hook] + [3-Pillar Framework] + [Keyword DM Trigger: 'INBOUND']",
        hook_templates: [
          "The 3 Inbound Marketing Frameworks That Scaled Us Past $1B in ARR.",
          "Stop writing cold emails from scratch. Here is the template with a 42% reply rate."
        ]
      },
      {
        model_name: "Model 2: The High-Density Swipe File & Carousel Blueprint",
        badge: "Highest Save Rate",
        featured: false,
        benchmark_metric: "5,430 Engagements (High Bookmarks)",
        core_psychology: "Information density creates visual bookmarks and re-shares across team Slack channels.",
        formula: "[High-Value Numbered Tool List] + [7-Slide Step-by-Step Breakdown] + [Save for Later CTA]",
        hook_templates: [
          "7 AI Prompts for Marketers That Save 15 Hours Every Single Week.",
          "The complete B2B Growth Stack for 2026 (Save this before you start planning)."
        ]
      }
    ]
  },
  garyvee: {
    profile: {
      username: "garyvee",
      name: "Gary Vay-Ner-Chuk",
      followers: 12000000,
      following: 7775,
      posts_count: 11000,
      bio: "Family 1st | CEO of @vaynermedia | 5x NYT author | Creator of @veefriends | Investor in Twitter, FB, Uber, Coinbase 🍷",
      profile_url: "https://www.instagram.com/garyvee/",
      profile_pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    },
    metrics_summary: {
      total_likes: 92800,
      total_comments: 2420,
      total_engagements: 95220,
      avg_likes_per_post: 11600.0,
      avg_comments_per_post: 302.5,
      avg_engagement_rate: "0.10%",
      median_engagement_rate: "0.11%",
      benchmark_industry_avg_er: "0.08%",
      top_performing_outlier_er: "0.16%"
    },
    posts: [
      {
        id: 1,
        shortcode: "gary_p1",
        url: "https://www.instagram.com/reel/Dc8rSKDkq8C/",
        product_type: "clips",
        likes: 18660,
        comments: 149,
        total_engagement: 18809,
        engagement_rate: "0.16%",
        er_num: 0.16,
        performance_tier: "Mega Viral Outlier",
        hook: "You get one life. Don't spend the next 5 years collecting regrets.",
        caption: "Overcomplication is the number one reason so many of you are struggling.",
        winning_archetype: "Mindset Pattern Interrupt",
        cta_type: "Direct CTA ('GARY')"
      }
    ],
    winning_models: [
      {
        model_name: "Model 1: High-Contrast Real-Talk & Mindset Pattern Interrupt",
        badge: "Top Viral Outlier (18.8k Engagements)",
        featured: true,
        benchmark_metric: "18,809 Engagements (0.16% ER on 12M Base)",
        core_psychology: "Direct emotional punch and unvarnished truth. Cuts through social media perfection with raw accountability.",
        formula: "[Hard Truth Hook] + [Personal Accountability Proof] + [Immediate Perspective Shift]",
        hook_templates: [
          "You get one life. Don't spend the next 5 years collecting regrets about Business & Media.",
          "Overcomplication is the #1 reason 99% of people fail. Here is the unvarnished truth."
        ]
      }
    ]
  },
  levelsio: {
    profile: {
      username: "levelsio",
      name: "Pieter Levels",
      followers: 285000,
      following: 120,
      posts_count: 350,
      bio: "Bootstrapping startups to $100k+/month as a solo founder 💻\nCreator of Nomad List, Remote OK, PhotoAI & Interior AI 🚀\n👇 Free Solo Founder Stack",
      profile_url: "https://www.instagram.com/levelsio/",
      profile_pic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80"
    },
    metrics_summary: {
      total_likes: 18400,
      total_comments: 1120,
      total_engagements: 19520,
      avg_likes_per_post: 2300.0,
      avg_comments_per_post: 140.0,
      avg_engagement_rate: "0.86%",
      median_engagement_rate: "0.75%",
      benchmark_industry_avg_er: "0.50%",
      top_performing_outlier_er: "2.40%"
    },
    posts: [
      {
        id: 1,
        shortcode: "levels_p1",
        url: "https://www.instagram.com/levelsio/",
        product_type: "clips",
        likes: 6400,
        comments: 450,
        total_engagement: 6850,
        engagement_rate: "2.40%",
        er_num: 2.40,
        performance_tier: "Viral Outlier",
        hook: "How I make $120,000/month with zero employees and just 1 PHP file",
        caption: "Simplicity is the ultimate competitive advantage. Drop 'STACK' for the full source code setup.",
        winning_archetype: "Solo Founder Income Transparency",
        cta_type: "Keyword Trigger ('STACK')"
      }
    ],
    winning_models: [
      {
        model_name: "Model 1: Solo Founder Revenue & Minimalist Tech Stack",
        badge: "Top Outlier (6.8k Engagements)",
        featured: true,
        benchmark_metric: "6,850 Engagements (2.40% ER)",
        core_psychology: "Radical income transparency and anti-complexity. Contrasting $100k/mo revenue with a single basic script inspires massive awe.",
        formula: "[High Revenue Metric Hook] + [Minimalist Constraint Proof] + [Code/Stack DM Trigger]",
        hook_templates: [
          "How I run a $100k/month startup with 0 employees and a simple tech stack.",
          "Stop raising venture capital. Here is how a solo founder ships in 48 hours."
        ]
      }
    ]
  },
  mrbeast: {
    profile: {
      username: "mrbeast",
      name: "MrBeast",
      followers: 61000000,
      following: 340,
      posts_count: 420,
      bio: "I want to make the world a better place before I die. 🌍\nSubscribe to my YouTube! 🎥\nFounder of Feastables 🍫",
      profile_url: "https://www.instagram.com/mrbeast/",
      profile_pic: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&auto=format&fit=crop&q=80"
    },
    metrics_summary: {
      total_likes: 3840000,
      total_comments: 92400,
      total_engagements: 3932400,
      avg_likes_per_post: 480000.0,
      avg_comments_per_post: 11550.0,
      avg_engagement_rate: "0.81%",
      median_engagement_rate: "0.78%",
      benchmark_industry_avg_er: "0.05%",
      top_performing_outlier_er: "2.10%"
    },
    posts: [
      {
        id: 1,
        shortcode: "mrbeast_p1",
        url: "https://www.instagram.com/mrbeast/",
        product_type: "clips",
        likes: 1280000,
        comments: 34000,
        total_engagement: 1314000,
        engagement_rate: "2.10%",
        er_num: 2.10,
        performance_tier: "Mega Viral Outlier",
        hook: "I Survived 7 Days in an Abandoned City with $0",
        caption: "New video is live! Drop your favorite moment in the comments.",
        winning_archetype: "Extreme Stakes & Spectacle Hook",
        cta_type: "Direct Comment CTA"
      }
    ],
    winning_models: [
      {
        model_name: "Model 1: Extreme Stakes & High Concept Spectacle",
        badge: "Mega Viral Outlier (1.3M Engagements)",
        featured: true,
        benchmark_metric: "1,314,000 Engagements (2.10% ER on 61M Base)",
        core_psychology: "Unbelievable physical stakes and curiosity gap. The viewer cannot resist watching until the resolution.",
        formula: "[Absurd Impossible Challenge] + [Extreme Time/Money Constraint] + [Visual Proof in 1st Frame]",
        hook_templates: [
          "I gave 100 random people $10,000 to see who survives the longest.",
          "I bought an entire island and hid a $1,000,000 briefcase on it."
        ]
      }
    ]
  }
};
