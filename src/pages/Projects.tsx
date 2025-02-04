import { useState } from "react";
import PCard from "@/components/Pcard";
import { Button } from "@/components/ui/button";
import { IconType } from "react-icons";

type Projects = {
  title: string;
  href?: string;
  description: string;
  dates: string;
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon?: IconType;
    type: string;
    href: string;
  }[];
  className?: string;
};

import Data from "@/data/data";

export default function Project() {
  const projects: Projects[] = Data.projects;
  const [visibleProjects, setVisibleProjects] = useState(window.innerWidth >= 768 ? 6 : 4);

  const showMoreProjects = () => {
    setVisibleProjects((prevVisible) => prevVisible + (window.innerWidth >= 768 ? 6 : 4));
  };

  return (
    <div className="mx-auto pt-20" id="projects">
      <h3 className="mb-6 text-3xl font-bold">Projects</h3>
      <section className="flex flex-col items-center gap-8">
        <div className="mx-auto grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {projects.slice(0, visibleProjects).map((project) => (
            <PCard key={project.title} {...project} />
          ))}
        </div>
        {visibleProjects < projects.length && (
          <Button
            onClick={showMoreProjects}
            className="mb-20 rounded-lg bg-gray-800 text-white transition-colors hover:bg-gray-700"
          >
            Load More Projects
          </Button>
        )}
      </section>
    </div>
  );
}
