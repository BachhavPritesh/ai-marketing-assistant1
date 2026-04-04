const AnalyticsData = require('../models/AnalyticsData');

const seededRandom = (seed) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const hashString = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
};

const generateAnalyticsData = (userId, userRole = 'Creator') => {
  const seed = hashString(userId + '_analytics');
  const rand = (min, max, offset = 0) => {
    const value = seededRandom(seed + offset) * (max - min) + min;
    return Math.round(value * 10) / 10;
  };
  const randInt = (min, max, offset = 0) => Math.floor(rand(min, max, offset));
  
  const weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  
  const impressions = weeks.map((week, i) => ({
    week,
    instagram: randInt(15000, 55000, i * 10 + 1),
    youtube: randInt(12000, 45000, i * 10 + 2),
    linkedin: randInt(8000, 22000, i * 10 + 3),
    twitter: randInt(18000, 40000, i * 10 + 4),
  }));
  
  const followerGrowthData = months.map((month, i) => ({
    month,
    followers: randInt(8000, 50000, i * 20 + 100),
  }));
  
  const instagramPct = randInt(30, 55, 200);
  const youtubePct = randInt(18, 35, 201);
  const linkedinPct = randInt(10, 25, 202);
  const twitterPct = 100 - instagramPct - youtubePct - linkedinPct;
  
  const platformBreakdown = [
    { name: 'Instagram', value: instagramPct, color: '#C05A38' },
    { name: 'YouTube', value: youtubePct, color: '#506B40' },
    { name: 'LinkedIn', value: linkedinPct, color: '#C9A96E' },
    { name: 'Twitter', value: twitterPct, color: '#3A3028' },
  ];
  
  const audienceMetrics = [
    { label: 'Gen Z Alignment', score: randInt(70, 98, 300), trend: `+${randInt(1, 15, 301)}%` },
    { label: 'Tech Enthusiasts', score: randInt(65, 95, 302), trend: `+${randInt(1, 20, 303)}%` },
    { label: 'Creative Pros', score: randInt(55, 90, 304), trend: `+${randInt(1, 10, 305)}%` },
    { label: 'Global Reach', score: randInt(50, 85, 306), trend: randInt(0, 5, 307) > 2 ? `+${randInt(1, 5, 308)}%` : `-${randInt(1, 3, 309)}%` },
  ];
  
  const totalAudienceScore = Math.round(audienceMetrics.reduce((sum, m) => sum + m.score, 0) / audienceMetrics.length);
  
  const algorithmMetrics = [
    { label: 'Watch Time Retention', score: randInt(55, 95, 400) },
    { label: 'Save Rate', score: randInt(40, 85, 401) },
    { label: 'Comment Rate', score: randInt(50, 95, 402) },
    { label: 'Share Rate', score: randInt(45, 90, 403) },
    { label: 'CTR', score: randInt(35, 80, 404) },
  ];
  
  const platforms = ['Instagram', 'YouTube', 'LinkedIn', 'Twitter'];
  const contentTitles = [
    'AI trick that changed my content game forever...',
    "The algorithm doesn't pick winners randomly",
    'B2B Content Strategy That Actually Works',
    'AI Tools Comparison 2025 | Full Review',
    'How I grew 10K followers in 30 days',
    "The truth about viral content...",
    'My morning routine for maximum productivity',
    'Building a personal brand from scratch',
  ];
  
  const topContent = Array(4).fill().map((_, i) => ({
    title: contentTitles[randInt(0, contentTitles.length, 500 + i)],
    platform: platforms[randInt(0, 4, 510 + i)],
    views: `${rand(20, 150, 520 + i).toFixed(1)}K`,
    engagement: `${rand(4, 12, 530 + i).toFixed(1)}`,
    virality: randInt(65, 95, 540 + i),
    posted: `${randInt(1, 14, 550 + i)} days ago`,
  }));
  
  const instagram = {
    reach: `${rand(0.5, 3, 600).toFixed(1)}M`,
    engagement: `${rand(4, 12, 601).toFixed(1)}%`,
    followers: `${randInt(5, 50, 602)}K`,
    posts: randInt(20, 100, 603),
    shares: `${randInt(1, 15, 640)}K`,
  };
  
  const youtube = {
    reach: `${rand(0.3, 2, 610).toFixed(1)}M`,
    engagement: `${rand(3, 10, 611).toFixed(1)}%`,
    watchTime: `${randInt(10, 50, 612)}K hrs`,
    subscribers: `${randInt(3, 30, 613)}K`,
    posts: randInt(10, 80, 614),
    shares: `${randInt(2, 20, 641)}K`,
  };
  
  const linkedin = {
    reach: `${rand(0.1, 1.5, 620).toFixed(1)}M`,
    engagement: `${rand(2, 8, 621).toFixed(1)}%`,
    connections: `${randInt(500, 5000, 622)}`,
    posts: randInt(5, 50, 623),
    shares: `${randInt(0.5, 5, 642)}K`,
  };
  
  const twitter = {
    reach: `${rand(0.4, 2.5, 630).toFixed(1)}M`,
    engagement: `${rand(1, 6, 631).toFixed(1)}%`,
    followers: `${randInt(2, 25, 632)}K`,
    posts: randInt(50, 500, 633),
    shares: `${randInt(3, 25, 643)}K`,
  };
  
  const platformStats = { instagram, youtube, linkedin, twitter };
  
  return {
    kpis: {
      totalReach: `${rand(1.5, 8, 700).toFixed(1)}M`,
      engagementRate: `${rand(3.5, 8.5, 701).toFixed(1)}%`,
      watchTime: `${randInt(10, 50, 702)}K hrs`,
      shares: `${randInt(50, 200, 703)}K`,
      followerGrowth: `+${randInt(5, 25, 704)}K`,
    },
    impressions,
    followerGrowthData,
    platformBreakdown,
    audienceMetrics,
    totalAudienceScore,
    algorithmMetrics,
    topContent,
    platformStats,
  };
};

exports.getOverview = (req, res) => {
  res.json({
    success: true,
    data: {
      totalReach: '2.4M',
      engagementRate: '4.8%',
      totalViews: '18.2K hrs',
      totalShares: '84.1K',
      followerGrowth: '+12.4K',
      platformBreakdown: { instagram: 45, youtube: 28, linkedin: 15, twitter: 12 },
      recentTrends: [
        { topic: '#AIArt', growth: '+142%', volume: '2.4M' },
        { topic: '#CreatorEconomy', growth: '+98%', volume: '1.8M' },
        { topic: '#ViralHacks', growth: '+76%', volume: '1.2M' }
      ]
    }
  });
};

exports.getAnalytics = async (req, res) => {
  try {
    const userId = req.user.id;
    
    let analyticsData = await AnalyticsData.findOne({ userId }).lean();
    
    if (!analyticsData) {
      const generatedData = generateAnalyticsData(userId.toString());
      analyticsData = await AnalyticsData.create({
        userId,
        ...generatedData,
      });
    }
    
    res.json({ success: true, data: analyticsData });
  } catch (error) {
    console.error('Get analytics error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

exports.refreshAnalytics = async (req, res) => {
  try {
    const userId = req.user.id;
    
    await AnalyticsData.deleteOne({ userId });
    
    const generatedData = generateAnalyticsData(userId.toString());
    
    const analyticsData = await AnalyticsData.create({
      userId,
      ...generatedData,
    });
    
    res.json({ success: true, data: analyticsData.toObject() });
  } catch (error) {
    console.error('Refresh analytics error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

exports.getPlatformAnalytics = async (req, res) => {
  try {
    const userId = req.user.id;
    const { platform } = req.params;
    
    let analyticsData = await AnalyticsData.findOne({ userId });
    
    if (!analyticsData) {
      const generatedData = generateAnalyticsData(userId.toString());
      analyticsData = await AnalyticsData.create({
        userId,
        ...generatedData,
      });
    }
    
    const platformData = analyticsData.platformStats?.[platform.toLowerCase()] || {};
    
    const impressionsMap = {
      instagram: 'instagram',
      youtube: 'youtube',
      linkedin: 'linkedin',
      twitter: 'twitter',
      all: null
    };
    
    const filteredImpressions = analyticsData.impressions.map(week => {
      if (platform.toLowerCase() === 'all' || !impressionsMap[platform.toLowerCase()]) {
        const total = week.instagram + week.youtube + week.linkedin + week.twitter;
        return { week: week.week, value: total };
      }
      return { week: week.week, value: week[impressionsMap[platform.toLowerCase()]] || 0 };
    });
    
    res.json({
      success: true,
      data: {
        platform: platform.toLowerCase(),
        stats: platformData,
        impressions: filteredImpressions,
        kpis: analyticsData.kpis,
      }
    });
  } catch (error) {
    console.error('Get platform analytics error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
