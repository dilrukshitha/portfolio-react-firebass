import React from "react";
import mywork_data from "../assets/mywork_data.js";

function Projects() {
  return (
    <section id="Projects" className="py-10">
      <h2 className="text-4xl text-center mb-6">My Projects</h2>
      <div className="max-w-[1700px] flex flex-wrap justify-center gap-9 px-10 mx-auto">
        {mywork_data.map((work, index) => (
          <div
            key={index}
            className="max-w-[400px] bg-gray-950 text-teal-100 border border-gray-950 hover:border-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-75 hover:scale-105 px-2 pt-2 pb-4"
          >
            <div className="w-[calc(100%-1rem)] text-sm px-3 py-1 rounded-md uppercase overflow-hidden">
              <div
                className="truncate whitespace-nowrap"
                title={work.w_name} // Optional: Tooltip to display full text on hover
              >
                {work.w_name}
              </div>
            </div>

            {/* Image */}
            <img
              src={work.w_img}
              alt={work.w_name}
              className="w-full h-[200px] sm:h-[270px] object-fill"
            />
            {/* Buttons */}
            <div className="flex justify-between items-center px-4 mt-2">
              {/* Live Demo Button */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 text-gray-100 hover:text-white border border-gray-950 hover:border-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg hover:opacity-95 transition-transform transform duration-0"
              >
                Live Demo
              </a>

              {/* GitHub Link Button */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 text-gray-100 hover:text-white border border-gray-950 hover:border-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg hover:opacity-95 transition-transform transform duration-0"
              >
                GitHub Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
