import Image from "next/image";
import { FC } from "react";

interface ServicesProps {}

const Services: FC<ServicesProps> = ({}) => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-center text-h1 font-semibold underline">
          Experties & Services
        </h1>
        <p className="text-center italic">
          How I can help you achieve your Business goals through my expertise
          and offerings.
        </p>
      </div>
      {/* ... */}
      <div>
        <div className="flex flex-col-reverse md:flex-row justify-center items-center ">
          <div>
            <h1 className="text-h1 font-semibold">Web App Development</h1>
            <p>
              Leveraging the full potential of blazingly fast Javascript
              frameworks like React js and Next js to build profecient and
              elegent web apps that fulfills your business requirements.
            </p>
          </div>
          <Image
            width={400}
            height={500}
            src={"/assets/webdevelopment.png"}
            alt="web development"
            className="md:ml-auto "
          />
        </div>
        <div className="flex items-center flex-col md:flex-row ">
       
        <Image
            width={400}
            height={500}
            src={"/assets/server.png"}
            alt="web development"
            className=" "
          />
      
         
          <div>
            <h1 className="text-h1 font-semibold">Server Side Development</h1>
            <p>
            I specialize in crafting robust server-side solutions using Node.js and Express.js. My expertise extends to proficiently managing client requests, preciesly processing data, and seamlessly interfacing with databases to deliver top-notch application functionality.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Services;
