import React from "react";
import profilePic from "../assets/about_profile.svg"; // Replace with your actual profile picture
import AnchorLink from "react-anchor-link-smooth-scroll";

function Home({ navbarHeight }) {
  return (
    <section id="Home" className="px-7 mx-auto py-12">
      {/* Header Section */}
      <header className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold tracking-wide leading-snug">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-teal-400 via-cyan-500 to-violet-500 bg-clip-text text-transparent">
            Alex Bennett
          </span>
          , <br />a passionate frontend developer from{" "}
          <span className="bg-gradient-to-r from-teal-400 via-cyan-500 to-violet-500 bg-clip-text text-transparent">
            California, USA
          </span>
          .
        </h2>
        <p className="text-gray-300 mt-6 text-lg leading-relaxed">
          With over a decade of experience in frontend development, I’ve
          collaborated with industry leaders like Microsoft, Tesla, and Apple to
          deliver innovative web solutions. My passion for crafting seamless,
          visually appealing user interfaces drives me to approach every project
          with dedication and enthusiasm.
        </p>
      </header>

      {/* Main Content Section */}
      <section className="px-10 mx-auto pt-4 md:pt-2 pb-16 max-w-7xl flex flex-col md:flex-row items-center gap-12">
        {/* Profile Picture */}
        <figure className="flex-shrink-0">
          <img
            src={profilePic}
            alt="Profile"
            className="rounded-lg w-48 h-64 object-cover shadow-lg border-[3px] border-teal-400"
          />
        </figure>

        {/* Skills Section */}
        <article className="flex-1 space-y-6">
          {[
            { skill: "HTML & CSS", width: "80%" },
            { skill: "React JS", width: "90%" },
            { skill: "JavaScript", width: "85%" },
            { skill: "Next JS", width: "75%" },
          ].map(({ skill, width }, index) => (
            <div key={index} className="space-y-2">
              <p className="text-sm font-semibold">{skill}</p>
              <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden border border-orange-900">
                <div
                  className="h-full bg-gradient-to-r from-teal-400 via-cyan-500 to-violet-500"
                  style={{
                    width,
                    boxShadow: "0px 0px 12px rgba(72, 211, 227, 0.6)",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </article>
      </section>

      {/* Stats Section */}
      <section className="flex flex-col items-center gap-6 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-6 sm:gap-x-12">
          {[
            { label: "YEARS OF EXPERIENCE", value: "10+" },
            { label: "PROJECTS COMPLETED", value: "90+" },
            { label: "HAPPY CLIENTS", value: "15+" },
          ].map(({ label, value }, index) => (
            <article key={index} className="flex flex-col items-center">
              <p className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-500 to-violet-500">
                {value}
              </p>
              <div className="w-full h-[2px] bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 mt-2"></div>
              <p className="text-base text-gray-300 uppercase tracking-wide mt-3">
                {label}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <div className="flex flex-wrap justify-center items-center gap-6 mt-10">
        <AnchorLink href="#Contact" offset={navbarHeight}>
          <button className="bg-gradient-to-r from-teal-600 via-blue-700 to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:opacity-90 transition-transform transform hover:scale-105">
            Connect With Me{" "}
          </button>
        </AnchorLink>

        <button className="border border-teal-500 px-8 py-3 rounded-full text-teal-400 hover:text-white hover:border-white hover:shadow-lg transition-all">
          My Resume
        </button>
      </div>
    </section>
  );
}

export default Home;
