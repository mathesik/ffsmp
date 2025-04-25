import React from 'react';
import { SERVER_RULES } from '../../utils/constants';
import Section from '../ui/Section';
import Card from '../ui/Card';

const Rules: React.FC = () => {
  return (
    <Section
      id="rules"
      title="Regulamin"
      subtitle="Aby zapewnić wszystkim najlepsze doświadczenie z gry, prosimy o przestrzeganie poniższych zasad"
      dark
    >
      <Card className="max-w-4xl mx-auto">
        {Object.values(SERVER_RULES).map((section) => (
          <div key={section.title} className="mb-8">
            <h3 className="text-xl font-poppins font-bold text-gray-900 mb-4">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.rules.map((rule, index) => (
                <li key={index} className="text-gray-800 font-montserrat">
                  {rule.startsWith('A.') || rule.startsWith('B.') || rule.startsWith('C.') || rule.startsWith('D.') || rule.startsWith('E.') ? (
                    <span className="ml-4">{rule}</span>
                  ) : (
                    <span>{index + 1}. {rule}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Card>
    </Section>
  );
};

export default Rules;
