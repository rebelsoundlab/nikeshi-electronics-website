export type PageId = 'home' | 'about' | 'services' | 'projects' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  specs: { label: string; value: string }[];
  applications: string[];
  iconName: string;
  image?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'agricultural' | 'commercial' | 'solar' | 'electrical';
  categoryLabel: string;
  location: string;
  perimeterScale: string;
  description: string;
  specifications: string[];
  image: string;
  imageNote: string;
}

export interface ContactFormData {
  fullName: string;
  phoneNumber: string;
  district: string;
  serviceRequired: string;
  approxPerimeter: string;
  message: string;
}
