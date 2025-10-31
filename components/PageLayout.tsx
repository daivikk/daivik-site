'use client';

import TimeDisplay from './TimeDisplay';
import Navigation from './Navigation';
import LocationIndicator from './LocationIndicator';
import ProfileImage from './ProfileImage';

interface PageLayoutProps {
  children: React.ReactNode;
  showProfileImage?: boolean;
}

export default function PageLayout({ children, showProfileImage = true }: PageLayoutProps) {
  return (
    <main className="relative h-screen w-screen px-[60px] py-10 overflow-hidden">
      <TimeDisplay />
      
      <div className="grid grid-cols-[200px_1fr] gap-10 pt-40">
        <Navigation />
        
        <div className="flex flex-col items-end text-right">
          {children}
        </div>
      </div>

      {showProfileImage && <ProfileImage />}
      <LocationIndicator />
    </main>
  );
}

