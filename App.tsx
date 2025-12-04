import React, { useRef } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Collection from './components/Collection';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const sections: { [key: string]: React.RefObject<HTMLDivElement> } = {
    home: useRef<HTMLDivElement>(null),
    collection: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    'how-it-works': useRef<HTMLDivElement>(null),
    testimonials: useRef<HTMLDivElement>(null),
    blog: useRef<HTMLDivElement>(null),
    faq: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: string) => {
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const elementRef = sections[section];
    if (elementRef && elementRef.current) {
      const yOffset = -80; // height of the fixed header (h-20)
      const y = elementRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#FCFBFB] font-sans">
      <Header scrollToSection={scrollToSection} />

      <main>
        <div ref={sections.home}>
          <Hero scrollToSection={() => scrollToSection('collection')} />
        </div>
        
        <div ref={sections.about}>
          <About />
        </div>

        <div ref={sections.collection}>
          <Collection />
        </div>
        
        <div ref={sections['how-it-works']}>
          <HowItWorks />
        </div>

        <div ref={sections.testimonials}>
          <Testimonials />
        </div>

        <div ref={sections.blog}>
          <Blog />
        </div>

        <div ref={sections.faq}>
          <FAQ />
        </div>

        <div ref={sections.contact}>
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;