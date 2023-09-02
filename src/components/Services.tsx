import Image from "next/image";
import { FC } from "react";

interface ServicesProps {}

const Services: FC<ServicesProps> = ({}) => {
  return (
    <div className="flex flex-col gap-8 ">
      <div>
        <h1 className="text-center text-h1 font-semibold underline">
          Experties & Services
        </h1>
        <p className="text-center italic px-4 md:px-0">
          How I can help you achieve your Business goals through my expertise
          and offerings.
        </p>
      </div>
      {/* ... */}
      <div className="px-4 md:px-0 flex flex-col gap-8">
        {/* first */}
        <div className="flex flex-col-reverse md:flex-row justify-center items-center">
          <div className="py-4">
            <h1 className="text-h1 font-semiboldv">Web App Development</h1>
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
        {/* second */}
        <div className="flex items-center flex-col md:flex-row ">
          <Image
            width={400}
            height={500}
            src={"/assets/server.png"}
            alt="web development"
            className=" "
          />
          <div className="py-4">
            <h1 className="text-h1">Server Side Development</h1>
            <p>
              I specialize in crafting robust server-side solutions using
              Node.js and Express.js. My expertise extends to proficiently
              managing client requests, preciesly processing data, and
              seamlessly interacting with databases to deliver top-notch
              application functionality.
            </p>
          </div>
        </div>
        {/* third */}

        <div className="flex flex-col-reverse md:flex-row justify-center items-center ">
          <div className="py-4">
            <h1 className="text-h1 font-semiboldv">Database Managment</h1>
            <p>
              As a seasoned database management specialist, I bring expertise in
              a range of database technologies, including PostgreSQL, MySQL,
              MongoDB, and Redis. Whether it's structuring relational databases,
              optimizing queries, or harnessing the speed of key-value pair
              databases, I have the skills to design, deploy, and maintain
              robust data solutions tailored to your project's unique
              requirements.
            </p>
          </div>
          <Image
            width={400}
            height={500}
            src={"/assets/database.png"}
            alt="web development"
            className="md:ml-auto "
          />
        </div>

        {/* fourth  */}
        <div className="flex items-center flex-col md:flex-row ">
          <Image
            width={400}
            height={500}
            src={"/assets/api.png"}
            alt="web development"
            className=" "
          />
          <div className="py-4">
            <h1 className="text-h1">RESTful API Development</h1>
            <p>
            Proficient in Node.js and Express.js, My expertise lies in creating efficient and
              scalable RESTful APIs. Whether it's structuring endpoints,
              implementing authentication, or ensuring seamless integration with
              databases, I have the skills to create tailored API solutions to
              meet your project's specific needs.
            </p>
          </div>
        </div>
        {/* fifth*/ }
        <div className="flex flex-col-reverse md:flex-row justify-center items-center ">
          <div className="py-4">
            <h1 className="text-h1 font-semiboldv">Testing and Debugging</h1>
            <p>
            With a keen eye for detail, I excel in  testing and debugging, ensuring the reliability and functionality of web applications. My expertise lies in crafting comprehensive test cases, conducting thorough testing, and pinpointing and resolving issues efficiently. 
            </p>
          </div>
          <Image
            width={400}
            height={500}
            src={"/assets/database.png"}
            alt="web development"
            className="md:ml-auto "
          />
        </div>

      </div>
    </div>
  );
};

export default Services;
