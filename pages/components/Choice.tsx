import React from "react";
import type { NextPage } from "next";
import { useTheme } from "@/contexts/ThemeContext";
import Head1 from "./Triple Head/Header1";
import Link from "next/link";

const Choice: NextPage = () => {
  const { theme } = useTheme();
  const imageSrc =
    theme === "dark"
      ? "/images/page4/Exhausted RoadMap Page Night.png"
      : "/images/page4/Exhausted RoadMap Page Day.png";

  const roadmap =
    theme === "dark"
      ? "/images/page4/Exhausted RoadMap Sign Night.png"
      : "/images/page4/Exhausted RoadMap Sign Day.png";

  return (
    <div>
      <Head1 />

      <img className="h-screen w-screen z-0" src={imageSrc} alt="" />
      <Link href="Roadmap">
        <img
          className="absolute w-[30.7%] h-[39.5%] top-[24%] left-[34.6%]"
          src={roadmap}
          alt=""
        />
      </Link>
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
        <img
          className="absolute w-[16.1%] h-[20%] left-[2.7%] top-[15.5%] cursor-not-allowed"
          src="/images/page4/Exhausted RoadMap Signs Vault.png"
          alt=""
        />
    </div>
  );
};

export default Choice;
