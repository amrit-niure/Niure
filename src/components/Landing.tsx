import { FC } from "react";
import Button from "./Button";
import Image from "next/image";
import {
  Docker,
  Github,
  Mongodb,
  Next,
  Node,
  ReactSvg,
  Redis,
  Tailwind,
  Prisma,
} from "@/components/Icons/svg";
import { Tooltip } from "@mui/material";

interface LandingProps {}
const Landing: FC<LandingProps> = ({}) => {
  return (
    <div
      className={`px-4 flex gap-16 flex-col items-center  justify-center pt-[15vh]  md:pt-[25vh]`}
    >
      <div className="flex gap-2 flex-col items-center justify-center">
        <h1 className="text-3xl text-center ">
          <span className="text-3xl">👋</span>, I am{" "}
          <span className="font-bold">Amrit Niure , </span>
          <span className="font-bold">
            {" "}
            Software <br /> Developer
          </span>{" "}
        </h1>
        <p className="text-center text-lg italic pb-4">
          Turning Complex Business Challenges into Elegant Solutions.{" "}
        </p>
        <Button> 🪶 Hire Me</Button>
      </div>
      <div className="w-full flex flex-col items-center justify-center ">
        <p
          className={`text-center md:text-left w-lg md:w-[750px] bg-slate-100 dark:bg-slate-800 italic p-4 rounded-sm `}
        >
          🤝❝ Greetings! I am <b>software developer</b> of Nepali origin,
          currently pursuing Bachelor of Business Information Systems at
          AIHE(Exp. 2025). Rooted in innovation, I consistently conceive novel
          ideas aimed at <b> enhancing lives</b> while staying abreast of evolving tools
          and technologies.❞
        </p>
      </div>
      <div className="flex gap-8 flex-col items-center justify-items-center">
        <h1 className="text-h1 underline text-center ">
          Tools and Technologies I Use
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 w-lg md:w-[750px] px-2">
          <div className="hover:bg-slate-200 px-2 md:px-4 py-2 rounded-lg cursor-pointer ">
            <Node />
          </div>
          <div className="hover:bg-slate-200 px-2 md:px-4 py-2 rounded-lg cursor-pointer ">
            <Mongodb />
          </div>
          <div className="hover:bg-slate-200 px-2 md:px-4 py-2 rounded-lg cursor-pointer ">
            <Next />
          </div>
          <div className="hover:bg-slate-200 px-2 md:px-4 py-2 rounded-lg cursor-pointer ">
            <ReactSvg />
          </div>
          <div className="hover:bg-slate-200 px-2 md:px-4 py-2 rounded-lg cursor-pointer ">
            <Tailwind />
          </div>
          <div className="hover:bg-slate-200 px-2 md:px-4 py-2 rounded-lg cursor-pointer ">
            <Docker />
          </div>
          <div className="hover:bg-slate-200 px-2 md:px-4 py-2 rounded-lg cursor-pointer ">
            <Github />
          </div>
          <div className="hover:bg-slate-200 px-2 md:px-4 py-2 rounded-lg cursor-pointer ">
            <Redis />
          </div>
          <div className="hover:bg-slate-200 px-2 md:px-4 py-2 rounded-lg cursor-pointer ">
            <Prisma />
          </div>
        </div>
        <div className="w-lg md:w-[750px] px-4 ">
          <p className="text-center text-lg">
            I'm well-versed in a variety of modern web development tools,
            frameworks, and databases, enabling me to create <b>dynamic </b> and
           <b> efficient</b> digital solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
