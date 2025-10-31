import TimeDisplay from '../components/TimeDisplay';
import Navigation from '../components/Navigation';
import LocationIndicator from '../components/LocationIndicator';

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen pl-16 pr-[60px] py-10">
      <TimeDisplay />
      
      {/* Navigation */}
      <div className="absolute top-8 right-10">
        <Navigation />
      </div>

      {/* Main content - left aligned */}
      <div className="max-w-2xl pt-32">
        {/* Name as dictionary entry */}
        <h1 className="text-5xl font-normal mb-2 text-black flex items-center">
          daivik<span className="mx-1 inline-block">·</span>patel
        </h1>
        
        <p className="text-sm text-[#666] mb-8">
        /ˈdaɪ.vɪk pəˈtɛl/
        </p>

        <p className="text-md text-[#666] mb-6">
          noun
        </p>

        {/* Definitions */}
        <div className="flex flex-col gap-2 text-base leading-relaxed text-[#333]">
          <p>
            <span className="text-[#666] mr-3">1.</span>
            deriving how to build intelligence that expands human possibility.
            </p>

          <p>
            <span className="text-[#666] mr-3">2.</span>
            20-year-old studying math and cs at rutgers honors college. currently exploring research, though past lives have been startups and full-stack engineering.
          </p>

          <p>
            <span className="text-[#666] mr-3">3.</span>
            trying to understand what it means to contribute meaningfully to the human story. here's my belief so far: do things with high variance, choose your work and your company with intention, and lead with kindness.
          </p>
        </div>

        {/* Social Links */}
        <div className="mt-12">
          <p className="text-md text-[#666] mb-4">footnotes</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href="https://www.linkedin.com/in/daivik-patel-030b86255"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#333] hover:text-black transition-colors flex items-center gap-1 no-underline group"
            >
              linkedin
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" className="text-[#999] transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
                <path fill="currentColor" d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z"/>
              </svg>
            </a>
            <a
              href="https://substack.com/@daivik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#333] hover:text-black transition-colors flex items-center gap-1 no-underline group"
            >
              substack
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" className="text-[#999] transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
                <path fill="currentColor" d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z"/>
              </svg>
            </a>
            <a
              href="https://github.com/daivikk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#333] hover:text-black transition-colors flex items-center gap-1 no-underline group"
            >
              github
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" className="text-[#999] transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
                <path fill="currentColor" d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z"/>
              </svg>
            </a>
            <a
              href="https://x.com/daivikpatell"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#333] hover:text-black transition-colors flex items-center gap-1 no-underline group"
            >
              x
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" className="text-[#999] transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
                <path fill="currentColor" d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/daivikpatel_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#333] hover:text-black transition-colors flex items-center gap-1 no-underline group"
            >
              instagram
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" className="text-[#999] transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
                <path fill="currentColor" d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <LocationIndicator />
    </main>
  );
}
