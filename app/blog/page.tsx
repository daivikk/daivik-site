'use client';

import TimeDisplay from '../../components/TimeDisplay';
import Navigation from '../../components/Navigation';
import LocationIndicator from '../../components/LocationIndicator';
import Footnotes from '../../components/Footnotes';
import Link from 'next/link';

// Blog posts data - you can move this to a separate file or CMS later
const blogPosts = [
  {
    slug: 'simulating-human-reasoning',
    title: 'Simulating Human Reasoning Beyond Linearity',
    date: 'Oct 29, 2025',
    description: 'by letting our models wander through uncertainty, we give them the first glimpse of what it means to reason.',
    author: ['Daivik Patel', 'Shrenik Patel']
  },
  // {
  //   slug: 'sample-post',
  //   title: 'Sample Blog Post',
  //   date: 'Oct 29, 2025',
  //   description: 'A demonstration of the three-column blog layout inspired by Thinking Machines.',
  //   author: ['Daivik Patel', 'Shrenik Patel']
  // },
  // Add more blog posts here
];

export default function Blog() {
  return (
    <main className="relative min-h-screen w-screen px-6 md:pl-16 md:pr-[60px] py-10 overflow-x-hidden flex flex-col">
      <TimeDisplay />

      {/* Navigation - top right */}
      <div className="absolute top-8 right-6 md:right-10">
        <Navigation />
      </div>

      {/* Main content area */}
      <div className="pt-20 md:pt-32 max-w-2xl flex-grow">
        <h1 className="text-[2.75rem] font-normal mb-4 text-black">
          Blog
        </h1>
        
        <div className="flex flex-col gap-4 text-sm leading-relaxed text-[#333]">
          {blogPosts.map((post) => (
            <div key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="no-underline group">
                <p className="mb-1 inline-flex items-center gap-0.5">
                  <strong className="group-hover:text-black transition-colors">{post.title}</strong>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" className="text-[#999] transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
                    <path fill="currentColor" d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z"/>
                  </svg>
                </p>
                <p className="text-xs text-[#555] mb-2">
                  {Array.isArray(post.author) ? post.author.join(', ') : post.author} · {post.date}
                </p>
                <p className="text-sm">
                  <em>{post.description}</em>
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 flex justify-between items-end">
        <Footnotes />
        <LocationIndicator />
      </div>
    </main>
  );
}
