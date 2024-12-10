import React from "react";
import services_data from "../assets/services_data.js";

const Services = () => {
  return (
    <section id="Services" className="py-12">
      <h2 className="text-4xl text-center mb-6 text-white">Services</h2>
      <div className=" max-w-[1200px] flex flex-wrap justify-center gap-6 px-4 mx-auto">
        {services_data.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center max-w-[300px] p-6 border border-gray-700 rounded-xl bg-gray-950 text-center shadow-lg transform transition-transform duration-0 hover:scale-105 hover:shadow-2xl hover:border-white"
          >
            <h3 className="text-2xl font-bold mb-3">
              <span className="bg-gradient-to-r from-teal-400 via-cyan-500 to-violet-500 bg-clip-text text-transparent">
                {service.s_name}
              </span>
            </h3>
            <p className="text-gray-300 mb-6">{service.s_desc}</p>
            <a
              href="#"
              className="text-teal-100 hover:text-white hover:underline flex items-center justify-center gap-2"
            >
              Read More <span>&rarr;</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
