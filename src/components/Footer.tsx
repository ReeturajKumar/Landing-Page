import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative py-12 bg-white overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* High-Density Action Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-100 rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm mb-10">
          
          {/* Action 1: Demo */}
          <button className="bg-white p-6 hover:bg-slate-50 transition-all group text-left">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center border border-orange-100 group-hover:bg-[#FF5024] transition-all">
                <svg className="w-5 h-5 text-[#FF5024] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-[#FF5024] tracking-tight leading-none">Book demo</p>
                <h4 className="text-sm font-bold text-slate-900 leading-tight">Experience our live sessions</h4>
                <p className="text-[10px] font-medium text-slate-400">200+ enrollers this month</p>
              </div>
            </div>
          </button>

          {/* Action 2: WhatsApp */}
          <button className="bg-white p-6 hover:bg-slate-50 transition-all group text-left">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center border border-green-100 group-hover:bg-[#25D366] transition-all">
                <img className="w-10 h-10" src="https://static.vecteezy.com/system/resources/thumbnails/018/930/746/small/whatsapp-logo-whatsapp-icon-whatsapp-transparent-free-png.png" alt="WhatsApp" />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-green-600 tracking-tight leading-none">Instant help</p>
                <h4 className="text-sm font-bold text-slate-900 leading-tight">Chat with our advisors</h4>
                <p className="text-[10px] font-medium text-slate-400">Response time: ~3 mins</p>
              </div>
            </div>
          </button>

          {/* Action 3: Call */}
          <button className="bg-white p-6 hover:bg-slate-50 transition-all group text-left">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-200 group-hover:bg-slate-900 transition-all">
                <svg className="w-5 h-5 text-slate-900 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-slate-400 tracking-tight leading-none">Direct line</p>
                <h4 className="text-sm font-bold text-slate-900 leading-tight">+91-XXXXX-XXXXX</h4>
                <p className="text-[10px] font-medium text-slate-400">10 am – 8 pm (All days)</p>
              </div>
            </div>
          </button>
        </div>

        {/* Pricing & Legal Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2">
            <div className="text-[11px] font-bold text-slate-900 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-200" />
              <span>Full course: ₹29,999 (EMI options available)</span>
            </div>
            <div className="h-4 w-px bg-slate-100 hidden sm:block" />
            <button className="text-[10px] font-bold text-slate-400 hover:text-slate-900 transition-colors tracking-tight">Pricing guide</button>
            <button className="text-[10px] font-bold text-slate-400 hover:text-slate-900 transition-colors tracking-tight">Syllabus PDF</button>
          </div>

          <div className="flex flex-col md:items-end gap-1">
            <p className="text-[10px] font-bold text-slate-300 tracking-tight">© {new Date().getFullYear()} CloudBlitz. Career-first training.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
