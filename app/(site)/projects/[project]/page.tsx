import { getProject } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

type Props = {
  params: {
    project: string;
  };
};

export default async function Project({ params }: Props) {
  const slug = params.project; // The value of the slug parameter [project]
  const project = await getProject(slug);
  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-400 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
          {project.name}
        </h1>

        <a href={project.url} target="_blank" rel="noreferrer noopener">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            View Project
          </button>
        </a>
      </header>
      <div>
        <PortableText value={project.content} />
      </div>
      <Image
        src={project.image}
        alt={project.name}
        width={400}
        height={400}
        className="rounded-md mt-4"
      />
    </div>
  );
}
