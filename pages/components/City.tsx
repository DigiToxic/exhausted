import React, { useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Head1 from "./Triple Head/Header1";
import { useTheme } from "../../contexts/ThemeContext";

const City: NextPage = () => {
  const [isBubbleVisible, setIsBubbleVisible] = useState(false);
  const [isBubbleVisible2, setIsBubbleVisible2] = useState(false);
  const [isBubbleVisible3, setIsBubbleVisible3] = useState(false);
  const [isBubbleVisible4, setIsBubbleVisible4] = useState(false);

  const handleClick = () => {
    setIsBubbleVisible(!isBubbleVisible);
    setIsBubbleVisible2(false);
    setIsBubbleVisible3(false);
    setIsBubbleVisible4(false);
  };

  const handleClick2 = () => {
    setIsBubbleVisible(false);
    setIsBubbleVisible2(!isBubbleVisible2);
    setIsBubbleVisible3(false);
    setIsBubbleVisible4(false);
  };

  const handleClick3 = () => {
    setIsBubbleVisible(false);
    setIsBubbleVisible2(false);
    setIsBubbleVisible3(!isBubbleVisible3);
    setIsBubbleVisible4(false);
  };

  const handleClick4 = () => {
    setIsBubbleVisible(false);
    setIsBubbleVisible2(false);
    setIsBubbleVisible3(false);
    setIsBubbleVisible4(!isBubbleVisible4);
  };

  const { theme } = useTheme();
  const imageSrc =
    theme === "dark"
      ? "/images/page2/IMG_1889.png"
      : "/images/page2/Website_2.png";

  return (
    <div className="relative">
      <Head1 />
      <img className="h-screen w-screen z-0" src={imageSrc} alt="" />
      <Link href="Office">
        <img
          className="absolute bottom-[16.3%] left-[7%] w-[18.2%] h-[9%] z-20 cursor-pointer"
          src="/images/page2/Website2Entry.png"
          alt=""
        />
      </Link>

      <img
        onClick={handleClick4}
        className="absolute bottom-[13%] right-[7.3%] w-[60px] z-30 cursor-pointer"
        src="/images/page2/WebsitePerson1.png"
        alt=""
      />
      <img
        className={`absolute bottom-[24.5%] right-[10.3%] w-72 z-20 bubble4 ${
          isBubbleVisible4 ? "visible" : ""
        } max-[400px]:hidden`}
        src="/images/page2/Website2BubbleCrop2.png"
        alt=""
      />

      <div className={`${isBubbleVisible4 ? "visible" : "hidden"} max-[400px]:hidden`}>
        <div>
          <img
            className="absolute top-[36%] right-[22.5%] z-40 rounded-full w-12 DigiPFP DigiBox1"
            src="/images/exhausted/739.png"
            alt=""
          />
          <p className="absolute top-[37.6%] right-[15%] z-40 DigiName DigiBox2">
            Digi | Toxic
          </p>
        </div>
        <div className="absolute top-[47%] right-[14.5%] z-40 DigiDescription DigiBox3">
          <li>Web developer</li>
          <li>Blockchain dev</li>
          <li>Agency Creator</li>
          <li>Premints sender</li>
          <li>Head-mods</li>
        </div>
      </div>

      <img
        onClick={handleClick2}
        className="absolute bottom-[15%] left-[41.5%] w-[45px] z-30 cursor-pointer"
        src="/images/page2/Website2Person2.png"
        alt=""
      />
      <img
        className={`absolute bottom-[26%] left-[43%] w-72 z-20 bubble3 ${
          isBubbleVisible2 ? "visible" : ""
        } max-[1150px]:hidden`}
        src="/images/page2/Website2Bubble.png"
        alt=""
      />

      <div className={`${isBubbleVisible2 ? "visible" : "hidden"} max-[400px]:hidden`}>
        <div>
          <img
            className="absolute top-[34%] right-[50%] z-40 rounded-full w-12 max-[1150px]:hidden PrievPFP PrievBox1"
            src="/images/exhausted/33.png"
            alt=""
          />
          <p className="absolute top-[35.8%] right-[44%] z-40 max-[1150px]:hidden PrievName PrievBox2">
            Priev
          </p>
        </div>
        <div className="absolute top-[47%] right-[40.5%] z-40 max-[1150px]:hidden PrievDescription PrievBox3">
          <li>6 figure Sports Bettor</li>
          <li>Poker Player</li>
          <li>Entrepreneur</li>
        </div>
      </div>

      <img
        onClick={handleClick3}
        className="absolute bottom-[0px] right-[27.1%] w-[80px] z-30 cursor-pointer"
        src="/images/page2/Website2Person3.png"
        alt=""
      />
      <img
        className={`absolute bottom-[9%] right-[31.5%] w-72 z-30 bubble2 ${
          isBubbleVisible3 ? "visible" : ""
        } max-[400px]:hidden`}
        src="/images/page2/Website2BubbleCrop2.png"
        alt=""
      />

      <div className={`${isBubbleVisible3 ? "visible" : "hidden"} max-[400px]:hidden`}>
        <div>
          <img
            className="absolute top-[53.5%] right-[43.5%] z-40 rounded-full w-12 FunkyPFP FunkyBox1"
            src="/images/exhausted/19.png"
            alt=""
          />
          <p className="absolute top-[55%] right-[34%] z-40 FunkyName FunkyBox2">
            FunkyMusician
          </p>
        </div>
        <div className="absolute top-[68%] right-[36%] z-40 FunkyDescription FunkyBox3">
          <li>Pixelated Artist</li>
        </div>
      </div>

      <img
        onClick={handleClick}
        className={`absolute bottom-[13%] left-[21.5%] w-[42px] cursor-pointer ${isBubbleVisible3 ? "z-20" : "z-30"}`}
        src="/images/page2/Website2Person4.png"
        alt=""
      />
      <img
        className={`absolute bottom-[24.5%] left-[23.5%] w-72 z-30 bubble1 ${
          isBubbleVisible ? "visible" : ""
        } max-[400px]:hidden`}
        src="/images/page2/Website2Bubble.png"
        alt=""
      />

      <div className={`${isBubbleVisible ? "visible" : "hidden"} max-[400px]:hidden`}>
        <div>
          <img
            className="absolute top-[35%] left-[27%] z-40 rounded-full w-12 wolfPFP WolfBox1"
            src="/images/exhausted/98.png"
            alt=""
          />
          <p className="absolute top-[36.5%] left-[31.5%] text-lg z-40 wolfName WolfBox2">
            Wolfgang 78
          </p>
        </div>
        <div className="absolute top-[46%] left-[26%] z-40 wolfDescription WolfBox3">
          <li>Founder of 3 projects</li>
          <li>Ecom alpha caller</li>
          <li>Ecom</li>
          <li>Web3</li>
          <li>Agency</li>
        </div>
      </div>
    </div>
  );
};
export default City;
