import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import portraitImage from "@assets/bg_ef-compressed_1_1767638860618.jpg";

export function ScrollBackground() {
  const { scrollY } = useScroll();
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // Define the base blur target based on scroll (0-500px -> 20-0px blur)
  const targetBlur = useTransform(scrollY, [0, 500], [30, 0]);

  // Use a spring for super smooth transitions
  const smoothBlurValue = useSpring(30, {
    stiffness: 15, // Much lower stiffness for a slower, more deliberate transition
    damping: 20,    // Balanced damping for a smooth finish without bounce
    restDelta: 0.001
  });

  useEffect(() => {
    const unsubscribe = scrollY.on("change", () => {
      setIsScrolling(true);
      
      // Update the smooth spring value to match our current scroll-based target
      smoothBlurValue.set(targetBlur.get());

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
        // Gently return to blurry idle state
        smoothBlurValue.set(30);
      }, 3000);
    });

    return () => unsubscribe();
  }, [scrollY, smoothBlurValue, targetBlur]);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-[#121212]">
      <motion.div 
        className="absolute inset-0 w-full h-full bg-contain bg-top bg-no-repeat"
        style={{ 
          backgroundImage: `url(${portraitImage})`,
          filter: useTransform(smoothBlurValue, (v) => `blur(${v}px) grayscale(100%) contrast(1.1)`),
          scale: 1.1, 
          opacity: 0.7 
        }}
      />
      {/* Dynamic vignette for depth */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/80 pointer-events-none" />
    </div>
  );
}
