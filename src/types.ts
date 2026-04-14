export interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  heroImage: string;
  description: string;
  keyFeatures: string[];
  gallery: string[];
  client?: string;
  year?: string;
}
