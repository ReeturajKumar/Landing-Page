import React from 'react';

const RiskReversal: React.FC = () => {
  const items = [
    {
      title: "Free demo class",
      points: ["Attend 1 live session", "See how we teach", "No credit card needed"],
      tag: "Limited slots",
      svg: (
        <svg className="w-6 h-6 text-[#FF5024]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Learn-or-refund",
      points: ["Not satisfied after 2 sessions?", "Get 100% money back", "No questions asked"],
      tag: "Iron-clad",
      svg: (
        <svg className="w-6 h-6 text-[#FF5024]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Lifetime support",
      points: ["Doubt solving even after course", "Job referrals for 1 year", "Alumni community access"],
      tag: "Always here",
      svg: (
        <svg className="w-6 h-6 text-[#FF5024]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Short & Professional Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-slate-50 pb-8">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-[#FF5024] tracking-tight ml-0.5">Trust shield</span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tighter text-slate-900 leading-none">
              Still thinking? <span className="text-[#FF5024]">Zero Risk.</span>
            </h2>
          </div>
          <p className="text-[13px] font-medium text-slate-400 max-w-[550px] md:text-right italic leading-snug">
            "We're so confident in our training that we're willing to put our money where our mouth is. If you don't see value, you walk away with a full refund."
          </p>
        </div>

        {/* 3-Column SVG-Driven Layout */}
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div 
              key={i} 
              className="group relative p-8 rounded-[2rem] bg-slate-50 border border-slate-100 transition-all duration-300 hover:bg-white hover:border-orange-100 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center border border-orange-100 group-hover:bg-[#FF5024] group-hover:border-[#FF5024] transition-all">
                    <div className="group-hover:text-white transition-colors">
                      {item.svg}
                    </div>
                  </div>
                  <span className="text-[9px] font-bold text-slate-300 tracking-tight">{item.tag}</span>
                </div>

                <div className="space-y-3">
                  <h4 className="text-[15px] font-bold text-slate-900 leading-tight group-hover:text-[#FF5024] transition-colors">{item.title}</h4>
                  <div className="space-y-2">
                    {item.points.map((point, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-slate-200 group-hover:bg-[#FF5024] transition-colors" />
                        <span className="text-[11px] font-medium text-slate-500">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RiskReversal;
