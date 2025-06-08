import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import blinkendevann from "../videos/blinkendevann.mp4";

const phrases = [
  {
    text: "FRONTEND.",
    color: "text-white",
    weight: "font-bold",
    size: "text-3xl sm:text-4xl md:text-6xl tracking-tight",
  },
  {
    text: "DESIGN.",
    color: "text-white",
    weight: "font-semibold",
    size: "text-2xl sm:text-3xl md:text-5xl tracking-tight",
    boxStyle: "inline-block border border-white px-4 py-1 sm:px-6 sm:py-2 rounded",
  },
  {
    text: "EXPERIENCE.",
    color: "text-gray-300",
    weight: "font-light",
    size: "text-lg sm:text-xl md:text-4xl tracking-wide",
    boxStyle: "inline-block bg-neutral-900 px-3 py-1 sm:px-4 sm:py-2 border border-gray-700",
  },
  {
    text: "CODE.",
    color: "text-green-300",
    weight: "font-semibold",
    size: "text-3xl sm:text-4xl md:text-6xl tracking-tight",
  },
];

export default function IntroRevealPortal() {
  const [showWords, setShowWords] = useState([]);
  const [startAnimation, setStartAnimation] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();
  const hasRunRef = useRef(false);

  useEffect(() => {
    if (hasRunRef.current) return;
    hasRunRef.current = true;

    let index = 0;
    const reveal = () => {
      if (index < phrases.length) {
        setShowWords((prev) => [...prev, phrases[index]]);
        index++;
        setTimeout(reveal, 1000);
      } else {
        setTimeout(() => setStartAnimation(true), 500);
        setTimeout(() => setShowVideo(true), 1500);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => navigate("/home"), 1200); // fade ut før navigate
        }, 4500);
      }
    };
    reveal();
  }, [navigate]);

  const handleSkip = () => {
    setFadeOut(true);
    setTimeout(() => navigate("/home"), 1000);
  };

  return (
    <AnimatePresence>
      {!fadeOut && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="relative min-h-screen bg-black text-white overflow-hidden font-montserrat"
        >
          {/* Video */}
          <AnimatePresence>
            {showVideo && (
              <motion.video
                key="video"
                src={blinkendevann}
                autoPlay
                muted
                loop
                className="absolute inset-0 w-full h-full object-cover opacity-60 z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
              />
            )}
          </AnimatePresence>

          {/* Dør-animasjon */}
          <AnimatePresence>
            {!startAnimation && (
              <>
                <motion.div
                  className="absolute top-0 left-0 w-1/2 h-full bg-[#1c1c1c] z-30"
                  initial={{ x: 0 }}
                  animate={{ x: "-100%" }}
                  transition={{ delay: 3, duration: 2, ease: "easeInOut" }}
                  exit={{ x: "-100%" }}
                />
                <motion.div
                  className="absolute top-0 right-0 w-1/2 h-full bg-[#1c1c1c] z-30"
                  initial={{ x: 0 }}
                  animate={{ x: "100%" }}
                  transition={{ delay: 3, duration: 2, ease: "easeInOut" }}
                  exit={{ x: "100%" }}
                />
              </>
            )}
          </AnimatePresence>

          {/* Ord */}
          <div className="relative z-40 h-screen flex flex-col items-center justify-center space-y-5">
            {showWords
              .filter(Boolean)
              .map((word, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.3 }}
                  className={`${word.color || ""} ${word.weight || ""} ${word.size || ""} ${word.boxStyle || ""}`}
                >
                  {word.text}
                </motion.p>
              ))}
          </div>

          {/* Skip Intro Button */}
          {!showVideo && (
            <button
              onClick={handleSkip}
              className="absolute bottom-10 right-10 z-50 bg-black/70 text-white px-4 py-2 text-sm rounded hover:bg-white hover:text-black transition"
            >
              Skip intro
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}