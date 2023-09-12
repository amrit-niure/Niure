import { Posts } from "@/types/types";
import { CornerRightUp, Dot } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import parse from "html-react-parser";
import { CodeBlock, Code } from "@/codeblocks/Codeblock";
import axios from 'axios'
interface PostProps {
  params: {
    postId: string;
  };
}

const Post: FC<PostProps> = async ({ params }) => {
  const { postId } = params;

  const posts = await fetch(`https://amritniure.com.np/api/posts/${postId}`,{
    cache : "no-store"
  });
  const jsonPost = await posts.json(); 
 // Handle the fetched data here
 const postData = jsonPost.post as Posts
 console.log(postData);

  const formatContent = (content: string) => {
    const parsedContent = parse(content);
    return parsedContent;
  };

   
  const codeExample = `
    import { Formik, Field, Form, ErrorMessage } from 'formik';
  `;

  return (
    <div className="flexbox ">
      <div className="container pt-[5vh] flex flex-col md:flex-row w-full md:gap-8 ">
        <div className="text-primary dark:text-primary-light flex flex-col gap-4 md:w-[70%]">
          <span className="bg-primary dark:bg-light-dark-background text-primary-light px-4 py-2 rounded-md w-fit">
            {postData.category}
          </span>
          <h1 className="text-3xl font-semibold">{postData.title}</h1>
          <div className="flex items-center text-slate-500">
            <span>{postData.createdAt}</span>
            <Dot size={35} />
            <span className="pr-2">5 min read</span>
          </div>
          {/* <Image
            width={500}
            height={400}
            src={postData.image[0]}
            alt="laptop photo"
            className="rounded-md self-center"
          />
          <div>{formatContent(postData.description[0])}</div>
          <div className="bg-primary-dark px-2 text-white dark:bg-black rounded-md">
            <CodeBlock
              language="javascript"
              code={postData.code[0]}
              fileName="ab.txt"
            />
          </div>
          <div>{formatContent(postData.description[1])}</div>
          <div className="bg-primary-dark px-2 text-white dark:bg-black rounded-md">
            <CodeBlock
              language="javascript"
              code={postData.code[2]}
              fileName="abcd.txt"
            />
          </div>
          <Image
            width={500}
            height={400}
            src={postData.image[1]}
            alt="laptop photo"
            className="rounded-md self-center"
          />
          <div>{formatContent(postData.description[2])}</div> */}
          {/* <div className="bg-primary-dark px-2 text-white dark:bg-black rounded-md">
            <CodeBlock language="javascript" code={postData.code[2]} fileName="abc.txt" />
          </div> */}
        </div>
        <div className="md:h-[80vh] md:w-[30%] flex items-center py-16 md md:py-0">
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
