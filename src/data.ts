import { Service, SyllabusConcept, RoadmapPhase, WhyChooseUsFeature, Testimonial, GalleryItem, FAQItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'course',
    name: 'Premium Forex Course',
    price: 50,
    period: 'One-Time Access',
    description: 'Master professional price action trading, structural liquidity, and high-probability mechanics from scratch.',
    features: [
      'Forex Basics & Terms',
      'Advanced Price Action Mastery',
      'Structural Liquidity & Hunt Models',
      'Multi-Timeframe Market Structure',
      'Institutional Supply & Demand',
      'Professional Risk Management',
      'Elite Trading Psychology Systems',
      'Real-world Live Examples & Recaps',
      'Lifetime System Updates & Material'
    ],
    buttonText: 'Enroll Now',
    isPopular: false,
  },
  {
    id: 'mentorship',
    name: 'One-on-One Mentorship',
    price: 75,
    period: 'Per Private Session',
    description: 'Accelerate your learning curve with personalized, direct coaching and deep portfolio audits with our head trader.',
    features: [
      'Personal 1-on-1 Live Coaching',
      'Live Market Analysis Sessions',
      'Custom Strategy Development',
      'Detailed Past Trade Reviews',
      'Weekly Targeted Assignments',
      'Direct Discord/WhatsApp Support',
      'Custom Psychology Assessment',
      'Exclusive Trading Plan Audit'
    ],
    buttonText: 'Book Private Session',
    isPopular: true,
  },
  {
    id: 'community',
    name: 'VIP Discord Community',
    price: 30,
    period: 'Per Month',
    description: 'Trade alongside elite traders. Get real-time setups, daily live commentary, and psychological backing.',
    features: [
      'Daily Live Markup & Signals',
      'Weekly Pre-Market Outlook Video',
      'Real-time Market Alerts (NY & London)',
      'Community Trade Discussion Channels',
      'Exclusive Webinars & Case Studies',
      'Direct Support from Mentors',
      'Member Shareable Chart Ideas'
    ],
    buttonText: 'Join VIP Access',
    isPopular: false,
  }
];

export const SYLLABUS_CONCEPTS: SyllabusConcept[] = [
  {
    id: 'forex-basics',
    title: 'Forex Basics',
    category: 'Fundamentals',
    description: 'Master currency pairs, pips, leverage, lots, margin, and order types.',
    details: 'The ultimate bedrock of understanding. Learn how the global forex market functions, broker operations, and how bid-ask spreads work.'
  },
  {
    id: 'market-structure',
    title: 'Market Structure',
    category: 'Structure',
    description: 'Learn swing highs, swing lows, and trend identification across multiple timeframes.',
    details: 'Identify bullish, bearish, and ranging markets with mechanical precision. Learn why standard retail trendlines fail and how structures actually develop.'
  },
  {
    id: 'liquidity',
    title: 'Liquidity',
    category: 'Structure',
    description: 'Understand stop hunts, equal highs, equal lows, and liquidity pools.',
    details: 'Institutions build liquidity to fill massive orders. Learn to find buy-stop and sell-stop liquidity levels and join the smart money instead of being the liquidity.'
  },
  {
    id: 'bos',
    title: 'Break of Structure (BOS)',
    category: 'Structure',
    description: 'Identify structural break points that confirm trend continuation.',
    details: 'A clean Break of Structure validates momentum. Learn to differentiate real breaks (body closes) from simple liquidity sweeps (wicks).'
  },
  {
    id: 'choch',
    title: 'Change of Character (CHoCH)',
    category: 'Structure',
    description: 'Spot early shifts in trend direction and potential reversals.',
    details: 'CHoCH is the initial sign of a trend shift. Learn how to map high-probability CHoCH patterns on lower timeframes for sniper entries.'
  },
  {
    id: 'order-blocks',
    title: 'Order Blocks',
    category: 'Advanced',
    description: 'Locate where institutional orders are placed and resting.',
    details: 'The last opposing candle before a massive expansion. Understand the order flow context that makes an order block high-probability.'
  },
  {
    id: 'fvg',
    title: 'Fair Value Gaps (FVG)',
    category: 'Advanced',
    description: 'Spot price delivery imbalances and natural target magnets.',
    details: 'Imbalances left by rapid price movements. Price naturally acts like a magnet to fill these gaps. Learn how to combine them with premium/discount levels.'
  },
  {
    id: 'supply-demand',
    title: 'Supply & Demand',
    category: 'Advanced',
    description: 'Identify imbalances between buyers and sellers to find key turning points.',
    details: 'Price moves from areas of balance to imbalance. Learn to locate premium zones of supply and discount zones of demand.'
  },
  {
    id: 'premium-discount',
    title: 'Premium & Discount',
    category: 'Management',
    description: 'Use Fibonacci tools to buy low (discount) and sell high (premium).',
    details: 'Never buy at a high price or sell at a low price. Map equilibrium and define exact premium/discount ranges relative to structural dealers.'
  },
  {
    id: 'risk-management',
    title: 'Risk Management',
    category: 'Management',
    description: 'Protect your capital with fixed risk, position sizing, and stop losses.',
    details: 'The absolute secret to longevity. Calculate exact lot sizing based on stop-loss distance, enforce strict 1% maximum risk, and learn dynamic trade scaling.'
  },
  {
    id: 'trading-psychology',
    title: 'Trading Psychology',
    category: 'Management',
    description: 'Combat FOMO, greed, revenge trading, and emotional over-leveraging.',
    details: 'A profitable strategy is useless without emotional mastery. Learn systematic routines, mindfulness techniques, and probability-based thinking.'
  },
  {
    id: 'entry-models',
    title: 'Entry Models',
    category: 'Advanced',
    description: 'Establish mechanical rules for entering trades with tight stop losses.',
    details: 'Sniper entries using lower timeframe structure alignments. Master limit orders versus confirmation market entries.'
  },
  {
    id: 'trade-management',
    title: 'Trade Management',
    category: 'Management',
    description: 'Manage open positions, scale out profits, and secure break-even points.',
    details: 'Trailing stops, taking partial profits at key targets, and managing risk during high-impact red news events.'
  },
  {
    id: 'journaling',
    title: 'Journaling',
    category: 'Management',
    description: 'Log and analyze trades with detailed statistics to identify weaknesses.',
    details: 'Track variables like pair, session, day, entry type, and psychological state. Build a database of your setups to gain absolute statistical confidence.'
  },
  {
    id: 'backtesting',
    title: 'Backtesting',
    category: 'Fundamentals',
    description: 'Validate your strategy using historical market data.',
    details: 'Learn how to speed up your learning curve by backtesting 1,000+ setups. Build mechanical confidence before taking on real capital.'
  },
  {
    id: 'news-trading',
    title: 'News Trading',
    category: 'Management',
    description: 'Navigate volatile high-impact economic news releases safely.',
    details: 'Understand how NFP, FOMC, CPI, and interest rate decisions manipulate price structure, and learn when to stay flat versus how to read news sweeps.'
  }
];

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phase: 1,
    title: 'Forex Foundations',
    description: 'Build correct understanding of market dynamics and standard terminologies.',
    topics: ['Global Market structure & Players', 'Pips, Lots & Margin math', 'Bid/Ask Spread Mechanics', 'Broker Selection & Platform setups']
  },
  {
    phase: 2,
    title: 'Charts & Timeframes',
    description: 'Navigate charting software and multi-timeframe analysis.',
    topics: ['TradingView Optimization', 'HTF vs LTF Alignment', 'Session Times (NY, London, Asia)', 'Chart Templates & Clean Layouts']
  },
  {
    phase: 3,
    title: 'Candlestick Psychology',
    description: 'Read the story told by candles, not just arbitrary patterns.',
    topics: ['Buying/Selling Pressure', 'Wick sweeps & body tells', 'Rejection mechanics', 'Volume & Momentum clues']
  },
  {
    phase: 4,
    title: 'Market Structure Mastery',
    description: 'Map out the structural trend mechanical map cleanly.',
    topics: ['Swing Highs & Swing Lows', 'Structural Breakouts (BOS)', 'Reversal shifts (CHoCH)', 'Internal vs External Structure']
  },
  {
    phase: 5,
    title: 'Liquidity Concepts',
    description: 'Locate where institutional orders and stop-losses reside.',
    topics: ['Equal Highs & Lows (EQH/EQL)', 'Trendline Liquidity (TLL)', 'Buy-side & Sell-side sweeps', 'Inducement points']
  },
  {
    phase: 6,
    title: 'Supply & Demand',
    description: 'Spot areas of huge institutional purchase imbalance.',
    topics: ['Premium vs Discount ranges', 'Supply and Demand zones', 'Imbalances / Fair Value Gaps', 'Mitigation concepts']
  },
  {
    phase: 7,
    title: 'Institutional Trading',
    description: 'Formulate sniper entries leveraging advanced orderblocks.',
    topics: ['Order Blocks & Breaker Blocks', 'Refinement on Lower Timeframes', 'Volume Profiles', 'Mitigation and Re-entry models']
  },
  {
    phase: 8,
    title: 'Risk Management',
    description: 'Learn the bulletproof shield that prevents blowout accounts.',
    topics: ['Fixed % risk calculator', 'Risk-to-Reward Ratio (RR) scaling', 'Trade scaling & partials', 'Prop firm drawdown management']
  },
  {
    phase: 9,
    title: 'Trading Psychology',
    description: 'Overcome self-sabotage, hesitation, and greed.',
    topics: ['Mindset routines & journaling', 'Probability distribution models', 'Streak handling (wins & losses)', 'Accepting risk mechanical setups']
  },
  {
    phase: 10,
    title: 'Advanced Price Action',
    description: 'Put it all together in an absolute, custom mechanical checklist.',
    topics: ['Daily bias checklist', 'High-Probability entry blueprints', 'Live backtesting sprints', 'Graduation & Mentorship reviews']
  }
];

export const WHY_CHOOSE_US: WhyChooseUsFeature[] = [
  {
    title: 'Professional Curriculum',
    description: 'A completely structured step-by-step masterclass taking you from beginner to funded, institutional-level analyst.',
    iconName: 'BookOpen'
  },
  {
    title: 'Live Mentorship',
    description: 'No pre-recorded only lectures. Join live review webinars, review direct setups, and get questions answered.',
    iconName: 'Users'
  },
  {
    title: 'Lifetime Access',
    description: 'Pay once, learn forever. Get access to all future course revisions, webinars, and study guides for free.',
    iconName: 'Clock'
  },
  {
    title: 'Beginner Friendly',
    description: 'We assume you know nothing about trading and guide you from the ground up, avoiding retail bad habits.',
    iconName: 'CheckCircle'
  },
  {
    title: 'Advanced Strategies',
    description: 'Ditch basic trendlines or indicator noise. Trade using institutional orderflow, liquidity, and imbalances.',
    iconName: 'Award'
  },
  {
    title: 'Real Market Examples',
    description: 'Every setup and model we teach is backed by real charts, historical reviews, and live trading evidence.',
    iconName: 'TrendingUp'
  },
  {
    title: 'Community Support',
    description: 'Join a global, elite family of hungry traders. Share markups, ask questions, and build lasting bonds.',
    iconName: 'MessageSquare'
  },
  {
    title: 'Affordable Pricing',
    description: 'Get institutional value at fraction of the cost. We pride ourselves on offering top-tier training for everyone.',
    iconName: 'DollarSign'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Marcus K.',
    country: 'United Kingdom',
    profit: '+$14,250',
    winrate: '72%',
    before: 'Retail Indicators, -5% monthly',
    after: 'Funded $100K Trader, +8% monthly',
    text: 'ND Market Mastery completely shifted how I view charts. Understanding liquidity and premium/discount zones changed everything. I am now officially funded with FTMO and making consistent payouts!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    date: 'June 2026'
  },
  {
    id: 'test-2',
    name: 'Sarah M.',
    country: 'Germany',
    profit: '+$8,700',
    winrate: '68%',
    before: 'Overleveraging, blown 3 accounts',
    after: 'Consistent risk modeller, +6% monthly',
    text: 'The 1-on-1 sessions with my mentor saved my trading career. The psychological checklist and risk tools they gave me cured my greed. Highly recommend to anyone struggling with discipline!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    date: 'May 2026'
  },
  {
    id: 'test-3',
    name: 'Zayd A.',
    country: 'United Arab Emirates',
    profit: '+$21,400',
    winrate: '75%',
    before: 'Signals-dependent, losing capital',
    after: 'Self-sufficient daily bias scanner',
    text: 'I used to pay hundreds for signals that just didn\'t work. Now, I have my own edge. I map out higher timeframe sweeps, target FVG imbalances, and enter with total confidence. Thank you, ND!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    date: 'April 2026'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Liquidity Sweep Entry',
    category: 'Setups',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop'
  },
  {
    id: 'gal-2',
    title: 'Mentorship Group Call',
    category: 'Sessions',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop'
  },
  {
    id: 'gal-3',
    title: 'Course Workspace Dashboard',
    category: 'Dashboard',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
  },
  {
    id: 'gal-4',
    title: 'Institutional Order Block Fill',
    category: 'Charts',
    imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=400&fit=crop'
  },
  {
    id: 'gal-5',
    title: 'Trader Lifestyle Setup',
    category: 'Lifestyle',
    imageUrl: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=600&h=400&fit=crop'
  },
  {
    id: 'gal-6',
    title: '1-on-1 Chart Auditing',
    category: 'Sessions',
    imageUrl: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=600&h=400&fit=crop'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Do I need prior experience to join ND Market Mastery?',
    answer: 'Absolutely not. Our curriculum starts from Phase 1 (Forex Foundations) which explains basic terms, and systematically advances to elite institutional level setups. We will guide you from complete scratch.'
  },
  {
    question: 'How long does it take to complete the Premium Forex Course?',
    answer: 'The course is self-paced. Most students complete the comprehensive core materials in 4 to 6 weeks, dedicating 5 hours per week. However, you will have lifetime access to rewatch and reference materials indefinitely.'
  },
  {
    question: 'Will I receive future course updates and material updates?',
    answer: 'Yes! Markets evolve and we constantly refine our execution models. When you enroll in the Premium Forex Course, you receive all future updates, revisions, trade recap videos, and new strategies absolutely free.'
  },
  {
    question: 'How does the One-on-One Mentorship work?',
    answer: 'Upon booking a session, you schedule a private video call with our head trader. You will share your trading history, identify mental leaks, and formulate an actionable plan. We also review your setups live on charts and issue weekly targeted exercises.'
  },
  {
    question: 'Is there a refund policy?',
    answer: 'Due to the immediate digital delivery and proprietary intellectual nature of the strategies, educational material, and community markup signals, all sales are final. We stand behind our elite value and strive to over-deliver.'
  }
];
