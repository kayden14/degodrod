import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import PartnerMarquee from './components/PartnerMarquee';
import About from './components/About';
import Team from './components/Team';
import ProcessTimeline from './components/ProcessTimeline';
import FeaturedMedia from './components/FeaturedMedia';
import Services from './components/Services';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import Projects from './components/Projects';
import PropertiesForSale from './components/PropertiesForSale';
import Testimonials from './components/Testimonials';
import Estimator from './components/Estimator';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('degodrod-theme') || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('degodrod-theme', theme);
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 120;
        
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    setTimeout(revealOnScroll, 100);

    return () => {
      window.removeEventListener('scroll', revealOnScroll);
    };
  }, []);

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <PartnerMarquee />
        <TrustBar />
        <About />
        <Team />
        <ProcessTimeline />
        <FeaturedMedia />
        <Services />
        <BeforeAfterSlider />
        <Projects />
        <PropertiesForSale />
        <Testimonials />
        <Estimator />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}

export default App;
