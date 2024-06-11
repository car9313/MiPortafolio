import { FadeIn } from "../components/UI/FadeIn";
import Title from "../components/UI/Title";
import CardProyect from "../components/UI/CardProyect";
import { projects } from "../utils/source";
import { Project } from "../utils/types";
import { useEffect, useState } from "react";
import ProjectNavigation from "../components/UI/ProjectNavigation";

const Projects = () => {
  const [listActiveProjects, setListActivePorjects] =
    useState<Array<Project>>(projects);
  const [load, setLoad] = useState<boolean>(false);
  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 600);
  }, [listActiveProjects]);
  const getTabs = () => {
    const tabs = ["All"];
    projects.map((item) => {
      if (!tabs.includes(item.category)) {
        tabs.push(item.category);
      }
    });
    return tabs;
  };
  const handleActiveProjects = (value: string) => {
    if (value === "All") {
      setListActivePorjects(projects);
    } else {
      const projectsAux = projects.filter((item) => item.category === value);
      setListActivePorjects(projectsAux);
    }
  };

  return (
    <section id="projects" className="seccion bg-bgSecundary">
      <FadeIn>
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
        <ProjectNavigation
          tabs={getTabs()}
          onChange={handleActiveProjects}
          styleContainer="flex items-center justify-center pb-10 gap-1 md:gap-3"
          styleTab="relative bg-bgPrimary btn__navegation"
        />

        <div className="grid grid-cols-1 mdl:grid-cols-2 lgl:grid-cols-3 gap-6">
          {listActiveProjects.map((project) => {
            return (
              <CardProyect
                key={project.id}
                name={project.name}
                description={project.description}
                image={project.image}
                load={load}
              />
            );
          })}
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
