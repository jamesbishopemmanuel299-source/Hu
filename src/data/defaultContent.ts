import { CompanyInfo, ServiceItem, ProjectItem, TestimonialItem, FaqItem } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_architectural_studio_1794159905790.jpg';
export const COMMERCIAL_IMAGE = '/src/assets/images/service_commercial_spaces_1794159906161.jpg';
export const RESIDENTIAL_IMAGE = '/src/assets/images/service_residential_estate_1794159906532.jpg';
export const SUSTAINABLE_IMAGE = '/src/assets/images/service_sustainable_urban_1794159906427.jpg';

export const DEFAULT_COMPANY: CompanyInfo = {
  name: 'Aethelgard & Co.',
  tagline: 'Architectural Mastery & Spatial Elegance',
  subheadline: 'Designing transcendent residential estates, landmark corporate headquarters, and sustainable environments with master craftsmanship.',
  industry: 'Architecture & Spatial Development',
  phone: '+1 (800) 492-8172',
  email: 'inquiries@aethelgard.com',
  address: '14 Grosvenor Square, Mayfair, London W1K 6LF',
  secondaryAddress: '450 Park Avenue, 18th Floor, New York, NY 10022',
  whatsapp: '+18004928172',
  foundedYear: '2012',
  hours: 'Monday – Friday, 08:30 – 18:30 GMT / EST',
};

export const PRESET_COMPANIES: Record<string, CompanyInfo> = {
  architectural: DEFAULT_COMPANY,
  capital: {
    name: 'Aethelgard Capital & Advisory',
    tagline: 'Private Wealth, Strategic M&A & Family Office Advisory',
    subheadline: 'Providing discrete institutional counsel, capital structuring, and succession advisory to multi-generational family offices and international enterprises.',
    industry: 'Private Capital & Strategic Advisory',
    phone: '+1 (800) 492-8172',
    email: 'partners@aethelgard-capital.com',
    address: '1 Curzon Street, Mayfair, London W1J 5HD',
    secondaryAddress: '375 Park Avenue, New York, NY 10152',
    whatsapp: '+18004928172',
    foundedYear: '2008',
    hours: 'Monday – Friday, 08:00 – 19:00 GMT / EST',
  },
  construction: {
    name: 'Meridian Guild & Build',
    tagline: 'High-Tolerance Engineering & Bespoke Construction',
    subheadline: 'Executing complex structural engineering, luxury estate construction, and precision interior detailing with uncompromising Swiss-grade tolerance.',
    industry: 'Prime Construction & Engineering',
    phone: '+1 (800) 492-8172',
    email: 'projects@meridianguild.com',
    address: '88 St. James\'s Street, London SW1A 1PL',
    secondaryAddress: '100 Wilshire Blvd, Santa Monica, CA 90401',
    whatsapp: '+18004928172',
    foundedYear: '2015',
    hours: 'Monday – Friday, 07:30 – 18:00 GMT',
  },
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'residential-villas',
    number: '01',
    title: 'Private Residential Estates & Villas',
    shortDesc: 'Sculptural private estates, hillside villas, and oceanfront sanctuaries designed in intimate dialogue with their natural topography.',
    fullDesc: 'We conceptualize and execute bespoke private residences defined by monumental limestone finishes, climate-adaptive glass envelopes, integrated reflection pools, and seamless indoor-outdoor transitions.',
    deliverables: [
      'Topographical site orientation & sunlight vector mapping',
      'Architectural schematic design & 3D computational models',
      'Honed natural stone & bespoke timber material curation',
      'Full construction detailing and turnkey contractor supervision',
    ],
    timeline: '6 – 18 Months execution cycle',
    image: RESIDENTIAL_IMAGE,
    badgeText: 'Residential',
    stat: '42+ Estates',
    statLabel: 'Completed internationally',
  },
  {
    id: 'commercial-headquarters',
    number: '02',
    title: 'Flagship Headquarters & Commercial Atriums',
    shortDesc: 'Monumental corporate headquarters and civic spaces that reinforce enterprise prestige, acoustic clarity, and employee vitality.',
    fullDesc: 'Our commercial studio conceives flagship environments featuring soaring acoustic timber louvers, monumental central light atriums, and adaptive executive suites designed to inspire high-caliber collaboration.',
    deliverables: [
      'Workplace spatial workflow & executive suite planning',
      'Acoustic engineering & multi-tier timber louver detailing',
      'High-traffic terrazzo and structural glass engineering',
      'Smart environmental automation & intelligent HVAC integration',
    ],
    timeline: '12 – 24 Months execution cycle',
    image: COMMERCIAL_IMAGE,
    badgeText: 'Commercial',
    stat: '$680M+',
    statLabel: 'Commercial assets designed',
  },
  {
    id: 'sustainable-urban',
    number: '03',
    title: 'Sustainable Biophilic Architecture',
    shortDesc: 'Net-zero carbon buildings with integrated living vertical biospheres, mass-timber frames, and passive thermodynamic circulation.',
    fullDesc: 'Merging ecological science with architectural luxury, our sustainable practice engineers buildings with low embodied carbon, living botanical facades, rainwater harvesting cisterns, and natural geothermal climate moderation.',
    deliverables: [
      'Life cycle carbon assessment & LEED Platinum pathing',
      'Integrated vertical botanical garden irrigation systems',
      'Cross-laminated timber (CLT) structural design',
      'Passive thermodynamic convective cooling strategies',
    ],
    timeline: '9 – 24 Months execution cycle',
    image: SUSTAINABLE_IMAGE,
    badgeText: 'Sustainable',
    stat: 'Net-Zero',
    statLabel: 'Carbon targets achieved',
  },
  {
    id: 'masterplanning-feasibility',
    number: '04',
    title: 'Spatial Masterplanning & Heritage Restoration',
    shortDesc: 'Comprehensive land-use masterplanning, historic preservation retrofits, and high-stakes zoning regulatory approvals.',
    fullDesc: 'Guiding visionary landowners, institutional trusts, and developers through multi-hectare spatial zoning, historic preservation negotiations, and long-term asset value optimization.',
    deliverables: [
      'Regulatory zoning analysis & historic trust negotiations',
      'Phased infrastructure & spatial density masterplans',
      'Geospatial terrain analysis & utility infrastructure planning',
      'Capital investment ROI & development feasibility models',
    ],
    timeline: '3 – 9 Months advisory cycle',
    image: HERO_IMAGE,
    badgeText: 'Masterplanning',
    stat: '100%',
    statLabel: 'Zoning approval success',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'project-solarium',
    title: 'The Solarium Pavilion',
    category: 'residential',
    location: 'Palm Springs, California',
    year: '2025',
    area: '9,400 sq ft',
    image: HERO_IMAGE,
    description: 'A low-slung desert sanctuary framed in darkened titanium-zinc and local honed limestone, featuring an integrated 30-meter infinity reflection pool facing the San Jacinto peaks.',
    highlight: 'Award of Excellence, American Architectural League 2025',
  },
  {
    id: 'project-meridian-atrium',
    title: 'Nordic Timber Financial Atrium',
    category: 'commercial',
    location: 'Geneva, Switzerland',
    year: '2025',
    area: '48,000 sq ft',
    image: COMMERCIAL_IMAGE,
    description: 'A five-tier commercial banking headquarters defined by precision Swiss oak acoustic baffles, central skylight illumination, and custom brass joinery.',
    highlight: 'Achieved Swiss Minergie-P Net-Zero Standard',
  },
  {
    id: 'project-travertine-residence',
    title: 'Villa Castiglione Travertine Estate',
    category: 'residential',
    location: 'Tuscany, Italy',
    year: '2024',
    area: '12,200 sq ft',
    image: RESIDENTIAL_IMAGE,
    description: 'Perched along rolling olive groves, this private residence uses Roman travertine monoliths, deep cantilevered cedar eaves, and open-air sunset terraces.',
    highlight: 'Featured in Architectural Digest International',
  },
  {
    id: 'project-biophilic-hub',
    title: 'The Living Canopy Innovation Centre',
    category: 'sustainable',
    location: 'Melbourne, Australia',
    year: '2024',
    area: '32,000 sq ft',
    image: SUSTAINABLE_IMAGE,
    description: 'A sustainable campus incorporating a three-story indoor living rainforest wall, modular engineered timber amphitheater, and passive solar orientation.',
    highlight: 'World Green Building Council Gold Certification',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'testimonial-vance',
    quote: 'Aethelgard & Co. delivered our flagship headquarters two months ahead of schedule. The acoustic timber atrium has redefined our firm\'s culture, employee focus, and executive client reception.',
    author: 'Helena Vance',
    role: 'Managing Partner',
    organization: 'Vance & O\'Neil Capital',
    location: 'London, UK',
    impactMetric: 'Completed 60 days ahead of schedule',
  },
  {
    id: 'testimonial-pendelton',
    quote: 'Their masterplan for our coastal retreat honored both strict environmental covenants and our family\'s multi-generational vision. Their precision, material discipline, and grace under pressure were exemplary.',
    author: 'Dr. Arthur Pendelton',
    role: 'Chairman of the Board',
    organization: 'Pendelton Family Trust',
    location: 'Carmel-by-the-Sea, California',
    impactMetric: '100% preservation compliance secured',
  },
  {
    id: 'testimonial-thorne',
    quote: 'Rarely do architectural visionaries balance sculptural purity with relentless financial discipline. Aethelgard achieved both effortlessly, maximizing our spatial yield by 28% without sacrificing aesthetic majesty.',
    author: 'Marcus Thorne',
    role: 'Chief Development Officer',
    organization: 'Altus Hospitality Group',
    location: 'Zurich, Switzerland',
    impactMetric: '+28% spatial value yield created',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'What is the typical engagement process from initial concept to completion?',
    answer: 'Our process begins with an intensive 3-week Discovery & Feasibility Study where we analyze zoning, topography, sunlight orientation, and programmatic requirements. Following sign-off on schematics, we advance into 3D computational detailing, statutory approvals, contractor tender administration, and turnkey site supervision through to final commissioning and key handover.',
  },
  {
    question: 'Does your studio handle international commissions and local approvals?',
    answer: 'Yes. More than 60% of our portfolio resides outside our primary UK and US studio locations. We partner with vetted local associate engineers and statutory planning consultants in each jurisdiction while retaining complete creative and technical stewardship.',
  },
  {
    question: 'How do you ensure budget certainty and prevent cost overruns?',
    answer: 'We deploy an integrated Quantity Surveying and Building Information Modeling (BIM) workflow. Every material specification is priced at 1:1 supplier reality during the Design Development stage, ensuring strict compliance with capital allocations before breaking ground.',
  },
  {
    question: 'Can you work with our existing interior designers or general contractors?',
    answer: 'While we offer comprehensive turnkey delivery (architecture, interior architecture, and landscape coordination), we regularly collaborate with esteemed third-party client interior studios and Tier-1 general contractors under unified project management protocols.',
  },
  {
    question: 'How does the initial discovery consultation work?',
    answer: 'Our discovery consultation is an exploratory 45-minute working session with our Principal Architect. We review your site location, programmatic desires, approximate timeline, and investment range, and provide preliminary spatial advice and scope recommendations with zero obligation.',
  },
];
