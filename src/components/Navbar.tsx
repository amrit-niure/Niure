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
    <header className="sticky top-0 left-0 flexbox bg-light-background dark:bg-dark-background shadow-sm transition-all ease-in-out duration-200 z-10">
      <nav className="container h-header flex items-center text-primary w-full ">
        <Link href={"/"} className=" mr-auto dark:text-primary-light text-lg">
        <b className="text-3xl">Niure.</b>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 dark:text-primary-light text-lg">
        <Link href={"/posts"} className=" hover:opacity-80">
            Posts
          </Link>
          {/* <Link href={"/projects"} className=" hover:opacity-80">
            Projects
          </Link>
          <Link href={"/about"} className=" hover:opacity-80">
            About
          </Link> */}
       
     
          <div
            className="hover:bg-primary-light dark:hover:text-primary-dark rounded-full p-2  dark:text-primary-light"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </div>
        </div>
        {/* Mobile nav */}
        <div className="flex md:hidden">
          <Menu size={28} onClick={() => setShow(true)}  className="dark:text-primary-light"/>
          {show && (
            <Sidebar setShow={setShow} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
