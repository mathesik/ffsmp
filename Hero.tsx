import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  
  useEffect(() => {
    if (copySuccess) {
      const timer = setTimeout(() => {
        setCopySuccess(false);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [copySuccess]);
  
  const copyServerIP = () => {
    navigator.clipboard.writeText('ffsmp.pl');
    setCopySuccess(true);
  };

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center bg-gray-900">
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <img 
            src="img/ffsmplogo.png"
            alt="FFSMP Logo" 
            className="w-[600px] md:w-[700px] mx-auto mb-8 animate-float"
          />
          
          <p className="text-2xl font-montserrat text-gray-200 mb-8">
            Wszystkie nowości i aktualności znajdziesz na naszym discordzie!
          </p>
          
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="relative">
              <div
                className="font-poppins font-semibold bg-gray-800 text-white py-5 px-10 text-xl rounded-md cursor-pointer flex items-center justify-center transition-all duration-300 hover:bg-gray-700"
                onClick={copyServerIP}
              >
                <span className={`transition-opacity duration-300 ${copySuccess ? 'opacity-0' : 'opacity-100'}`}>ffsmp.pl</span>
                <span 
                  className={`absolute left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${copySuccess ? 'opacity-100' : 'opacity-0'}`}
                >
                  Skopiowano!
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <a 
              href="#shop" 
              className="flex flex-col items-center text-white animate-bounce"
            >
              <span className="text-sm font-montserrat mb-2">Przewiń, aby odkryć więcej</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
