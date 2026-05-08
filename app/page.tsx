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
        <h1 className="text-[2.75rem] font-normal mb-1 text-black flex items-center">
          daivik<span className="mx-1 inline-block">·</span>patel
        </h1>
        
        <p className="text-xs text-[#555] mb-6">
        /ˈdaɪ.vɪk pəˈtɛl/
        </p>

        <p className="text-sm text-[#555] mb-6">
          noun
        </p>

        {/* Definitions */}
        <div className="flex flex-col gap-2 text-sm text-base leading-relaxed text-[#333] max-w-[38rem]">
          <p>
            <span className="text-[#555] mr-3">1.</span>
            a researcher exploring how intelligence can help people flourish.
            </p>

          <p>
            <span className="text-[#555] mr-3">2.</span>
            incoming mphil student at the{' '}
            <a
              href="https://www.chia.cam.ac.uk/research"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#333] hover:text-black transition-colors no-underline inline-flex items-center gap-0.5 group"
            >
              university of cambridge
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" className="text-[#999] transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
                <path fill="currentColor" d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z"/>
              </svg>
            </a>{' '}
            studying responsible and <br /> human-inspired ai. previously studied math and cs at rutgers honors college.
          </p>

          <p>
            <span className="text-[#555] mr-3">3.</span>
            currently exploring research, though my past lives have been startups, hackathons, and <br /> full-stack engineering.
          </p>

          <p>
            <span className="text-[#555] mr-3">4.</span>
            my current philosophy: maximize your entropy, notice and care for people deeply, and <br /> lead with <b>kindness</b>.
          </p>
        </div>
      </div>

      <LocationIndicator />
      <Footnotes />
    </main>
  );
}
