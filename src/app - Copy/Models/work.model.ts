export type Industry = 'Finance' | 'Retail' | 'Travel' | 'Tech';
export type Category = 'Branding' | 'Web' | 'Campaign';

export interface Work {
  id: number;
  title: string;
  industry: Industry;
  category: Category;
  image: string;
  description: string;
}