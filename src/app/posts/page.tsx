"use client";
import {
  CircleDot,
  CircleDotDashed,
  CornerRightUp,
  Dot,
  Search,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

interface PostsProps {}

const Posts: FC<PostsProps> = ({}) => {
  const [search, setSearch] = useState("");
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setSearch("");
  };

  const blogContent =[ 
    {
    id: 1,
    category: "Web Development",
    title: "The Impact of Technology on Workplace : How Workplace is changing",
    desc : "Technology has ushered in a transformative era for the workplace, reshaping the very nature of how we work and collaborate.",
    tags : ['web development','front-end','react'],
    date : "20 Jun 2023",
    readingTime : '5',
    img : "/assets/coding.jpg",
  },
    {
      id:2,
    category: "DevOps",
    title: "The Impact of Devops on Productivity : How it is changing",
    desc : "DevOps is the combination of cultural philosophies, practices, and tools that increases an organization's ability to deliver applications and services at high velocity: ",
    tags : ['web development','front-end','react'],
    date : "22 Jun 2023",
    readingTime : '5',
    img : "/assets/coding.jpg",

  },
    {
    id: 3,
    category: "Web Development",
    title: "The Impact of Technology on Workplace : How Workplace is changing",
    desc : "Technology has ushered in a transformative era for the workplace, reshaping the very nature of how we work and collaborate.",
    tags : ['web development','front-end','react'],
    date : "20 Jun 2023",
    readingTime : '5',
    img : "/assets/coding.jpg",
  },
    {
      id:4,
    category: "DevOps",
    title: "The Impact of Devops on Productivity : How it is changing",
    desc : "DevOps is the combination of cultural philosophies, practices, and tools that increases an organization's ability to deliver applications and services at high velocity: ",
    tags : ['web development','front-end','react'],
    date : "22 Jun 2023",
    readingTime : '5',
    img : "/assets/coding.jpg",

  },
    {
    id: 5,
    category: "Web Development",
    title: "The Impact of Technology on Workplace : How Workplace is changing",
    desc : "Technology has ushered in a transformative era for the workplace, reshaping the very nature of how we work and collaborate.",
    tags : ['web development','front-end','react'],
    date : "20 Jun 2023",
    readingTime : '5',
    img : "/assets/coding.jpg",
  },
    {
      id:6,
    category: "DevOps",
    title: "The Impact of Devops on Productivity : How it is changing",
    desc : "DevOps is the combination of cultural philosophies, practices, and tools that increases an organization's ability to deliver applications and services at high velocity: ",
    tags : ['web development','front-end','react'],
    date : "22 Jun 2023",
    readingTime : '5',
    img : "/assets/coding.jpg",

  },
    {
    id: 7,
    category: "Web Development",
    title: "The Impact of Technology on Workplace : How Workplace is changing",
    desc : "Technology has ushered in a transformative era for the workplace, reshaping the very nature of how we work and collaborate.",
    tags : ['web development','front-end','react'],
    date : "20 Jun 2023",
    readingTime : '5',
    img : "/assets/coding.jpg",
  },
    {
      id:8,
    category: "DevOps",
    title: "The Impact of Devops on Productivity : How it is changing",
    desc : "DevOps is the combination of cultural philosophies, practices, and tools that increases an organization's ability to deliver applications and services at high velocity: ",
    tags : ['web development','front-end','react'],
    date : "22 Jun 2023",
    readingTime : '5',
    img : "/assets/coding.jpg",

  },
]
  return (
    <div className="flexbox flex-col">
      <div className="flex flex-col container gap-8">
        {/* blog posts and search bar */}
        <div className="flex flex-col  items-center justify-center  gap-2 pt-24">
          <h1 className="text-4xl text-primary dark:text-primary-light font-bold">
            Blog Posts
          </h1>
          <p className="text-center text-p-text dark:text-p-text-dark text-lg px-4 max-w-[500px] ">
            Let's embark on a shared learning journey through the 
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
        {/* banner poster */}
          <div className="flex lg:flex-row lg:items-end gap-8 flex-col justify-center items-center px-4 md:px-0 ">
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
<div className="text-h1 text-primary font-semibold px-4 md:px-0">
  Recent Posts..
</div>
        {/*  list of posts */}
          <div className="flex flex-col md:flex-row gap-8 flex-wrap justify-between ">
            {/* post card */}
            {blogContent.map((post) =>  ( 
            <Link href={`/posts/${post.id}`}> 
            <div className="flex gap-8 flex-col  items-center " key={post.id}>
              <Image
                width={400}
                height={300}
                src={post.img}
                alt="laptop photo"
                className="rounded-md md:max-w-[300px]"
                />
              <div className="text-primary dark:text-primary-light flex flex-col gap-2 w-[400px] md:max-w-[300px]">
                <span className="bg-primary dark:bg-light-dark-background text-primary-light px-4 py-2 rounded-md w-fit text-sm">
                 {post.category}
                </span>
                <h1 className="text-2xl font-semibold">
                 {post.title}
                </h1>
                <p className="text-lg text-p-text dark:text-p-text-dark text-justify">
                 {post.desc.split(' ').slice(0, 20).join(' ')}...
                </p>
                <div className="flex items-center text-slate-500">
                  <span>{post.date}</span>
                  <Dot size={35} />
                  <span className="pr-2">{post.readingTime} min read</span>
                  <CornerRightUp size={20} />
                </div>
              </div>
            </div>
                </Link>
            
            ))}

            
            

            
          </div>
      </div>
    </div>
  );
};

export default Posts;
