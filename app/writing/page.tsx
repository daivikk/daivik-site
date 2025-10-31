import PageLayout from '../../components/PageLayout';

export default function Writing() {
  return (
    <PageLayout>
      <h1 className="text-[2.75rem] font-normal mb-2 text-black">
        Writing
      </h1>
      
      <div className="flex flex-col gap-6 text-sm leading-relaxed text-[#333]">
        <p>
          <strong>in the spaces between</strong><br />
          <em>a few notes from the quiet architecture of ordinary days.</em>
        </p>

        <p>
          <strong>a quite ode to friendship</strong><br />
          <em>the gentle power of being understood by a friend.</em>
        </p>

        <p>
          <strong>a midsummer night's dream</strong><br />
          <em>through the doing, we are undone and remade. my reflection of summer 2025.</em>
        </p>

        <p>
          <strong>footsteps lead you somewhere</strong><br />
          <em>a collection of 24 principles i wrote in high school for the younger version of me.</em>
        </p>
      </div>
    </PageLayout>
  );
}
