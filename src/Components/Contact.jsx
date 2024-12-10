import React from "react";
import { toast } from "react-toastify";
import mail_icon from "../assets/mail_icon.svg";
import location_icon from "../assets/location_icon.svg";
import call_icon from "../assets/call_icon.svg";
import { useFormik } from "formik";
import * as Yup from "yup";

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        // Append the Web3Forms access key
        const formData = new FormData();
        formData.append("access_key", "9b1af16b-19d8-45c7-8566-a3560b6021b8");
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("message", values.message);

        // Convert to JSON
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        // Make the API call to Web3Forms
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: json,
        }).then((res) => res.json());

        // Handle the API response
        if (response.success) {
          toast.success(
            "Thanks for reaching out! I'll get back to you shortly."
          );

          resetForm(); // Reset the form on successful submission
        } else {
          toast.error(`Submission failed: ${response.message}`);
        }
      } catch (error) {
        toast.error("An error occurred while submitting the form.");
        console.error("Error submitting form:", error);
      }
    },
  });

  return (
    <section
      id="Contact"
      className="flex items-center justify-center text-white px-10 pt-14 pb-5"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8">
        {/* Left Side */}
        <div className="space-y-6">
          <h2 className="text-4xl">Let's talk</h2>
          <p className="text-gray-300">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything you want me to work on. You can
            contact me anytime.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <img src={mail_icon} alt="Email" className="w-6 h-6" />
              <span className="text-gray-300">greatstackdev@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <img src={call_icon} alt="Phone" className="w-6 h-6" />
              <span className="text-gray-300">+772-825-524</span>
            </div>
            <div className="flex items-center space-x-4">
              <img src={location_icon} alt="Location" className="w-6 h-6" />
              <span className="text-gray-300">CA, United States</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <form
          onSubmit={formik.handleSubmit}
          className="space-y-6 p-6 rounded-lg shadow-lg w-full max-w-[500px] mx-auto"
        >
          <div>
            <label htmlFor="name" className="block text-gray-400 mb-2">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              className={`w-full p-3 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                formik.touched.name && formik.errors.name
                  ? "border border-red-500"
                  : ""
              }`}
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name ? (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-400 mb-2">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              className={`w-full p-3 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                formik.touched.email && formik.errors.email
                  ? "border border-red-500"
                  : ""
              }`}
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-400 mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              rows="4"
              className={`w-full p-3 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                formik.touched.message && formik.errors.message
                  ? "border border-red-500"
                  : ""
              }`}
              {...formik.getFieldProps("message")}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.message}
              </p>
            ) : null}
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-teal-600 via-blue-700 to-purple-700 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl hover:opacity-90 border border-[#161513] hover:border-white transition-all duration-[30ms] transform hover:scale-105"
          >
            Submit now
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
