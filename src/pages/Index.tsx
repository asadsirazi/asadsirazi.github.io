import { LanguageProvider } from '@/contexts/LanguageContext';
import { ParticlesBackground } from '@/components/ParticlesBackground';
import { Header } from '@/components/Header';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Education } from '@/components/sections/Education';
import { Certifications } from '@/components/sections/Certifications';
import { Projects } from '@/components/sections/Projects';
import { Gallery } from '@/components/sections/Gallery';
import { References } from '@/components/sections/References';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/Footer';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Add JSON-LD structured data for SEO
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Asad Hossain Sirazi',
      jobTitle: 'IT Support & Specialist',
      description: 'Skilled in Office Applications, Web Programming, and Digital Solutions',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Matarbari, Maheshkhali, Cox\'s Bazar',
        addressCountry: 'Bangladesh',
      },
      email: 'asadsirazi@gmail.com',
      telephone: '+8801832591765',
      url: window.location.href,
      sameAs: [
        'https://facebook.com/asadsirazi',
        'https://wa.me/8801832591765',
      ],
      knowsLanguage: ['Bengali', 'English', 'Arabic', 'Urdu'],
      alumniOf: [
        {
          '@type': 'EducationalOrganization',
          name: 'Al-Jamiya Al-Islamia Al-Arabiyya',
        },
        {
          '@type': 'EducationalOrganization',
          name: 'Jamia Darul Ma\'arif Al-Islamia',
        },
      ],
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Certifications />
          <Projects />
          <Gallery />
          <References />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
