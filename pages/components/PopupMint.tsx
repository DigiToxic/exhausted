import React, { FunctionComponent } from "react";

interface PopupProps {
  trigger: boolean;
  setTrigger: (value: boolean) => void;
  children: React.ReactNode;
}

const PopupMint: FunctionComponent<PopupProps> = (props) => {
  return props.trigger ? (
    <div className="fixed bg-black bg-opacity-60 w-full h-[1000px] top-0 left-0 animate-fadeIn z-50">
      <div className="absolute top-0 h-96 left-72 border-[12px] border-r-2 border-black" />
      <div className="absolute top-0 h-96 right-72 border-[12px] border-r-2 border-black" />
      <div className="relative w-4/5 mx-auto h-screen max-h-[80vh] mt-[calc(100vh_-_75vh_-_100px)] pb-5 rounded-3xl border border-gray-600 overflow-auto bg-[#f8f0d8]">
        <span
          className="fixed top-[calc(100vh_-_75vh_-_90px)] right-[calc(11%_-_0px)] bg-black w-7 h-7 rounded-full leading-[20px] text-center border border-white text-xl text-white cursor-pointer"
          onClick={() => props.setTrigger(false)}
        >
          x
        </span>
        {props.children}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default PopupMint;
