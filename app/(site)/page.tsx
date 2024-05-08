import { getProjects } from '@/sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const projects = await getProjects();
  return (
    <div>
      <h1 className="text-6xl font-bold">
        Hello I&apos;m{' '}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Pablo Osés
        </span>
      </h1>
      <p className="mt-3 text-xl text-gray-600">
        Hey everyone! Check out my projects!
      </p>
      <div className="my-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-4 gap-y-4">
        {projects.map((project) => {
          return (
            <Link href={`/projects/${project.slug}`} key={project._id}>
              <div
                key={project._id}
                className="transform rounded shadow-lg w50 p-5 flex flex-col items-center justify-center cursor-pointer bg-white hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width={200}
                  height={200}
                  className="rounded-lg"
                />

                <h2 className="text-xl text-center ">{project.name}</h2>
                <p>{project._createdAt}</p>
                {project.content.map((content) => {
                  console.log(content);

                  return <p key={content._key} className="text-sm"></p>;
                })}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
