import Contact from "@/components/Contact";
import FloatingIcons from "@/components/FloatingIcons";
import Landing from "@/components/Landing";
import ModeIcon from "@/components/ModeIcon";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {

  return (
    <main className="flexbox dark:bg-dark-background transition ease-linear duration-200">
      <div className="container relative text-primary flex flex-col gap-16 dark:text-slate-100 text-lg">
        <Landing />
        <div className="absolute md:fixed top-[0vh] left-2 z-20">
        <FloatingIcons />
        </div>

        <Projects />
        <Services />
        <Contact />
   
      
       
      </div>
    </main>
  );
};

export default page;
