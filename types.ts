export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  iconKey: 'Shutter' | 'Blinds' | 'Glass' | 'Lock' | 'Garage' | 'Maintenance';
  iconSrc?: string;
  imageSrc?: string;
}

export interface NavLink {
  label: string;
  path: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string; // e.g., "Gérant de boutique", "Particulier"
  content: string;
}

export interface ProjectImage {
  id: number;
  url: string;
  title: string;
  category: string;
}

export type Locale = 'fr' | 'es';

export interface BranchInfo {
  city: string;
  country: string;
  phone: string;
  email: string;
  address: string;
}
