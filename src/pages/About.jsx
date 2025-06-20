import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    // Use `w-full` to ensure the parent section takes up the full width.
    // We add vertical spacing between the child sections using `space-y-16`.
    <main className="w-full space-y-16">
      {/* Section 1: Introduction */}
      <section className="w-full py-16 sm:py-20">
        {/* Centered content container for readability */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="head-text">
            Hello, I'm{" "}
            <span className="blue-gradient_text font-semibold drop-shadow">
              M.Kalaiyarasan
            </span>{" "}
            👋
          </h1>

          <div className="mt-5 text-slate-500 max-w-3xl">
            <p>
              Software Engineer based in Croatia, specializing in technical
              education through hands-on learning and building applications.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Skills */}
      <section className="w-full py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="subhead-text text-center">My Skills</h3>

          <div className="mt-16 flex flex-wrap justify-center gap-12">
            {skills.map((skill) => (
              <div className="block-container w-20 h-20" key={skill.name}>
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Work Experience */}
      <section className="w-full py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="subhead-text text-center">Work Experience</h3>
          <div className="mt-5 flex flex-col gap-3 text-slate-500 text-center max-w-3xl mx-auto">
            <p>
              I've worked with all sorts of companies, leveling up my skills and
              teaming up with smart people. Here's the rundown:
            </p>
          </div>

          {/* The VerticalTimeline component works best within a constrained width,
              so placing it inside our content container is perfect. */}
          <div className="mt-12 flex">
            <VerticalTimeline>
              {experiences.map((experience) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  iconStyle={{ background: experience.iconBg }}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                  }}
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      {experience.title}
                    </h3>
                    <p
                      className="text-black-500 font-medium text-base"
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </p>
                  </div>

                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className="text-black-500/50 font-normal pl-1 text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* The CTA can now be in its own full-width section or contained */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTA />
        </div>
      </section>
    </main>
  );
};

export default About;
