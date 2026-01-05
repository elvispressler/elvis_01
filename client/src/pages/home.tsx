import { ScrollBackground } from "@/components/ScrollBackground";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-white">
      <ScrollBackground />
      
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center relative p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center z-10"
        >
          <h1 className="font-serif text-5xl md:text-8xl font-bold tracking-tight mb-4 drop-shadow-lg">
            Erich Florow
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-lg mx-auto font-light tracking-wide">
            Design Engineer & Creative Technologist
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-xs uppercase tracking-widest">Scroll to reveal</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </motion.div>
      </section>

      {/* Content Sections */}
      <main className="max-w-4xl mx-auto px-6 pb-24 space-y-32">
        
        {/* About Section */}
        <section className="space-y-8 backdrop-blur-md bg-black/30 p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl">
          <h2 className="font-serif text-3xl md:text-4xl text-white/90">The Vision</h2>
          <div className="space-y-6 text-lg md:text-xl text-white/80 leading-relaxed font-light">
            <p>
              I believe that digital experiences should be felt, not just seen. 
              My work bridges the gap between functional engineering and emotional design.
            </p>
            <p>
              By combining robust code with cinematic aesthetics, I create interfaces 
              that tell a story and leave a lasting impression.
            </p>
          </div>
        </section>

        {/* Selected Work */}
        <section className="space-y-12">
          <div className="flex items-end justify-between border-b border-white/20 pb-4">
            <h2 className="font-serif text-3xl md:text-4xl text-white/90">Selected Work</h2>
            <span className="text-white/50 font-mono text-sm">2024 — 2025</span>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {[1, 2, 3, 4].map((item) => (
              <motion.div 
                key={item}
                whileHover={{ scale: 1.02 }}
                className="group relative aspect-[4/3] bg-white/5 rounded-lg overflow-hidden border border-white/10 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-medium mb-1">Project 0{item}</h3>
                  <p className="text-sm text-white/60">Interface Design / Development</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="py-24 text-center space-y-8">
          <h2 className="font-serif text-4xl md:text-6xl text-white/90">Let's Create Together</h2>
          <p className="text-xl text-white/60 max-w-xl mx-auto">
            Available for freelance projects and creative collaborations.
          </p>
          <a 
            href="mailto:hello@example.com"
            className="inline-block px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-colors"
          >
            Get in Touch
          </a>
        </section>

      </main>
    </div>
  );
}
