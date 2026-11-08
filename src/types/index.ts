export interface CompanyInfo {
  name: string;
  tagline: string;
  subheadline: string;
  industry: string;
  phone: string;
  email: string;
  address: string;
  secondaryAddress: string;
  whatsapp: string;
  foundedYear: string;
  hours: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  timeline: string;
  image: string;
  badgeText: string;
  stat: string;
  statLabel: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'sustainable' | 'urban';
  location: string;
  year: string;
  area: string;
  image: string;
  description: string;
  highlight: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  location: string;
  impactMetric: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  serviceType: string;
  budgetRange: string;
  timeline: string;
  message: string;
}
