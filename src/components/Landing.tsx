import { FC } from "react";

interface LandingProps {}

const Landing: FC<LandingProps> = ({}) => {
  return (
    <div className="px-4 flex  flex-col items-center border-2 justify-center pt-[15vh] ">
      <h1 className="text-2xl text-center ">
        <span className="text-3xl">👋</span>, I am{" "}
        <span className="font-bold">Amrit Niure , </span>
        <span className="font-bold">
          {" "}
          Software <br /> Developer
        </span>{" "}
      </h1>
      <p className="text-center italic">
        Turning Complex Business Challenges into Elegant Solutions.{" "}
      </p>
    </div>
  );
};

export default Landing;
