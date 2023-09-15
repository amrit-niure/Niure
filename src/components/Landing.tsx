import { FC } from "react";
import Button from "./Button";
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
import Image from "next/image";
import Link from "next/link";

interface LandingProps {}
const Landing: FC<LandingProps> = ({}) => {
  return (
    <div
      className={`px-4 flex gap-16 flex-col items-center  justify-center pt-[15vh]  md:pt-[15vh] text-lg`}
    >
      <div className="flex gap-2 flex-col items-center justify-center">
      <Image
            width={250}
            height={250}
            src={'/assets/profile.png'}
            alt="laptop photo"
            className="rounded-full self-center  w-[150px] h-[150px] px-4 pt-4 bg-light-dark-background dark:bg-black shadow-lg dark:border-slate-700 border-[.15rem] "
          />
        <h1 className="text-3xl text-center ">
          <span className="text-4xl">👋</span>, I am{" "}
          <span className="font-bold ">Amrit Niure , </span> <br />
          <span className="font-bold">
            {" "}
            Software Developer
          </span>{" "}
        </h1>
        <p className="text-center text-lg italic pb-4  text-p-text dark:text-p-text-dark">
          Turning Complex Business Challenges into Elegant Solutions.{" "}
        </p>
        <div className="flex gap-4 ">

        <Button variant={'outlined'} className="border-primary text-primary hover:border-[3px] "> Resume </Button>
      <Link href={'#contact'}> <Button> 🪶 Hire Me</Button> </Link>  
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center ">
        <p
          className={`text-center md:text-left w-lg md:w-[968px] bg-slate-100 dark:bg-slate-800 italic p-4 rounded-sm  text-p-text dark:text-p-text-dark`}
        >
          <span className="text-xl ">🤝</span>❝ Greetings! I am <b>software developer</b> of Nepali origin,
          currently pursuing Bachelor of Business Information Systems (Exp. 2025). Rooted in innovation, I consistently conceive novel
          ideas aimed at <b> enhancing lives</b> while staying abreast of evolving tools
          and technologies.❞
        </p>
      
      </div>
      <div className="flex gap-8 flex-col items-center justify-items-center">
        <h1 className="text-h1  text-center font-bold">
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
          <p className="text-center text-lg  text-p-text dark:text-p-text-dark">
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
