import { Facebook, Github, Linkedin } from "lucide-react";
import { FC } from "react";
import { GrFacebookOption } from "react-icons/gr";
import { BiLogoLinkedin } from "react-icons/bi";
import Link from "next/link";
interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="flexbox bg-purple-950 dark:bg-slate-950 ">
      <div className="container flexbox flex-col gap-8 text-white pt-16 py-8">
        <div className="flexbox flex-col gap-4">
          <h1 className="text-biggest font-bold ">Amrit Niure</h1>
          <p className="italic text-sm">
            {" "}
            Turning Complex Business Challenges into Elegant Solutions.
          </p>
        </div>
        <div>
          <ul className="flexbox gap-4 ">
            <li className="cursor-pointer hover:underline ">About</li>
            <span className="w-[1px] h-5 bg-white"></span>
            <li className="cursor-pointer hover:underline ">Projects</li>
            <span className="w-[1px] h-5 bg-white"></span>

            <li className="cursor-pointer hover:underline ">Services</li>
            <span className="w-[1px] h-5 bg-white"></span>

            <li className="cursor-pointer hover:underline ">Testimonial</li>
          </ul>
        </div>
        {/* icons */}
        <div className="flexbox gap-4">
          <a
            href={"https://www.facebook.com/niure.amrit/"}
            target="_blank"
            className="bg-slate-900 p-2 rounded-md cursor-pointer hover:bg-purple-800"
          >
            <GrFacebookOption />
          </a>
          <a
            href="https://github.com/amrit-niure"
            target="_blank"
            className="bg-slate-900 p-2 rounded-md cursor-pointer hover:bg-purple-800"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/amrit-niure-313a75230/"
            target="_blank"
            className="bg-slate-900 p-2 rounded-md cursor-pointer hover:bg-purple-800"
          >
            <BiLogoLinkedin />
          </a>
        </div>
        <div className="flexbox flex-col text-sm">
          <p>&copy; Amrit Niure 2023. All right reserved.</p>
          <p>Last updated : August 2023 </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
