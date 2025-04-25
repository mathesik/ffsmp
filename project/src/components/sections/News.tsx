import React from 'react';
import { NEWS_ITEMS } from '../../utils/constants';
import Section from '../ui/Section';
import Card from '../ui/Card';

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const News: React.FC = () => {
  return (
    <Section
      id="news"
      title="Latest News"
      subtitle="Stay updated with the latest server developments and events"
      dark
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {NEWS_ITEMS.map((item) => (
          <Card key={item.id} hover className="h-full flex flex-col">
            {item.image && (
              <div className="mb-4 -mx-5 -mt-5 overflow-hidden rounded-t-lg">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            )}
            <div className="flex-grow">
              <div className="mb-2">
                <span className="text-sm text-gray-500 font-montserrat">
                  {formatDate(item.date)}
                </span>
              </div>
              <h3 className="text-xl font-poppins font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 font-montserrat">
                {item.content}
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <a 
                href="#" 
                className="text-green-500 font-montserrat font-semibold hover:text-green-600 transition-colors duration-300 inline-flex items-center"
              >
                Read More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default News;