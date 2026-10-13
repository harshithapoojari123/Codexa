export const services = [
  {
    id: 'web-design-dev',
    number: '01',
    title: 'Website Design & Development',
    shortDescription:
      'Beautiful, responsive websites that communicate your brand and help turn visitors into customers.',
    fullDescription:
      'We design and build bespoke, modern websites from the ground up. Every pixel is crafted to reflect your unique brand identity, with fluid typography, responsive layouts, intuitive navigation, and smooth micro-interactions that captivate your audience across smartphones, tablets, laptops, and ultra-wide displays.',
    deliverables: [
      'Custom UI/UX design with brand alignment',
      'Fully responsive, mobile-first frontend code',
      'Cross-browser and cross-device testing',
      'Clean component architecture (React & Tailwind)',
      'High-speed Netlify or Vercel cloud deployment'
    ],
    idealFor: 'Businesses wanting a distinctive digital presence that stands out from template clones.',
    iconName: 'Layout'
  },
  {
    id: 'full-stack-dev',
    number: '02',
    title: 'Full-Stack Development',
    shortDescription:
      'Complete web applications with well-structured frontends, backend logic, and database integration.',
    fullDescription:
      'From dynamic customer dashboards to complex multi-user portals, we engineer robust full-stack web applications. We connect intuitive React frontends to scalable backend architectures, ensuring snappy response times, secure authentication, role-based access control, and rock-solid data integrity.',
    deliverables: [
      'End-to-end web application architecture',
      'Client state management & snappy UI state',
      'Database schema design & query optimization',
      'Secure authentication & role authorization',
      'Scalable microservices and cloud infrastructure'
    ],
    idealFor: 'SaaS products, client portals, internal business management tools, and interactive utilities.',
    iconName: 'Layers'
  },
  {
    id: 'backend-api',
    number: '03',
    title: 'Backend & API Development',
    shortDescription:
      'Reliable APIs, server-side functionality, authentication integrations, and database-driven features.',
    fullDescription:
      'A powerful digital experience requires a dependable backbone. We design and construct high-performance RESTful APIs and server-side services built for concurrency, strict data validation, secure payload exchange, and seamless integration with payment gateways, CRMs, and third-party tools.',
    deliverables: [
      'REST API design with structured JSON responses',
      'JWT/Session security & API rate limiting',
      'PostgreSQL, MongoDB, or Supabase database integration',
      'Third-party webhook handling (Stripe, Razorpay, WhatsApp)',
      'API documentation and integration test coverage'
    ],
    idealFor: 'Applications needing reliable server pipelines, payment processing, or external software connectivity.',
    iconName: 'Server'
  },
  {
    id: 'business-landing-pages',
    number: '04',
    title: 'Business & Landing Pages',
    shortDescription:
      'Professional websites designed to explain your offering and encourage enquiries.',
    fullDescription:
      'Landing pages built with a single, laser-sharp focus: converting visitors into paying inquiries and leads. We blend persuasive information hierarchy, trust signals, clear value propositions, and friction-free contact triggers to maximize your business return on investment.',
    deliverables: [
      'High-conversion visual layout and hierarchy',
      'One-tap WhatsApp & direct email inquiry integration',
      'Clear call-to-action buttons placed strategically',
      'Sub-second page load times preventing visitor drop-off',
      'Lead capture forms with real-time field validation'
    ],
    idealFor: 'Service providers, consultancies, retail shops, and businesses launching new services or campaigns.',
    iconName: 'Globe'
  },
  {
    id: 'portfolio-personal',
    number: '05',
    title: 'Portfolio & Personal Websites',
    shortDescription:
      'Distinctive online portfolios that showcase skills, achievements, and personal brands.',
    fullDescription:
      'Your digital portfolio is your most valuable career asset. We create bespoke personal brand websites for developers, creators, founders, architects, and freelance professionals that present your case studies, achievements, and thought leadership with unmatched polish.',
    deliverables: [
      'Signature typographic and layout styling',
      'Interactive project case study showcases',
      'Social links, resume/CV downloads, and press features',
      'Smooth scroll transitions and elegant micro-animations',
      'Simple data structure for updating projects easily'
    ],
    idealFor: 'Freelancers, consultants, agency owners, software engineers, and creative directors.',
    iconName: 'Sparkles'
  },
  {
    id: 'seo-optimization',
    number: '06',
    title: 'Website Optimization & SEO',
    shortDescription:
      'Performance improvements, responsive fixes, technical SEO foundations, and accessibility enhancements.',
    fullDescription:
      'A slow or invisible website costs you real business. We audit, repair, and supercharge existing web applications to pass Google Core Web Vitals, implement semantic Schema.org metadata, eliminate render-blocking scripts, and ensure WCAG accessibility compliance.',
    deliverables: [
      'Core Web Vitals audit and sub-second performance fixes',
      'Semantic HTML5 structure and Schema.org rich snippets',
      'OpenGraph and Twitter Card social preview optimization',
      'Robots.txt, sitemap.xml, and Google Search Console setup',
      'Mobile responsiveness fixes across problematic screen sizes'
    ],
    idealFor: 'Businesses with slow sites, low search rankings, or high mobile bounce rates.',
    iconName: 'Zap'
  }
]
