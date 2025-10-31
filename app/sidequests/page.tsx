import PageLayout from '../../components/PageLayout';

export default function Sidequests() {
  return (
    <PageLayout>
      <h1 className="text-[2.75rem] font-normal mb-6 text-black">
        Sidequests
      </h1>

      <div className="flex flex-col gap-6 text-sm leading-relaxed text-[#333]">
        <p>
          <strong>hackathon experience</strong><br />
          <em>brown university spring 2025 — first place overall<br />
          princeton university fall 2024 — first place finance track<br />
          yale university fall 2024 — first place sustainability track<br />
          rutgers university fall 2024 — first place social good track<br />
          carnegie mellon university spring 2024 — most impactful hack<br />
          princeton university fall 2023 — first place education track</em>
        </p>
        
        <p>
          <strong>notable projects</strong><br />
          <em>built passionfruit, a personality test taken by <strong>270,000+</strong> people<br />
          built piggybank, a stock analysis discord bot with <strong>32,000+</strong> active users</em>
        </p>

        <p>
          <strong>grossman innovation prize</strong><br />
          <em>awarded $50k for the best research in the school of arts and sciences. </em>
        </p>
      </div>
    </PageLayout>
  );
}
