import { ScrollBackground } from "@/components/ScrollBackground";
import { motion } from "framer-motion";
import { ArrowDown, Terminal, Cpu, Database, Globe, Award, Code2, Briefcase } from "lucide-react";

export default function Home() {
  const skills = [
    { category: "Systems", items: ["Linux", "Unix", "Windows", "Kubernetes", "Docker"] },
    { category: "DevOps/Tools", items: ["Jenkins", "Git", "Bash", "REST-APIs", "Automic (UC4)"] },
    { category: "Monitoring", items: ["Splunk", "ELK Stack", "Kibana"] },
    { category: "Database", items: ["Oracle", "PostgreSQL", "Progress", "SQL/PL-SQL"] },
    { category: "ITSM", items: ["ITIL", "Jira", "Confluence", "ServiceNow", "BMC Remedy"] }
  ];

  const experience = [
    {
      company: "WWK Versicherungen",
      role: "System- & Application Manager",
      period: "2020 – Present",
      desc: "Managing central systems, Kubernetes migration, and Splunk logging for 200+ deployments."
    },
    {
      company: "Gefasoft GmbH",
      role: "IT Service Manager",
      period: "2016 – 2020",
      desc: "Optimizing global IT services for Automotive leaders (BMW, AUDI, VW) and SLA management."
    },
    {
      company: "Accor Hotels",
      role: "Teamlead Hotel Systems",
      period: "1999 – 2016",
      desc: "Leading international IT integration and system standardisation across Central & Eastern Europe."
    }
  ];

  return (
    <div className="min-h-screen font-sans text-white selection:bg-white/20">
      <ScrollBackground />
      
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center relative p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center z-10"
        >
          <div className="inline-block mb-4 px-3 py-1 border border-white/20 bg-white/5 rounded-full">
            <span className="text-[10px] uppercase tracking-[0.4em] font-display text-white/50">System Architect | IT Operations</span>
          </div>
          <h1 className="font-display text-6xl md:text-9xl font-black uppercase tracking-[0.15em] mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30">
            Erich Florow
          </h1>
          <p className="text-sm md:text-base text-white/40 max-w-2xl mx-auto font-light tracking-[0.5em] uppercase leading-relaxed">
            20+ Years of Excellence in IT Systems & Infrastructure
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/30"
        >
          <span className="text-[10px] uppercase tracking-[0.5em]">Initiate Scan</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 pb-32 space-y-40">
        
        {/* Profile / Skills Grid */}
        <section className="grid md:grid-cols-3 gap-12 pt-20">
          <div className="md:col-span-1 space-y-6">
            <div className="p-1 w-12 h-12 border border-white/20 rounded-lg flex items-center justify-center bg-white/5">
              <Terminal className="w-6 h-6 text-white/70" />
            </div>
            <h2 className="font-display text-2xl uppercase tracking-widest">Profile</h2>
            <p className="text-white/50 font-light leading-relaxed">
              Experienced IT Administrator and System Manager specializing in business-critical infrastructures, 
              service management, and complex system integrations.
            </p>
            <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
              <span className="text-[10px] uppercase tracking-widest text-white/30">Location</span>
              <span className="text-sm tracking-wider">Germering, Germany</span>
            </div>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 gap-8">
            {skills.map((skill, i) => (
              <div key={i} className="space-y-3 group">
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/40 group-hover:text-white/80 transition-colors">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, j) => (
                    <span key={j} className="px-2 py-1 text-[11px] font-mono border border-white/5 bg-white/[0.02] text-white/60 group-hover:border-white/20 transition-all">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="space-y-16">
          <div className="flex items-center gap-4">
            <Briefcase className="w-5 h-5 text-white/40" />
            <h2 className="font-display text-2xl uppercase tracking-[0.3em]">Trajectory</h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="space-y-24">
            {experience.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-12 border-l border-white/5 group"
              >
                <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-white/20 rounded-full group-hover:bg-white transition-colors" />
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h3 className="text-xl font-display uppercase tracking-widest text-white/90">{exp.company}</h3>
                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">{exp.period}</span>
                  </div>
                  <div className="text-sm font-mono text-white/50 uppercase tracking-widest">{exp.role}</div>
                  <p className="text-white/40 max-w-3xl font-light leading-relaxed">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Systems Stats / Tech Stack */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <Cpu />, label: "Infrastructure", value: "Kubernetes" },
            { icon: <Database />, label: "Data Architecture", value: "Oracle / SQL" },
            { icon: <Globe />, label: "Operations", value: "Global SLA" },
            { icon: <Code2 />, label: "Automation", value: "UC4 / Bash" },
          ].map((stat, i) => (
            <div key={i} className="p-6 border border-white/5 bg-white/[0.01] rounded-xl hover:bg-white/[0.03] transition-colors flex flex-col items-center text-center space-y-4">
              <div className="text-white/30">{stat.icon}</div>
              <div className="space-y-1">
                <div className="text-[9px] uppercase tracking-widest text-white/20">{stat.label}</div>
                <div className="text-xs uppercase tracking-[0.2em] font-medium">{stat.value}</div>
              </div>
            </div>
          ))}
        </section>

        {/* Footer Contact */}
        <section className="pt-20 border-t border-white/5 text-center space-y-12">
          <div className="space-y-4">
            <h2 className="font-display text-4xl uppercase tracking-[0.2em]">Connect_</h2>
            <p className="text-sm text-white/30 font-light tracking-[0.2em]">EST. 1999 — OPERATING IN GERMANY</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="mailto:erich.florow@gmail.com" className="group flex flex-col items-center gap-2">
              <span className="text-[10px] uppercase tracking-widest text-white/20 group-hover:text-white/50 transition-colors">Direct Email</span>
              <span className="text-sm font-mono text-white/60 group-hover:text-white transition-colors underline underline-offset-8 decoration-white/10 group-hover:decoration-white/40">erich.florow@gmail.com</span>
            </a>
            <div className="hidden md:block w-px h-8 bg-white/10" />
            <a href="tel:+4915224569986" className="group flex flex-col items-center gap-2">
              <span className="text-[10px] uppercase tracking-widest text-white/20 group-hover:text-white/50 transition-colors">Mobile Access</span>
              <span className="text-sm font-mono text-white/60 group-hover:text-white transition-colors underline underline-offset-8 decoration-white/10 group-hover:decoration-white/40">(+49) 1522 456 9986</span>
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}
