import { ScrollBackground } from "@/components/ScrollBackground";
import { motion } from "framer-motion";
import { ArrowDown, Terminal, Cpu, Database, Globe, Code2, Briefcase, Zap, Shield, BarChart3, Users } from "lucide-react";

export default function Home() {
  const skills = [
    { category: "Core Ops", items: ["Linux", "Unix", "Windows", "Kubernetes", "Docker", "Jenkins", "Git", "Bash"] },
    { category: "Data & API", items: ["Oracle", "PostgreSQL", "Progress", "SQL/PL-SQL", "REST-APIs"] },
    { category: "Observability", items: ["Splunk", "ELK Stack", "Kibana", "Automic (UC4)"] },
    { category: "Governance", items: ["ITIL", "Incident/Change/Release Mgmt", "Jira", "Confluence", "ServiceNow"] }
  ];

  const experience = [
    {
      company: "WWK Versicherungen",
      role: "System- & Application Manager",
      period: "08/2020 – Present",
      details: [
        "Lead for Release- and Changemanagement for central insurance systems.",
        "Infrastructure migration from VM-based deployments to Kubernetes clusters.",
        "Implemented a central Log-Host for 200+ K8s deployments in Splunk.",
        "Devised and managed complex workflow designs via Jira-API and Jira/Confluence platforms.",
        "Implemented security protocols including NeuVector and vulnerability scans."
      ],
      tags: ["Kubernetes", "Splunk", "Jira API", "Release Mgmt"]
    },
    {
      company: "Gefasoft GmbH",
      role: "IT Service Manager",
      period: "10/2016 – 07/2020",
      details: [
        "Optimized global IT services for Automotive leaders: BMW, AUDI, VW, and MAN.",
        "Managed 24/7 emergency operations across international time zones.",
        "Full lifecycle ITIL management: Change projects, 2nd & 3rd level support.",
        "Established sustainable KPI and SLA improvement processes.",
        "Served as Scrum Master for cross-functional service teams."
      ],
      tags: ["ITIL", "SLA Mgmt", "Global Support", "Scrum"]
    },
    {
      company: "Accor Hotels, Central Europe",
      role: "Teamlead Hotel Systems / IT Applications",
      period: "01/1999 – 10/2016",
      details: [
        "Directed a 5-person team managing IT operations across Germany, Austria, and Eastern Europe.",
        "Orchestrated complex IT rollouts and transitions for new hotel locations.",
        "Standardized group-wide IT processes and ISO-compliant documentation.",
        "Managed critical interfaces with international partners like T-Systems, Oracle, and Amadeus.",
        "Led the IT re-integration and standardization of franchise partners."
      ],
      tags: ["Team Lead", "International Rollouts", "Standardization", "ISO"]
    }
  ];

  return (
    <div className="min-h-screen font-sans text-white selection:bg-white/20 overflow-x-hidden">
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
            <span className="text-[10px] uppercase tracking-[0.4em] font-display text-white/50">Infrastructure | LifeCycle-Management | Monitoring | Service & Operations</span>
          </div>
          <h1 className="font-display text-6xl md:text-9xl font-black uppercase tracking-[0.15em] mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30">
            Erich Florow
          </h1>
          <p className="text-sm md:text-base text-white/60 max-w-2xl mx-auto font-light tracking-[0.3em] italic leading-relaxed">
            "Find what you love and let it kill you."
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/30"
        >
          <span className="text-[10px] uppercase tracking-[0.5em]">Scan Data</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 pb-32 space-y-40">
        
        {/* Core Capabilities */}
        <section className="pt-20 space-y-20">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <Zap className="w-4 h-4" />, label: "Response", text: "20+ Years Excellence" },
              { icon: <Shield className="w-4 h-4" />, label: "Security", text: "Enterprise Ready" },
              { icon: <BarChart3 className="w-4 h-4" />, label: "Efficiency", text: "SLA Optimized" },
              { icon: <Users className="w-4 h-4" />, label: "Leadership", text: "Cross-Functional" },
            ].map((box, i) => (
              <div key={i} className="p-6 border border-white/10 bg-white/[0.03] rounded-lg space-y-3 hover:bg-white/[0.05] transition-colors">
                <div className="text-white/60">{box.icon}</div>
                <div>
                  <div className="text-[9px] uppercase tracking-widest text-white/40 mb-1">{box.label}</div>
                  <div className="text-xs font-display uppercase tracking-wider text-white/90">{box.text}</div>
                </div>
              </div>
            ))}
          </div>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <h2 className="font-display text-3xl uppercase tracking-widest bg-clip-text bg-gradient-to-r from-white to-white/40 text-transparent">System Profile</h2>
                <p className="text-white/80 font-light leading-relaxed text-lg">
                  Specialist in managing and orchestrating high-availability IT infrastructures.
                  Focus on LifeCycle Management, Monitoring, and Service & Operations in complex enterprise environments.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                {skills.map((skill, i) => (
                  <div key={i} className="space-y-4 group/skill">
                    <h3 className="text-[10px] uppercase tracking-[0.4em] text-white/40 border-b border-white/10 pb-2 group-hover/skill:text-[#ff0080] group-hover/skill:border-[#ff0080]/50 transition-all duration-300">
                      {skill.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, j) => (
                        <span key={j} className="px-2 py-1 text-[10px] font-mono border border-white/10 bg-white/[0.03] text-white/60 hover:border-[#ff0080]/50 hover:bg-[#ff0080]/10 hover:text-[#ff0080] transition-all duration-300 rounded-sm cursor-default">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </section>

        {/* Professional Trajectory */}
        <section className="space-y-20">
          <div className="flex items-center gap-6">
            <h2 className="font-display text-4xl uppercase tracking-[0.4em] text-white/90">Trajectory</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent" />
          </div>

          <div className="space-y-32">
            {experience.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group grid md:grid-cols-12 gap-8 md:gap-12"
              >
                <div className="md:col-span-4 space-y-4 md:border-r md:border-white/5 md:pr-8">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.4em] block">{exp.period}</span>
                  <h3 className="text-2xl font-display uppercase tracking-widest text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#ff0080] transition-all duration-500 break-words">
                    {exp.company}
                  </h3>
                  <div className="text-xs font-mono text-white/60 uppercase tracking-widest leading-relaxed">
                    {exp.role}
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tags.map((tag, j) => (
                      <span key={j} className="text-[8px] uppercase tracking-tighter px-2 py-0.5 border border-white/20 bg-white/5 text-white/60 hover:border-[#ff0080]/50 hover:bg-[#ff0080]/10 hover:text-[#ff0080] transition-all duration-300 cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="md:col-span-8">
                  <div className="p-8 border border-white/10 bg-white/[0.02] group-hover:bg-white/[0.04] transition-colors rounded-2xl space-y-6">
                    <ul className="space-y-4">
                      {exp.details.map((detail, k) => (
                        <li key={k} className="flex gap-4 text-white/70 font-light leading-relaxed">
                          <span className="text-white/40 mt-1.5">—</span>
                          <span className="text-sm md:text-base">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Engineering Stats */}
        <section className="py-20 border-y border-white/5 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: "Uptime focus", val: "99.99%" },
            { label: "Systems Migrated", val: "200+" },
            { label: "Expertise years", val: "20+" },
            { label: "Project lead", val: "Global" },
          ].map((s, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="text-3xl font-display font-black tracking-tighter text-white/80">{s.val}</div>
              <div className="text-[9px] uppercase tracking-[0.4em] text-white/20">{s.label}</div>
            </div>
          ))}
        </section>

        {/* Contact System */}
        <section className="pt-20 text-center space-y-16">
          <div className="space-y-4">
            <h2 className="font-display text-5xl md:text-7xl uppercase tracking-[0.3em] opacity-80">Connect_</h2>
            <p className="text-xs text-white/20 font-light tracking-[0.4em] uppercase">Ready for deployment</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <a href={`mailto:erich.florow@gmail.com`} className="group space-y-2">
              <div className="text-[10px] uppercase tracking-[0.3em] text-white/20 group-hover:text-[#ff0080]/50 transition-colors">Direct Terminal</div>
              <div className="text-lg font-mono text-white/60 border-b border-white/10 group-hover:border-[#ff0080]/50 group-hover:text-[#ff0080] transition-all">erich.florow@gmail.com</div>
            </a>
            <a href="https://www.linkedin.com/in/erich-florow-68777571" target="_blank" rel="noopener noreferrer" className="group space-y-2">
              <div className="text-[10px] uppercase tracking-[0.3em] text-white/20 group-hover:text-[#ff0080]/50 transition-colors">Professional Network</div>
              <div className="text-lg font-mono text-white/60 border-b border-white/10 group-hover:border-[#ff0080]/50 group-hover:text-[#ff0080] transition-all flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </div>
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}
