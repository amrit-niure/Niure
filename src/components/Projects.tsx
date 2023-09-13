import { LinkIcon } from "lucide-react";
import Image from "next/image";

import { FC } from "react";
import { Tooltip } from "@mui/material";
import Link from "next/link";
import { GrGithub } from "react-icons/gr";

interface ProjectsProps {}
const projectsOptions = [
  {
    id: 1,
    name: "Confession",
    desc: "ConfessHub is your anonymous confessional and community hub, where you can share your deepest secrets, comment on others' confessions, and explore diverse categories of personal stories.",
    live: "https://confession-three.vercel.app/",
    github: "https://github.com/amrit-niure/Confession",
    img: "/projects/confession.png",
    tags: ["react", "nextjs", "mongodb", "vercel", "expressjs", "formik"],
  },
  {
    id: 2,
    name: "Job Hunters",
    desc: "JobHunters is your one-stop destination for job seekers and employers alike. Employers can effortlessly post jobs and review applicants, while job seekers can easily apply and explore diverse opportunities.",
    live: "https://job-hunters.vercel.app/",
    github: "https://github.com/amrit-niure/Jobs-Portal",
    img: "/projects/jobsportal.png",
    tags: ["react", "nextjs", "mongodb", "vercel", "expressjs", "formik"],
  },
  {
    id: 3,
    name: "Pegion",
    desc: "Connect instantly, securely, and effortlessly with friends and colleagues. Say goodbye to delays and embrace seamless communication with Pegion: The Messanger.",
    live: "https://pegion-the-messenger.vercel.app/dashboard",
    github: "https://github.com/amrit-niure/pegion-the-messenger",
    img: "/projects/confession.png",
    tags: ["react", "nextjs", "mongodb", "vercel", "expressjs", "formik"],
  },
  {
    id: 4,
    name: "Manage",
    desc: "Responsive Website (Frontend)",
    live: "https://manager-psi.vercel.app/",
    github: "https://github.com/amrit-niure/manager",
    img: "/projects/manage.png",
    tags: ["react", "nextjs", "mongodb", "vercel", "expressjs", "formik"],
  },
];

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <div className="flexbox  flex-col w-full gap-8 group " id="projects">
      <div>
        <h1 className="text-center text-h1 font-bold ">Projects</h1>
        <p className="text-center  text-p-text dark:text-p-text-dark ">
          Discover a selection of my recent projects showcasing my creativity
          and skills in action.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 items-center justify-center  max-w-[1024px]">
        {/* card  */}
        {projectsOptions.map((project) => (
          <div
            className="flex px-4 py-4 bg-white dark:bg-light-dark-background rounded-sm shadow-lg dark:text-primary-light cursor-pointer border-light-background border-[1px] dark:border-dark-background dark:hover:border-light-gray w-[420px] md:w-[500px] h-[600px] transition-all duration-100 "
            key={project.id}
          >
            {/* <div className="relative overflow-hidden group h-full w-full "> */}
            <div className="flex flex-col items-center gap-4">
              {/* <Image
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
              </div> */}
              {/* <div className="flex indent-1 absolute bottom-0  bg-white bg-opacity-70  w-full p-2  ">
                <div className="">
                  <h1 className="text-h2 font-semibold">{project.name}</h1>
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
              </div> */}

              <h1 className="text-h1 font-semibold self-start ">
                {project.name}
              </h1>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span className="px-4 py-1 rounded-md dark:bg-primary-dark text-sm bg-slate-100 dark:text-light-gray ">
                    {tag}
                  </span>
                ))}
              </div>
              <Image
                width={500}
                height={600}
                alt="project"
                src={project.img}
                className="rounded-sm transform scale-100 hover:scale-105 transition-transform duration-300 relative w-[500px] flex items-center justify-center  h-[300px] "
              />
              <p className="text-sm dark:text-light-gray text-p-text">
                {project.desc}
              </p>
              <div className="self-start flex gap-4 text-sm">
                <Tooltip title="Live" arrow>
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 dark:bg-dark-background px-2 py-1 rounded-sm bg-slate-200 hover:underline"
                  >
                    Live <LinkIcon size={15} />
                  </a>
                </Tooltip>
                <Tooltip title="Github" arrow>
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 dark:bg-dark-background px-2 py-1 rounded-sm bg-slate-200 "
                  >
                      Source Code <GrGithub size={15} />{" "}
                  </a>
                </Tooltip>

               
           
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
