import { Posts } from "@/types/types";
import { CornerRightUp, Dot } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface PostProps {
  params: {
    postId: string;
  };
}

const Post: FC<PostProps> = async ({ params }) => {
  const { postId } = params;

  const posts = await fetch(`http://localhost:3000/api/posts/${postId}`);
  const jsonPost = await posts.json();
  const postData = jsonPost.post as Posts

  return (
    <div className="flexbox ">
      <div className="container pt-[5vh] flex flex-col md:flex-row w-full ">
        <div className="text-primary dark:text-primary-light flex flex-col gap-4 md:w-[70%]">
          <span className="bg-primary dark:bg-light-dark-background text-primary-light px-4 py-2 rounded-md w-fit">
            {postData.category}
          </span>
          <h1 className="text-3xl font-semibold">
            {postData.title}
          </h1>
          <div className="flex items-center text-slate-500">
            <span>{postData.createdAt.substring(0, 10)}</span>
            <Dot size={35} />
            <span className="pr-2">5 min read</span>
          </div>
          <Image
            width={500}
            height={400}
            src={"/assets/coding.jpg"}
            alt="laptop photo"
            className="rounded-md self-center"
          />
          <p className="text-lg text-p-text dark:text-p-text-dark">
           {postData.description}
          </p>
        </div>
        <div className="md:h-[80vh] md:w-[30%] flex items-center py-16 md:py-0">
          <div className=" w-full text-primary dark:text-primary-light">
            <span className="text-h2 font-semibold ">Read More On</span>
            <ul className="flex flex-col gap-4 pt-2 ">
              <li className="text-xl border-b-[2px] pb-1 border-primary hover:border-black dark:hover:border-primary-light cursor-pointer flex justify-between">
                <span>Web Development</span>{" "}
                <span className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-slate-100">
                  5
                </span>
              </li>
              <li className="text-xl border-b-[2px] pb-1 border-primary hover:border-black dark:hover:border-primary-light cursor-pointer flex justify-between">
                <span> Software Engineering</span>{" "}
                <span className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-slate-100">
                  5
                </span>
              </li>
              <li className="text-xl border-b-[2px] pb-1 border-primary hover:border-black  dark:hover:border-primary-light cursor-pointer flex justify-between">
                <span>Database Managment</span>{" "}
                <span className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-slate-100">
                  5
                </span>
              </li>
              <li className="text-xl border-b-[2px] pb-1 border-primary hover:border-black dark:hover:border-primary-light cursor-pointer flex justify-between">
                <span>Testing</span>{" "}
                <span className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-slate-100">
                  5
                </span>
              </li>
              <li className="text-xl border-b-[2px] pb-1 border-primary hover:border-black dark:hover:border-primary-light cursor-pointer flex justify-between">
                <span>Talks</span>{" "}
                <span className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-slate-100">
                  5
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;