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
    <section id="why-now" className="relative py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Short & Inline Strategic Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-50">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tighter text-slate-900 leading-tight">
            Is this <span className="relative inline-block pr-4 py-1 text-transparent bg-clip-text bg-gradient-to-r from-[#FF5024] to-[#F9A01B]">happening to you too?</span>
          </h2>
          <p className="text-sm font-medium text-slate-500 max-w-lg md:text-right leading-relaxed">
            If you're nodding your head... you're not alone. But here's the truth: <br />
            <span className="text-slate-900 font-bold">It's not your fault.</span> You were never taught the skills that actually get you hired.
          </p>
        </div>

        {/* 4 Columns - Human & Premium Bento Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {points.map((point, i) => (
            <div 
              key={i} 
              className="group relative p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-orange-100 hover:shadow-[0_20px_40px_-10px_rgba(255,80,36,0.06)] transition-all duration-500 flex flex-col justify-between"
            >
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
                    <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-slate-200" />
                    <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-slate-300" />
                  </div>
                  <span className="text-[9px] font-bold text-slate-300 tracking-tight">Facing this right now</span>
                </div>
              </div>

              {/* Smooth Accent Indicator */}
              <div className={`absolute bottom-0 left-12 right-12 h-1 ${point.accent} opacity-0 group-hover:opacity-20 blur-md transition-all duration-700`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
