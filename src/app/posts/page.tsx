"use client";
import {
  CircleDot,
  CircleDotDashed,
  CornerRightUp,
  Dot,
  Search,
} from "lucide-react";
import Image from "next/image";
import { FC, useState } from "react";

interface PostsProps {}

const Posts: FC<PostsProps> = ({}) => {
  const [search, setSearch] = useState("");
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setSearch("");
  };
  return (
    <div className="flexbox flex-col">
      <div className="flex flex-col container">
        <div className="flex flex-col  items-center justify-center py-8 gap-2 pt-24">
          <h1 className="text-4xl text-primary dark:text-primary-light font-bold">
            Blog Posts
          </h1>
          <p className="text-center text-p-text dark:text-p-text-dark text-lg">
            Let's embark on a shared learning journey through the <br />
            ever-evolving world of tech, one step at a time.
          </p>
          <form onSubmit={handleSubmit} className="flex items-center pt-8">
            <input
              type="text"
              name="search"
              value={search}
              placeholder="Search blogs by title, tags and keywords"
              className="px-[1rem] focus:outline-none  py-[1rem] h-[40px] rounded-l-md text-light-primary w-[70vw] max-w-[500px]  text-slate-500 bg-[#FFEBEB]"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type="submit"
              className="h-[40px] w-[40px] flex items-center justify-center bg-[#FFEBEB] hover:bg-slate-100 rounded-r-md"
            >
              <Search className="text-primary" />
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-16  ">
          <div className="flex lg:flex-row lg:items-end gap-8 flex-col justify-center items-center px-16 ">
            <Image
              width={500}
              height={400}
              src={"/assets/coding.jpg"}
              alt="laptop photo"
              className="rounded-md"
            />
            <div className="text-primary dark:text-primary-light flex flex-col gap-2">
              <span className="bg-primary dark:bg-light-dark-background text-primary-light px-4 py-2 rounded-md w-fit">
                Technology
              </span>
              <h1 className="text-3xl font-semibold">
                The Impact of Technology on Workplace : How Workplace is
                changing
              </h1>
              <p className="text-lg text-p-text dark:text-p-text-dark">
                Technology has ushered in a transformative era for the
                workplace, reshaping the very nature of how we work and
                collaborate. From the rise of remote work and digital
                communication tools to AI-powered automation and data-driven
                decision-making.{" "}
              </p>
              <div className="flex items-center text-slate-500">
                <span>20 Jun 2023</span>
                <Dot size={35} />
                <span className="pr-2">5 min read</span>
                <CornerRightUp size={20} />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 flex-wrap justify-around ">
            <div className="flex gap-8 flex-col px-4 items-center">
              <Image
                width={300}
                height={200}
                src={"/assets/coding.jpg"}
                alt="laptop photo"
                className="rounded-md"
              />
              <div className="text-primary dark:text-primary-light flex flex-col gap-2 w-[300px]">
                <span className="bg-primary dark:bg-light-dark-background text-primary-light px-4 py-2 rounded-md w-fit text-sm">
                  Technology
                </span>
                <h1 className="text-xl font-semibold">
                  The Impact of Technology on Workplace : How Workplace is
                  changing
                </h1>
                <p className=" text-p-text dark:text-p-text-dark text-justify">
                  Technology has ushered in a transformative era for the
                  workplace, reshaping the very nature of how we work and
                  collaborate.{" "}
                </p>
                <div className="flex items-center text-slate-500">
                  <span>20 Jun 2023</span>
                  <Dot size={35} />
                  <span className="pr-2">5 min read</span>
                  <CornerRightUp size={20} />
                </div>
              </div>
            </div>

            <div className="flex gap-8 flex-col px-4 items-center ">
              <Image
                width={300}
                height={200}
                src={"/assets/coding.jpg"}
                alt="laptop photo"
                className="rounded-md"
              />
              <div className="text-primary dark:text-primary-light flex flex-col gap-2 w-[300px]">
                <span className="bg-primary dark:bg-light-dark-background text-primary-light px-4 py-2 rounded-md w-fit text-sm">
                  Technology
                </span>
                <h1 className="text-xl font-semibold">
                  The Impact of Technology on Workplace : How Workplace is
                  changing
                </h1>
                <p className=" text-p-text dark:text-p-text-dark text-justify">
                  Technology has ushered in a transformative era for the
                  workplace, reshaping the very nature of how we work and
                  collaborate.{" "}
                </p>
                <div className="flex items-center text-slate-500">
                  <span>20 Jun 2023</span>
                  <Dot size={35} />
                  <span className="pr-2">5 min read</span>
                  <CornerRightUp size={20} />
                </div>
              </div>
            </div>

            <div className="flex gap-8 flex-col px-4 items-center ">
              <Image
                width={300}
                height={200}
                src={"/assets/coding.jpg"}
                alt="laptop photo"
                className="rounded-md"
              />
              <div className="text-primary dark:text-primary-light flex flex-col gap-2 w-[300px]">
                <span className="bg-primary dark:bg-light-dark-background text-primary-light px-4 py-2 rounded-md w-fit text-sm">
                  Technology
                </span>
                <h1 className="text-xl font-semibold">
                  The Impact of Technology on Workplace : How Workplace is
                  changing
                </h1>
                <p className=" text-p-text dark:text-p-text-dark text-justify">
                  Technology has ushered in a transformative era for the
                  workplace, reshaping the very nature of how we work and
                  collaborate.{" "}
                </p>
                <div className="flex items-center text-slate-500">
                  <span>20 Jun 2023</span>
                  <Dot size={35} />

                  <span className="pr-2">5 min read</span>
                  <CornerRightUp size={20} />
                </div>
              </div>
            </div>
            <div className="flex gap-8 flex-col px-4 items-center ">
              <Image
                width={300}
                height={200}
                src={"/assets/coding.jpg"}
                alt="laptop photo"
                className="rounded-md"
              />
              <div className="text-primary dark:text-primary-light flex flex-col gap-2 w-[300px]">
                <span className="bg-primary dark:bg-light-dark-background text-primary-light px-4 py-2 rounded-md w-fit text-sm">
                  Technology
                </span>
                <h1 className="text-xl font-semibold">
                  The Impact of Technology on Workplace : How Workplace is
                  changing
                </h1>
                <p className=" text-p-text dark:text-p-text-dark text-justify">
                  Technology has ushered in a transformative era for the
                  workplace, reshaping the very nature of how we work and
                  collaborate.{" "}
                </p>
                <div className="flex items-center text-slate-500">
                  <span>20 Jun 2023</span>
                  <Dot size={35} />

                  <span className="pr-2">5 min read</span>
                  <CornerRightUp size={20} />
                </div>
              </div>
            </div>

            
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
