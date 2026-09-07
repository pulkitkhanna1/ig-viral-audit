export interface ProfileData {
  username: string;
  name: string;
  followers: number;
  following: number;
  posts_count: number;
  bio: string;
  profile_url: string;
  profile_pic: string;
}

export interface MetricsSummary {
  total_likes: number;
  total_comments: number;
  total_engagements: number;
  avg_likes_per_post: number;
  avg_comments_per_post: number;
  avg_engagement_rate: string;
  median_engagement_rate: string;
  benchmark_industry_avg_er: string;
  top_performing_outlier_er: string;
}

export interface PostItem {
  id: number;
  shortcode: string;
  url: string;
  product_type: string;
  likes: number;
  comments: number;
  total_engagement: number;
  engagement_rate: string;
  er_num: number;
  performance_tier: string;
  hook: string;
  caption: string;
  winning_archetype: string;
  cta_type: string;
}

export interface WinningModel {
  model_name: string;
  badge: string;
  featured: boolean;
  benchmark_metric: string;
  core_psychology: string;
  formula: string;
  hook_templates: string[];
}

export interface AuditResult {
  profile: ProfileData;
  metrics_summary: MetricsSummary;
  posts: PostItem[];
  winning_models: WinningModel[];
}
