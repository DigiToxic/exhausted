import React from "react";
import Head1 from "./Triple Head/Header1";
import { useTheme } from "@/contexts/ThemeContext";

function Utility() {
  const { theme } = useTheme();
  const backgroundColor = theme === "dark" ? "bg-black" : "bg-white";

  const textColor = theme === "dark" ? "text-white" : "text-black";
  
  const colorBox = theme === "dark" ? "bg-[rgb(92,92,92)]" : "bg-slate-200";

  const headerColor = theme === "dark" ? "bg-gradient-to-b from-gray-400 to-black" : "bg-[#f8d363]";

  const lines = theme === "dark" ? "border-[#f8d363]" : "border-black";

  return (
    <div className={`${backgroundColor} h-screen`}>
      <div className={`${headerColor} w-full h-48`}>
        <Head1 />
      </div>

      <div className="flex justify-evenly items-center -mt-10">
        <div className={`${colorBox} shadow-2xl w-[25%] h-[500px] flex flex-col justify-between items-center p-8 rounded-3xl`}>
          <div className="w-full flex flex-col items-center justify-center">
            <p className={`${textColor} text-2xl`}> Exhausted utility category</p>
            <div className={`${lines} border-t-[3px] w-full rounded-full mt-4`} />
          </div>

          <div className="flex flex-col justify-between items-start mb-6">
            <li className={`${textColor} text-xl pb-4 cursor-pointer`}>
              <span className="hover:text-[#f8d363]">
                Introduction of exhausted
              </span>
            </li>
            <li className={`${textColor} text-xl pb-4 cursor-pointer`}>
              <span className="hover:text-[#f8d363]">Ecom</span>
            </li>
            <li className={`${textColor} text-xl pb-4 cursor-pointer`}>
              <span className="hover:text-[#f8d363]">Crypto signals</span>
            </li>
            <li className={`${textColor} text-xl pb-4 cursor-pointer`}>
              <span className="hover:text-[#f8d363]">Sport betting</span>
            </li>
            <li className={`${textColor} text-xl pb-4 cursor-pointer`}>
              <span className="hover:text-[#f8d363]">Fitness-wellness</span>
            </li>
            <li className={`${textColor} text-xl pb-4 cursor-pointer`}>
              <span className="hover:text-[#f8d363]">Much more coming...</span>
            </li>
          </div>
        </div>
        <div className={`${colorBox} shadow-2xl w-[50%] h-[500px] flex flex-col justify-between items-center p-4 rounded-3xl`}>
          <div className="w-full flex flex-col justify-center ">
            <p className={`${textColor} text-2xl p-2`}>Introduction of exhausted</p>
            <div className={`${lines} border-t-[3px] w-full rounded-full mt-4`} />
          </div>
          <div className="mb-1">
            <iframe
              className="rounded-xl"
              width="620"
              height="375"
              src="https://www.youtube.com/embed/WXxmJxN8_LM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Utility;
