import {
  Youtube,
  Scissors,
  Music4,
  Mic2,
  Building2,
  Megaphone,
  Home,
  Heart,
  Sparkles,
  Palette,
  AudioLines,
  Image as ImageIcon,
} from "lucide-react";

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 150, suffix: "+", label: "Happy Clients" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
  { value: 5, suffix: "★", label: "Average Rating" },
];

export const services = [
  {
    icon: Youtube,
    title: "YouTube Editing",
    description:
      "Long-form storytelling with pacing, retention hooks, and clean cuts built for the algorithm.",
  },
  {
    icon: Scissors,
    title: "Short-Form Editing",
    description:
      "Fast, punchy edits engineered for scroll-stopping attention in the first two seconds.",
  },
  {
    icon: Sparkles,
    title: "TikTok / Reels",
    description:
      "Trend-aware captions, transitions, and sound design tuned for vertical-first platforms.",
  },
  {
    icon: Mic2,
    title: "Podcast Editing",
    description:
      "Multi-cam switching, noise cleanup, and clip carving for episodes that keep listeners in.",
  },
  {
    icon: Building2,
    title: "Corporate Videos",
    description:
      "Polished, on-brand videos that communicate authority for internal and external audiences.",
  },
  {
    icon: Megaphone,
    title: "Promotional Ads",
    description:
      "Conversion-focused edits with strong hooks, CTAs, and pacing built to sell.",
  },
  {
    icon: Home,
    title: "Real Estate Videos",
    description:
      "Cinematic property walkthroughs with smooth drone integration and warm color grading.",
  },
  {
    icon: Heart,
    title: "Wedding Videos",
    description:
      "Emotional storytelling edited with a delicate touch for the most important day.",
  },
  {
    icon: AudioLines,
    title: "Motion Graphics",
    description:
      "Custom animated titles, lower-thirds, and kinetic typography that elevate every frame.",
  },
  {
    icon: Palette,
    title: "Color Grading",
    description:
      "Cinematic color science that gives every project a consistent, premium look.",
  },
  {
    icon: Music4,
    title: "Audio Cleanup",
    description:
      "Dialogue leveling, noise reduction, and mastering for crystal-clear sound.",
  },
  {
    icon: ImageIcon,
    title: "Thumbnail Design",
    description:
      "High-CTR thumbnails designed to stop the scroll and win the click.",
  },
];

export const whyUs = [
  { title: "Fast Turnaround", description: "Most projects delivered in 48–72 hours without cutting corners." },
  { title: "Unlimited Revisions", description: "We refine until the edit matches your vision, not just the brief." },
  { title: "Professional Editing", description: "Every frame handled by editors trained in cinematic technique." },
  { title: "Creative Storytelling", description: "We structure footage into narratives that hold attention." },
  { title: "Cinematic Color", description: "Custom grading that gives your content a signature look." },
  { title: "Motion Graphics", description: "Custom animation built in-house, never stock templates." },
  { title: "Dedicated Support", description: "A real editor assigned to your account, every project." },
  { title: "Affordable Pricing", description: "Premium quality priced for creators and growing businesses." },
];

export const process = [
  {
    step: "01",
    title: "Upload Your Footage",
    description: "Send your raw files through our secure upload portal — any format, any size.",
  },
  {
    step: "02",
    title: "Professional Editing",
    description: "Our editors cut, grade, and design motion graphics tailored to your brand.",
  },
  {
    step: "03",
    title: "Review & Feedback",
    description: "You review the draft and request changes — revisions included, no extra cost.",
  },
  {
    step: "04",
    title: "Final Delivery",
    description: "Receive your polished, platform-ready video in every format you need.",
  },
];

export const portfolioCategories = [
  "All",
  "YouTube",
  "TikTok",
  "Business",
  "Corporate",
  "Real Estate",
  "Wedding",
] as const;

export type PortfolioCategory = (typeof portfolioCategories)[number];

export const portfolio: {
  title: string;
  category: PortfolioCategory;
  gradient: string;
}[] = [
  { title: "Weekly Vlog — Episode 42", category: "YouTube", gradient: "from-purple-600 via-indigo-700 to-black" },
  { title: "Product Drop Teaser", category: "TikTok", gradient: "from-fuchsia-600 via-purple-700 to-black" },
  { title: "Restaurant Brand Story", category: "Business", gradient: "from-blue-600 via-indigo-800 to-black" },
  { title: "Annual Company Recap", category: "Corporate", gradient: "from-indigo-600 via-violet-800 to-black" },
  { title: "Luxury Villa Walkthrough", category: "Real Estate", gradient: "from-violet-600 via-purple-800 to-black" },
  { title: "Coastal Wedding Film", category: "Wedding", gradient: "from-purple-500 via-fuchsia-800 to-black" },
  { title: "Founder Interview Series", category: "YouTube", gradient: "from-blue-700 via-indigo-900 to-black" },
  { title: "Reel Campaign — Launch Week", category: "TikTok", gradient: "from-purple-700 via-violet-900 to-black" },
  { title: "Coaching Program Promo", category: "Business", gradient: "from-indigo-700 via-purple-900 to-black" },
];

export const pricing = [
  {
    name: "Starter",
    price: "₱1,500",
    tagline: "Perfect for beginners",
    featured: false,
    features: [
      "Up to 2 Minutes",
      "Basic Editing",
      "Background Music",
      "Text Animation",
      "1 Revision",
    ],
  },
  {
    name: "Professional",
    price: "₱3,500",
    tagline: "Most Popular",
    featured: true,
    features: [
      "Up to 8 Minutes",
      "Motion Graphics",
      "Color Grading",
      "Sound Design",
      "Unlimited Revisions",
      "Priority Support",
    ],
  },
  {
    name: "Business",
    price: "₱7,500",
    tagline: "Best Value",
    featured: false,
    features: [
      "Up to 20 Minutes",
      "Cinematic Editing",
      "Premium Motion Graphics",
      "Sound Mixing",
      "Color Grading",
      "Priority Delivery",
      "Unlimited Revisions",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom Quote",
    tagline: "For Agencies & Businesses",
    featured: false,
    features: [
      "Volume Monthly Editing",
      "Dedicated Editor Team",
      "Brand Style Guide",
      "Custom Motion Graphics",
      "Priority Delivery",
      "Account Manager",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Flexi Work completely transformed our content. Our engagement doubled after working with them.",
    name: "Marco Villanueva",
    role: "Content Creator",
    rating: 5,
  },
  {
    quote: "Professional, fast, and worth every peso.",
    name: "Andrea Reyes",
    role: "Restaurant Owner",
    rating: 5,
  },
  {
    quote: "The editing quality exceeded expectations.",
    name: "James Cruz",
    role: "Real Estate Agent",
    rating: 5,
  },
  {
    quote:
      "Turnaround was faster than any agency we've worked with, and the color grading is next level.",
    name: "Kaye Santos",
    role: "Marketing Director",
    rating: 5,
  },
];

export const faq = [
  {
    question: "How long does editing take?",
    answer:
      "Most projects are delivered within 48–72 hours depending on length and complexity. Business and Enterprise plans receive priority delivery.",
  },
  {
    question: "How do revisions work?",
    answer:
      "You review the first draft and send timestamped notes. Professional, Business, and Enterprise plans include unlimited revisions until you're satisfied.",
  },
  {
    question: "What files do you accept?",
    answer:
      "We accept all major formats — MP4, MOV, RAW, ProRes, and more — uploaded through our secure client portal or shared drive link.",
  },
  {
    question: "Do you edit YouTube videos?",
    answer:
      "Yes — long-form YouTube editing is one of our core specialties, including retention-focused pacing, thumbnails, and chaptering.",
  },
  {
    question: "Do you create Shorts?",
    answer:
      "Yes, we produce TikTok, Reels, and YouTube Shorts with trend-aware captions, transitions, and sound design.",
  },
  {
    question: "Can businesses hire you monthly?",
    answer:
      "Yes — our Enterprise plan is built for ongoing monthly editing with a dedicated editor team and account manager.",
  },
];
