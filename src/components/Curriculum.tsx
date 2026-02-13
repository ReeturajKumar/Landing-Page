import React, { useEffect, useRef } from 'react';

const Curriculum: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let hasSentEvent = false;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasSentEvent) {
          hasSentEvent = true;
          // Small timeout to ensure LeadPopup listener is definitely ready
          setTimeout(() => {
            window.dispatchEvent(new CustomEvent('trigger-lead-popup'));
          }, 100);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: '0px 0px -50px 0px' // Offset to trigger slightly before/during entry
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const phases = [
    {
      id: "01",
      title: "Cloud foundations",
      duration: "4 weeks",
      desc: "Zero to cloud expert",
      skills: ["AWS core services", "Azure fundamentals", "Hands-on labs", "Cost optimization"],
      color: "bg-blue-500"
    },
    {
      id: "02",
      title: "DevOps engineering",
      duration: "8 weeks",
      desc: "Core automation mastery",
      skills: ["Linux administration", "Git & GitHub strategy", "CI/CD pipelines", "Docker & K8s"],
      color: "bg-orange-500"
    },
    {
      id: "03",
      title: "Infrastructure as code",
      duration: "4 weeks",
      desc: "Automating architecture",
      skills: ["Terraform (multi-Cloud)", "Ansible config", "CloudFormation", "State management"],
      color: "bg-purple-500"
    },
    {
      id: "04",
      title: "Monitoring & security",
      duration: "3 weeks",
      desc: "Production reliability",
      skills: ["Prometheus & Grafana", "ELK stack logging", "AWS CloudWatch", "DevSecOps basics"],
      color: "bg-teal-500"
    },
    {
      id: "05",
      title: "Career acceleration",
      duration: "Ongoing",
      desc: "The final mile",
      skills: ["ATS-optimized resumes", "Interview mock drills", "LinkedIn persona", "Salary negotiation"],
      color: "bg-[#FF5024]"
    }
  ];

  return (
    <section ref={sectionRef} id="curriculum" className="relative py-8 bg-slate-50/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Inline Header Strategy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-5 border-b border-slate-100 pb-4">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-[#FF5024] tracking-tight ml-0.5">The roadmap</span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tighter text-slate-900 leading-none">
              Program <span className="text-[#FF5024]">Breakdown.</span>
            </h2>
          </div>
          <p className="text-[13px] font-medium text-slate-500 max-w-[320px] md:text-right italic leading-relaxed">
            A comprehensive, project-first roadmap engineered to take you from zero to hiring-ready.
          </p>
        </div>

        {/* Phase Timeline-Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {phases.map((phase, i) => (
            <div 
              key={i} 
              className="group relative bg-white p-6 rounded-[2rem] border border-slate-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Step Indicator */}
              <div className="absolute top-0 right-6 transform -translate-y-1/2">
                <div className={`w-8 h-8 rounded-full ${phase.color} text-white flex items-center justify-center text-[10px] font-bold shadow-lg shadow-${phase.color}/20`}>
                  {phase.id}
                </div>
              </div>

              <div className="space-y-5 pt-2">
                <div>
                  <span className="text-[10px] font-bold text-[#FF5024] tracking-tight leading-none">{phase.duration}</span>
                  <h4 className="text-[15px] font-bold text-slate-900 mt-1 leading-tight group-hover:text-[#FF5024] transition-colors">{phase.title}</h4>
                  <p className="text-[11px] font-medium text-slate-400 mt-1">{phase.desc}</p>
                </div>

                <div className="space-y-2.5">
                  {phase.skills.map((skill, j) => (
                    <div key={j} className="flex items-start gap-2 group/skill">
                      <div className={`w-1 h-1 rounded-full ${phase.color} mt-1.5 opacity-40 group-hover/skill:opacity-100 transition-all`} />
                      <span className="text-[11px] font-medium text-slate-500 group-hover/skill:text-slate-900 transition-colors leading-tight">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Phase Connector */}
              <div className="mt-8 pt-4 border-t border-slate-50 flex items-center justify-between">
                 <span className="text-[9px] font-bold text-slate-300 tracking-tight">Phase sequence</span>
                 <div className="w-1.5 h-1.5 rounded-full bg-slate-100 group-hover:bg-[#FF5024] transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorative Accent */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-slate-100 rounded-full blur-[100px] -z-10 opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-[120px] -z-10 opacity-20" />
    </section>
  );
};

export default Curriculum;
