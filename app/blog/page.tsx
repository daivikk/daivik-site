'use client';

import TimeDisplay from '../../components/TimeDisplay';
import Navigation from '../../components/Navigation';
import LocationIndicator from '../../components/LocationIndicator';
import ProfileImage from '../../components/ProfileImage';
import Link from 'next/link';

// Blog posts data - you can move this to a separate file or CMS later
const blogPosts = [
  {
    slug: 'simulating-human-reasoning',
    title: 'Simulating Human Reasoning Beyond Linearity',
    date: 'Oct 29, 2025',
    description: 'By letting our models wander through uncertainty, we give them the first glimpse of what it means to reason',
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
    <main className="relative min-h-screen w-screen px-4 md:px-[60px] py-10 overflow-x-hidden">
      <TimeDisplay />

      {/* Grid container */}
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 pt-20 md:pt-40">
        <Navigation />

        {/* Main content area */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <h1 className="text-[2.75rem] font-normal mb-2 text-black">
            Blog
          </h1>
          
          <div className="flex flex-col gap-6 text-sm leading-relaxed text-[#333] w-full md:max-w-[40%]">
            {blogPosts.map((post) => (
              <div key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="no-underline hover:opacity-70 transition-opacity">
                  <p className="mb-1">
                    <strong>{post.title}</strong>
                  </p>
                  <p className="text-xs text-[#666] mb-2">
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
      </div>

      <ProfileImage />
      <LocationIndicator />
    </main>
  );
}
