'use client'
import React, { FC } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    project: Yup.string().required('Project is required'),
  });

  const initialValues = {
    name: '',
    email: '',
    project: '',
  };

  const onSubmit = (values: { name: string; email: string; project: string }) => {
    // Handle form submission here
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <section>
      <span>Get in Touch</span>
      <h2>Contact Me</h2>

      <div>
        <div>
          <h3>Talk to me</h3>
          <div>{/* Your contact cards here */}</div>
        </div>

        <div>
          <h3>Write me Your Project</h3>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div>{formik.errors.name}</div>
              ) : null}
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </div>

            <div>
              <label htmlFor="project">Project</label>
              <textarea
                id="project"
                name="project"
                cols={30}
                rows={10}
                placeholder="Write Your Project here."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.project}
              ></textarea>
              {formik.touched.project && formik.errors.project ? (
                <div>{formik.errors.project}</div>
              ) : null}
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
