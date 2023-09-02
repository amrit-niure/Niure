import FloatingIcons from "@/components/FloatingIcons";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {

  return (
    <main className="flexbox dark:bg-slate-900 transition ease-linear duration-200">
      <div className="container relative text-primary flex flex-col gap-16 dark:text-slate-100">
        <Landing />
        <div className="absolute md:fixed top-[0vh] left-2 z-20">
        <FloatingIcons />
        </div>
        <Projects />
        <Services />
      </div>
    </main>
  );
};

export default page;
