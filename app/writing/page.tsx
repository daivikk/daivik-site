import PageLayout from '../../components/PageLayout';

export default function Writing() {
  return (
    <PageLayout>
      <h1 className="text-[2.75rem] font-normal mb-6 text-black">
        Writing
      </h1>
      
      <div className="flex flex-col gap-6 text-sm leading-relaxed text-[#333]">
        <p>
          <a
            href="https://substack.com/home/post/p-162376089"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#333] hover:text-black transition-colors no-underline inline-flex items-center gap-0.5 group"
          >
            in the spaces between
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" className="text-[#999] transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
              <path fill="currentColor" d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z"/>
            </svg>
          </a><br />
          <em>a few notes from the quiet architecture of ordinary days.</em>
        </p>

        <p>
          <a
            href="https://substack.com/home/post/p-164774873"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#333] hover:text-black transition-colors no-underline inline-flex items-center gap-0.5 group"
          >
            a quiet ode to friendship
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" className="text-[#999] transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
              <path fill="currentColor" d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z"/>
            </svg>
          </a><br />
          <em>the gentle power of being understood by a friend.</em>
        </p>

        <p>
          <a
            href="https://daivik.substack.com/p/a-midsummer-nights-dream"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#333] hover:text-black transition-colors no-underline inline-flex items-center gap-0.5 group"
          >
            a midsummer night's dream
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" className="text-[#999] transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
              <path fill="currentColor" d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z"/>
            </svg>
          </a><br />
          <em>through the doing, we are undone and remade. my reflection of summer 2025.</em>
        </p>

        <p>
          <a
            href="https://drive.google.com/file/d/1g9mAy4cVQBBJS04xLlZvCzS2qG7Rwbzs/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#333] hover:text-black transition-colors no-underline inline-flex items-center gap-0.5 group"
          >
            footsteps lead you somewhere
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" className="text-[#999] transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
              <path fill="currentColor" d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z"/>
            </svg>
          </a><br />
          <em>a collection of 24 principles i wrote in high school for the younger version of me.</em>
        </p>
      </div>
    </PageLayout>
  );
}
