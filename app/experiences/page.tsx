import PageLayout from '../../components/PageLayout';

export default function Experiences() {
  return (
    <PageLayout>
      <h1 className="text-[2.75rem] font-normal mb-2 text-black">
        Experiences
      </h1>

      <div className="flex flex-col gap-6 text-sm leading-relaxed text-[#333]">
        <p>
          solving math and coding questions to train and fine tune models at <strong>scale ai</strong>.
        </p>

        <p>
          researched and built large <strong>multi agent systems</strong> from scratch at an ai lab. <br /> more to come soon :)
        </p>

        <p>
          working with dr. gunawardena to build <strong>smartslides</strong> and <strong>codebench</strong>. <br /> recently tinkering with <strong>vlms</strong>.
        </p>

        <p>
          led the ai policy team as a research scientist at <strong>humun</strong>.
        </p>

        <p>
          cofounded <strong>param</strong> to build voice agents for dentists and health insurance companies. <br /> raised $25k as part of the <strong>telora fellowship</strong> (~1%)
        </p>
      </div>
    </PageLayout>
  );
}
