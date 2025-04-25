import React from 'react';
import { RANKS, SHOP_ITEMS } from '../../utils/constants';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';

const ItemShop: React.FC = () => {
  return (
    <Section
      id="shop"
      title="Sklep"
      subtitle="Wesprzyj serwer i wzbogać swoje doświadczenie z gry dzięki tym opcjom premium"
    >
      <div className="relative">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat pointer-events-none" 
          style={{ 
            backgroundImage: `url('https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg')`,
            backgroundBlendMode: 'overlay',
            filter: 'grayscale(100%)'
          }} 
        />
        <div className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
            {RANKS.map((rank) => (
              <Card
                key={rank.id}
                className={`border-2 ${rank.featured ? 'border-green-500' : 'border-gray-200'} relative hover:transform hover:scale-105 transition-all duration-300 flex flex-col`}
                hover
              >
                {rank.featured && (
                  <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 text-sm font-semibold">
                    POPULARNE
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-vcr font-bold text-gray-900">{rank.name}</h3>
                  <div className="mt-2">
                    <span className="text-3xl font-bold text-green-500">{rank.price} zł</span>
                  </div>
                </div>
                
                <div className="flex-grow">
                  <p className="text-gray-600 mb-4 text-center">{rank.description}</p>
                  <div className="border-t border-b border-gray-200 py-4">
                    <h4 className="font-vcr font-semibold text-gray-800 mb-2">Komendy:</h4>
                    <ul className="space-y-2">
                      {rank.permissions.map((perm, index) => (
                        <li key={index} className="flex items-center">
                          <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="font-vcr">{perm}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {rank.additionalPerks && rank.additionalPerks.length > 0 && (
                    <div className="mt-4">
                      <h4 className="font-vcr font-semibold text-gray-800 mb-2">Dodatkowe korzyści:</h4>
                      <ul className="space-y-2">
                        {rank.additionalPerks.map((perk, index) => (
                          <li key={index} className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="font-vcr">{perk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="mt-6">
                  <Button variant="primary" fullWidth>
                    Kup teraz
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          <h3 className="text-2xl font-vcr font-semibold text-center mb-8">Inne przedmioty</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {SHOP_ITEMS.map((item) => (
              <Card key={item.id} hover className="flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-xl font-vcr font-bold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4 font-vcr">{item.description}</p>
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-green-500">{item.price} zł</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Button variant="primary" fullWidth>
                    Kup teraz
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ItemShop;
