import 'server-only';
import {
  createClient,
  type ClientConfig,
  type QueryParams,
} from '@sanity/client';

const config: ClientConfig = {
  projectId: 'gv7y171m',
  dataset: 'production',
  apiVersion: '2024-05-06',
  useCdn: false,
};

const client = createClient(config);

export async function sanityFetch<QueryResponse>({
  query,
  qParams = {},
  tags,
}: {
  query: string;
  qParams?: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, qParams, {
    cache: 'force-cache',
    next: { tags },
  });
}
