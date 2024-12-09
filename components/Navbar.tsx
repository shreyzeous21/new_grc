import { Search, User } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-auto items-center flex justify-center mx-auto">
      <div className="max-w-6xl px-4 w-full items-center flex mx-auto justify-between">
        <div>
          <img src="/logo.svg" alt="Logo" className="h-[15vh] w-auto" />
        </div>
        <div>
          <ul className="flex flex-row justify-center gap-10 cursor-pointer relative">
            <li className="group relative flex flex-row">
              Products
              <div className="absolute  top-full w-auto bg-white shadow-lg hidden group-hover:block">
                <ul className="flex flex-col">
                  <li className="py-2 px-4 hover:bg-gray-100">Product 1</li>
                  <li className="py-2 px-4 hover:bg-gray-100">Product 2</li>
                  <li className="py-2 px-4 hover:bg-gray-100">Product 3</li>
                </ul>
              </div>
            </li>
            <li className="group relative">
              Solutions
              <div className="absolute left-0 top-full w-full bg-white shadow-lg hidden group-hover:block">
                <ul className="flex flex-col">
                  <li className="py-2 px-4 hover:bg-gray-100">Solution 1</li>
                  <li className="py-2 px-4 hover:bg-gray-100">Solution 2</li>
                  <li className="py-2 px-4 hover:bg-gray-100">Solution 3</li>
                </ul>
              </div>
            </li>
            <li className="group relative">
              Company
              <div className="absolute left-0 top-full w-full bg-white shadow-lg hidden group-hover:block">
                <ul className="flex flex-col">
                  <li className="py-2 px-4 hover:bg-gray-100">About Us</li>
                  <li className="py-2 px-4 hover:bg-gray-100">Careers</li>
                  <li className="py-2 px-4 hover:bg-gray-100">Contact</li>
                </ul>
              </div>
            </li>
            <li className="group relative">
              Support
              <div className="absolute left-0 top-full w-full bg-white shadow-lg hidden group-hover:block">
                <ul className="flex flex-col">
                  <li className="py-2 px-4 hover:bg-gray-100">FAQ</li>
                  <li className="py-2 px-4 hover:bg-gray-100">Help Center</li>
                  <li className="py-2 px-4 hover:bg-gray-100">Live Chat</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-row gap-4">
          <Search />
          <User />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
