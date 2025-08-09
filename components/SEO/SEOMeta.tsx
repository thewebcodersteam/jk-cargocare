/**
 * SEO Meta Component for JK Cargocare
 * Provides reusable meta tags for all pages with industry-specific optimization
 */

import { Metadata } from 'next';

interface SEOMetaProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  article?: {
    author?: string;
    section?: string;
    tags?: string[];
  };
}

export function generateSEOMeta({
  title,
  description,
  keywords = [],
  canonical,
  ogImage,
  ogType = 'website',
  noIndex = false,
  publishedTime,
  modifiedTime,
  article
}: SEOMetaProps): Metadata {
  
  // Base company keywords for all pages
  const baseKeywords = [
    'JK Cargocare',
    'logistics company India',
    'freight transport Goa',
    'warehousing solutions',
    'cargo handling India'
  ];
  
  // Combine base keywords with page-specific keywords
  const allKeywords = [...baseKeywords, ...keywords];
  
  // Default values with company branding
  const defaultTitle = 'JK Cargocare – Premier Logistics & Freight Solutions | 20+ Years Experience';
  const defaultDescription = 'Leading logistics company in Goa offering freight transport, warehousing, hazardous cargo handling & manpower services across 7+ Indian states since 2000.';
  
  const fullTitle = title ? `${title} | JK Cargocare` : defaultTitle;
  const finalDescription = description || defaultDescription;
  const canonicalUrl = canonical || 'https://www.jkcargocare.com';
  const defaultOgImage = ogImage || 'https://www.jkcargocare.com/og-image.jpg';
  
  return {
    title: fullTitle,
    description: finalDescription,
    keywords: allKeywords,
    
    // Robots and indexing
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Canonical URL
    alternates: {
      canonical: canonicalUrl,
    },
    
    // Open Graph
    openGraph: {
      title: title || 'JK Cargocare – Expert Logistics Solutions',
      description: finalDescription,
      url: canonicalUrl,
      siteName: 'JK Cargocare',
      type: ogType,
      locale: 'en_IN',
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt: title || 'JK Cargocare Logistics Services',
        }
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(article && {
        article: {
          author: article.author,
          section: article.section,
          tag: article.tags,
        }
      })
    },
    
    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      site: '@jkcargocare',
      creator: '@jkcargocare',
      title: title || 'JK Cargocare – Expert Logistics Solutions',
      description: finalDescription,
      images: [defaultOgImage],
    },
    
    // Additional meta tags
    other: {
      'geo.region': 'IN-GA',
      'geo.placename': 'Goa',
      'geo.position': '15.3647;73.8299',
      'ICBM': '15.3647, 73.8299',
      'distribution': 'global',
      'rating': 'general',
      'revisit-after': '7 days',
      'company': 'JK Cargocare',
      'classification': 'Logistics and Transportation',
      'coverage': 'Worldwide',
      'target': 'businesses needing logistics solutions',
    }
  };
}

// Pre-defined SEO configurations for common pages
export const SEOConfigs = {
  home: {
    title: 'Expert Freight, Warehousing & Logistics Solutions | 20+ Years Experience',
    description: 'JK Cargocare - Leading logistics company in Goa offering FTL, LTL, ODC transport, warehousing, hazardous cargo handling across 7+ Indian states since 2000.',
    keywords: [
      'freight transport India',
      'logistics company Goa',
      'FTL LTL services',
      'ODC transport',
      'warehousing solutions',
      'hazardous cargo handling',
      'pan India logistics',
      'industrial transportation'
    ]
  },
  
  services: {
    title: 'Comprehensive Logistics Services - Freight, Warehousing, Manpower',
    description: 'Complete logistics solutions including FTL/LTL/ODC transport, secure warehousing, hazardous cargo handling, and manpower services across India.',
    keywords: [
      'logistics services India',
      'freight brokerage',
      'warehousing services',
      'manpower solutions',
      'hazardous cargo transport',
      'bulk cargo handling',
      'industrial logistics',
      'supply chain services'
    ]
  },
  
  about: {
    title: 'About JK Cargocare - 20+ Years of Logistics Excellence in India',
    description: 'Learn about JK Cargocare\'s 20+ year journey in providing trusted logistics solutions across India. Based in Goa, serving 7+ states with expertise.',
    keywords: [
      'JK Cargocare history',
      'logistics company founded 2000',
      'Goa logistics expert',
      'trusted transport partner',
      'logistics experience India',
      'freight company background'
    ]
  },
  
  contact: {
    title: 'Contact JK Cargocare - Get Quote for Logistics Services',
    description: 'Contact JK Cargocare for freight quotes, warehousing solutions, and logistics support. Located in Sancoale Industrial Estate, Goa. Call +91-832-2556111.',
    keywords: [
      'contact JK Cargocare',
      'logistics quote',
      'freight inquiry',
      'Sancoale Industrial Estate',
      'Goa logistics contact',
      'transport quote India'
    ]
  },
  
  industries: {
    title: 'Industries We Serve - Specialized Logistics Solutions',
    description: 'JK Cargocare serves diverse industries with specialized logistics solutions including manufacturing, chemicals, agriculture, and more across India.',
    keywords: [
      'industrial logistics',
      'manufacturing transport',
      'chemical cargo handling',
      'agriculture logistics',
      'specialized transport services',
      'industry-specific logistics'
    ]
  }
};

// Utility function to generate breadcrumb structured data
export function generateBreadcrumbs(pages: Array<{ name: string; url: string }>) {
  return pages.map((page, index) => ({
    name: page.name,
    url: `https://www.jkcargocare.com${page.url}`
  }));
}
