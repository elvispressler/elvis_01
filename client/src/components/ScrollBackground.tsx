import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import portraitImage from "@assets/bg_ef_1_1767639331293.png";

export function ScrollBackground() {
  const { scrollY } = useScroll();
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // Sharpens quickly within the first 150px of scroll
  const targetBlur = useTransform(scrollY, [0, 150], [20, 0]);

  // Fast spring so the sharpening follows scroll immediately
  const smoothBlurValue = useSpring(20, {
    stiffness: 120,
    damping: 20,
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
        // Return to blurry idle state
        smoothBlurValue.set(20);
      }, 1500);
    });

    return () => unsubscribe();
  }, [scrollY, smoothBlurValue, targetBlur]);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-[#121212]">
      <motion.div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
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
