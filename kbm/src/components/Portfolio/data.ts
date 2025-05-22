// src/components/Portfolio/data.ts
export interface Project {
  slug: string;
  year: number;
  title: string;
  tags: string[];
}

export const personalProjects: Project[] = [
  { slug: 'my-wishlist',     year: 2024, title: 'My Wishlist',     tags: ['Design','Development'] },
  { slug: 'old-portfolio',   year: 2024, title: 'OLD_Portfolio',   tags: ['Design','Development'] },
  { slug: 'hs-pos',          year: 2025, title: 'HS POS',          tags: ['UI/UX','Animation'] },
  { slug: 'graduation-show', year: 2025, title: 'Graduation SHOW', tags: ['CSS','Responsive'] },
  { slug: 'new-portfolio',   year: 2025, title: 'NEW_Portfolio',   tags: ['CSS','Responsive'] },
];

export const teamProjects: Project[] = [
  { slug: 'vending-machine',  year: 2024, title: 'Vending-Machine', tags: ['UI/UX','Development'] },
  { slug: 'developer-erp',    year: 2024, title: 'Developer ERP',   tags: ['UI/UX','Development'] },
  { slug: 'machine-learning', year: 2024, title: 'Machine Learning',tags: ['UI/UX','Motion'] },
];
