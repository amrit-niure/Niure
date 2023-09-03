"use client";
import React, { FC } from "react";
import { useFormik,FormikHelpers } from "formik";
import * as Yup from "yup";
import { BiMailSend, BiMessageRounded } from "react-icons/bi";
import { RiSendPlaneFill} from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import { AiTwotonePhone } from "react-icons/ai";
import Button from "./Button";
import { Toaster, toast } from 'react-hot-toast';

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    project: Yup.string().required("Project is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    project: "",
  };
  type MyFormValues = {
    name: string;
    email: string;
    project: string;
  };
  
  const onSubmit = (values: {
    name: string;
    email: string;
    project: string;
  },onSubmitProps:FormikHelpers<MyFormValues>) => {
    // Handle form submission here
   toast.success("Message Sent ❤️")
onSubmitProps.resetForm()
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <section className="">
      <Toaster />
      <div className="flexbox flex-col   pb-4">
        <span className="text-h1 font-semibold">Get in Touch</span>
        <h2 className="hidden md:flex">Contact Me</h2>
      </div>
      <div className=" flex flex-col md:flex-row gap-16 md:gap-4">
        {/* first */}
        <div className="flex-1 flex flex-col gap-8">
          <h3 className="flexbox text-h2 font-semibold">Talk to me</h3>
          <div className="px-8 flex flex-col gap-4">

            <div className="flexbox flex-col gap-1 py-4 dark:text-primary-light bg-white dark:bg-darker shadow-lg border-light-gray dark:border-[3px] rounded-2xl">
             <BiMailSend className = "text-4xl" />
              <h3 className="font-bold">Email</h3>
              <span className="text-light-gray font-semibold">codetocontact.newray@gmail.com</span>
              <a
                href="mailto:codetocontact.newray@gmail.com"
                target="_blank"
                className="contact__button"
              >
              <span className="flex items-center text-secondary gap-2 font-semibold"> Write me{" "} <BsPencilSquare /></span> 
      
              </a>
            </div>

            {/* phone */}
            <div className="flexbox flex-col gap-1  py-4 dark:text-primary-light bg-white dark:bg-darker shadow-lg border-light-gray dark:border-[3px] rounded-2xl">
             <BiMailSend className = "text-4xl" />
              <h3 className="font-bold">Phone</h3>
              <span className="text-light-gray  font-semibold">+61 424 562 124</span>
              <a
                
                href="tel:+1234567890"
                target="_blank"
                className="contact__button"
              >
              <span className="flex items-center text-secondary gap-2 font-semibold"> Call me{" "} <AiTwotonePhone /></span> 
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            {/* other */}

            <div className="flexbox flex-col gap-1  py-4 dark:text-primary-light bg-white dark:bg-darker shadow-lg border-light-gray dark:border-[3px] rounded-2xl">
             <BiMailSend className = "text-4xl" />
              <h3 className="font-bold">LinkedIn </h3>
              <span className="text-light-gray  font-semibold">Amrit Niure</span>
              <a
                href="https://www.linkedin.com/messaging/compose/?to=amrit-niure-313a75230" target="_blank"
                className="contact__button"
              >
              <span className="flex items-center text-secondary gap-2 font-semibold"> Message Me{" "} <BiMessageRounded className="text-bold"/></span> 
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            
          </div>
        </div>
        {/* second col */}
        <div className="flex-1 flex flex-col gap-8 sm:px-8">
        <h3 className="flexbox text-h2 font-semibold">Write Me Your Project</h3>
          <form onSubmit={formik.handleSubmit} className=" flex flex-col gap-8">
            <div className="flex flex-col relative">
              <label htmlFor="name" className="absolute top-[-0.8rem] left-[1.25rem] text-secondary  bg-slate-50 px-1.5 z-20 dark:bg-primary-dark dark:text-light-gray">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className=" border-[3px] border-light-gray bg-background outline-none px-6 py-4 rounded-xl dark:bg-primary-dark bg-light-background  "
              />
              {formik.touched.name && formik.errors.name ? (
              <div className="text-red-400">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="relative">
              <label htmlFor="email"  className="absolute top-[-0.8rem] left-[1.25rem] text-secondary dark:text-light-gray bg-slate-50 px-1.5 z-20  dark:bg-primary-dark ">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className=" border-[3px] border-light-gray bg-background outline-none px-6 py-4 w-full rounded-xl  dark:bg-primary-dark bg-light-background  "
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-400">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="relative">
              <label htmlFor="project" className="absolute top-[-0.8rem] left-[1.25rem] text-secondary dark:text-light-gray bg-slate-50 px-1.5 z-20 dark:bg-primary-dark ">Project</label>
              <textarea
                id="project"
                name="project"
                cols={30}
                rows={5}
                placeholder="Write Your Project here."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.project}
                className=" border-[3px] border-light-gray bg-background outline-none px-6 py-4 w-full rounded-xl resize-none dark:bg-primary-dark bg-light-background "
              ></textarea>
              {formik.touched.project && formik.errors.project ? (
              <div className="text-red-400">{formik.errors.email}</div>
              ) : null}
            </div>

            <Button type="submit" className="text-lg w-fit flex gap-2" size={"lg"}>Send  <RiSendPlaneFill /> </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
