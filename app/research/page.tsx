import PageLayout from '../../components/PageLayout';

export default function Research() {
  return (
    <PageLayout>
      <h1 className="text-[2.75rem] font-normal mb-2 text-black">
        Research
      </h1>
      
      <div className="flex flex-col gap-6 text-sm leading-relaxed text-[#333]">
        <p>
          <strong>Reuse, Don't Recompute</strong><br />
          <em>NuerIPS 2025 efficient reasoning workshop paper</em>
        </p>

        <p>
          <strong>ENGRAM: Effective, Lightweight Memory Orchestration for Conversational Agents</strong><br />
          <em>under review for ICLR 2026</em>
        </p>

        <p>
          <strong>Cooperative AI Policy-Making</strong><br />
          <em>arxiv technical report preprint</em>
        </p>

        <p>
          <strong>A Collection of ML Experiments</strong><br />
          <em>replicated recent ml papers from top academic labs</em>
        </p>
      </div>
    </PageLayout>
  );
}
