import { business as defaultBusinessData } from "./business";
import {
  pricingPlans,
  pricingAddons,
  pricingBottomFeatures,
} from "./pricing";
import {
  customerReviews,
  aggregateRatings,
  reviewsTrustStats,
  reviewPlatforms,
} from "./reviews";
import { faqItems, faqCtaFeatures } from "./faq";
import { processSteps, processFeatures, processTrustPoints } from "./process";
import { whyChooseCards, whyChooseStats } from "./whyChoose";
import { contactInfoItems, contactFeatures } from "./contact";

export const defaultBusiness = {
  ...defaultBusinessData,
  tagline: "Precision Detailing",
  socials: {
    facebook: "",
    instagram: "",
    youtube: "",
  },
  footerBlurb:
    "Premium mobile detailing delivered to your doorstep. Restoring showroom perfection across Birmingham.",
};

export const defaultHeroStats = [
  { icon: "trophy", text: "200+ Projects Completed" },
  { icon: "star", text: "5.0 Google Rating" },
  { icon: "shieldCheck", text: "100% Satisfaction Rate" },
];

export const defaultFooterLinks = [
  { label: "Home", href: "/" },
  { label: "Packages", href: "/#pricing" },
  { label: "Our Work", href: "/portfolio" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export const defaultFooterServices = [
  { label: "Basic Detail", href: "/#pricing" },
  { label: "Premium Detail", href: "/#pricing" },
  { label: "Ultimate Detail", href: "/#pricing" },
  { label: "Ceramic Coating", href: "/#pricing" },
  { label: "Mobile Detailing", href: "/#contact" },
  { label: "Fleet Services", href: "/#contact" },
];

export const DEFAULT_SITE = {
  business: defaultBusiness,
  heroStats: defaultHeroStats,
  footerLinks: defaultFooterLinks,
  footerServices: defaultFooterServices,
  pricing: {
    plans: pricingPlans,
    addons: pricingAddons,
    bottomFeatures: pricingBottomFeatures,
  },
  reviews: {
    platforms: reviewPlatforms,
    aggregate: aggregateRatings,
    items: customerReviews,
    trustStats: reviewsTrustStats,
  },
  faq: {
    items: faqItems,
    ctaFeatures: faqCtaFeatures,
  },
  process: {
    steps: processSteps,
    features: processFeatures,
    trustPoints: processTrustPoints,
  },
  whyChoose: {
    cards: whyChooseCards,
    stats: whyChooseStats,
  },
  contact: {
    infoItems: contactInfoItems,
    features: contactFeatures,
  },
};

export function mergeSite(remote = {}) {
  return {
    business: { ...DEFAULT_SITE.business, ...(remote.business || {}) },
    heroStats:
      Array.isArray(remote.heroStats) && remote.heroStats.length
        ? remote.heroStats
        : DEFAULT_SITE.heroStats,
    footerLinks:
      Array.isArray(remote.footerLinks) && remote.footerLinks.length
        ? remote.footerLinks
        : DEFAULT_SITE.footerLinks,
    footerServices:
      Array.isArray(remote.footerServices) && remote.footerServices.length
        ? remote.footerServices
        : DEFAULT_SITE.footerServices,
    pricing: {
      ...DEFAULT_SITE.pricing,
      ...(remote.pricing || {}),
      plans:
        remote.pricing?.plans?.length > 0
          ? remote.pricing.plans
          : DEFAULT_SITE.pricing.plans,
      addons:
        remote.pricing?.addons?.length > 0
          ? remote.pricing.addons
          : DEFAULT_SITE.pricing.addons,
      bottomFeatures:
        remote.pricing?.bottomFeatures?.length > 0
          ? remote.pricing.bottomFeatures
          : DEFAULT_SITE.pricing.bottomFeatures,
    },
    reviews: {
      ...DEFAULT_SITE.reviews,
      ...(remote.reviews || {}),
      items:
        remote.reviews?.items?.length > 0
          ? remote.reviews.items
          : DEFAULT_SITE.reviews.items,
      aggregate: {
        ...DEFAULT_SITE.reviews.aggregate,
        ...(remote.reviews?.aggregate || {}),
      },
      trustStats:
        remote.reviews?.trustStats?.length > 0
          ? remote.reviews.trustStats
          : DEFAULT_SITE.reviews.trustStats,
      platforms: {
        ...DEFAULT_SITE.reviews.platforms,
        ...(remote.reviews?.platforms || {}),
      },
    },
    faq: {
      ...DEFAULT_SITE.faq,
      ...(remote.faq || {}),
      items:
        remote.faq?.items?.length > 0
          ? remote.faq.items
          : DEFAULT_SITE.faq.items,
      ctaFeatures:
        remote.faq?.ctaFeatures?.length > 0
          ? remote.faq.ctaFeatures
          : DEFAULT_SITE.faq.ctaFeatures,
    },
    process: {
      ...DEFAULT_SITE.process,
      ...(remote.process || {}),
      steps:
        remote.process?.steps?.length > 0
          ? remote.process.steps
          : DEFAULT_SITE.process.steps,
      features:
        remote.process?.features?.length > 0
          ? remote.process.features
          : DEFAULT_SITE.process.features,
      trustPoints:
        remote.process?.trustPoints?.length > 0
          ? remote.process.trustPoints
          : DEFAULT_SITE.process.trustPoints,
    },
    whyChoose: {
      ...DEFAULT_SITE.whyChoose,
      ...(remote.whyChoose || {}),
      cards:
        remote.whyChoose?.cards?.length > 0
          ? remote.whyChoose.cards
          : DEFAULT_SITE.whyChoose.cards,
      stats:
        remote.whyChoose?.stats?.length > 0
          ? remote.whyChoose.stats
          : DEFAULT_SITE.whyChoose.stats,
    },
    contact: {
      ...DEFAULT_SITE.contact,
      ...(remote.contact || {}),
      infoItems:
        remote.contact?.infoItems?.length > 0
          ? remote.contact.infoItems
          : DEFAULT_SITE.contact.infoItems,
      features:
        remote.contact?.features?.length > 0
          ? remote.contact.features
          : DEFAULT_SITE.contact.features,
    },
  };
}
