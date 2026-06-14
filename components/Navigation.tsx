'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/', label: 'about' },
  { href: '/experiences', label: 'experiences' },
  { href: '/research', label: 'research' },
  { href: '/writing', label: 'writing' },
  { href: '/blog', label: 'blog' },
  { href: '/sidequests', label: 'sidequests' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6" style={{ fontFamily: 'var(--font-iowan)' }}>
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[0.80rem] transition-colors duration-200 ${
                isActive 
                  ? 'text-black underline underline-offset-4' 
                  : 'text-[#555] hover:text-black no-underline'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden flex items-center justify-center z-50 text-[#666]"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"/>
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#F7F6F3] z-40 transform transition-transform duration-300 ease-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-6 flex items-center justify-center text-[#666]"
          aria-label="Close menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
            <path fill="currentColor" d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"/>
          </svg>
        </button>

        <nav className="flex flex-col gap-6 p-8 pt-20" style={{ fontFamily: 'var(--font-iowan)' }}>
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-xs transition-colors duration-200 ${
                  isActive 
                    ? 'text-black underline underline-offset-4' 
                    : 'text-[#555] hover:text-black no-underline'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
