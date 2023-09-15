import { FC } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
interface loadingProps {};

const loading: FC<loadingProps> = ({}) => {
  return <div className="flexbox flex-col">
      <div className="flex flex-col container gap-8">
        <div className="flex flex-col  items-center justify-center  gap-2 pt-16">
       <Skeleton width={200} height={50} />
         <Skeleton width={500} height={20} />
         <Skeleton width={400} height={20} />
        </div>
        <div className="flex  items-center justify-center  gap-2 ">
 
         <Skeleton width={400} height={30} />
         <Skeleton width={40} height={30} />
        </div>
  

        <div className="flex lg:flex-row lg:items-end gap-8 flex-col justify-center items-center px-4 md:px-0 ">
          <Skeleton
            width={500}
            height={300}
          />
          <div className="text-primary dark:text-primary-light flex flex-col gap-2">
            <Skeleton width={100} height={20} />
          <Skeleton width={700} height={50} />
          <Skeleton width={700} height={100} />
         
            <div className="flex items-center text-slate-500">
          <Skeleton width={200} height={20} />
              
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 flex-wrap  items-center md:justify-between ">
        <Skeleton width={300} height={300} />
        <Skeleton width={300} height={300} />
        <Skeleton width={300} height={300} />
        <Skeleton width={300} height={300} />
        
        </div>
      </div>
    </div>
};

export default loading;