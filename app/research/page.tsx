import PageLayout from '../../components/PageLayout';

export default function Research() {
  return (
    <PageLayout>
      <h1 className="text-[2.75rem] font-normal mb-6 text-black">
        Research
      </h1>
      
      <div className="flex flex-col gap-6 text-sm leading-relaxed text-[#333]">
        <p>
          <a
            href="https://openreview.net/pdf?id=8uog3DwG3v"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#333] hover:text-black transition-colors no-underline inline-flex items-center gap-0.5 group"
          >
            Reuse, Don't Recompute
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" className="text-[#999] transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
              <path fill="currentColor" d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z"/>
            </svg>
          </a><br />
          <em>NuerIPS 2025 efficient reasoning workshop paper</em>
        </p>

        <p>
          <a
            href="https://openreview.net/pdf?id=D7WqEZzwRR"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#333] hover:text-black transition-colors no-underline inline-flex items-center gap-0.5 group"
          >
            ENGRAM: Effective, Lightweight Memory Orchestration for Conversational Agents
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" className="text-[#999] transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
              <path fill="currentColor" d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z"/>
            </svg>
          </a><br />
          <em>under review for ICLR 2026</em>
        </p>

        <p>
          <a
            href="https://arxiv.org/pdf/2412.06936"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#333] hover:text-black transition-colors no-underline inline-flex items-center gap-0.5 group"
          >
            Cooperative AI Policy-Making
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" className="text-[#999] transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
              <path fill="currentColor" d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z"/>
            </svg>
          </a><br />
          <em>arxiv technical report preprint</em>
        </p>

        <p>
          <a
            href="https://github.com/daivikk/ml-experiments"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#333] hover:text-black transition-colors no-underline inline-flex items-center gap-0.5 group"
          >
            A Collection of ML Experiments
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" className="text-[#999] transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
              <path fill="currentColor" d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z"/>
            </svg>
          </a><br />
          <em>replicated recent ml papers from top academic labs</em>
        </p>
      </div>
    </PageLayout>
  );
}
