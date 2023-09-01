import { Info, MoveRight } from "lucide-react";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
import { FC } from "react";
import { Tooltip } from "@mui/material";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <div className="flexbox flex-col gap-8">
      <h1 className="text-center text-h1 font-semibold underline">Projects</h1>
      <div className="flex flex-wrap items-center justify-center">
        <div className="flex flex-col gap-2 px-2 py-4 bg-white w-fit rounded-xl shadow-lg dark:text-slate-900 cursor-pointer">
          <div className="relative overflow-hidden">
            <Image
              width={400}
              height={500}
              alt="project"
              src={"/projects/confession.png"}
              className="rounded-lg transform scale-100 hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-0 left-0 w-full h-full  bg-white bg-opacity-0 hover:bg-opacity-60 hover:text-opacity-100  text-opacity-0 transition-opacity duration-300 rounded-lg flex flex-col items-center justify-center text-primary transi ease-in ">
              <h1 className="text-h2 font-semibold">Confession</h1>
              <p className="text-sm flex items-center gap-1 pb-2">
                Social confession sharing app
              </p>
              <div className="flexbox gap-2">
                <a href="/">
                  <Tooltip title="GitHub">
                    <BsGithub className="text-2xl" />
                  </Tooltip>
                </a>
                <a href="/">
                  <Tooltip title="Live" arrow>
                    <AiOutlineLink className="text-2xl" />
                  </Tooltip>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col indent-1">
            <h1 className="text-h2 font-semibold">Confession</h1>
            <p className="text-sm  flex items-center gap-1">
              Live Demo <MoveRight size={18} />
             <span className="flex ml-auto gap-2">More Info <Info  size={18}  /> </span> 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
