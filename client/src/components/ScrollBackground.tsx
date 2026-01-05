import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import portraitImage from "@assets/generated_images/professional_cinematic_portrait_of_a_creative_person.png";

export function ScrollBackground() {
  const { scrollY } = useScroll();
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useMotionValueEvent(scrollY, "change", () => {
    setIsScrolling(true);
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    
    scrollTimeout.current = setTimeout(() => {
      setIsScrolling(false);
    }, 3000); // Increased delay to 3 seconds for an even longer "clear" period after scrolling
  });

  // Base blur value based on scroll (same as before)
  const scrollBlur = useTransform(scrollY, [0, 500], [20, 0]);
  
  // We'll use a motion value that animates between the "scroll focus" and "idle blur"
  // When scrolling: blur = scrollBlur
  // When stopped: blur = 20
  
  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-background">
      <motion.div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        animate={{ 
          filter: isScrolling ? `blur(${scrollBlur.get()}px)` : "blur(20px)",
        }}
        transition={{ 
          duration: 0.8, 
          ease: "easeInOut" 
        }}
        style={{ 
          backgroundImage: `url(${portraitImage})`,
          scale: 1.05 
        }}
      />
      <motion.div 
        className="absolute inset-0 bg-black/40"
      />
    </div>
  );
}
