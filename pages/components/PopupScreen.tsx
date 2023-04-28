import React, { FunctionComponent } from "react";
import type { NextPage } from "next";
import styled from "styled-components";

interface PopupProps {
  trigger: boolean;
  setTrigger: (value: boolean) => void;
  children: React.ReactNode;
}

const PopupScreen: FunctionComponent<PopupProps> = (props) => {
  return props.trigger ? (
    <div className="fixed bg-black bg-opacity-60 w-full h-[1000px] top-0 left-0 animate-fadeIn z-50">
      <div className="relative w-4/5 mx-auto h-screen max-h-[80vh] mt-[calc(100vh_-_75vh_-_100px)] bg-white pb-5 rounded border border-gray-600 overflow-auto paper-background">
        <div className="bg-[#2e2e2e] w-full h-10">
          <span
            className="fixed top-[calc(100vh_-_75vh_-_95px)] right-[calc(11%_-_0px)] bg-[#ff2525] w-7 h-7 rounded-full leading-[20px] text-center border border-white text-xl text-white cursor-pointer"
            onClick={() => props.setTrigger(false)}
          >
            x
          </span>
          <span className="fixed top-[calc(100vh_-_75vh_-_95px)] right-[calc(14%_-_0px)] bg-[#FEBC2E] w-7 h-7 rounded-full leading-[20px] text-center border border-white text-xl text-white"></span>

          <span className="fixed top-[calc(100vh_-_75vh_-_95px)] right-[calc(17%_-_0px)] bg-[#28C840] w-7 h-7 rounded-full leading-[20px] text-center border border-white text-xl text-white"></span>
        </div>
        {props.children}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default PopupScreen;
