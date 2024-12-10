import React, { useRef, useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar({ setNavbarHeight, navbarHeight }) {
  const navbarRef = useRef(null); // Reference to the navbar element
  const [menu, setMenu] = useState("Home"); // State to manage the current menu selection
  const [isScrolled, setIsScrolled] = useState(false); // State to track whether the page is scrolled

  useEffect(() => {
    // Function to update navbar height dynamically
    const updateNavbarHeight = () => {
      if (navbarRef.current) {
        setNavbarHeight(navbarRef.current.offsetHeight);
      }
    };

    // Call the function initially to set the navbar height
    updateNavbarHeight();

    // Add event listener to handle window resize
    window.addEventListener("resize", updateNavbarHeight);

    // Function to check if the page is scrolled
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Set `isScrolled` to true if scrolled, otherwise false
    };

    // Add event listener to track scrolling
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      window.removeEventListener("resize", updateNavbarHeight);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once after the component mounts

  return (
    <div
      ref={navbarRef}
      className={` sticky top-0 left-0 w-full flex flex-wrap gap-x-[60px] gap-y-5 content-start items-center justify-around max-w-[1900px] px-10 py-6 mx-auto z-10 bg-[#161513] bg-opacity-100 transition-shadow duration-300 ${
        isScrolled
          ? "shadow-[0_20px_20px_-10px_rgba(0,0,0,0.8)]"
          : "shadow-none"
      }`}
    >
      <img src={logo} alt="logo" className="w-[100px] h-auto" />

      <ul className="flex flex-wrap content-start items-center justify-center text-lg font-medium gap-x-12 gap-y-4">
        {["Home", "Services", "Projects", "Contact"].map((item, index) => (
          <li
            key={index}
            className="relative group"
            onClick={() => setMenu(item)}
          >
            {/* Base Text */}
            <span
              className={`pb-1 text-gray-200 transition-colors duration-0 inline-block ${
                item === menu
                  ? "text-white scale-105" // Active state styles
                  : "group-hover:text-white hover:scale-105" // Hover styles
              }`}
            >
              <AnchorLink href={`#${item}`} offset={navbarHeight}>
                {item}
              </AnchorLink>
            </span>
            {/* Gradient Highlight */}
            {item === menu && (
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-500 to-violet-500"></div>
            )}
          </li>
        ))}
      </ul>

      <AnchorLink href="#Contact" offset={navbarHeight}>
        <button className="bg-gradient-to-r from-teal-600 via-blue-700 to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:opacity-90 transition-transform transform hover:scale-105">
          Connect With Me{" "}
        </button>
      </AnchorLink>
    </div>
  );
}

export default Navbar;
