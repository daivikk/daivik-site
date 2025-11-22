import TimeDisplay from '../components/TimeDisplay';
import Navigation from '../components/Navigation';
import LocationIndicator from '../components/LocationIndicator';
import Footnotes from '../components/Footnotes';

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen px-6 md:pl-16 md:pr-[60px] py-10">
      <TimeDisplay />
      
      {/* Navigation */}
      <div className="absolute top-8 right-6 md:right-10">
        <Navigation />
      </div>

      {/* Main content - left aligned */}
      <div className="max-w-2xl pt-20 md:pt-32">
        {/* Name as dictionary entry */}
        <h1 className="text-5xl font-normal mb-2 text-black flex items-center">
          daivik<span className="mx-1 inline-block">·</span>patel
        </h1>
        
        <p className="text-sm text-[#555] mb-8">
        /ˈdaɪ.vɪk pəˈtɛl/
        </p>

        <p className="text-md text-[#555] mb-6">
          noun
        </p>

        {/* Definitions */}
        <div className="flex flex-col gap-2 text-base leading-relaxed text-[#333]">
          <p>
            <span className="text-[#555] mr-3">1.</span>
            a seeker deriving how to build intelligence that expands human possibility.
            </p>

          <p>
            <span className="text-[#555] mr-3">2.</span>
            a 20-year-old studying math and cs at rutgers honors college. currently exploring research, though my past lives have been startups and full-stack engineering.
          </p>

          <p>
            <span className="text-[#555] mr-3">3.</span>
            trying to understand what it means to contribute meaningfully to the human story. here's my belief so far: do things with high variance, choose your work and your company with intention, and lead with <b>kindness</b>.
          </p>
        </div>
      </div>

      <LocationIndicator />
      <Footnotes />
    </main>
  );
}
