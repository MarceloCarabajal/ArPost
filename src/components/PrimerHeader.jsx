import React from "react";
import logo from '../assets/logo_correo.svg';

const PrimerHeader = () => {
  return (
    <div className="w-full h-[125px] bg-[#FFCE00] flex items-center relative">
      {/* Logo con dimensiones exactas y centrado vertical */}
      <div className="absolute left-[76px] h-[70px] flex items-center">
        <img 
          src={logo} 
          alt="Logo" 
          className="w-[237px] h-full object-contain"
        />
      </div>
      
      {/* Línea divisoria centrada verticalmente */}
      <div className="absolute left-[337px] h-[50px] w-px bg-[#191919] top-1/2 transform -translate-y-1/2"></div>
      
      {/* Texto "CPI" con especificaciones exactas de Figma */}
      <div className="absolute left-[389px] flex items-center h-[48px]">
        <span className="font-inter font-bold text-[40px] leading-none text-[#152663]">
          CPI
        </span>
      </div>
    </div>
  );
};

export default PrimerHeader;