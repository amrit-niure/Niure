"use client";
import React, { FunctionComponent } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css"; // Include a Prism theme or customize it
import Button from "@/components/Button";
import { Clipboard } from "lucide-react";

interface CodeBlockProps {
  language: string;
  code: string;
}

const CodeBlock: FunctionComponent<CodeBlockProps> = ({ language, code }) => {
  const highlightedCode = Prism.highlight(
    code,
    Prism.languages[language],
    language
  );
  return (
    <div className="rounded-md">
      <div className="w-full border-b-2 relative flex  items-center justify-between px-4 rounded-md bg-black ">
        <span className="text-sm">Filename.extension</span>
        <Button
          variant={"ghost"}
          size={"sm"}
          onClick={() => {
            navigator.clipboard.writeText(code);
          }}
          className="absoulte right-2 border-none text-sm hover:bg-transparent hover:text-white outline-none"
        >
          Copy <Clipboard size={15} />
        </Button>
      </div>
      <pre>
        <code
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
          className=""
        />
      </pre>
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
    <div className="rounded-md relative">
      <pre className="relative">
        <code
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
          className=""
        />
        <button
   
          onClick={() => {
            navigator.clipboard.writeText(code);
          }}
          className="absolute right-0 top-0 border-none text-sm hover:bg-transparent hover:text-white outline-none"
        >
          Copy 
          </button>
      </pre>
    </div>
  );
};

export {CodeBlock, Code};
