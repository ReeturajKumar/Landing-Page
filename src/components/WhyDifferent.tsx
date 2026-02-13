import React from 'react';
import user1 from '../assets/avatars/user1.jpg';
import user2 from '../assets/avatars/user2.jpg';
import user3 from '../assets/avatars/user3.jpg';
import user4 from '../assets/avatars/user4.jpg';

const WhyDifferent: React.FC = () => {
  const points = [
    {
      other: "Generic recorded lectures",
      otherStat: "Low retention",
      cb: "180+ Hrs Live Architecture Sessions",
      cbStat: "94% Active completion",
      accent: "bg-blue-500"
    },
    {
      other: "Theory-heavy documentation",
      otherStat: "Lack of context",
      cb: "12+ Real-World DevOps Capstones",
      cbStat: "Industry-ready portfolio",
      accent: "bg-orange-500"
    },
    {
      other: "Average salary hike: 10-15%",
      otherStat: "Gradual growth",
      cb: "Average Salary Hike: 156%",
      cbStat: "₹12L-₹24L Range",
      accent: "bg-green-500"
    },
    {
      other: "Email-only support queues",
      otherStat: "24-48hr delay",
      cb: "Instant 1:1 Slack & Live Mentorship",
      cbStat: "5-min response time",
      accent: "bg-purple-500"
    },
    {
      other: "No placement accountability",
      otherStat: "Self-driven job hunt",
      cb: "3-Stage Career Acceleration Program",
      cbStat: "Placement assistance",
      accent: "bg-[#FF5024]"
    }
  ];

  return (
    <section id="approach" className="relative py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-[#FF5024] tracking-tight ml-0.5 uppercase">The standard vs CloudBlitz</span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tighter text-slate-900 leading-none">
              The CloudBlitz <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5024] to-[#F9A01B]">difference.</span>
            </h2>
          </div>
          <p className="text-[13px] text-slate-500 font-medium max-w-[280px] md:text-right leading-relaxed italic border-r-2 border-slate-100 pr-4">
             Numbers don't lie. Most institutes sell access; <span className="text-slate-900 font-bold">we engineer careers.</span>
          </p>
        </div>

        {/* High-Performance Comparison Matrix - Compact Pro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-100 rounded-[1.5rem] overflow-hidden border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-md">
          
          {/* Left Side: Standard Way - Short & Sharp */}
          <div className="bg-white p-6 md:p-8 space-y-6">
            <div className="pb-3 border-b border-slate-100">
               <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Standard training institutes</span>
            </div>
            <div className="space-y-4">
              {points.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-100 shrink-0" />
                  <div className="flex flex-col">
                    <p className="text-[12px] font-bold text-slate-400 group-hover:text-slate-600 transition-colors leading-none">{item.other}</p>
                    <span className="text-[8px] font-bold text-slate-300 uppercase mt-0.5">{item.otherStat}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: CloudBlitz Way - High Density */}
          <div className="bg-slate-50/50 p-6 md:p-8 space-y-6 relative">
            <div className="pb-3 border-b border-orange-100">
               <span className="text-[9px] font-black text-[#FF5024] uppercase tracking-widest">Our methodology</span>
            </div>
            <div className="space-y-4">
              {points.map((item, i) => (
                <div key={i} className="group flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-lg bg-white border border-orange-100 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#FF5024] transition-all">
                      <span className="text-[#FF5024] group-hover:text-white text-[10px] font-bold transition-colors mb-0.5">✓</span>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[12px] font-bold text-slate-800 leading-none">{item.cb}</p>
                      <span className="text-[8px] font-black text-[#FF5024] uppercase mt-0.5 tracking-tighter">{item.cbStat}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Proof Statement */}
        <div className="mt-12 text-center max-w-4xl mx-auto space-y-6">
          <p className="text-lg md:text-xl font-bold text-slate-900 leading-tight tracking-tight">
            "Our students don't just learn tools. They build portfolios that make recruiters say: <span className="text-[#FF5024] italic underline decoration-orange-100 underline-offset-4 decoration-2">When can you join?</span>"
          </p>
          
          <div className="flex items-center justify-center gap-3">
              <div className="flex -space-x-1.5">
                {[user1, user2, user3, user4].map((src, j) => (
                  <img 
                    key={j} 
                    src={src}
                    alt="Success story"
                    width={28}
                    height={28}
                    className="w-7 h-7 rounded-full border-2 border-white object-cover bg-slate-100" 
                    loading="lazy"
                  />
                ))}
              </div>
             <p className="text-[10px] font-bold text-slate-400 tracking-tight">
               Joined by <span className="text-slate-900">1,500+ Indian professionals</span>
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
