import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import portraitImage from "@assets/generated_images/professional_cinematic_portrait_of_a_creative_person.png";

export function ScrollBackground() {
  const { scrollY } = useScroll();
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const currentBlur = useMotionValue(20);

  // Transform scroll position into a blur value (0 to 500px scroll = 20px to 0px blur)
  const scrollBlur = useTransform(scrollY, [0, 500], [20, 0]);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolling(true);
      
      // Calculate current focus blur based on scroll position
      // Map scroll [0, 500] to blur [20, 0]
      const targetBlur = Math.max(0, 20 - (latest / 500) * 20);
      currentBlur.set(targetBlur);

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
        // Animate back to idle blur
        currentBlur.set(20);
      }, 3000);
    });

    return () => unsubscribe();
  }, [scrollY, currentBlur]);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-background">
      <motion.div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${portraitImage})`,
          filter: useTransform(currentBlur, (v) => `blur(${v}px)`),
          scale: 1.05 
        }}
        transition={{ 
          duration: 0.8, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute inset-0 bg-black/40"
      />
    </div>
  );
}
