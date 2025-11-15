"use client";

import { Zap, ArrowDownToDot } from "lucide-react";
import { PricingCardSection } from "./pricing-card-section";

const defaultTiers = [
  {
    name: "Community",
    price: {
      monthly: 0,
      yearly: 0,
    },
    description: "Free for individual devs — chat, profile, and basic resumes",
    icon: (
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-500/30 to-gray-500/30 blur-2xl rounded-full" />
        <Zap className="w-7 h-7 relative z-10 text-gray-500 dark:text-gray-400 animate-[float_3s_ease-in-out_infinite]" />
      </div>
    ),
    features: [
      {
        name: "1:1 Chat & Matches",
        description: "Connect with other devs and start conversations",
        included: true,
      },
      {
        name: "Basic Resume Builder",
        description:
          "Create and share a developer resume/profile with templates",
        included: true,
      },
      {
        name: "AI Tech News Digest",
        description: "Weekly curated AI & dev news in your feed",
        included: true,
      },
      {
        name: "Limited Collaborative Projects",
        description:
          "Small projects and shared notes with up to 2 collaborators",
        included: false,
      },
    ],
  },
  {
    name: "Pro",
    price: {
      monthly: 12,
      yearly: 120,
    },
    description:
      "For active builders — collaboration, advanced resume tools, and priority features",
    highlight: true,
    badge: "Most Popular",
    icon: (
      <div className="relative">
        <ArrowDownToDot className="w-7 h-7 relative z-10" />
      </div>
    ),
    features: [
      {
        name: "Unlimited Chat & Teams",
        description:
          "Create teams, group chats, and unlimited 1:1 conversations",
        included: true,
      },
      {
        name: "Collaborative Projects",
        description:
          "Real-time collaboration, shared boards, and versioned notes",
        included: true,
      },
      {
        name: "Advanced Resume Builder",
        description:
          "Exportable resumes, ATS-friendly formatting, and custom domains",
        included: true,
      },
      {
        name: "AI-Powered News & Insights",
        description:
          "Personalized, real-time AI tech news and trend highlights",
        included: true,
      },
      {
        name: "Priority Support & Early Access",
        description: "Faster support and access to new features and betas",
        included: true,
      },
    ],
  },
];

function PricingSection() {
  return <PricingCardSection tiers={defaultTiers} />;
}

export { PricingSection };
