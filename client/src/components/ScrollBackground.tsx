import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import portraitImage from "@assets/generated_images/professional_cinematic_portrait_of_a_creative_person.png";

export function ScrollBackground() {
  const { scrollY } = useScroll();
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // Define the base blur target based on scroll (0-500px -> 20-0px blur)
  const targetBlur = useTransform(scrollY, [0, 500], [20, 0]);

  // Use a spring for super smooth transitions
  // stiffness: lower = slower/more organic
  // damping: higher = less bounce
  const smoothBlurValue = useSpring(20, {
    stiffness: 40,
    damping: 25,
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
        smoothBlurValue.set(20);
      }, 3000);
    });

    return () => unsubscribe();
  }, [scrollY, smoothBlurValue, targetBlur]);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-background">
      <motion.div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${portraitImage})`,
          filter: useTransform(smoothBlurValue, (v) => `blur(${v}px)`),
          scale: 1.05 
        }}
      />
      <motion.div 
        className="absolute inset-0 bg-black/40"
      />
    </div>
  );
}
