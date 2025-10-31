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
    <nav className="flex gap-6" style={{ fontFamily: 'var(--font-iowan)' }}>
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm transition-colors duration-200 ${
              isActive 
                ? 'text-black underline underline-offset-4' 
                : 'text-[#666] hover:text-black no-underline'
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
