import { motion, useScroll, useTransform } from "framer-motion";
import portraitImage from "@assets/generated_images/professional_cinematic_portrait_of_a_creative_person.png";

export function ScrollBackground() {
  const { scrollY } = useScroll();
  
  // Blur effect: Starts blurry (20px) and becomes clear (0px) as you scroll 500px
  const blurValue = useTransform(scrollY, [0, 500], ["20px", "0px"]);
  
  // Optional: Add a slight dark overlay that fades out or adjusts as needed
  // For now, let's keep it simple to let the image shine, maybe just a constant subtle overlay
  // or we can make the overlay slightly darker when it's blurry to help text pop
  const overlayOpacity = useTransform(scrollY, [0, 500], [0.4, 0.2]);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-background">
      <motion.div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${portraitImage})`,
          filter: useTransform(blurValue, (v) => `blur(${v})`),
          scale: 1.05 // Slight scale to prevent blur edges from showing white
        }}
      />
      <motion.div 
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />
    </div>
  );
}
