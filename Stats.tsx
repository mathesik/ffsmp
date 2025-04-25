import React from 'react';
import Section from '../ui/Section';
import { Youtube, Twitter } from 'lucide-react';

const Stats: React.FC = () => {
  return (
    <Section
      id="stats"
      title="NASZE MEDIA"
      subtitle="Sprawdź nasze profile w mediach społecznościowych"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          <a 
            href="https://www.youtube.com/@v1ctorrr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300"
          >
            <Youtube size={48} className="text-white" />
          </a>
          
          <a 
            href="https://www.tiktok.com/@v1ctorrr_ttv"
            target="_blank"
            rel="noopener noreferrer"
            className="w-24 h-24 bg-black rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300"
          >
            <img 
              src="img/tiktoklogo.png" 
              alt="TikTok"
              className="w-18 h-18 object-contain"
            />
          </a>
          
          <a 
            href="https://www.tiktok.com/@kubothes"
            target="_blank"
            rel="noopener noreferrer"
            className="w-24 h-24 bg-black rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300"
          >
            <img 
              src="img/tiktoklogo.png" 
              alt="TikTok"
              className="w-18 h-18 object-contain"
            />
          </a>
          
          <a 
            href="https://x.com/victorrr_fn"
            target="_blank"
            rel="noopener noreferrer"
            className="w-24 h-24 bg-black rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300"
          >
            <Twitter size={48} className="text-white" />
          </a>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600 font-montserrat">
            Śledź nas w mediach społecznościowych, aby być na bieżąco z nowościami!
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Stats;
