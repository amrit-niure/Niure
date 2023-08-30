"use client";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu } from "lucide-react";
import Link from "next/link";
import { FC, useState } from "react";
import { X } from "lucide-react";
import Sidebar from "./Sidebar";
interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const [show, setShow] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  return (
    <header className="sticky top-0 left-0 flexbox bg-slate-50 dark:bg-slate-900 shadow-sm transition-all ease-in-out duration-200 z-10">
      <nav className="container h-header flex items-center text-primary w-full ">
        <Link href={"/"} className="font-semibold mr-auto dark:text-slate-100 text-lg">
          Amrit
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 dark:text-slate-100">
          <Link href={"/posts"} className=" hover:opacity-80">
            Post
          </Link>
          <div
            className="hover:bg-slate-100 dark:hover:text-slate-900 rounded-full p-2  dark:text-slate-100"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </div>
        </div>
        {/* Mobile nav */}
        <div className="flex md:hidden">
          <Menu onClick={() => setShow(true)}  className="dark:text-slate-100"/>
          {show && (
            <Sidebar setShow={setShow} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
