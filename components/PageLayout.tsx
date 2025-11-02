'use client';

import TimeDisplay from './TimeDisplay';
import Navigation from './Navigation';
import LocationIndicator from './LocationIndicator';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <main className="relative min-h-screen w-screen px-6 md:pl-16 md:pr-[60px] py-10 overflow-x-hidden">
      <TimeDisplay />
      
      {/* Navigation - top right */}
      <div className="absolute top-8 right-6 md:right-10">
        <Navigation />
      </div>

      <div className="pt-20 md:pt-32 max-w-2xl">
        {children}
      </div>

      <LocationIndicator />
    </main>
  );
}

