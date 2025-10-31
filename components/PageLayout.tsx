'use client';

import TimeDisplay from './TimeDisplay';
import Navigation from './Navigation';
import LocationIndicator from './LocationIndicator';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <main className="relative h-screen w-screen pl-16 pr-[60px] py-10 overflow-hidden">
      <TimeDisplay />
      
      {/* Navigation - top right */}
      <div className="absolute top-8 right-10">
        <Navigation />
      </div>

      <div className="pt-32 max-w-2xl">
        {children}
      </div>

      <LocationIndicator />
    </main>
  );
}

