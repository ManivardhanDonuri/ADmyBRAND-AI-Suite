import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Target,
  Check,
  X
} from 'lucide-react'

// Features data
export const features = [
  {
    title: "AI-Powered Analytics",
    description: "Advanced machine learning algorithms analyze your marketing data to provide actionable insights and optimize campaign performance.",
    icon: Brain,
    color: "text-blue-600",
    bgColor: "bg-blue-100 dark:bg-blue-900/30"
  },
  {
    title: "Real-time Optimization",
    description: "Automatically adjust your campaigns in real-time based on performance data and market conditions for maximum ROI.",
    icon: Zap,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100 dark:bg-yellow-900/30"
  },
  {
    title: "Brand Protection",
    description: "Monitor and protect your brand reputation across all digital channels with intelligent threat detection.",
    icon: Shield,
    color: "text-green-600",
    bgColor: "bg-green-100 dark:bg-green-900/30"
  },
  {
    title: "Advanced Reporting",
    description: "Comprehensive dashboards and reports that provide deep insights into your marketing performance and ROI.",
    icon: BarChart3,
    color: "text-purple-600",
    bgColor: "bg-purple-100 dark:bg-purple-900/30"
  },
  {
    title: "Audience Intelligence",
    description: "Understand your audience better with AI-driven insights into behavior, preferences, and engagement patterns.",
    icon: Users,
    color: "text-pink-600",
    bgColor: "bg-pink-100 dark:bg-pink-900/30"
  },
  {
    title: "Predictive Targeting",
    description: "Use predictive analytics to identify and target high-value prospects before your competitors do.",
    icon: Target,
    color: "text-red-600",
    bgColor: "bg-red-100 dark:bg-red-900/30"
  }
]

// Pricing plans data
export const pricingPlans = [
  {
    name: "Starter",
    price: 29,
    period: "month",
    description: "Perfect for small businesses getting started with AI marketing.",
    features: [
      "AI-powered analytics dashboard",
      "Basic campaign optimization",
      "Email support",
      "Up to 5 campaigns",
      "Monthly reports"
    ],
    notIncluded: [
      "Advanced targeting",
      "Priority support",
      "Custom integrations"
    ],
    popular: false,
    cta: "Start Free Trial",
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "Professional",
    price: 99,
    period: "month",
    description: "Ideal for growing businesses that need advanced AI capabilities.",
    features: [
      "Everything in Starter",
      "Advanced AI targeting",
      "Real-time optimization",
      "Priority support",
      "Unlimited campaigns",
      "Custom integrations",
      "Weekly reports",
      "Brand protection"
    ],
    notIncluded: [
      "Dedicated account manager",
      "Custom AI models"
    ],
    popular: true,
    cta: "Start Free Trial",
    color: "from-purple-500 to-purple-600"
  },
  {
    name: "Enterprise",
    price: 299,
    period: "month",
    description: "For large organizations requiring maximum AI capabilities and support.",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom AI models",
      "24/7 phone support",
      "Advanced security",
      "Custom reporting",
      "API access",
      "White-label options"
    ],
    notIncluded: [],
    popular: false,
    cta: "Contact Sales",
    color: "from-gray-700 to-gray-800"
  }
]

// Testimonials data
export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechFlow Inc.",
    content: "ADmyBRAND AI Suite transformed our marketing strategy. We saw a 150% increase in ROI within the first quarter. The AI insights are incredibly accurate and actionable.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "GrowthStart",
    content: "The predictive targeting feature alone has increased our conversion rates by 40%. This is exactly what we needed to scale our marketing efforts efficiently.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Digital Marketing Manager",
    company: "BrandBoost",
    content: "The real-time optimization is a game-changer. Our campaigns now automatically adjust to market conditions, saving us hours of manual work every week.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "David Thompson",
    role: "VP of Marketing",
    company: "InnovateCorp",
    content: "The brand protection feature caught several potential reputation threats before they became issues. The ROI on this feature alone is immeasurable.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "Lisa Wang",
    role: "Founder",
    company: "StartupXYZ",
    content: "As a startup, we needed to maximize every marketing dollar. ADmyBRAND AI Suite helped us achieve enterprise-level marketing results on a startup budget.",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    rating: 5
  }
]

// FAQ data
export const faqData = [
  {
    question: "How does the AI technology work?",
    answer: "Our AI uses advanced machine learning algorithms to analyze your marketing data, identify patterns, and automatically optimize campaigns for better performance. It learns from your specific business context and continuously improves over time."
  },
  {
    question: "What kind of ROI can I expect?",
    answer: "Our customers typically see a 100-200% increase in ROI within the first 3-6 months. The exact results depend on your current marketing setup and industry, but most users see significant improvements in conversion rates and cost per acquisition."
  },
  {
    question: "Is there a learning curve?",
    answer: "Not at all! Our platform is designed to be intuitive and user-friendly. We provide comprehensive onboarding and support to get you started quickly. Most users are up and running within a few hours."
  },
  {
    question: "Can I integrate with my existing tools?",
    answer: "Yes! ADmyBRAND AI Suite integrates with all major marketing platforms including Google Ads, Facebook Ads, LinkedIn, Twitter, and more. We also offer API access for custom integrations."
  },
  {
    question: "What about data security?",
    answer: "Security is our top priority. We use enterprise-grade encryption, comply with GDPR and CCPA regulations, and never share your data with third parties. Your data is stored securely and you maintain full control."
  },
  {
    question: "Do you offer customer support?",
    answer: "Absolutely! We provide 24/7 email support for all plans, with priority phone support for Professional and Enterprise plans. Our dedicated team is here to help you succeed."
  }
]

// Navigation data
export const navigation = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" }
]

// Social links data
export const socialLinks = [
  { name: "Twitter", href: "#", icon: "twitter" },
  { name: "LinkedIn", href: "#", icon: "linkedin" },
  { name: "Facebook", href: "#", icon: "facebook" },
  { name: "Instagram", href: "#", icon: "instagram" },
  { name: "GitHub", href: "#", icon: "github" }
] 