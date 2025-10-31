'use client';

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

  return (
    <nav className="flex flex-col gap-3 -ml-5" style={{ fontFamily: 'var(--font-iowan)' }}>
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-xs no-underline transition-all duration-200 relative ${
              isActive 
                ? 'text-black font-semibold' 
                : 'text-[#666] hover:text-black hover:translate-x-1'
            }`}
          >
            {isActive && (
              <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-black rounded-full" />
            )}
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

