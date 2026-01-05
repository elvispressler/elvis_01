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
          <p className="text-sm md:text-base text-white/40 max-w-2xl mx-auto font-light tracking-[0.3em] italic leading-relaxed">
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
              <div key={i} className="p-6 border border-white/5 bg-white/[0.01] rounded-lg space-y-3">
                <div className="text-white/40">{box.icon}</div>
                <div>
                  <div className="text-[9px] uppercase tracking-widest text-white/20 mb-1">{box.label}</div>
                  <div className="text-xs font-display uppercase tracking-wider">{box.text}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="font-display text-3xl uppercase tracking-widest bg-clip-text bg-gradient-to-r from-white to-white/20 text-transparent">System Profile</h2>
              <p className="text-white/50 font-light leading-relaxed text-lg">
                Expert IT-Administrator and System Manager with a mastery of geschäftskritischer 
                IT-Infrastrukturen. Specialized in deep-level system integration, automated migrations, 
                and high-availability operations management.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {skills.map((skill, i) => (
                <div key={i} className="space-y-4">
                  <h3 className="text-[10px] uppercase tracking-[0.4em] text-white/30 border-b border-white/10 pb-2">
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, j) => (
                      <span key={j} className="text-[10px] font-mono text-white/60">
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
                className="group grid md:grid-cols-4 gap-8"
              >
                <div className="md:col-span-1 space-y-4">
                  <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em] block">{exp.period}</span>
                  <h3 className="text-2xl font-display uppercase tracking-widest text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/40 transition-all duration-500">
                    {exp.company}
                  </h3>
                  <div className="text-xs font-mono text-white/40 uppercase tracking-widest leading-relaxed">
                    {exp.role}
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tags.map((tag, j) => (
                      <span key={j} className="text-[8px] uppercase tracking-tighter px-2 py-0.5 border border-white/10 bg-white/5 text-white/40">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="md:col-span-3">
                  <div className="p-8 border border-white/5 bg-white/[0.01] group-hover:bg-white/[0.02] transition-colors rounded-2xl space-y-6">
                    <ul className="space-y-4">
                      {exp.details.map((detail, k) => (
                        <li key={k} className="flex gap-4 text-white/50 font-light leading-relaxed">
                          <span className="text-white/20 mt-1.5">—</span>
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
              <div className="text-[10px] uppercase tracking-[0.3em] text-white/20 group-hover:text-white/50 transition-colors">Direct Terminal</div>
              <div className="text-lg font-mono text-white/60 border-b border-white/10 group-hover:border-white/50 transition-all">erich.florow@gmail.com</div>
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}
