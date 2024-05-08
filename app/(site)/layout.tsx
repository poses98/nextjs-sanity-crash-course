import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Link from 'next/link';
import { getPages } from '@/sanity/sanity-utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sanity Crash Course - Next.js',
  description: 'Sanity rules!',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pages = await getPages();
  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-10">
        <header className="flex justify-between">
          <Link
            href={`/`}
            className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold"
          >
            Pablo
          </Link>
          <nav>
            {pages.map((page) => {
              return (
                <Link key={page._id} href={`/${page.slug}`} className="mr-2">
                  {page.name}
                </Link>
              );
            })}
          </nav>
        </header>
        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}
