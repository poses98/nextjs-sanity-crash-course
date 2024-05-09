import { Project } from '@/types/Project';
import { Page } from '@/types/Page';
import { createClient, groq } from 'next-sanity';
import { sanityFetch } from './sanity.client';

/* export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: 'gv7y171m',
    dataset: 'production',
    apiVersion: '2024-05-06',
    useCdn: false,
  });

  return await client.fetch(groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug":slug.current,
        "image":image.asset->url,
        url,
        content
    }`);
}
 */

export async function getProjects(): Promise<Project[]> {
  const query = groq`*[_type == "project"]{
    _id,
    _createdAt,
    name,
    "slug":slug.current,
    "image":image.asset->url,
    url,
    content
}`;

  return await sanityFetch<Project[]>({ query: query, tags: ['project'] });
}

export async function getProject(slug: string): Promise<Project> {
  const client = createClient({
    projectId: 'gv7y171m',
    dataset: 'production',
    apiVersion: '2024-05-06',
    useCdn: false,
  });

  return await client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug":slug.current,
        "image":image.asset->url,
        url,
        content
    }`,
    { slug }
  );
}

export async function getPages(): Promise<Page[]> {
  const client = createClient({
    projectId: 'gv7y171m',
    dataset: 'production',
    apiVersion: '2024-05-06',
    useCdn: false,
  });
  return await client.fetch(groq`*[_type == "page"]{
    _id,
    _createdAt,
    name,
    "slug":slug.current,
    content
  }`);
}

export async function getPage(slug: string): Promise<Page> {
  const client = createClient({
    projectId: 'gv7y171m',
    dataset: 'production',
    apiVersion: '2024-05-06',
    useCdn: false,
  });
  // params go with $param and declared in the second attr of the fetch
  return await client.fetch(
    groq`*[_type=="page" && slug.current == $slug][0]{
    _id,
    _createdAt,
    name,
    "slug":slug.current,
    content
  }`,
    { slug }
  );
}
