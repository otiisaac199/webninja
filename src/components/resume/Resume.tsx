import Title from "../layouts/Title";
import Achievement from "./Achievement";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

const Resume = () => {
  return (
    <section
      id="resume"
      className="w-full py-20 border-b-[1px] border-b-black "
    >
      <div className="flex justify-center items-center text-center">
        <Title title="3+ YEARS OF EXPERIENCE" desc="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-4">
          <li className="resumeLi">Education</li>
          <li className="resumeLi">Professional SKill</li>
          <li className="resumeLi">Experience</li>
          <li className="resumeLi">Achievements</li>
        </ul>
      </div>
      {/* <Education /> */}
      {/* <Skills /> */}
      {/* <Achievement /> */}
      <Experience />
    </section>
  );
};

export default Resume;
