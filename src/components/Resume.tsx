'use client'
import React, { FC, useState, useEffect } from "react";
import Button from "./Button";

interface ResumeProps {}

const Resume: FC<ResumeProps> = ({}) => {
  const [showResume, setShowResume] = useState<boolean>(false);

  useEffect(() => {
    const handleClickOutside = (e:any) => {
      if (showResume && e.target.classList.contains("modal")) {
        setShowResume(false);
      }
    };

    if (showResume) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [showResume]);

  return (
    <div>
      <Button
        variant={"outlined"}
        className="border-primary text-primary hover:border-[3px] "
        onClick={() => setShowResume(true)}
      >
        {" "}
        Resume{" "}
      </Button>
      {showResume && (
        <div className="fixed top-0 left-0 flex items-center justify-center h-[100vh] w-[100vw] z-30 pb-[5vh] modal">
          <div className="h-[80vh] w-[90vw] md:max-w-[900px] rounded-md flex flex-col md:flex-row shadow-lg  ">
            {/* left */}
            <div className="h-full  md:w-[100%]  md:border-r-2 bg-white ">
              <iframe
                src={"assets/niure.pdf"}
                className="w-full h-full"
              ></iframe>
            </div>
            {/* right */}
            <div className="md:hidden inset-0 backdrop-blur-3xl  flex">
              <div className="self-end flex w-full justify-end gap-4 p-4 ">
                <Button
                  size={"sm"}
                  className="bg-slate-200 text-primary hover:bg-slate-200 border-primary border-2"
                >
                  Download
                </Button>
                <Button
                  size={"sm"}
                  className=" bg-slate-300 text-primary hover:bg-primary hover:text-white"
                  onClick={() => setShowResume(false)}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resume;
