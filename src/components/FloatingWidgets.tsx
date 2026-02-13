import React from 'react';

const FloatingWidgets: React.FC = () => {
  const handleOpenPopup = () => {
    window.dispatchEvent(new CustomEvent('manual-trigger-lead-popup'));
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/91XXXXXXXXXX', '_blank'); // Replace with actual number
  };

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col gap-6 items-center pl-3 pointer-events-none">
      {/* Scholarship Vertical Pill - Final Vision Exact Match */}
      <button 
        onClick={handleOpenPopup}
        className="pointer-events-auto flex flex-col items-center bg-black text-white px-3.5 py-6 rounded-[1.2rem] shadow-[0_15px_35px_rgba(255,80,36,0.15)] border border-[#FF5024]/10 active:scale-95 group transition-all duration-300"
      >
        {/* Text Container: Single Vertical Line (Stacked) */}
        <div className="flex flex-col items-center gap-0 mb-4 rotate-180" style={{ writingMode: 'vertical-rl' }}>
          <span className="text-[12px] font-bold text-white tracking-tight leading-none">
            Get up to 35% Scholarship
          </span>
          <span className="text-[12px] font-black text-[#FF5024] tracking-tight leading-none mt-1">
            click to Check Eligibility
          </span>
        </div>

        {/* Serrated Badge Icon - The "Source" of the text */}
        <div className="text-[#FF5024] pb-2">
          <svg className="w-10 h-10 drop-shadow-[0_0_10px_rgba(255,80,36,0.2)]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.41 1.41L17 3l.41 2.59L20 6l-.41 2.41L21 11l-1.41 2.41L20 16l-2.59.41L17 19l-2.41-.41L12 21l-2.41-1.41L7 19l-.41-2.59L4 16l.41-2.41L3 11l1.41-2.41L4 6l2.59-.41L7 3l2.41.41L12 2m-1.5 6a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5m3 5a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5M9 17h2l4-10h-2l-4 10z" />
          </svg>
        </div>
      </button>

      {/* WhatsApp Button */}
      <button 
        onClick={handleWhatsApp}
        className="pointer-events-auto w-14 h-14 bg-[#12D136] text-white rounded-full flex items-center justify-center shadow-xl transition-all active:scale-95 group relative"
      >
        <div className="absolute inset-0 bg-[#12D136] rounded-full animate-ping opacity-20" />
        <svg className="w-8 h-8 relative z-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.001 12.048c0 2.123.542 4.197 1.57 6.076L0 24l6.05-1.588a11.845 11.845 0 005.996 1.625h.005c6.634 0 12.048-5.414 12.051-12.05a11.815 11.815 0 00-3.418-8.521z" />
        </svg>
      </button>
    </div>
  );
};

export default FloatingWidgets;
