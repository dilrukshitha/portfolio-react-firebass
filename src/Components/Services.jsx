import React from "react";
import services_data from "../assets/services_data.js";

const Services = () => {
  return (
    // <section id="Services" className="py-12">
    //   <h2 className="text-4xl text-center mb-6 text-white">Services</h2>
    //   <div className=" max-w-[1200px] flex flex-wrap justify-center gap-6 px-4 mx-auto">
    //     {services_data.map((service, index) => (
    //       <div
    //         key={index}
    //         className="flex flex-col items-center max-w-[300px] p-6 border border-gray-700 rounded-xl bg-gray-950 text-center shadow-lg transform transition-transform duration-0 hover:scale-105 hover:shadow-2xl hover:border-white"
    //       >
    //         <h3 className="text-2xl font-bold mb-3">
    //           <span className="bg-gradient-to-r from-teal-400 via-cyan-500 to-violet-500 bg-clip-text text-transparent">
    //             {service.s_name}
    //           </span>
    //         </h3>
    //         <p className="text-gray-300 mb-6">{service.s_desc}</p>
    //         <a
    //           href="#"
    //           onClick={(e) => e.preventDefault()} // Prevent navigation
    //           className="text-teal-100 flex items-center justify-center gap-2 cursor-not-allowed opacity-50"
    //         >
    //           Read More <span>&rarr;</span>
    //         </a>
    //       </div>
    //     ))}
    //   </div>
    // </section>
    <section id="Services" className="py-12">
  <h2 className="text-4xl font-bold text-center mb-10 text-white">
    My Services
  </h2>
  <div className="max-w-[1200px] flex flex-wrap justify-center gap-8 px-4 mx-auto">
    {[
      {
        s_name: "Frontend Development",
        s_desc:
          "Building responsive, user-friendly interfaces using HTML, CSS, JavaScript, React, and Next.js to deliver seamless user experiences.",
      },
      {
        s_name: "Backend Development",
        s_desc:
          "Creating robust and scalable backend systems using Node.js, Express, and Firebase to ensure efficient data handling.",
      },
      {
        s_name: "Full-Stack Solutions",
        s_desc:
          "Developing end-to-end web applications with optimized performance, from UI design to backend integrations.",
      },
      {
        s_name: "API Development & Integration",
        s_desc:
          "Designing and integrating RESTful APIs for secure and efficient data communication across platforms.",
      },
      {
        s_name: "Database Management",
        s_desc:
          "Setting up and managing databases using MongoDB and Firebase to store and retrieve data effectively.",
      },
      {
        s_name: "CI/CD & Dockerization",
        s_desc:
          "Implementing CI/CD pipelines and Docker containers for automated deployment and scalable app environments.",
      },
    ].map((service, index) => (
      <div
        key={index}
        className="flex flex-col items-center max-w-[320px] p-6 border border-gray-950 bg-gray-950 rounded-2xl text-center shadow-lg transition-transform duration-75 hover:scale-105 hover:shadow-2xl hover:border-white"
      >
        <h3 className="text-2xl font-bold mb-4">
          <span className="bg-gradient-to-r from-teal-400 via-cyan-500 to-violet-500 bg-clip-text text-transparent">
            {service.s_name}
          </span>
        </h3>
        <p className="text-gray-300 mb-6 text-sm leading-relaxed">
          {service.s_desc}
        </p>
        <a
          href="#"
          onClick={(e) => e.preventDefault()} // Prevent navigation
          className="text-teal-200 flex items-center justify-center gap-2 cursor-not-allowed opacity-60"
        >
          Read More <span className="text-xl">&rarr;</span>
        </a>
      </div>
    ))}
  </div>
</section>


  );
};

export default Services;
