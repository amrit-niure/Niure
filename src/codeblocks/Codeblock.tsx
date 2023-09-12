"use client";
import React, { FunctionComponent } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css"; // Include a Prism theme or customize it
import Button from "@/components/Button";
import { Clipboard } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

interface CodeBlockProps {
  language: string;
  code: string;
  fileName : string
}

const CodeBlock: FunctionComponent<CodeBlockProps> = ({ language, code,fileName }) => {
  const highlightedCode = Prism.highlight(
    code,
    Prism.languages[language],
    language
  );

  return (
    <div className="rounded-md overflow-x-scroll">
      <div className="w-full border-b-2 relative flex  items-center justify-between pr-2 rounded-md bg-black overflow-x-hidden">
        <span className="text-sm">{fileName}</span>
        <Button
          variant={"ghost"}
          size={"sm"}
          onClick={() => {
            navigator.clipboard.writeText(code);
            toast.success("Copied to Clipboard",{icon: '✔️'})
          }}
          className="absoulte right-2 border-none text-sm hover:bg-transparent hover:text-white outline-none"
        >
          Copy <Clipboard size={15} />
        </Button>
      </div>
      <pre   className="py-2 ">
        <code
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        
        />
      </pre>
      <Toaster />
    </div>
  );
};
const Code: FunctionComponent<CodeBlockProps> = ({ language, code }) => {
  const highlightedCode = Prism.highlight(
    code,
    Prism.languages[language],
    language
  );
  return (
    <div className="rounded-md relative  ">
      <pre className="relative ">
        <code
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
          className=""
        />
        <button
   
          onClick={() => {
            navigator.clipboard.writeText(code);
            toast.success("Copied to Clipboard",{icon: '✔️'})
          }}
          className="absolute right-0 top-0 border-none text-sm hover:bg-transparent hover:text-white outline-none"
        >
          Copy 
          </button>
      </pre>
      <Toaster />
    </div>
  );
};

export {CodeBlock, Code};
