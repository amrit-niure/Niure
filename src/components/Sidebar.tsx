"use client";
import { FC } from "react";
import { X, BookOpen, Code, User2, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Options } from "@/types/types";
interface SidebarProps {
  setShow: (value: boolean) => void;
}

const Sidebar: FC<SidebarProps> = ({ setShow }) => {
  const { theme, setTheme } = useTheme();
  const options = [
    {
      id: 1,
      name: "Post",
      Icon: BookOpen,
      href: "/posts",
    },
    {
      id: 2,
      name: "Projects",
      Icon: Code,
      href: "/projects",
    },
    {
      id: 3,
      name: "About",
      Icon: User2,
      href: "/about",
    },
  ];
  return (
    <div className="absolute top-0 right-0 flex flex-col bg-slate-100 w-[200px] h-[100vh] text-primary transition ease-in-out duration-200 dark:bg-slate-900 z-10">
      <div className="w-full h-header  px-4 flex items-center ">
        <X
          className="ml-auto cursor-pointer h-10 w-10 hover:bg-slate-200 px-2 rounded-full text-xl dark:text-slate-100 hover:text-primary"
          size={25}
          onClick={() => setShow(false)}
        />
      </div>
      <div className="">
        {options.map((option) => {
          const Icon = option.Icon;
          return (
            <li className="group" onClick={() => setShow(false)}>
              <Link
                href={option.href}
                className="text-gray-700 hover:text-purple-800 dark:hover:text-slate-900 hover:bg-gray-50 group flex gap-3 p-2 text-sm  dark:text-slate-200 items-center border-b-[1px]"
              >
                <Icon size={20} />
                <span className="truncate">{option.name}</span>
              </Link>
            </li>
          );
        })}
        <div
          className="hover:bg-slate-100 dark:hover:text-slate-900  p-2  dark:text-slate-100 flex gap-4 cursor-pointer text-sm"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={18} />}{" "}
          {theme === "dark" ? "Light" : "Dark"} Mode
        </div>
      </div>
      <div className="text-sm mt-auto px-2 flex items-center gap-4">
        <div className="flex flex-col">

        <span className="dark:text-slate-100">Social Links</span>
        <span className="w-28 h-[1px] bg-primary rounded-full "></span>
        </div>
        <div className="flex gap-2 ml-auto pr-4">
          <a
            href="https://www.linkedin.com/in/amrit-niure-313a75230/"
            target="_blank"
          >
            <BsLinkedin className=" text-primary dark:text-white" />
          </a>
          <a href="https://github.com/amrit-niure" target="_blank">
            <BsGithub className=" text-primary dark:text-white" />
          </a>
        </div>
      </div>
      <div className="pb-2 dark:text-slate-100">
       <span className="text-xs italic"> &copy; Amrit Niure 2023</span>
      </div>
    </div>
  );
};

export default Sidebar;
