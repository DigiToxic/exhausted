import React, { useState } from "react";
import type { NextPage } from "next";
import Head1 from "./Triple Head/Header1";
import Utility from "./Utility";
import { useTheme } from "../../contexts/ThemeContext";
import PopupScreen from "./PopupScreen";
import PopupPaper from "./PopupPaper";
import PopupMint from "./PopupMint";
import Link from "next/link";

const Mint: NextPage = () => {
  const { theme } = useTheme();
  const imageSrc =
    theme === "dark"
      ? "/images/page3/Exhausted_Mint_Page_-_Night.png"
      : "/images/page3/Website_3_MintPage_Revised.png";

  const imageLaptop =
    theme === "dark"
      ? "/images/page3/Website_3_Night_Laptop.png"
      : "/images/page3/Website_3_LaptopScreen.png";

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupOpen2, setIsPopupOpen2] = useState(false);
  const [isPopupOpen3, setIsPopupOpen3] = useState(false);
  const [mintAmount, setMintAmount] = useState<number>(1);
  const [renderCount, setRenderCount] = useState<number>(0);
  const [walletConnected, setWalletConnected] = useState<boolean>(false);
  const [currentAccount, setCurrentAccount] = useState<string | null>(null);
  const [myGlobalVariable, setMyGlobalVariable] = useState<number>(0);
  let [totalSupply, setSupply] = useState<string | null>("");

  const connectWalletButton = () => {
    return (
      <div className="learn-more">
        <p className="text-xs text-white">CONNECT</p>
      </div>
    );
  };

  const mintNftButton = () => {
    return (
      <div className="learn-more">
        <p className="text-xs text-white">MINT</p>
      </div>
    );
  };

  function increment() {
    //setCount(prevCount => prevCount+=1);
    setMintAmount(function (prevCount) {
      if (prevCount < 11 - myGlobalVariable) {
        return (prevCount += 1);
      } else {
        return (prevCount = 11 - myGlobalVariable);
      }
    });
  }

  function decrement() {
    setMintAmount(function (prevCount) {
      if (prevCount === 1) {
        return (prevCount = 1);
      } else if (prevCount === 0) {
        return (prevCount = 0);
      } else {
        return prevCount - 1;
      }
    });
  }

  return (
    <div className="relative">
      <Head1 />
      <img className="h-screen w-screen z-0" src={imageSrc} alt="" />

      <Link href="Utility">
      <img
        className="absolute bottom-[7.5%] left-[6.5%] w-[20.7%] h-[34.5%] cursor-pointer z-20"
        src={imageLaptop}
        alt=""
       // onClick={() => setIsPopupOpen(true)}
      />
         </Link>

      <img
        className="absolute bottom-[3.2%] right-0 z-20 w-[30%] h-[18%] cursor-pointer"
        src="/images/page3/Website_3_MintPage_Paper.png"
        alt=""
        onClick={() => setIsPopupOpen2(true)}
      />

      {/*     <img
        className="absolute bottom-[1%] right-[32.5%] w-[15.8%] max-[790px]:w-[30%] h-[15.8%] cursor-pointer"
        src="/images/page3/Website_3_ButtonNormal.png"
        alt=""
        onClick={() => setIsPopupOpen3(true)}
      />*/}

      {isPopupOpen && (
        <PopupScreen trigger={isPopupOpen} setTrigger={setIsPopupOpen}>
          <p></p>
        </PopupScreen>
      )}

      {/*   {isPopupOpen2 && (
        <PopupPaper trigger={isPopupOpen2} setTrigger={setIsPopupOpen2}>
          <p></p>
        </PopupPaper>
      )}

      {isPopupOpen3 && (
        <PopupMint trigger={isPopupOpen3} setTrigger={setIsPopupOpen3}>
          <div className="mt-36 flex justify-evenly">
            <div>
              <img
                className="w-80 rounded-3xl"
                src="/images/Legend4.gif"
                alt=""
              />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <li>WL : 0.065 eth / supply : 200</li>
                <li>AL : 0.075 eth / supply : 600</li>
                <li>Public : 0.085 eth / supply : 199</li>
              </div>

              <div className="flex justify-between w-[270px]">
                <div className="flex -mt-[110px]">
                  <div onClick={decrement}>
                    <div>-</div>
                  </div>
                  <div>Minting: {mintAmount}</div>
                  <div onClick={increment}>
                    <div>+</div>
                  </div>
                </div>
                <div className="-mt-[110px]">Total Minted: 100</div>
                <div className="-mt-[70px] learn-more">
                  <p className="text-xs text-white">MINT</p>
                </div>
              </div>
            </div>
          </div>
        </PopupMint>
      )} */}
    </div>
  );
};
export default Mint;
