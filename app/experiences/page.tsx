import PageLayout from '../../components/PageLayout';

export default function Experiences() {
  return (
    <PageLayout>
      <h1 className="text-[2.75rem] font-normal mb-6 text-black">
        Experiences
      </h1>

      <div className="flex flex-col gap-6 text-sm leading-relaxed text-[#333]">
        <p>
          solving math and coding questions to train and fine tune models at{' '}
          <a
            href="https://scale.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#333] hover:text-black transition-colors no-underline inline-flex items-center gap-0.5 group"
          >
            scale ai
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" className="text-[#999] transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
              <path fill="currentColor" d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z"/>
            </svg>
          </a>.
        </p>

        <p>
          researched and built large <strong>multi agent systems</strong> from scratch at an ai lab. <br /> more to come soon :)
        </p>

        <p>
          working with dr. gunawardena to build{' '}
          <a
            href="https://smartslides.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#333] hover:text-black transition-colors no-underline inline-flex items-center gap-0.5 group"
          >
            smartslides
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" className="text-[#999] transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
              <path fill="currentColor" d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z"/>
            </svg>
          </a>{' '}
          and{' '}
          <a
            href="https://codebench.cs.rutgers.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#333] hover:text-black transition-colors no-underline inline-flex items-center gap-0.5 group"
          >
            codebench
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" className="text-[#999] transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
              <path fill="currentColor" d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z"/>
            </svg>
          </a>. <br /> recently tinkering with <strong>vlms</strong>.
        </p>

        <p>
          led the ai policy team as a research scientist at{' '}
          <a
            href="https://humun.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#333] hover:text-black transition-colors no-underline inline-flex items-center gap-0.5 group"
          >
            humun
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" className="text-[#999] transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
              <path fill="currentColor" d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z"/>
            </svg>
          </a>.
        </p>

        <p>
          cofounded <strong>param</strong> to build voice agents for dentists and health insurance companies. <br /> raised $25k as part of the{' '}
          <a
            href="https://telora.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#333] hover:text-black transition-colors no-underline inline-flex items-center gap-0.5 group"
          >
            telora fellowship
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" className="text-[#999] transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
              <path fill="currentColor" d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z"/>
            </svg>
          </a>{' '}
          (~1%)
        </p>
      </div>
    </PageLayout>
  );
}
