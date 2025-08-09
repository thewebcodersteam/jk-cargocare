/**
 * Structured Data (Schema.org JSON-LD) Component for JK Cargocare
 * Provides rich snippets for Google search results and better SEO
 */

interface StructuredDataProps {
  type?: 'organization' | 'service' | 'article' | 'breadcrumb';
  data?: any;
}

export default function StructuredData({ type = 'organization', data }: StructuredDataProps) {
  
  // Organization Schema - Main company information
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.jkcargocare.com/#organization",
    "name": "JK Cargocare",
    "alternateName": ["JK Cargo", "JK Cargocare Pvt Ltd"],
    "url": "https://www.jkcargocare.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.jkcargocare.com/assets/images/jkc-logo.png",
      "width": 300,
      "height": 120
    },
    "image": [
      "https://www.jkcargocare.com/assets/images/hero-section-img.webp",
      "https://www.jkcargocare.com/assets/images/warehousing-inventory.jpg",
      "https://www.jkcargocare.com/assets/images/freight-brokerage.jpg"
    ],
    "description": "Leading logistics company in Goa offering comprehensive freight transport, warehousing, hazardous cargo handling and manpower services across India since 2000.",
    "foundingDate": "2000",
    "numberOfEmployees": "50-100",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shed D2-32, Sancoale Industrial Estate",
      "addressLocality": "Zuari Nagar",
      "addressRegion": "Goa",
      "postalCode": "403726",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 15.3647,
      "longitude": 73.8299
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-832-2556111",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi", "Konkani"],
        "areaServed": "IN",
        "serviceUrl": "https://www.jkcargocare.com/contact-us"
      },
      {
        "@type": "ContactPoint",
        "email": "jk.cargo@yahoo.co.uk",
        "contactType": "customer service",
        "areaServed": "IN"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/jkcargocare",
      "https://www.linkedin.com/company/jkcargocare",
      "https://twitter.com/jkcargocare"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Logistics Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Freight Transport Services",
            "description": "FTL, LTL, and ODC transport across India",
            "serviceType": "Freight Transport"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Warehousing Solutions",
            "description": "Secure storage and inventory management",
            "serviceType": "Warehousing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hazardous Cargo Handling",
            "description": "Certified handling of chemical and hazardous materials",
            "serviceType": "Hazardous Cargo"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Manpower Services",
            "description": "Skilled personnel for logistics operations",
            "serviceType": "Manpower"
          }
        }
      ]
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "Goa"
      },
      {
        "@type": "State",
        "name": "Maharashtra"
      },
      {
        "@type": "State",
        "name": "Karnataka"
      },
      {
        "@type": "State",
        "name": "Gujarat"
      },
      {
        "@type": "State",
        "name": "Rajasthan"
      },
      {
        "@type": "State",
        "name": "Madhya Pradesh"
      },
      {
        "@type": "State",
        "name": "Telangana"
      }
    ],
    "knowsAbout": [
      "Logistics",
      "Freight Transport",
      "Warehousing",
      "Supply Chain Management",
      "Hazardous Cargo",
      "Industrial Transportation",
      "Bulk Cargo",
      "ODC Transport",
      "Customs Clearance"
    ],
    "industry": "Logistics and Transportation",
    "naics": "484110"
  };

  // Service Schema for specific service pages
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": data?.serviceType || "Logistics Services",
    "provider": {
      "@type": "Organization",
      "name": "JK Cargocare",
      "@id": "https://www.jkcargocare.com/#organization"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Logistics Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full Truck Load (FTL)",
            "description": "Complete truck capacity for large shipments"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Less Than Truck Load (LTL)",
            "description": "Cost-effective solution for smaller shipments"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Over Dimensional Cargo (ODC)",
            "description": "Specialized transport for oversized cargo"
          }
        }
      ]
    }
  };

  // Local Business Schema for location-based SEO
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.jkcargocare.com/#localbusiness",
    "name": "JK Cargocare",
    "image": "https://www.jkcargocare.com/assets/images/jkc-logo.png",
    "telephone": "+91-832-2556111",
    "email": "jk.cargo@yahoo.co.uk",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shed D2-32, Sancoale Industrial Estate",
      "addressLocality": "Zuari Nagar",
      "addressRegion": "Goa",
      "postalCode": "403726",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 15.3647,
      "longitude": 73.8299
    },
    "url": "https://www.jkcargocare.com",
    "openingHours": [
      "Mo-Fr 09:00-18:00",
      "Sa 09:00-14:00"
    ],
    "priceRange": "$$",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "hasMap": "https://maps.google.com/?q=Shed+D2-32+Sancoale+Industrial+Estate+Zuari+Nagar+Goa"
  };

  // Breadcrumb Schema for navigation
  const breadcrumbSchema = data?.breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": data.breadcrumbs.map((item: any, index: number) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  } : null;

  // Select schema based on type
  let schema;
  switch (type) {
    case 'service':
      schema = serviceSchema;
      break;
    case 'breadcrumb':
      schema = breadcrumbSchema;
      break;
    case 'organization':
    default:
      schema = [organizationSchema, localBusinessSchema];
      break;
  }

  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2)
      }}
    />
  );
}

// Export utility function for generating structured data
export const generateStructuredData = {
  organization: () => ({
    type: 'organization' as const,
  }),
  
  service: (serviceType: string) => ({
    type: 'service' as const,
    data: { serviceType }
  }),
  
  breadcrumb: (breadcrumbs: Array<{ name: string; url: string }>) => ({
    type: 'breadcrumb' as const,
    data: { breadcrumbs }
  })
};
