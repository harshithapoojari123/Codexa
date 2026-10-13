export const projects = [
  {
    id: 'palettegen',
    title: 'PaletteGen by Codexa',
    category: 'Design Utility & Web App',
    badge: 'Live Product Utility',
    badgeVariant: 'purple',
    isLive: true,
    liveUrl: 'https://palettegen-by-codexa.netlify.app/',
    hasCaseStudy: true,
    summary:
      'A comprehensive color palette generator and design utility built for UI designers and developers to generate, extract, test, and export accessible color systems.',
    description:
      'PaletteGen solves the friction of generating accessible color schemes for web applications. It features algorithmic harmony generation, Canvas-based image color extraction, gradient creation, real-time WCAG contrast checking, and instant CSS / Tailwind color token export.',
    tags: ['React', 'Tailwind CSS', 'Vite', 'Canvas API', 'WCAG Contrast', 'LocalStorage'],
    highlights: [
      'Algorithmic palette generation & color harmonies',
      'Client-side Canvas image color extraction',
      'Interactive gradient maker with CSS & Tailwind export',
      'WCAG 2.1 AAA/AA contrast accessibility checker',
      'LocalStorage persistence for saving custom palettes'
    ],
    previewType: 'palettegen',
    caseStudy: {
      client: 'Codexa Internal Product',
      timeline: 'Production Utility',
      role: 'Full-Stack Engineering & UI Design',
      challenge:
        'Frontend developers frequently switch between multiple disconnected tools to extract colors from mockups, test contrast readability, and format hex codes into Tailwind utility tokens.',
      solution:
        'Built an all-in-one browser utility operating client-side with zero server latency, instant keyboard shortcuts, real-time contrast feedback, and one-click code export.',
      deliverables: [
        'Single-page application with zero external server dependencies',
        'Custom algorithmic color theory generation engine',
        'Interactive image color sampling via Canvas API',
        'Clean, accessible interface with instant CSS/Tailwind export'
      ],
      impact:
        'Published live on Netlify, used by developers to generate and export accessible color schemes in seconds.'
    }
  },
  {
    id: 'akhanda-nursery',
    title: 'Akhanda Nursery',
    category: 'Commercial Business Website',
    badge: 'Live Client Project',
    badgeVariant: 'emerald',
    isLive: true,
    liveUrl: 'https://akhanda-nursery.netlify.app/',
    hasCaseStudy: true,
    summary:
      'A clean, responsive commercial website for an established plant nursery, designed to showcase botanical varieties, build customer trust, and make ordering convenient via WhatsApp.',
    description:
      'Built for Akhanda Nursery to establish their digital presence. Customers can easily browse categorized plant collections (indoor plants, flowering shrubs, medicinal herbs, and gardening supplies), view nursery information, and directly initiate WhatsApp purchase enquiries.',
    tags: ['React', 'Responsive Design', 'WhatsApp API', 'Local SEO', 'Botanical Catalog'],
    highlights: [
      'Categorized plant catalog with search and intuitive filtering',
      'One-tap direct WhatsApp order enquiries with pre-structured messages',
      'Sub-second load times optimized for mobile shoppers on 4G networks',
      'Local SEO foundations and Google Search Console indexing ready',
      'Mobile-first responsive architecture tested on all device viewports'
    ],
    previewType: 'nursery',
    caseStudy: {
      client: 'Akhanda Nursery Management',
      timeline: 'Delivered Client Project',
      role: 'End-to-End Website Design, Frontend Development & Deployment',
      challenge:
        'The nursery relied solely on foot traffic and word-of-mouth. Customers had no convenient way to browse stock or inquire about plant availability without visiting the physical nursery.',
      solution:
        'Designed an inviting, responsive digital storefront with mobile-optimized cards, transparent botanical information, and seamless WhatsApp integration connecting buyers directly to nursery staff.',
      deliverables: [
        'Custom responsive web application built with React',
        'Intuitive category navigation for indoor, outdoor, and specialty flora',
        'Optimized media assets ensuring fast browsing on mobile connections',
        'Netlify deployment with custom domain and SSL configuration'
      ],
      impact:
        'Delivered successfully with verified client satisfaction, driving direct customer inquiries and streamlining WhatsApp ordering.'
    }
  },
  {
    id: 'lavish-holidays',
    title: 'Lavish Holidays',
    category: 'Travel & Tourism Business Website',
    badge: 'Live Client Project',
    badgeVariant: 'emerald',
    isLive: true,
    liveUrl: 'https://lavish-holidays.netlify.app/',
    hasCaseStudy: true,
    summary:
      'A premium travel agency website developed to showcase curated holiday packages, bespoke worldwide journeys, luxury hotel reservations, and direct booking enquiries.',
    description:
      'Built for Lavish Holidays to create an elegant, trustworthy digital presence. The website showcases personalized vacation itineraries, international and domestic tour packages, exclusive hotel booking options, and direct enquiry channels connecting travelers directly to vacation specialists.',
    tags: ['React', 'Tailwind CSS', 'Travel UI/UX', 'Holiday Packages', 'SEO Optimized'],
    highlights: [
      'Curated holiday packages and worldwide tour showcase',
      'Personalized itinerary exploration and hotel reservation support',
      'Direct customer enquiry capture for tailored travel planning',
      'Mobile-optimized responsive design with fast page loads',
      'Schema.org TravelAgency structured data and SEO meta tags'
    ],
    previewType: 'travel',
    caseStudy: {
      client: 'Lavish Holidays (Bhuvana Morla)',
      timeline: 'Delivered Client Project',
      role: 'Full-Stack Development & UI/UX Implementation',
      challenge:
        'Traditional travel agency sites are often cluttered and confusing, leading to high bounce rates for luxury tour packages and bespoke holiday inquiries.',
      solution:
        'Engineered an uncluttered, modern travel web portal with transparent package details, rich destination highlights, and friction-free inquiry flows.',
      deliverables: [
        'Custom responsive travel website built with React and Tailwind CSS',
        'Curated tour catalog and day-by-day itinerary components',
        'Direct inquiry flows connecting prospective travelers to specialists',
        'High-speed Netlify cloud deployment with SSL'
      ],
      impact:
        'Published live at lavish-holidays.netlify.app, presenting curated travel packages and generating qualified customer inquiries.'
    }
  }
]
