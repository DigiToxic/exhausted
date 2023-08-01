import React, { useState, useEffect } from "react";

const isPageRefresh = (): boolean => {
  if (typeof window !== "undefined" && window.performance) {
    const navigationEntries = window.performance.getEntriesByType("navigation");
    if (navigationEntries.length > 0) {
      const navigationEntry =
        navigationEntries[0] as PerformanceNavigationTiming;
      return navigationEntry.type === "reload";
    }
  }
  return false;
};

const WelcomeOverlay: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [welcomeShown, setWelcomeShown] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    let timerCompleted = false;

    const checkBothCompleted = () => {
      if (timerCompleted) {
        setFadeOut(true);
        setTimeout(() => {
          setLoading(false);
          setFadeOut(false);
          setFadeIn(true);
        }, 500);
      }
    };

    if (isPageRefresh()) {
      setWelcomeShown(true);
    } else {
      setTimeout(() => {
        timerCompleted = true;
        checkBothCompleted();
      }, 3000);
    }
  }, []);

  useEffect(() => {
    if (!welcomeShown && !isOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, [isOpen, welcomeShown]);

  const handleClick = (): void => {
    setIsOpen(true);
  };

  if (welcomeShown) {
    return null;
  }

  return (
    <div>
      <div className={`overlay overlay-left ${isOpen ? "open" : ""}`}></div>
      <div className={`overlay overlay-right ${isOpen ? "open" : ""}`}></div>
      {loading ? (
        <div
          className={`welcome-text flex flex-col justify-center items-center ${
            fadeOut ? "fadeOut" : ""
          }`}
        >
          <img
            className={`w-[500px] mb-20 mr-6 reveal-image-opacity max-[601px]:w-[400px] max-[451px]:w-[300px] ${
              fadeOut ? "fadeOut" : ""
            }`}
            src="/images/logo/Website2LogoCrop2.png"
            alt="Loading"
          />

          <div className={`loader ${fadeOut ? "fadeOut" : ""}`}></div>
          <p className="text-xl mt-2">The irresistible future of modern education</p>
        </div>
      ) : (
        !isOpen && (
          <div
            className={`welcome-text ${fadeIn ? "fadeIn" : ""}`}
            onClick={handleClick}
          >
            <button className="rounded-tr-[50px] rounded-lg shadow-lg shadow-[rgb(255,205,171)] hover:mt-2 hover:shadow-none">
              <p className="text-5xl p-4">Enter</p>
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default WelcomeOverlay;
