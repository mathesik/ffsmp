import React from 'react';
import Section from '../ui/Section';

const Discord: React.FC = () => {
  return (
    <Section
      id="discord"
      title="Discord"
      subtitle="Dołącz do naszej społeczności"
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-[#5865F2] p-8 rounded-lg shadow-xl mb-8 transform hover:scale-105 transition-all duration-300">
          <img 
            src="img/discordlogo2.png"
            alt="Discord Logo"
            className="w-32 h-32 mx-auto mb-6"
          />
          <h3 className="text-3xl font-poppins font-bold text-white mb-4">
            Nasz Discord
          </h3>
          <a 
            href="https://discord.gg/rjyuShRJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-[#5865F2] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Dołącz teraz
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Discord;
