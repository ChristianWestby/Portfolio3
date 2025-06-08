import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import blinkendevann from "@videos/blinkendevann.mp4";

const phrases = [
  { text: "FRONTEND.", color: "text-blue-800", weight: "font-bold", size: "text-7xl" },
  { text: "DEVELOPMENT.", color: "text-red-700", weight: "font-normal", size: "text-2xl" },
  {
    text: "UX. UI.",
    color: "text-purple-300",
    weight: "font-semibold",
    boxStyle: "border border-purple-300 px-3 py-1",
    size: "text-xl",
  },
  {
    text: "BACKEND.",
    color: "text-yellow-400",
    weight: "font-normal",
    boxStyle: "border border-yellow-400 px-3 py-1 rounded-xl",
    size: "text-3xl",
  },
  {
    text: "DESIGN.",
    color: "text-red-900",
    weight: "font-normal",
    size: "text-8xl",
    boxStyle: "inline-block bg-gray-800 border border-black px-6 py-4",
  },
];

export default function Intro() {
  const [visibleLines, setVisibleLines] = useState([]);
  const [startVideo, setStartVideo] = useState(false);
  const navigate = useNavigate();
  const hasRunRef = useRef(false);

  useEffect(() => {
    if (hasRunRef.current) return;
    hasRunRef.current = true;

    let index = 0;
    const revealNext = () => {
      if (index < phrases.length) {
        setVisibleLines((prev) => [...prev, phrases[index]]);
        index++;
        setTimeout(revealNext, 2000);
      } else {
        setStartVideo(true);
        setTimeout(() => navigate("/home"), 10000);
      }
    };
    revealNext();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#444] text-white font-montserrat overflow-hidden">
      <div className="flex justify-center items-center h-screen">
        {/* Tekst */}
        <div className="absolute top-[16%] left-16 z-10 space-y-3 text-left w-[300px]">
          {visibleLines.map((line, i) =>
            line ? (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={`tracking-wider ${line.color || ""} ${line.weight || ""} ${line.size || "text-lg md:text-2xl"} ${line.boxStyle || ""}`}
              >
                {line.text}
              </motion.p>
            ) : null
          )}
        </div>

        {/* Videomaske */}
        <AnimatePresence>
          {startVideo && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="origin-left relative w-[400px] h-[240px] overflow-hidden rounded-xl shadow-xl z-10"
              style={{ clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)" }}
            >
              <video
                src={blinkendevann}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover opacity-70"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Linjer */}
      <motion.div
        animate={startVideo ? { x: -80 } : { x: 0 }}
        className="absolute right-[45%] h-[150%] w-px bg-white transform rotate-[30deg] opacity-30 z-20"
      />
      <motion.div
        animate={startVideo ? { x: 80 } : { x: 0 }}
        className="absolute right-[45%] h-[150%] w-px bg-red-900 transform rotate-[30deg] opacity-30 z-20"
      />
    </div>
  );
}