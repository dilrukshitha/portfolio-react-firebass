import React from "react";
import { toast } from "react-toastify";
import footer_logo from "../assets/logo.png"; 
import user_icon from "../assets/user_icon.svg"; 

function Footer() {
    const handleFormSubmit = (event) => {
      event.preventDefault();
      toast.success("Thank you for joining with me!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    };
  
    return (
      <footer id="Footer" className="text-white py-8 px-12 mx-auto">
        <div className="max-w-screen-xl mx-auto">
          {/* Logo and Description */}
          <div className="mb-6 flex flex-wrap lg:flex-nowrap justify-between items-center content-start gap-x-10 gap-y-5">
            <div>
              <img src={footer_logo} alt="Logo" className="w-24 mb-2" />
              <p className="text-gray-400">
                Passionate frontend developer with a decade of experience building intuitive, high-performance web interfaces for leading tech companies.
              </p>
            </div>
  
            <form
              onSubmit={handleFormSubmit}
              className="flex flex-col md:flex-row justify-start items-start"
            >
              <div className="flex items-center bg-gray-800 border border-[#161513] focus-within:border-white rounded-full overflow-hidden w-full md:w-auto">
                <img src={user_icon} alt="User Icon" className="w-6 h-6 ml-3" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="bg-transparent text-white focus:outline-none px-2 py-2 w-full md:w-64"
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Please enter your email")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                />
              </div>
              <button
                type="submit"
                className="mt-4 md:mt-0 ml-0 md:ml-4 bg-gradient-to-r from-teal-600 via-blue-700 to-purple-700 text-white px-6 py-2 border border-[#161513] hover:border-white rounded-full"
              >
                Subscribe
              </button>
            </form>
          </div>
  
          {/* Divider */}
          <hr className="my-6 border-gray-700" />
  
          {/* Footer Links */}
          <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-gray-500">
            <p>© 2024 Dilrukshitha Heenkenda. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Find me on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
