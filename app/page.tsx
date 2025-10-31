import PageLayout from '../components/PageLayout';

export default function Home() {
  return (
    <PageLayout>
      <h1 className="text-[2.75rem] font-normal mb-2 text-black">
        Daivik Patel
      </h1>

      <p className="text-sm text-black font-bold mb-6">
        deriving how to build intelligence that expands human possibility.
      </p>

      <div className="flex flex-col gap-6 text-sm leading-relaxed text-[#333] max-w-[40%]">
        <p>
          hi, i'm daivik :) i'm glad you're here.
        </p>

        <p>
          i'm 20 and currently studying math and cs at rutgers honors college. <br /> research is what i'm exploring right now, though my past lives have been startups and full-stack engineering.
        </p>

        <p>
          i'm trying to understand what it means to contribute meaningfully to the human story. here's my belief so far: do things with high variance, choose your work and your company with intention, and lead with kindness.
        </p>
      </div>
    </PageLayout>
  );
}
