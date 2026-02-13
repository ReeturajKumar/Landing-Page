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
        
        {/* Compact Inline Header Strategy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-50 pb-8">
          <div className="space-y-1">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FF5024]">Case Studies</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-none">
              Real People. <span className="text-[#FF5024]">Real Success.</span>
            </h2>
          </div>
          <p className="text-sm font-medium text-slate-400 max-w-[280px] md:text-right italic">
            "Your career switch is closer than you think."
          </p>
        </div>

        {/* Compact & High-Density Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {stories.map((story, i) => (
            <div 
              key={i} 
              className="group relative rounded-[2rem] bg-slate-50 border border-slate-100 p-6 flex flex-col justify-between transition-all duration-500 hover:bg-white hover:border-orange-200 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="space-y-6">
                {/* Header: User & Hike */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src={story.img} 
                      alt={story.name} 
                      width={44}
                      height={44}
                      className="w-11 h-11 rounded-xl object-cover shadow-sm bg-white" 
                      loading="lazy"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 leading-none">{story.name}</h4>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter mt-1">{story.company}</p>
                    </div>
                  </div>
                  <div className="px-2 py-1 bg-orange-50 rounded-lg">
                    <span className="text-[10px] font-black text-[#FF5024]">{story.hike}</span>
                  </div>
                </div>

                {/* The Path Switch */}
                <div className="flex items-center gap-2 text-[10px]">
                  <span className="text-slate-400 font-medium line-through">{story.from}</span>
                  <span className="text-orange-300">→</span>
                  <span className="text-slate-900 font-bold">{story.to}</span>
                </div>

                <div className="space-y-2">
                  <p className="text-xl font-bold text-slate-900 tracking-tight">{story.salary}</p>
                  <p className="text-[13px] font-medium text-slate-500 leading-relaxed italic">
                    "{story.quote}"
                  </p>
                </div>
              </div>

              {/* Humanized Footer Marker */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[9px] font-bold text-[#FF5024] uppercase tracking-widest group-hover:tracking-[0.1em] transition-all">Verified Success Story</span>
                <div className="h-1.5 w-1.5 rounded-full bg-orange-200 group-hover:bg-[#FF5024] transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Ultra-Compact Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 rounded-3xl overflow-hidden border border-slate-100">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="bg-white py-6 px-4 flex flex-col items-center justify-center text-center group/stat transition-colors hover:bg-slate-50/50"
            >
              <div className="text-2xl font-bold text-slate-900 tracking-tight group-hover/stat:text-[#FF5024] transition-colors">{stat.value}</div>
              <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
