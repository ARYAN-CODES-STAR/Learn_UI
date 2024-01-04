import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    // <div className="justify-between items-center bg-zinc-50 flex gap-5 px-20 py-6 max-md:flex-wrap max-md:px-5">
    //   <div className="flex items-stretch gap-3 my-auto">
    //     <img
    //       loading="lazy"
    //       src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b6389742baaaf7aeb369386df1fabe67176e2f0db70a15fbdd74c637ef1fc15?apiKey=d6479c9759d24260a152efdb16e597f6&"
    //       className="aspect-square object-contain object-center w-[38px] overflow-hidden shrink-0 max-w-full"
    //     />
    //     <div className="text-indigo-900 text-3xl font-semibold grow whitespace-nowrap mt-1.5 self-start">
    //       DelphiScript
    //     </div>
    //   </div>
    //   <div className="items-start self-stretch flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
    //     <div className="text-stone-900 text-base font-semibold self-center whitespace-nowrap my-auto">
    //       Home
    //     </div>
    //     <div className="text-stone-900 text-opacity-80 text-base self-center my-auto">
    //       Courses
    //     </div>
    //     <div className="text-stone-900 text-opacity-80 text-base self-center my-auto">
    //       Events
    //     </div>
    //     <div className="text-stone-900 text-opacity-80 text-base self-center my-auto">
    //       About us
    //     </div>
    //     <div className="text-stone-900 text-opacity-80 text-base self-center my-auto">
    //       Blog
    //     </div>
    //     <div className="text-stone-900 text-opacity-80 text-base self-center my-auto">
    //       Contact us
    //     </div>
    //     <div className="text-zinc-50 text-base font-medium leading-6 whitespace-nowrap justify-center items-stretch self-stretch grow px-6 py-3 rounded-[80px] max-md:px-5">
    //       Book demo
    //     </div>
    //   </div>
    // </div>

    <div className="flex w-[1440px] justify-between px-[100px] py-[24px] bg-[#fdfcfc] items-center relative">
      {/* <div className="relative w-[238.72px] h-[46px]">
        <div className="absolute h-[46px] -top-px left-[50px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#302a79] text-[30.5px] tracking-[0] leading-[normal]">
          DelphiScript
        </div> */}
      {/* <div className="w-[615px] h-[856px]">
          <img
            className="fixed w-[37px] h-[38px] top-0 left-0"
            alt="Vector"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b6389742baaaf7aeb369386df1fabe67176e2f0db70a15fbdd74c637ef1fc15?apiKey=d6479c9759d24260a152efdb16e597f6&"
          />
        </div> */}

      <div className="relative laft-[100px] w-[239px] h-[47px] flex items-center justify-start gap-[12px]">
        {/* <div>
          <img
            className="absolute w-[38px] h-[38px] top-[4px] left-0"
            alt="Delphi logo"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b6389742baaaf7aeb369386df1fabe67176e2f0db70a15fbdd74c637ef1fc15?apiKey=d6479c9759d24260a152efdb16e597f6&"
          />
        </div>

        <div className="absolute h-[46px] -top-px left-[50px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#302a79] text-[30.5px] tracking-[0] leading-[normal]">
          DelphiScript
        </div> */}
        <div className="">
          <img
              className=""
              alt="Delphi logo"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b6389742baaaf7aeb369386df1fabe67176e2f0db70a15fbdd74c637ef1fc15?apiKey=d6479c9759d24260a152efdb16e597f6&"
            />
        </div>
        <div>
        <div style={{color: '#302A79', fontSize: 30.50, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}} className="">
          DelphiScript
        </div>
        </div>
      </div>
      {/* <img
          // loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b6389742baaaf7aeb369386df1fabe67176e2f0db70a15fbdd74c637ef1fc15?apiKey=d6479c9759d24260a152efdb16e597f6&"
          className="absolute w-[38px] h-[38px] top-[4px] left-0"
        /> */}
      {/* <img className="absolute w-[38px] h-[38px] top-[4px] left-0" alt="Delphi logo" src="delphi-logo.png" /> */}
      {/* </div> */}

      {/* <div className="relative w-[239px] h-[46px]">
      <div className="absolute h-[46px] -top-px left-[50px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#302a79] text-[30.5px] tracking-[0] leading-[normal]">
        DelphiScript
      </div>
      <img className="absolute w-[38px] h-[38px] top-[4px] left-0" alt="Delphi logo" src="delphi-logo.png" />
    </div> */}

      <div className="inline-flex gap-[32px] flex-[0_0_auto] items-center relative">
        <div className="relative w-fit font-desktop-body-body-1-m font-[number:var(--desktop-body-body-1-m-font-weight)] text-[#1e1e1e] text-[length:var(--desktop-body-body-1-m-font-size)] tracking-[var(--desktop-body-body-1-m-letter-spacing)] leading-[var(--desktop-body-body-1-m-line-height)] [font-style:var(--desktop-body-body-1-m-font-style)]">
          Home
        </div>
        <div className="relative w-fit font-desktop-body-body-1 font-[number:var(--desktop-body-body-1-font-weight)] text-text-secondary text-[length:var(--desktop-body-body-1-font-size)] tracking-[var(--desktop-body-body-1-letter-spacing)] leading-[var(--desktop-body-body-1-line-height)] [font-style:var(--desktop-body-body-1-font-style)]">
          Courses
        </div>
        <div className="relative w-fit font-desktop-body-body-1 font-[number:var(--desktop-body-body-1-font-weight)] text-text-secondary text-[length:var(--desktop-body-body-1-font-size)] tracking-[var(--desktop-body-body-1-letter-spacing)] leading-[var(--desktop-body-body-1-line-height)] [font-style:var(--desktop-body-body-1-font-style)]">
          Events
        </div>
        <div className="relative w-fit font-desktop-body-body-1 font-[number:var(--desktop-body-body-1-font-weight)] text-text-secondary text-[length:var(--desktop-body-body-1-font-size)] tracking-[var(--desktop-body-body-1-letter-spacing)] leading-[var(--desktop-body-body-1-line-height)] [font-style:var(--desktop-body-body-1-font-style)]">
          About us
        </div>
        <div className="relative w-fit font-desktop-body-body-1 font-[number:var(--desktop-body-body-1-font-weight)] text-text-secondary text-[length:var(--desktop-body-body-1-font-size)] tracking-[var(--desktop-body-body-1-letter-spacing)] leading-[var(--desktop-body-body-1-line-height)] [font-style:var(--desktop-body-body-1-font-style)]">
          Blog
        </div>
        <div className="relative w-fit font-desktop-body-body-1 font-[number:var(--desktop-body-body-1-font-weight)] text-text-secondary text-[length:var(--desktop-body-body-1-font-size)] tracking-[var(--desktop-body-body-1-letter-spacing)] leading-[var(--desktop-body-body-1-line-height)] [font-style:var(--desktop-body-body-1-font-style)]">
          Contact us
        </div>
        <div className="inline-flex items-center justify-center gap-[10px] px-[24px] py-[12px] relative flex-[0_0_auto] rounded-[80px] [background:linear-gradient(180deg,rgb(242,156,31)_0%,rgb(238,63,36)_53.37%)]">
          <div className="relative w-fit mt-[-1.00px] font-desktop-button-normal font-[number:var(--desktop-button-normal-font-weight)] text-[#fdfcfc] text-[length:var(--desktop-button-normal-font-size)] tracking-[var(--desktop-button-normal-letter-spacing)] leading-[var(--desktop-button-normal-line-height)] whitespace-nowrap [font-style:var(--desktop-button-normal-font-style)]">
            Book demo
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
