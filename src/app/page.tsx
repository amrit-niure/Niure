import FloatingIcons from "@/components/FloatingIcons";
import Landing from "@/components/Landing";

import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {

  return (
    <main className="flexbox dark:bg-slate-900">
      <div className="container relative text-primary dark:text-slate-100">
        <Landing />
        <FloatingIcons />
      </div>
    </main>
  );
};

export default page;
