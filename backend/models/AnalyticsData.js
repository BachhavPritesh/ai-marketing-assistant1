const mongoose = require('mongoose');

const instagramStatsSchema = new mongoose.Schema({
  reach: { type: String, default: '0M' },
  engagement: { type: String, default: '0%' },
  followers: { type: String, default: '0K' },
  posts: { type: Number, default: 0 },
  shares: { type: String, default: '0K' },
}, { _id: false });

const youtubeStatsSchema = new mongoose.Schema({
  reach: { type: String, default: '0M' },
  engagement: { type: String, default: '0%' },
  watchTime: { type: String, default: '0K hrs' },
  subscribers: { type: String, default: '0K' },
  posts: { type: Number, default: 0 },
  shares: { type: String, default: '0K' },
}, { _id: false });

const linkedinStatsSchema = new mongoose.Schema({
  reach: { type: String, default: '0M' },
  engagement: { type: String, default: '0%' },
  connections: { type: String, default: '0' },
  posts: { type: Number, default: 0 },
  shares: { type: String, default: '0K' },
}, { _id: false });

const twitterStatsSchema = new mongoose.Schema({
  reach: { type: String, default: '0M' },
  engagement: { type: String, default: '0%' },
  followers: { type: String, default: '0K' },
  posts: { type: Number, default: 0 },
  shares: { type: String, default: '0K' },
}, { _id: false });

const analyticsDataSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  
  kpis: {
    totalReach: { type: String, default: '0M' },
    engagementRate: { type: String, default: '0%' },
    watchTime: { type: String, default: '0K hrs' },
    shares: { type: String, default: '0K' },
    followerGrowth: { type: String, default: '+0K' },
  },
  
  impressions: [{
    week: String,
    instagram: Number,
    youtube: Number,
    linkedin: Number,
    twitter: Number,
  }],
  
  followerGrowthData: [{
    month: String,
    followers: Number,
  }],
  
  platformBreakdown: [{
    name: String,
    value: Number,
    color: String,
  }],
  
  audienceMetrics: [{
    label: String,
    score: Number,
    trend: String,
  }],
  
  totalAudienceScore: { type: Number, default: 0 },
  
  algorithmMetrics: [{
    label: String,
    score: Number,
  }],
  
  topContent: [{
    title: String,
    platform: String,
    views: String,
    engagement: String,
    virality: Number,
    posted: String,
  }],
  
  instagram: instagramStatsSchema,
  youtube: youtubeStatsSchema,
  linkedin: linkedinStatsSchema,
  twitter: twitterStatsSchema,
  
  updatedAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('AnalyticsData', analyticsDataSchema);
