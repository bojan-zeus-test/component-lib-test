export interface Feature {
  name: string;
  description: string;
  supportedBy: string[];
}

export interface FeatureSections {
  [category: string]: Feature[];
}

export interface CompanyMetrics {
  easeOfUse: number;
  customerSupport: number;
  featureSet: number;
  valueForMoney: number;
  reliability: number;
  customization: number;
}

export interface CompanyProfile {
  founded: number;
  headquarters: string;
  employees: string;
  rating: number;
  description: string;
  specialties: string[];
  quadrantPosition: { x: number; y: number };
  metrics: CompanyMetrics;
  logo: string;
}

export const competitors: string[] = [
  'Zeus',
  'Yomdel',
  'Sales Rook',
  'Intercom',
];

export const featureSections: FeatureSections = {
  'Customer Experience': [
    {
      name: '24/7 Instant Response',
      description:
        'Engage with your customers when they need you. No delays, no down time',
      supportedBy: ['Zeus', 'Yomdel', 'Sales Rook', 'Intercom'],
    },
    {
      name: 'Multi - Language Support',
      description: 'Zeus helps your customers in any language',
      supportedBy: ['Zeus', 'Yomdel', 'Intercom'],
    },
    {
      name: 'On - Brand communication',
      description:
        'Zeus mirrors your tone of voice to keep every interaction aligned with your brand.',
      supportedBy: ['Zeus', 'Sales Rook', 'Intercom'],
    },
    {
      name: 'Humanlike AI',
      description:
        'Conversations that feel natural—like speaking to a person, not a bot.',
      supportedBy: ['Zeus', 'Sales Rook', 'Intercom'],
    },
    {
      name: 'Conversational Control',
      description:
        "Whether it's sales, support, or onboarding — you define the voice, Zeus delivers it.",
      supportedBy: ['Zeus', 'Sales Rook', 'Intercom'],
    },
  ],
  'AI & Knowledge Base': [
    {
      name: 'Custom Knowledge Database',
      description: 'You bring the knowledge, Zeus puts it to work.',
      supportedBy: ['Zeus', 'Yomdel', 'Sales Rook', 'Intercom'],
    },
    {
      name: 'AI workflow automations',
      description:
        'Conversation Flows to action specific jobs constantly updated for accuracy.',
      supportedBy: ['Zeus', 'Sales Rook', 'Intercom'],
    },
    {
      name: 'Always Evolving',
      description:
        'Zeus stays ahead with the latest AI advancements- for faster, smarter conversations.',
      supportedBy: ['Zeus', 'Sales Rook', 'Intercom'],
    },
    {
      name: 'Hallucination - Free AI',
      description:
        'Ongoing automated testing to ensure consistent, accurate responses.',
      supportedBy: ['Zeus', 'Sales Rook', 'Intercom'],
    },
    {
      name: 'Custom AI LLM set up & training',
      description:
        'Private model setup using your proprietary data- secure scalable, and fully isolated.',
      supportedBy: ['Zeus', 'Sales Rook', 'Intercom'],
    },
  ],
  'Integrations & Scalability': [
    {
      name: 'Bespoke Development',
      description:
        'Connect to your existing systems, custom features, custom integrations e.g. MCP & CRM.',
      supportedBy: ['Zeus', 'Yomdel', 'Sales Rook', 'Intercom'],
    },
    {
      name: 'API & Webhooks',
      description:
        'Public documentation giving developers full control and integration flexibility.',
      supportedBy: ['Zeus', 'Sales Rook', 'Intercom'],
    },
    {
      name: 'MCP',
      description: 'Model Context Protocol',
      supportedBy: ['Zeus', 'Intercom'],
    },
    {
      name: 'Lead routing and advanced filters',
      description: 'Automatically direct leads using custom rules.',
      supportedBy: ['Zeus', 'Sales Rook', 'Intercom'],
    },
    {
      name: 'WhatsApp',
      description: 'Official WhatsApp messaging via Meta Graph API.',
      supportedBy: ['Zeus', 'Yomdel', 'Sales Rook', 'Intercom'],
    },
    {
      name: 'Voice',
      description: 'Phone conversations powered by voice automation.',
      supportedBy: ['Yomdel', 'Intercom'],
    },
    {
      name: 'Email',
      description: 'AI-generated replies and custom email copy.',
      supportedBy: ['Yomdel', 'Sales Rook', 'Intercom'],
    },
    {
      name: 'SMS',
      description: 'Fast, reliable customer messaging via text.',
      supportedBy: ['Yomdel', 'Sales Rook', 'Intercom'],
    },
  ],
  'Service & Support': [
    {
      name: 'Boutique Service',
      description:
        'Dedicated success associate & technical account management.',
      supportedBy: ['Zeus', 'Yomdel', 'Sales Rook', 'Intercom'],
    },
    {
      name: 'Fully managed setup',
      description:
        'White-Glove Onboarding from our team to ensure a smooth, stress-free start.',
      supportedBy: ['Zeus', 'Yomdel', 'Sales Rook'],
    },
    {
      name: 'Tailored Implementation',
      description:
        'We configure everything to match your systems, workflows, and tech stack.',
      supportedBy: ['Zeus', 'Yomdel', 'Sales Rook', 'Intercom'],
    },
  ],
  'Analytics & Reporting': [
    {
      name: 'Real-Time Insights & Tracking',
      description: 'See what your customers are really asking.',
      supportedBy: ['Zeus', 'Yomdel', 'Sales Rook', 'Intercom'],
    },
    {
      name: 'Self-Serve Dashboard',
      description: 'Access your data at any time.',
      supportedBy: ['Zeus', 'Yomdel', 'Sales Rook', 'Intercom'],
    },
    {
      name: 'Conversation Scoring & Drop-Off Analysis',
      description:
        'Score chats, analyse drop-offs, and continuously improve performance.',
      supportedBy: ['Zeus', 'Yomdel', 'Sales Rook', 'Intercom'],
    },
    {
      name: 'Weekly Strategic Reviews',
      description:
        'Enterprise clients get deep-dive feedback and optimisation from our expert team.',
      supportedBy: ['Zeus', 'Yomdel'],
    },
  ],
  'Compliance & Trust': [
    {
      name: 'FCA Reviewed',
      description:
        'Trusted by financial service providers - fully reviewed for regulated use.',
      supportedBy: ['Zeus'],
    },
    {
      name: 'Industry Expertise',
      description:
        'Flexible enough to support any sector — Zeus adapts to your business, whatever the industry.',
      supportedBy: ['Zeus', 'Sales Rook'],
    },
    {
      name: 'Transparent Pricing',
      description: 'Clear, upfront pricing with no surprises.',
      supportedBy: ['Zeus'],
    },
  ],
};

export const allFeatures: string[] = Object.values(featureSections)
  .flat()
  .map((f) => f.name);

export const competitorData: Record<string, boolean[]> = Object.fromEntries(
  competitors.map((competitor) => [
    competitor,
    allFeatures.map((featureName) => {
      const feature = Object.values(featureSections)
        .flat()
        .find((f) => f.name === featureName);
      return feature?.supportedBy?.includes(competitor) ?? false;
    }),
  ])
);

export const companyProfiles: Record<string, CompanyProfile> = {
  Zeus: {
    founded: 2023,
    headquarters: 'London, UK',
    employees: '2-10',
    rating: 4.9,
    logo: 'zeus',
    description:
      ' Zeus is a leading AI-powered sales assistant that automates lead qualification and engagement across WhatsApp, email, and social media, helping businesses scale without extra staff.',
    specialties: ['Enterprise Solutions', 'AI Technology', 'Sales Automation'],
    quadrantPosition: { x: 85, y: 15 },
    metrics: {
      easeOfUse: 95,
      customerSupport: 98,
      featureSet: 92,
      valueForMoney: 94,
      reliability: 98,
      customization: 91,
    },
  },
  Yomdel: {
    founded: 2014,
    headquarters: 'UK',
    employees: '51-200',
    rating: 4,
    logo: 'yomdel',
    description:
      'Yomdel is a UK company offering 24/7 live chat and conversation management to help businesses turn website visitors into leads and boost growth.',
    specialties: ['Live Chat', 'Customer Service', 'Lead Generation'],
    quadrantPosition: { x: 35, y: 25 },
    metrics: {
      easeOfUse: 89,
      customerSupport: 79,
      featureSet: 71,
      valueForMoney: 81,
      reliability: 75,
      customization: 70,
    },
  },
  'Sales Rook': {
    founded: 2021,
    headquarters: 'UK',
    employees: '2-10',
    rating: 4.1,
    logo: 'salesRook',
    description:
      'SalesRook is an AI sales tool for estate agents that automates lead qualification and client chats via WhatsApp',
    specialties: ['Sales Support', 'Lead Qualification', 'CRM Integration'],
    quadrantPosition: { x: 25, y: 75 },
    metrics: {
      easeOfUse: 85,
      customerSupport: 51,
      featureSet: 83,
      valueForMoney: 79,
      reliability: 89,
      customization: 81,
    },
  },
  Intercom: {
    founded: 2011,
    headquarters: 'UK, USA, Australia',
    employees: '500-1K',
    rating: 4.2,
    logo: 'intercom',
    description:
      'Intercom is an AI-driven customer service platform that uses live chat, automation, and messaging to deliver real-time, personalized support.',
    specialties: ['Customer Engagement', 'Marketing Automation', 'Support'],
    quadrantPosition: { x: 75, y: 65 },
    metrics: {
      easeOfUse: 79,
      customerSupport: 75,
      featureSet: 87,
      valueForMoney: 81,
      reliability: 89,
      customization: 77,
    },
  },
};

export const metricLabels: Record<keyof CompanyMetrics, string> = {
  easeOfUse: 'Ease of Use',
  customerSupport: 'Customer Support',
  featureSet: 'Feature Set',
  valueForMoney: 'Value for Money',
  reliability: 'Reliability',
  customization: 'Customization',
};
