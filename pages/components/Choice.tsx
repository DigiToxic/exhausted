import React from "react";
import type { NextPage } from "next";
import { useTheme } from "@/contexts/ThemeContext";
import Head1 from "./Triple Head/Header1";
import Link from "next/link";

const Choice: NextPage = () => {
  const { theme } = useTheme();
  const imageSrc =
    theme === "dark"
      ? "/images/page4/Exhausted RoadMap Page Night.png "
      : "/images/page4/Exhausted RoadMap Page Day.png";

  return (
    <div>
      <Head1 />
      <div className="flex justify-center items-center">
        <div className="z-20 absolute pt-72 flex justify-center items-center max-[1335px]:pt-[360px] max-[1000px]:hidden">
          <div className="w-[51%] bg-black bg-opacity-50 p-2 rounded-3xl">
            <p className="text-white text-sm text-center max-[1335px]:text-xs">
              We know that you are here because you are craving to change your
              life for better, that you are tired of losing money, that you need
              guidance of direction of which to go. In We Are Exhausted, that is
              exactly our aim as well as long term mission that we will and are
              capable to execute. For more than one year, we have been working
              on the project to provide our community of their best interest, a
              platform and high level software that includes A to Z step by step
              blueprints in different business niches led by our experts. Not
              only that, plenty of resources, networks, webinars, QnAs, in
              person mastermind events will also be provided; a whole literal
              facility and unfair edges to each of your own wealth creation.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-start">
        <div className="z-20 absolute ml-10 flex justify-start box-text max-[1000px]:hidden">
          <div className="w-[70%] bg-black bg-opacity-50 p-2 rounded-xl rounded-tr-[150px] max-[1285px]:w-[60%]">
            <p className="text-bold text-white text-sm">Phase 1 :</p>
            <li className="text-white text-sm">Pre mint utilities</li>
            <li className="text-white text-sm">Community building</li>
            <li className="text-white text-sm">
              Collaborations & Exhausted assets launch
            </li>
            <li className="text-white text-sm">Begin the mint</li>

            <p className="text-bold text-white text-sm">Phase 2 :</p>
            <li className="text-white text-sm">
              Launch all of the utilities after day 1 of mint
            </li>
            <li className="text-white text-sm">Art reveal</li>
            <li className="text-white text-sm">Partnerships & mergers talks</li>

            <p className="text-bold text-white text-sm">Phase 3 :</p>
            <li className="text-white text-sm">
              In real life events twice a year
            </li>
            <li className="text-white text-sm">
              Launch the most powerful SaaS in web3 accessible to our holders
            </li>
            <li className="text-white text-sm">
              Continue growing community & proper branding
            </li>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="z-20 absolute pt-[470px] mr-8 flex justify-end max-[1360px]:pt-[410px] max-[1000px]:hidden">
          <div className="w-[35%] p-3 bg-black bg-opacity-50 rounded-3xl">
            <p className="text-white text-center">
              While we are confident to guarantee at least a 10x return of
              investment by taking advantages on our utilities alone, we are
              aiming to be the first if not the most innovative project bringing
              massive changes to the industry, setting new standards.
            </p>
          </div>
        </div>
      </div>

      <img className="h-screen w-screen z-0" src={imageSrc} alt="" />
      <img
        className="absolute w-[9%] h-[18%] bottom-5 right-[45.2%]"
        src="/images/page4/Exhausted RoadMap Car.gif"
        alt=""
      />
      <Link href="City" className="cursor-pointer">
        <img
          className="absolute w-[16.1%] h-[20%] right-[2.7%] top-[15.5%]"
          src="/images/page4/Exhausted RoadMap Signs Mint.png"
          alt=""
        />
      </Link>
      {/* <Link href="Utility" className="cursor-pointer">
        <img
          className="absolute w-[16.1%] h-[20%] left-[2.7%] top-[15.5%]"
          src="/images/page4/Exhausted RoadMap Signs Vault.png"
          alt=""
        />
      </Link>*/}
    </div>
  );
};

export default Choice;
