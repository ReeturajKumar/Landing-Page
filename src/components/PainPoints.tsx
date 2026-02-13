import React from 'react';

const PainPoints: React.FC = () => {
  const points = [
    {
      label: "Career growth",
      title: "Stuck in the same role for 2+ years",
      reality: "While your batchmates switch for ₹10L+ packages",
      accent: "bg-orange-500"
    },
    {
      label: "Practical skills",
      title: "No hands-on cloud experience",
      reality: "YouTube tutorials alone won't get you hired",
      accent: "bg-blue-500"
    },
    {
      label: "Interview confidence",
      title: "Rejected in DevOps rounds",
      reality: "Because Kubernetes isn't just about commands",
      accent: "bg-red-500"
    },
    {
      label: "Future security",
      title: "Watching salary hikes pass you by",
      reality: "Missing out on ₹3-5L market jumps every year",
      accent: "bg-teal-500"
    }
  ];

  return (
    <section id="why-now" className="relative py-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Re-tuned Header for all breakpoints (Consistent Left Alignment) */}
        <div className="mb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12 pb-8 border-b border-slate-100/50 text-left items-start lg:items-end">
          <div className="space-y-3">
            <h2 className="text-[24px] sm:text-4xl lg:text-[42px] xl:text-[48px] font-bold tracking-tight text-slate-900 leading-[1.15]">
              Is this <br className="lg:hidden" />
              <span className="relative inline-block py-1 text-transparent bg-clip-text bg-gradient-to-r from-[#FF5024] to-[#F9A01B]">happening to you too?</span>
            </h2>
          </div>
          <p className="text-[13px] sm:text-base font-medium text-slate-500 max-w-2xl lg:text-right leading-relaxed">
            If you're nodding your head... you're not alone. But here's the truth: <br className="hidden sm:block" />
            <span className="text-slate-900 font-bold">It's not your fault.</span> You were never taught the skills that actually get you hired.
          </p>
        </div>

        {/* 4 Columns - Human & Premium Bento Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {points.map((point, i) => (
            <div 
              key={i} 
              className="group relative p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-[#FF502433] hover:shadow-[0_30px_60px_-15px_rgba(255,80,36,0.1)] transition-all duration-500 flex flex-col justify-between"
            >
              {/* Theme Glow Effect: Unified & Subtle Ambient Orange */}
              <div className="absolute -inset-2 -z-10 rounded-[2.5rem] bg-orange-100/50 blur-[50px] transition-all duration-700" />

              <div className="space-y-5">
                 <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-400 tracking-tight leading-none">{point.label}</span>
                    <div className={`w-1.5 h-1.5 rounded-full ${point.accent} opacity-40 group-hover:opacity-100 transition-opacity`} />
                 </div>

                 <div className="space-y-2">
                    <h4 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-[#FF5024] transition-colors">
                      {point.title}
                    </h4>
                    <p className="text-[11px] font-medium text-slate-400 italic leading-relaxed">
                      {point.reality}
                    </p>
                 </div>
              </div>

              {/* Decorative Human Element */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1.5">
                    <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-slate-200 overflow-hidden">
                       <img src={`https://i.pravatar.cc/50?u=${i}`} alt="user" className="w-full h-full object-cover" />
                    </div>
                    <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-slate-300 overflow-hidden">
                       <img src={`https://i.pravatar.cc/50?u=${i+10}`} alt="user" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <span className="text-[9px] font-bold text-slate-300 tracking-tight">Facing this right now</span>
                </div>
              </div>

              {/* Smooth Bottom Accent Indicator */}
              <div className={`absolute bottom-0 left-12 right-12 h-0.5 ${point.accent} opacity-0 group-hover:opacity-100 blur-sm transition-all duration-700`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
