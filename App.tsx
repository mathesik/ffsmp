import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import ItemShop from './components/sections/ItemShop';
import Rules from './components/sections/Rules';
import Discord from './components/sections/Discord';
import Stats from './components/sections/Stats';

function App() {
  return (
    <div className="font-montserrat">
      <Header />
      <main>
        <Hero />
        <ItemShop />
        <Rules />
        <Discord />
        <Stats />
      </main>
      <Footer />
    </div>
  );
}

export default App;
