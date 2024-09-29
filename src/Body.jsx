import React from "react";
import mob from "./images/02.png";
import Qplayer from "./images/qplayer.jpg";
import money from "./images/01.png";
import support from "./images/support.png";

const Body = () => {
  return (
    <div>
      {" "}
      {/* Introduction */}
      <div className="pt-16 px-9 min-h-screen">
        <div className="flex flex-col md:flex-row justify-evenly">
          <div className="w-full xl:w-1/2 flex flex-col lg:px-28  justify-start mt-10 lg:mt-20">
            <div className="text-xl lg:pt-8">
              Start Monetizing Your Video Content from First day
            </div>
            <div className="text-5xl lg:text-6xl py-10">
              Earn Money for Every Impression
            </div>
            <div className="text-xl">
              Maximize your content potential by hosting your videos on our
              platform. Experience seamless video delivery and unlock new
              revenue streams.
            </div>
            <div className="bg-slate-900 p-5 w-1/2 md:w-1/3 text-white/70 text-center rounded-2xl mt-8">
              Contact Us
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-10 md:mt-20 justify-center items-center flex">
            <img
              src={mob}
              className="w-[280px] h-[500px] object-cover"
              alt="mobile background"
            />
          </div>
        </div>
      </div>
      {/* Player Partner */}
      <div className="flex flex-col mt-16 mx-4 md:mx-52 justify-center items-center pt-10 pb-5 border-y-[3px] ">
        <span className="text-xl text-black/50">Our Player Partner</span>
        <div className="flex  items-center">
          <img
            src={Qplayer}
            className="w-24 h-24 object-cover ms-[-20px]"
            alt="qplayer"
          />
          <span className="text-lg font-bold">Q-player</span>
        </div>
      </div>
      {/* Profits */}
      <div className="flex mt-16 mx-9 flex-col lg:flex-row justify-evenly items-center">
        <div className="w-full lg:w-1/2 p-5">
          <img
            src={money}
            className="md:h-[320px] h-[200px] md:w-[640px] object-cover"
            alt="money"
          />
        </div>
        <div className="w-full lg:w-1/2 p-2 md:p-5">
          <div className="text-3xl font-bold mb-6">
            Minimal Ads, Maximum Profits !!
          </div>
          <div className="lg:pe-28">
            Say goodbye to annoying pop-ups and disruptive ads! Q-Cloud
            guarantees the best user experience by minimizing ads, allowing you
            to focus on what you love, creating outstanding content..
          </div>
          <div className="bg-[#14ee80] text-black/80 p-5 w-full md:w-1/3 font-black text-center rounded-2xl mt-8">
            Get Started Now &nbsp; {">"}
          </div>
        </div>
      </div>
      {/* Support */}
      <div className="flex flex-col-reverse lg:flex-row mt-16 lg:mt-32 mx-9 justify-center items-center mb-32 ">
        <div className="w-full ld:w-1/2 lg:ps-28">
          <div className="text-2xl lg:text-3xl font-bold my-8">
            Dedicated Support & Priority for All Usesr
          </div>
          <div>
            Q-Cloud Provides Personal Support and help on How to Improve your
            Earnings
          </div>
          <div className="bg-[#14ee80] text-black/80 p-5 w-full md:w-1/2 font-black text-center rounded-2xl mt-8">
            Get In Touch With Us &nbsp; {">"}
          </div>
        </div>
        <div className="w-full ld:w-1/2">
          <img
            src={support}
            className="md:h-[320px] h-[200px] md:w-[640px] object-cover"
            alt="support"
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
