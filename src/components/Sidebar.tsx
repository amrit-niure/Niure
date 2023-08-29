"use client";
import { FC } from "react";
import { X, BookOpen,Code } from "lucide-react";
import Link from "next/link";
interface SidebarProps {
  setShow: (value: boolean) => void;
}

const Sidebar: FC<SidebarProps> = ({ setShow }) => {
  const options = [
    {
      id: 1,
      name: "Posts",
      Icon: BookOpen,
      href: "/posts",
    },
    {
      id: 1,
      name: "Projects",
      Icon: Code,
      href: "/projects",
    },
    {
      id: 1,
      name: "Posts",
      Icon: BookOpen,
      href: "/posts",
    },
  ];
  return (
    <div className="absolute top-0 right-0 bg-slate-100 w-[200px] h-[100vh] text-primary transition ease-linear duration-500">
      <div className="w-full h-header px-4 flex items-center ">
        <X
          className="ml-auto cursor-pointer"
          size={28}
          onClick={() => setShow(false)}
        />
      </div>
      <div className="">
        {options.map((option) => {
          const Icon = option.Icon;
          return (
            <li className="group">
            <Link
              href={option.href}
              className="text-gray-700 hover:text-indigo-600 dark:hover:text-slate-900 hover:bg-gray-50 group flex gap-3 rounded-md p-2 text-sm font-semibold dark:text-slate-200 items-center border-b-2"
            >
              <Icon />
              <span className="truncate">{option.name}</span>
            </Link>
          </li>
          
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
