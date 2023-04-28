import React, { useState, useEffect } from 'react';
import type { NextPage } from "next";
import Link from "next/link";
import Head1 from "./components/Triple Head/Header1";
import { useTheme } from './components/ThemeContext';

const Home: NextPage = () => {
  const { theme } = useTheme();
  const imageSrc = theme === 'dark' ? '/images/page1/Website_1_Night_GIF_.gif' : '/images/page1/WebsiteMain.png';


  return (
    <div className="relative">
      <Head1 />
      <img
        className="h-screen w-screen z-0"
        src={imageSrc}
        alt=""
      />
      <Link href="components\City">
      <img
      className="absolute bottom-[24.3%] left-[26%] h-[70px] w-[15.5%] z-10 arrow"
      src="/images/page1/WebsiteMainArrow.png"
      alt=""
    />
      </Link>
    </div>
  );
};
export default Home;
