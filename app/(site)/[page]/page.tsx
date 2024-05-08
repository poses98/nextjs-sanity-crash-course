import { getPage } from '@/sanity/sanity-utils';
import { PortableText } from 'next-sanity';

type Props = {
  params: {
    page: string;
  };
};

export default async function Page({ params }: Props) {
  const slug = params.page;
  const page = await getPage(slug);
  console.log(page.content);

  return (
    <div>
      <h1 className="text-3xl">{page.name}</h1>
      <div>
        <PortableText value={page.content} />
      </div>
    </div>
  );
}
