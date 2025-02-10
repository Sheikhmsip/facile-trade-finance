import React from "react";
import { Link } from "react-router";
// import { IoLocationOutline } from "react-icons/io5";
// import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className=" text-black shadow-md w-full p-6 sm:p-9 ">
      <div className="flex justify-between items-center gap-[30px] flex-col sm:flex-row flex-wrap w-full">
        <div className="md:flex  gap-10 w-full sm:w-[50%] items-center">
          <img
            src="https://i.ibb.co.com/5c7hzGJ/Whats-App-Image-2025-01-27-at-12-55-09-8f8c5971-removebg-preview.png"
            alt="logo"
            className="w-[280px] mx-auto text-center"
          />
          <div className="common-text text-center">
            <h2 className="uppercase">facile trade finance</h2>
            <p>
              All Rights Reserved by{" "}
              <span className="secondary-text underline cursor-pointer">
                facile trade finance
              </span>
            </p>
            <p>
              © copy rights <span>{new Date().getFullYear()}</span>
            </p>
          </div>
          {/* <div className="flex flex-col gap-[20px] text-[#3B9DF8]">
            <span>
              <a className="text-[0.9rem] flex items-center gap-[8px] cursor-pointer">
                <IoLocationOutline className="text-[1.2rem]" />
                Kulaura, Moulvibazar, Sylhet
              </a>
            </span>
            <span>
              <a className="text-[0.9rem] flex items-center gap-[8px] hover:text-blue-400 cursor-pointer">
                <MdOutlineEmail className="text-[1.1rem]" />
                zenuilibrary@gmail.com
              </a>
            </span>
            <span>
              <a className="text-[0.9rem] flex items-center gap-[8px] hover:text-blue-400 cursor-pointer">
                <MdOutlineLocalPhone className="text-[1.1rem]" />
                +8801305282768
              </a>
            </span>
          </div> */}
        </div>
        <div className="flex gap-16">
          <div className="">
            <h3 className="text-[1.2rem] font-semibold text-[#424242] mb-2">
              Company
            </h3>
            <div className="flex flex-col gap-[10px]">
              <p className="text-[0.9rem]  hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                About Us
              </p>
              <p className="text-[0.9rem]  hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Contact
              </p>
              <p className="text-[0.9rem]  hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Support
              </p>
              <p className="text-[0.9rem]  hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Terms and Conditions
              </p>
              <p className="text-[0.9rem]  hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Privacy Policy
              </p>
            </div>
          </div>

          {/* <div>
          <h3 className="text-[1.2rem] font-semibold text-[#424242] mb-2">
            Company
          </h3>
          <div className="flex text-black flex-col gap-[10px]">
            <p className="text-[0.9rem] text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
              Service
            </p>
            <p className="text-[0.9rem] text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
              Features
            </p>
            <p className="text-[0.9rem] text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
              Our Team
            </p>
            <p className="text-[0.9rem] text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
              Portfolio
            </p>
            <p className="text-[0.9rem] text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
              Blog
            </p>
            <p className="text-[0.9rem] text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
              Contact Us
            </p>
          </div>
        </div> */}

          <div className="">
            <h3 className="text-[1.2rem] font-semibold text-[#424242] mb-2">
              Our Social Media
            </h3>
            <div className="flex  flex-col gap-[10px]">
              <p className="text-[0.9rem]  hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Dribble
              </p>
              <p className="text-[0.9rem]  hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Behance
              </p>
              <p className="text-[0.9rem]  hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Medium
              </p>
              <p className="text-[0.9rem]  hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Instagram
              </p>
              <p className="text-[0.9rem]  hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Facebook
              </p>
              <p className="text-[0.9rem]  hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Twitter
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-between">
          <div className="w-[80%]">
            <h3 className="text-[1.2rem] font-semibold text-[#424242] mb-2">
              Join a Newsletter
            </h3>
            <div className="flex gap-[2px] w-full sm:w-[40%] flex-col text-[#424242] relative">
              <label className="text-[0.9rem]">Your Email</label>
              <input
                type="email"
                className="py-3 px-4 pr-[90px] w-full rounded-md border border-primary outline-none"
                placeholder="Email address"
              />

              <button className="px-4 h-[67%] rounded-r-md bg-primary text-white absolute top-[24px] right-0">
                Submit
              </button>
            </div>
          </div>
          {/* Design and developed */}
          <div className="self-end secondary-text">
          <Link to="/">E-Design and Development by</Link> 
          <img className="w-30" src="https://i.ibb.co.com/VYgss1xG/E-Dev-Solution.png" alt="" />
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
