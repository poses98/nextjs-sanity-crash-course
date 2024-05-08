import { PortableTextBlock } from 'next-sanity';

export type Page = {
  _id: string;
  _createdAt: string;
  name: string;
  slug: string;
  content: PortableTextBlock[];
};
