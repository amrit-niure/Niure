import { Info, MoveRight } from "lucide-react";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
import { FC } from "react";
import { Tooltip } from "@mui/material";
import Link from "next/link";

interface ProjectsProps {}
const projectsOptions = [
  {
    id: 1,
    name: "Confession",
    desc: "Social Confession Sharing App",
    live: "https://amritniure.com.np",
    github: "https://github.com/amrit-niure",
    img: "/projects/jobsportal.png",
  },
  {
    id: 2,
    name: "Confession",
    desc: "Social Confession Sharing App",
    live: "https://amritniure.com.np",
    github: "https://github.com/amrit-niure",
    img: "/projects/confession.png",
  },
  {
    id: 3,
    name: "Confession",
    desc: "Social Confession Sharing App",
    live: "https://amritniure.com.np",
    github: "https://github.com/amrit-niure",
    img: "/projects/confession.png",
  },
  {
    id: 4,
    name: "Confession",
    desc: "Social Confession Sharing App",
    live: "https://amritniure.com.np",
    github: "https://github.com/amrit-niure",
    img: "/projects/jobsportal.png",
  },
];

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <div className="flexbox  flex-col w-full gap-8 group " id="projects">
      <div>
        <h1 className="text-center text-h1 font-bold ">
          Projects
        </h1>
        <p className="text-center  text-p-text dark:text-p-text-dark ">
          Discover a selection of my recent projects showcasing my creativity
          and skills in action.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 items-center justify-center  max-w-[1024px]">
        {/* card  */}
        {projectsOptions.map((project) => (
          <div
            className="flex flex-col gap-2 px-2 py-4 bg-white rounded-xl shadow-lg dark:text-slate-900 cursor-pointer  w-[420px] h-[280px] "
            key={project.id}
          >
            <div className="relative overflow-hidden group  h-full w-full ">
              <Image
                fill
                alt="project"
                src={project.img}
                className="rounded-lg transform scale-100 hover:scale-105 transition-transform duration-300 relative"
              />
              <div className="absolute top-0 left-0 w-full h-full  bg-white bg-opacity-0 hover:bg-opacity-60 hover:text-opacity-100  text-opacity-0 transition-all duration-300 rounded-lg flex flex-col items-center justify-center text-primary  ease-in ">
                <h1 className="text-h2 font-semibold">{project.name}</h1>
                <p className="text-sm flex items-center gap-1 pb-2">
                  {project.desc}
                </p>
                <div className="flexbox gap-2">
                  <a href={project.github} target="_blank">
                    <Tooltip title="GitHub">
                      <BsGithub className="text-2xl" />
                    </Tooltip>
                  </a>
                  <a href={project.live} target="_blank">
                    <Tooltip title="Live" arrow>
                      <AiOutlineLink className="text-2xl" />
                    </Tooltip>
                  </a>
                </div>
              </div>
              <div className="flex indent-1 absolute bottom-0  bg-white bg-opacity-70  w-full p-2  ">
                <div className="">
                  <h1 className="text-h2 font-semibold">Confession</h1>
                  <a href={project.live} target="_blank" className="text-sm  ">
                    <span className="flex items-center gap-2 text-p-text ">
                      Live Demo <MoveRight size={18} />
                    </span>
                  </a>
                </div>
          
                <Link href="/projects" className="flex gap-2 ml-auto">
                  <span className=" flex items-center gap-2 mt-auto  text-p-text ">
                    {" "}
                    More Info <Info size={18} />{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
