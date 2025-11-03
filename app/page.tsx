import TimeDisplay from '../components/TimeDisplay';
import Navigation from '../components/Navigation';
import LocationIndicator from '../components/LocationIndicator';
import Footnotes from '../components/Footnotes';

export default function Home() {
  return (
    <main className="relative h-screen md:min-h-screen w-screen px-6 md:pl-16 md:pr-[60px] py-10 overflow-hidden md:overflow-auto">
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
            deriving how to build intelligence that expands human possibility.
            </p>

          <p>
            <span className="text-[#555] mr-3">2.</span>
            a 20-year-old studying math and cs at rutgers honors college. currently exploring research, though past lives have been startups and full-stack engineering.
          </p>

          <p>
            <span className="text-[#555] mr-3">3.</span>
            trying to understand what it means to contribute meaningfully to the human story. here's my belief so far: do things with high variance, choose your work and your company with intention, and lead with kindness.
          </p>
        </div>
      </div>

      <div className="absolute bottom-6 md:bottom-10 right-6 md:right-10 text-xs text-[#333] flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 20.556q-.235 0-.47-.077t-.432-.25q-1.067-.981-2.164-2.185q-1.096-1.203-1.99-2.493t-1.468-2.633t-.572-2.622q0-3.173 2.066-5.234Q9.037 3 12 3t5.03 2.062q2.066 2.061 2.066 5.234q0 1.279-.572 2.613q-.572 1.333-1.458 2.632q-.885 1.3-1.981 2.494T12.92 20.21q-.191.173-.434.26q-.244.086-.487.086m.004-8.825q.667 0 1.14-.476q.472-.475.472-1.143t-.476-1.14t-1.143-.472t-1.14.476t-.472 1.143t.475 1.14t1.144.472"
          />
        </svg>
        nj
      </div>
      <div className="absolute bottom-6 md:bottom-10 left-6 md:left-16 text-sm text-[#555]">
        <p className="mb-3 text-xs">footnotes</p>
        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/daivik-patel-030b86255"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#333] hover:text-black transition-colors group inline-flex items-center gap-1"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="group-hover:scale-110 transition-transform">
              <path fill="currentColor" d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2M8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12a1.57 1.57 0 1 1 0 3.12m12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 24" className="text-[#999] transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
              <path fill="currentColor" d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z"/>
            </svg>
          </a>
          <a
            href="https://substack.com/@daivik"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#333] hover:text-black transition-colors group inline-flex items-center gap-1"
            aria-label="Substack"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" className="group-hover:scale-110 transition-transform">
              <path fill="currentColor" d="M15 3.604H1v1.891h14v-1.89ZM1 7.208V16l7-3.926L15 16V7.208zM15 0H1v1.89h14z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" className="text-[#999] transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
              <path fill="currentColor" d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z"/>
            </svg>
          </a>
          <a
            href="https://github.com/daivikk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#333] hover:text-black transition-colors group inline-flex items-center gap-1"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" className="group-hover:scale-110 transition-transform">
              <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" className="text-[#999] transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
              <path fill="currentColor" d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z"/>
            </svg>
          </a>
          <a
            href="https://x.com/daivikpatel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#333] hover:text-black transition-colors group inline-flex items-center gap-1"
            aria-label="X"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" className="group-hover:scale-110 transition-transform">
              <g fill="none">
                <g clipPath="url(#SVGG1Ot4cAD)">
                  <path fill="currentColor" d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"/>
                </g>
                <defs>
                  <clipPath id="SVGG1Ot4cAD">
                    <path fill="#fff" d="M0 0h14v14H0z"/>
                  </clipPath>
                </defs>
              </g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" className="text-[#999] transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
              <path fill="currentColor" d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z"/>
            </svg>
          </a>
          <a
            href="https://instagram.com/daivikpatel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#333] hover:text-black transition-colors group inline-flex items-center gap-1"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="group-hover:scale-110 transition-transform">
              <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" className="text-[#999] transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
              <path fill="currentColor" d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z"/>
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}
