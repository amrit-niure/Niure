import { FC } from 'react';
import { BsLinkedin, BsGithub } from "react-icons/bs";

interface FloatingIconsProps {};

const FloatingIcons: FC<FloatingIconsProps> = ({}) => {
  return <div className="absolute left-0  top-[30vh] lg:left-[12vw] lg:top-[40vh] flex flex-col gap-4 items-center ">
  <a
    href="https://www.linkedin.com/in/amrit-niure-313a75230/"
    target="_blank"
    className=" max-w-max p-3 rounded-md shadow-lg flex text-base transition duration-400 dark:bg-slate-800 hover:bg-purple-400 hover:text-white dark:hover:bg-purple-400 dark:hover:text-white"
  >
    <BsLinkedin className="text-lg text-primary dark:text-white" />
  </a>
  <a
    href="https://github.com/amrit-niure"
    target="_blank"
    className="  max-w-max p-3 rounded-md shadow-lg flex text-base transition duration-400 dark:bg-slate-800 hover:bg-purple-400 hover:text-white dark:hover:bg-purple-400 dark:hover:text-white"
  >
    <BsGithub className="text-lg text-primary dark:text-white" />
  </a>
  <span className="w-0.5 h-20 bg-primary hidden md:flex dark:bg-slate-100  "></span>
</div>
};

export default FloatingIcons;