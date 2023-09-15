import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
interface loadingProps {}

const loading: FC<loadingProps> = ({}) => {
  return (
    <div className="flexbox overflow-hidden ">
      <div className="container pt-[5vh] px-4  flex flex-col md:flex-row w-full md:gap-8 md:px-0">
        <div className="text-primary dark:text-primary-light flex flex-col gap-4 md:w-[70%]">
          <Skeleton width={150} height={30} />
          <Skeleton width={700} height={60} />
          <Skeleton width={200} height={30} />
          <Skeleton
            width={500}
            height={400}
            className="self-center"
          />
          <Skeleton width={700} height={100} />
          <Skeleton width={700} height={100} />

          <Skeleton width={700} height={100} />
          <Skeleton width={700} height={100} />
        </div>
        <div className="md:h-[80vh] md:w-[30%] flex items-center py-16 md md:py-0">
          <div className=" w-full text-primary dark:text-primary-light">
          <Skeleton width={200} height={30} />
            <ul className="flex flex-col gap-4 pt-2 ">
            <Skeleton width={350} height={30} />
            <Skeleton width={350} height={30} />
            <Skeleton width={350} height={30} />
            <Skeleton width={350} height={30} />
            <Skeleton width={350} height={30} />
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
