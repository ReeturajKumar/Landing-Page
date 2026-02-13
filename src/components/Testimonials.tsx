import React from 'react';
import prashant from '../assets/avatars/prashant.jpg';
import sneha from '../assets/avatars/sneha.jpg';
import rahul from '../assets/avatars/rahul.jpg';

const Testimonials: React.FC = () => {
  const stories = [
    {
      name: "Prashant Deshmukh",
      from: "Manual Tester",
      to: "DevOps Engineer",
      salary: "₹3.8L → ₹9.5L",
      hike: "+150%",
      img: prashant,
      quote: "Stuck in manual testing for 4 years. CloudBlitz changed everything. Cracked 4 interviews in 2 weeks.",
      company: "Persistent Systems"
    },
    {
      name: "Sneha Patil",
      from: "L1 Support",
      to: "Cloud Engineer",
      salary: "₹4.2L → ₹14L",
      hike: "+233%",
      img: sneha,
      quote: "BRUTAL mock interviews but they prepared me perfectly. Now managing infra for a US Fintech.",
      company: "Remote (US Startup)"
    },
    {
      name: "Rahul Jadhav",
      from: "Java Developer",
      to: "DevOps Architect",
      salary: "₹6L → ₹16L",
      hike: "+166%",
      img: rahul,
      quote: "Zero DevOps to Architect in 5 months. Built full CI/CD pipelines and cracked 3 big offers.",
      company: "Accenture"
    }
  ];

  const stats = [
    { label: "Students", value: "2,300+" },
    { label: "Avg. Hike", value: "78%" },
    { label: "Placed", value: "450+" },
    { label: "Partners", value: "40+" }
  ];

  return (
    <section id="testimonials" className="relative py-16 bg-white overflow-hidden group/section">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Compact Inline Header Strategy - Optimized for Small/MD Screens */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6 border-b border-slate-50 pb-6 text-left items-start lg:items-end">
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FF5024]">Case Studies</span>
            <h2 className="text-[24px] sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-none">
              Real People. <span className="text-[#FF5024]">Real Success.</span>
            </h2>
          </div>
          <p className="text-[13px] sm:text-base font-medium text-slate-400 max-w-2xl lg:text-right leading-relaxed italic">
            "Your career switch is closer than you think."
          </p>
        </div>

        {/* Compact & High-Density Cards - Responsive Grid Architecture */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-12">
          {stories.map((story, i) => (
            <div 
              key={i} 
              className="group relative rounded-3xl lg:rounded-[2rem] bg-slate-50 border border-slate-100 p-5 sm:p-6 flex flex-col justify-between transition-all duration-500 hover:bg-white hover:border-[#FF502433] hover:shadow-[0_40px_80px_-20px_rgba(255,80,36,0.1)] hover:-translate-y-1"
            >
              {/* Theme Glow Effect: Default Ambient Orange */}
              <div className="absolute -inset-2 -z-10 rounded-[2.5rem] bg-orange-200/40 blur-[50px] opacity-100 transition-all duration-700" />
              <div className="space-y-5 sm:space-y-6">
                {/* Header: User & Hike */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src={story.img} 
                      alt={story.name} 
                      width={44}
                      height={44}
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl object-cover shadow-sm bg-white" 
                      loading="lazy"
                    />
                    <div>
                      <h4 className="text-[11px] sm:text-xs font-bold text-slate-900 leading-none group-hover:text-[#FF5024] transition-colors">{story.name}</h4>
                      <p className="text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-[0.05em] sm:tracking-tighter mt-1">{story.company}</p>
                    </div>
                  </div>
                  <div className="px-2 py-1 bg-orange-50 rounded-lg group-hover:bg-[#FF5024] transition-colors">
                    <span className="text-[9px] sm:text-[10px] font-black text-[#FF5024] group-hover:text-white transition-colors">{story.hike}</span>
                  </div>
                </div>

                {/* The Path Switch */}
                <div className="flex items-center gap-2 text-[9px] sm:text-[10px]">
                  <span className="text-slate-400 font-medium line-through">{story.from}</span>
                  <span className="text-orange-300 group-hover:text-[#FF5024] group-hover:scale-125 transition-all">→</span>
                  <span className="text-slate-900 font-bold uppercase tracking-tight">{story.to}</span>
                </div>

                <div className="space-y-2">
                  <p className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight group-hover:text-[#FF5024] transition-colors">{story.salary}</p>
                  <p className="text-[12px] sm:text-[13px] font-medium text-slate-500 leading-relaxed italic">
                    "{story.quote}"
                  </p>
                </div>
              </div>

              {/* Humanized Footer Marker */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between relative">
                <span className="text-[9px] font-bold text-[#FF5024] uppercase tracking-widest group-hover:tracking-[0.1em] transition-all">Verified Success Story</span>
                <div className="h-1.5 w-1.5 rounded-full bg-orange-200 group-hover:bg-[#FF5024] transition-colors" />
              </div>

              {/* Smooth Bottom Accent Indicator */}
              <div className="absolute bottom-0 left-12 right-12 h-0.5 bg-[#FF5024] opacity-0 group-hover:opacity-100 blur-sm transition-all duration-700" />
            </div>
          ))}
        </div>

        {/* Ultra-Compact Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 rounded-[2rem] overflow-hidden border border-slate-100">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="bg-white py-4 sm:py-6 px-2 sm:px-4 flex flex-col items-center justify-center text-center group/stat transition-colors hover:bg-slate-50/50"
            >
              <div className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight group-hover/stat:text-[#FF5024] transition-colors">{stat.value}</div>
              <div className="text-[8px] sm:text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
