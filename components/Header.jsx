import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full absolute top-0 left-0">
      <div className="flex items-center justify-between container mx-auto p-4">
        <h1 className="text-2xl font-semibold text-gray-800">CalmCare</h1>
        <ul className="hidden lg:flex items-center gap-4">
          <li className="">
            <Link
              href={"/"}
              className="px-4 py-3 block text-gray-600 text-base hover:bg-gray-200 rounded-md hover:text-gray-800 font-semibold"
            >
              Home
            </Link>
          </li>
          <li className="">
            <Link
              href={"/"}
              className="px-4 py-3 block text-gray-600 text-base hover:bg-gray-200 rounded-md hover:text-gray-800 font-semibold"
            >
              Services
            </Link>
          </li>
          <li className="">
            <Link
              href={"/"}
              className="px-4 py-3 block text-gray-600 text-base hover:bg-gray-200 rounded-md hover:text-gray-800 font-semibold"
            >
              Blog
            </Link>
          </li>
          <li className="">
            <Link
              href={"/"}
              className="px-4 py-3 block text-gray-600 text-base hover:bg-gray-200 rounded-md hover:text-gray-800 font-semibold"
            >
              Contact us
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button className="btn-primary">Login</button>
          <button className="btn-secondary">Register</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
