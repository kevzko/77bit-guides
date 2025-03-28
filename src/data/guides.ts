export interface Guide {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
  contentPath: string;
  assetBasePath?: string;
}

export const guides: Guide[] = [
  {
    id: '1',
    title: 'All About Weapons',
    description: 'Here is your one-stop guide to know all you need to know about weapons in 77-Bit. ',
    image: '/images/weapons.png',
    slug: 'all-about-weapons',
    contentPath: '/content/all-about-weapons.md',
    assetBasePath: '/content/all-about-weapons'
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find(guide => guide.slug === slug);
}

export function getAllGuides(): Guide[] {
  return guides;
} 