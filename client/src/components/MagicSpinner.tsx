import { motion } from "framer-motion";

export function MagicSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative w-16 h-16">
        {/* Core glowing ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-t-2 border-r-2 border-[#ff0080] shadow-[0_0_15px_#ff0080]"
        />
        
        {/* Inner reverse-spinning dashed ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-2 rounded-full border-b-2 border-l-2 border-white/50 border-dashed"
        />
        
        {/* Center pulsing core */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-6 bg-[#ff0080] rounded-full blur-[2px]"
        />
      </div>
    </div>
  );
}
