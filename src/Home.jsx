import React, { useState } from "react";

import Body from "./Body";
import { Contact, Rights, TnC } from "./FotterPages";
const LandingPage = () => {
  const [currPage, setCurrPage] = useState("Home");
  const [isContact, setIsContact] = useState(false);
  return (
    <div className="w-screen h-screen relative  font-mono cursor-default">
      <div className="absolute inset-0 h-[170vh] lg:h-screen  w-screen rounded-ee-[15rem] md:rounded-ee-[25rem] bg-[#74fdff] -z-20 "></div>
      {/* NavBar */}
      <div className="fixed min-w-full">
        <div className="flex items-center justify-between bg-[#74fdff] px-5 md:px-9 py-3">
          <a href="#Home">
            <div className="text-3xl font-bold md:ps-[30px]">Q-Cloud</div>
          </a>
          <div className="flex justify-evenly items-center w-1/3 md:w-1/2">
            <a href="#Home">
              <div
                className="hidden md:flex cursor-pointer"
                onClick={() => setCurrPage("Home")}
              >
                Home
              </div>
            </a>
            <a href="#Home">
              <div
                className="hidden md:flex cursor-pointer"
                onClick={() => setCurrPage("Policy")}
              >
                FAQ's
              </div>
            </a>
            <div
              className="hidden md:flex cursor-pointer"
              onClick={() => setIsContact(true)}
            >
              Contact Us
            </div>
            <div className="bg-slate-900 text-white/70 px-7 py-0.5 flex justify-center rounded-[5px] items-center text-sm w-[100px] h-[2.5rem] cursor-pointer">
              <div>Login</div>
            </div>
          </div>
        </div>
      </div>
      {currPage === "Home" && <Body setIsContact={setIsContact} />}
      {currPage === "Rights" && <Rights />}
      {currPage === "T&C" && <TnC />}
      {currPage === "Policy" && <TnC />}
      {isContact && <Contact setIsContact={setIsContact} />}
      {/* Footer */}
      <div className="bg-slate-800 text-slate-300 pt-10  md:py-20 pb-10 px-3 md:px-36 cursor-pointer">
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-5 md:gap-0">
          <a href="#Home">
            <div
              className="hover:text-white"
              onClick={() => setCurrPage("Home")}
            >
              Home
            </div>
          </a>
          <a href="#Home">
            <div
              className="hover:text-white"
              onClick={() => setCurrPage("Rights")}
            >
              Copyright Policy
            </div>
          </a>
          <a href="#Home">
            <div
              className="hover:text-white"
              onClick={() => setCurrPage("T&C")}
            >
              Terms & Conditions
            </div>
          </a>
          <a href="#Home">
            <div
              className="hover:text-white"
              onClick={() => setCurrPage("Policy")}
            >
              Privacy Policy
            </div>
          </a>
          <div className="hover:text-white" onClick={() => setIsContact(true)}>
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
