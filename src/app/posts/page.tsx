"use client"
import PostCard from "@/components/PostCard";
// import { Posts } from "@/types/types";
import { CornerRightUp, Dot, Search } from "lucide-react";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

const PostPage: FC =  () => {
  const [search, setSearch] = useState("");
const [posts, setPosts] = useState([])
  const handleSubmit = (event: any) => {
    event.preventDefault();
    setSearch("");
  };
useEffect(() =>{
  const fetchData = async () => {
    try {
      const posts = await fetch("https://www.amritniure.com.np/api/posts",{
        cache : "no-store"
      });
      const jsonPost = await posts.json();
      setPosts(jsonPost.posts)
      console.log(jsonPost.posts)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
 fetchData()
},[])

  return (
    <div className="flexbox flex-col">
      <div className="flex flex-col container gap-8">
        {/* blog posts and search bar */}
        <div className="flex flex-col  items-center justify-center  gap-2 pt-16">
          <h1 className="text-4xl text-primary dark:text-primary-light font-bold">
            Blog Posts
          </h1>
          <p className="text-center text-p-text dark:text-p-text-dark text-lg px-4 max-w-[500px] ">
            Let's embark on a shared learning journey through the ever-evolving
            world of tech, one step at a time.
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
              The Impact of Technology on Workplace : How Workplace is changing
            </h1>
            <p className="text-lg text-p-text dark:text-p-text-dark">
              Technology has ushered in a transformative era for the workplace,
              reshaping the very nature of how we work and collaborate. From the
              rise of remote work and digital communication tools to AI-powered
              automation and data-driven {" "}
            </p>
            <div className="flex items-center text-slate-500">
              <span>20 Jun 2023</span>
              <Dot size={35} />
              <span className="pr-2">5 min read</span>
              <CornerRightUp size={20} />
            </div>
          </div>
        </div>
        <div className="text-h1 text-primary dark:text-p-text-dark font-semibold px-4 md:px-0">
          Recent Posts..
        </div>
        <div className='flex flex-col md:flex-row gap-8 flex-wrap justify-between'>
          {" "}
          {posts?.map((post) => (
            <PostCard content={post}  />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostPage;


// import { FC } from 'react';

// interface PostPageProps {};

// const PostPage: FC<PostPageProps> = ({}) => {
//   return <div> Page Post  </div>;
// };

// export default PostPage;