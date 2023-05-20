import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto px-4 py-16 flex gap-6 flex-wrap">
        <div className="flex-[2] min-w-[250px]">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">Mental</h1>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 text-white rounded-full bg-violet-600 hover:bg-violet-700 outline-none ">
              <i className="uil uil-facebook"></i>
            </button>
            <button className="w-10 h-10 text-white rounded-full bg-violet-600 hover:bg-violet-700 outline-none ">
              <i className="uil uil-instagram"></i>
            </button>
            <button className="w-10 h-10 text-white rounded-full bg-violet-600 hover:bg-violet-700 outline-none ">
              <i className="uil uil-dribbble"></i>
            </button>
            <button className="w-10 h-10 text-white rounded-full bg-violet-600 hover:bg-violet-700 outline-none ">
              <i className="uil uil-youtube"></i>
            </button>
          </div>
        </div>
        <div className="flex-1 min-w-[200px]">
          <h1 className="text-xl mb-5 font-semibold">Company</h1>
          <ul>
            <li className="text-lg my-2 hover:underline cursor-pointer">
              About
            </li>
            <li className="text-lg my-2 hover:underline cursor-pointer">
              Terms of Use
            </li>
            <li className="text-lg my-2 hover:underline cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>
        <div className="flex-1 min-w-[200px]">
          <h1 className="text-xl mb-5 font-semibold">Get Help</h1>
          <ul>
            <li className="text-lg my-2 hover:underline cursor-pointer">
              Support Center
            </li>
            <li className="text-lg my-2 hover:underline cursor-pointer">
              24H Service
            </li>
            <li className="text-lg my-2 hover:underline cursor-pointer">
              Quick Chat
            </li>
          </ul>
        </div>
        <div className="flex-1 min-w-[200px]">
          <h1 className="text-xl mb-5 font-semibold">Support</h1>
          <ul>
            <li className="text-lg my-2 hover:underline cursor-pointer">
              FAQs
            </li>
            <li className="text-lg my-2 hover:underline cursor-pointer">
              Policy
            </li>
            <li className="text-lg my-2 hover:underline cursor-pointer">
              Bussiness
            </li>
          </ul>
        </div>
        <div className="flex-1 min-w-[200px]">
          <h1 className="text-xl mb-5 font-semibold">Download App</h1>
          <ul>
            <li className="text-lg my-2 hover:underline cursor-pointer">IOS</li>
            <li className="text-lg my-2 hover:underline cursor-pointer">
              Android
            </li>
            <li className="text-lg my-2 hover:underline cursor-pointer">
              Linux
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 text-center">
        © {new Date().getFullYear()} Mental. All rights reserved. Built by{" "}
        <a
          className="text-violet-600 hover:underline font-medium"
          href="https://github.com/ujen5173"
        >
          Ujen Basi
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
