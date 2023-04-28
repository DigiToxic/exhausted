import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { NextPage } from "next";
import { useTheme } from "../../../contexts/ThemeContext";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const sideMenu = {
  visible: { x: 0 },
  hidden: { x: "-100%" },
};

const Head1: NextPage = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="absolute flex justify-between w-full items-center">
      <img
        className="h-20 w-72 ml-4 max-[600px]:w-52 max-[450px]:w-36 max-[450px]:h-16"
        src="/images/logo/Website2LogoCrop2.png"
        alt=""
      />

      <div className="flex justify-between max-[800px]:hidden">
        <button
          className=" p-2 mr-4 rounded-2xl bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 active:bg-slate-200"
          onClick={toggleTheme}
        >
          Toggle
        </button>

        <img
          className="w-10 h-10 mr-4 cursor-pointer"
          src="/images/logo/pixel-etherscan.png"
          alt=""
        />
        <img
          className="w-10 h-10 mr-4 cursor-pointer"
          src="/images/logo/pixel-opensea.png"
          alt=""
        />
        <a
          href="https://twitter.com/ExhausteddNFT"
          rel="noreferrer"
          target="_blank"
        >
          <img
            className="w-12 h-10 mr-4 cursor-pointer"
            src="/images/logo/pixel-twitter.png"
            alt=""
          />
        </a>
        <a
          href="https://discord.gg/BGERZwTrrz"
          rel="noreferrer"
          target="_blank"
        >
          <img
            className="w-14 h-10 mr-4 cursor-pointer"
            src="/images/logo/Website2Discord.png"
            alt=""
          />
        </a>
      </div>

      <div className="min-[801px]:hidden max-[800px]:initial mr-4 z-50">
        <button
          className=" p-2 mr-4 rounded-2xl bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 active:bg-slate-200"
          onClick={toggleTheme}
        >
          Toggle
        </button>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="max-[600px]:px-3 py-2"
        >
          Menu
        </button>
        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div
                className="backdrop"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={backdrop}
                onClick={() => setMenuOpen(false)}
              />
              <motion.nav
                className="sideMenu"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={sideMenu}
              >
                <ul>
                  <li>
                    <div className="flex justify-between item-center">
                      <img
                        className="w-10 h-10 mr-4 cursor-pointer"
                        src="/images/logo/pixel-etherscan.png"
                        alt=""
                      />
                      <p className="text-white mt-2">Etherscan</p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between item-center">
                      <img
                        className="w-10 h-10 mr-4 cursor-pointer"
                        src="/images/logo/pixel-opensea.png"
                        alt=""
                      />
                      <p className="text-white mt-2">Opensea</p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between item-center">
                      <a
                        href="https://twitter.com/ExhausteddNFT"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <img
                          className="w-12 h-10 mr-4 cursor-pointer"
                          src="/images/logo/pixel-twitter.png"
                          alt=""
                        />
                      </a>
                      <p className="text-white mt-2">Twitter</p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between item-center">
                      <a
                        href="https://discord.gg/BGERZwTrrz"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <img
                          className="w-14 h-10 mr-4 cursor-pointer"
                          src="/images/logo/Website2Discord.png"
                          alt=""
                        />
                      </a>
                      <p className="text-white mt-2">Discord</p>
                    </div>
                  </li>
                </ul>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
export default Head1;
