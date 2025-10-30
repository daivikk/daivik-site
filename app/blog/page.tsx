'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import pic from '../../pic.png';

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
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: false 
      }));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen w-screen px-4 md:px-[60px] py-10 overflow-x-hidden">
      {/* Time display */}
      <div className="absolute top-8 left-4 md:left-10 text-xs text-black" style={{ fontFamily: 'var(--font-iowan)' }}>
        {currentTime}
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 pt-20 md:pt-40">
        {/* Left sidebar navigation */}
        <nav className="flex flex-row md:flex-col gap-3 md:-ml-5 justify-center md:justify-start" style={{ fontFamily: 'var(--font-iowan)' }}>
          <Link href="/" className="text-xs text-[#333] no-underline hover:opacity-60 transition-opacity">
            about
          </Link>
          <Link href="/experiences" className="text-xs text-[#333] no-underline hover:opacity-60 transition-opacity">
            experiences
          </Link>
          <Link href="/research" className="text-xs text-[#333] no-underline hover:opacity-60 transition-opacity">
            research
          </Link>
          <Link href="/writing" className="text-xs text-[#333] no-underline hover:opacity-60 transition-opacity">
            writing
          </Link>
          <Link href="/blog" className="text-xs text-[#333] no-underline hover:opacity-60 transition-opacity">
            blog
          </Link>
          <Link href="/sidequests" className="text-xs text-[#333] no-underline hover:opacity-60 transition-opacity">
            sidequests
          </Link>
        </nav>

        {/* Main content area */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <h1 className="text-[2.75rem] font-normal mb-2 text-black">
            Blog
          </h1>
          <div className="flex flex-col gap-6 text-sm leading-relaxed text-[#333] w-full md:max-w-[40%]">
            {/* <p>
              <em>thoughts on intelligence, learning, and building things that matter.</em>
            </p> */}
            
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

      {/* Profile image */}
      <div className="fixed bottom-10 left-10 w-[220px] h-[290px] hidden md:block">
        <Image 
          src={pic} 
          alt="Profile" 
          width={220}
          height={290}
          className="object-cover rounded"
        />
      </div>

      {/* Location indicator */}
      <div className="absolute bottom-10 right-4 md:right-10 text-sm text-[#333] flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 20.556q-.235 0-.47-.077t-.432-.25q-1.067-.981-2.164-2.185q-1.096-1.203-1.99-2.493t-1.468-2.633t-.572-2.622q0-3.173 2.066-5.234Q9.037 3 12 3t5.03 2.062q2.066 2.061 2.066 5.234q0 1.279-.572 2.613q-.572 1.333-1.458 2.632q-.885 1.3-1.981 2.494T12.92 20.21q-.191.173-.434.26q-.244.086-.487.086m.004-8.825q.667 0 1.14-.476q.472-.475.472-1.143t-.476-1.14t-1.143-.472t-1.14.476t-.472 1.143t.475 1.14t1.144.472"/>
        </svg>
        nj
      </div>
    </main>
  );
}

