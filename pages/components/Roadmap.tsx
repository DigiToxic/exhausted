import React from "react";
import Head1 from "./Triple Head/Header1";
import { motion } from "framer-motion";

function Roadmap() {
  return (
    <div className="h-screen overflow-y-scroll sticky">
      <Head1 />
      <img
        className="w-[1150px] h-[800px] absolute -ml-32 -mt-10 -z-10"
        src="/images/Lines.png"
        alt=""
      />

      <div className="flex flex-col justify-center items-center mt-32">
        <motion.div
          initial={{ opacity: 0, y: "-40%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <p className="text-white text-2xl font-bold mb-10 text-center">
            Watch this first before scrolling any further!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
          className="bg-gray-500 w-[590px] h-[315px] rounded-3xl border-2 flex justify-center items-center max-[700px]:w-[540px] max-[600px]:w-[490px] max-[540px]:w-[430px] max-[485px]:w-[380px] max-[450px]:w-[330px]"
        >
          <p className="underline text-white text-2xl rotate-[24deg]">
            Video coming soon!
          </p>
        </motion.div>
        {/* <iframe
          className="rounded-3xl border-2 border-white max-[700px]:w-[540px] max-[600px]:w-[490px] max-[540px]:w-[430px] max-[485px]:w-[380px] max-[450px]:w-[330px]"
          width="590"
          height="315"
          src="https://www.youtube.com/embed/_u0gD1e59qE"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe> */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.5 }}
          className="w-1/2 mt-12 max-[1250px]:w-3/4"
        >
          <p className="text-white text-center">
            Huff... <br />
            <br />
            We know that you are here because you are{" "}
            <span className="font-bold">
              craving to change your life for the better
            </span>
            , <br />
            <br />
            <br /> that you are{" "}
            <span className="font-bold">tired of losing money</span>,<br />
            <br />
            <br /> that you{" "}
            <span className="font-bold">
              need guidance of direction of which way to go
            </span>
            ,<br />
            <br />
            <br /> or you are enough of{" "}
            <span className="font-bold">
              cash grabs of scams in the space
            </span>. <br />
            <br />
            <br />
            In <span className="italic">We Are Exhausted</span>,<br />
            <br />
            <br /> that is exactly our <span className="font-bold">aim</span> as
            well as <span className="font-bold">long term mission</span> that we
            will and are capable to execute. <br />
            <br />
            <br /> For <span className="text-red-500">more than one year</span>,
            we have been working on the project to provide our community of
            their best interest, a platform and high level software that
            includes A to Z step by step blueprints in different business niches
            led by our experts. <br />
            <br />
            <br /> Not only that, plenty of ressources, networks, webinars,
            QnAs, in person mastermind events will also be provided; a whole
            literal facility and unfair edges to each of your own wealth
            creation.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: "-40%" }}
        whileInView={{ opacity: 1, y: "0%" }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 1 }}
        className="flex justify-center items-center text-center mt-32"
      >
        <p className="text-white font-bold text-3xl underline">
          Exhausted Roadmap
        </p>
      </motion.div>

      <div className="absolute overflow-hidden h-[1040px] -z-10 max-[830px]:hidden">
        <img
          className="mt-[300px] opacity-70"
          src="/images/diagram.png"
          alt=""
        />
      </div>

      <div className="flex justify-center items-center mt-16 mb-32">
        <motion.div
          initial={{ opacity: 0, y: "-50%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="h-[650px] border-l-2 border-[#183C7A] -ml-16 mr-10 max-[830px]:hidden"
        >
          <div className="flex flex-col justify-between h-[650px] -ml-[15px]">
            <div className="flex items-center">
              <div className="border-[15px] border-[#183C7A] rounded-full mt-10"></div>
              <span className="mt-9 ml-4 text-2xl font-bold text-[#183C7A]">
                &lArr;
              </span>
            </div>
            <div className="flex items-center">
              <div className="border-[15px] border-[#183C7A] rounded-full mt-10"></div>
              <span className="mt-9 ml-4 text-2xl font-bold text-[#183C7A]">
                &lArr;
              </span>
            </div>
            <div className="flex items-center">
              <div className="border-[15px] border-[#183C7A] rounded-full mb-10"></div>
              <span className="mb-9 ml-4 text-2xl font-bold text-[#183C7A]">
                &lArr;
              </span>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col justify-between items-center text-center w-[600px]">
          <motion.div
            initial={{ opacity: 0, x: "10%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="flex flex-col items-center mb-24 w-5/6"
          >
            <p className="text-white font-bold text-2xl mb-4">Phase 1 :</p>
            <li className="text-white text-lg">Pre mint utilities</li>
            <li className="text-white text-lg">Community building</li>
            <li className="text-white text-lg">
              Collaboration & exhausted assets launch
            </li>
            <li className="text-white text-lg">Begin the mint</li>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "10%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col items-center mb-24 w-5/6"
          >
            <p className="text-white font-bold text-2xl mb-3">Phase 2 :</p>
            <li className="text-white text-lg">
              Launch all of the utilities after day 1 of mint
            </li>
            <li className="text-white text-lg">Art reveal</li>
            <li className="text-white text-lg">Partnerships & merger talks</li>
            <li className="text-white text-lg">
              In real life mastermind events twice a year all around europe
            </li>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "10%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 1 }}
            className="flex flex-col items-center w-5/6"
          >
            <p className="text-white font-bold text-2xl mb-4">Phase 3 :</p>
            <li className="text-white text-lg">
              Launch the most powerful SaaS tool in web3 accessible to our
              holders
            </li>
            <li className="text-white text-lg">
              Continue growing community and proper branding (IP)
            </li>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: "40%" }}
        whileInView={{ opacity: 1, y: "0%" }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex justify-center items-center max-[830px]:mb-14"
      >
        <div className="w-3/4">
          <p className="text-white text-center text-lg">
            While we are condifent to guaranteed at least a 10x return of
            investment by taking advantages on our utilities alone, we are
            aiming to be the first if not the most innovative project bringing
            massive changed to the industry, setting new standards.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Roadmap;
