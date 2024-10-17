import Title from "../layouts/Title";
import ProjectCard from "./ProjectCard";
import { projectOne, projectTwo, projectThree } from "../../assets";

const Projects = () => {
  return (
    <section className="w-full py-20 border-b-[1px] border-b-black ">
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          desc="My Projects"
        />
      </div>
      <div className="grid grid-cols-3 gap-14">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
