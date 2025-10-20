import { LanguageProvider } from '@/contexts/LanguageContext';
import { ParticlesBackground } from '@/components/ParticlesBackground';
import { AuroraBackground } from '@/components/AuroraBackground';
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
    // Add comprehensive JSON-LD structured data for SEO
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': 'https://yoursite.lovable.app/#person',
      name: 'Asad Hossain Sirazi',
      alternateName: ['আছআদ হোছাইন সিরাজী', 'أسعد حسين سراجي'],
      jobTitle: 'IT Support & Specialist | Web Developer',
      description: 'Expert IT professional with 8+ years of experience in web development, office applications, and digital solutions. Specialized in PHP, Laravel, MySQL, WordPress, and multilingual technical support.',
      image: 'https://yoursite.lovable.app/profile-asad.png',
      url: 'https://yoursite.lovable.app/',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Matarbari, Maheshkhali',
        addressRegion: 'Cox\'s Bazar',
        addressCountry: 'BD',
      },
      email: 'asadsirazi@gmail.com',
      telephone: '+8801832591765',
      sameAs: [
        'https://facebook.com/asadsirazi',
        'https://wa.me/8801832591765',
      ],
      knowsLanguage: [
        {
          '@type': 'Language',
          name: 'Bengali',
          alternateName: 'bn',
        },
        {
          '@type': 'Language',
          name: 'English',
          alternateName: 'en',
        },
        {
          '@type': 'Language',
          name: 'Arabic',
          alternateName: 'ar',
        },
        {
          '@type': 'Language',
          name: 'Urdu',
          alternateName: 'ur',
        },
      ],
      knowsAbout: [
        'Web Development',
        'PHP',
        'Laravel',
        'MySQL',
        'WordPress',
        'Office Applications',
        'Microsoft Office',
        'Google Workspace',
        'Graphic Design',
        'IT Support',
        'Technical Training',
      ],
      hasOccupation: {
        '@type': 'Occupation',
        name: 'IT Support Specialist',
        occupationLocation: {
          '@type': 'Country',
          name: 'Bangladesh',
        },
        skills: 'Web Development, PHP, Laravel, MySQL, WordPress, Office Applications, Graphic Design',
        yearsOfExperience: 8,
      },
      alumniOf: [
        {
          '@type': 'EducationalOrganization',
          name: 'Al-Jamiya Al-Islamia Al-Arabiyya',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'Bangladesh',
          },
        },
        {
          '@type': 'EducationalOrganization',
          name: 'Jamia Darul Ma\'arif Al-Islamia',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'Bangladesh',
          },
        },
      ],
    };

    // Add WebSite structured data
    const websiteData = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': 'https://yoursite.lovable.app/#website',
      url: 'https://yoursite.lovable.app/',
      name: 'Asad Hossain Sirazi - Portfolio',
      description: 'Professional portfolio of Asad Hossain Sirazi - IT Support & Web Developer',
      inLanguage: ['en', 'bn', 'ar'],
      author: {
        '@id': 'https://yoursite.lovable.app/#person',
      },
    };

    // Add ProfessionalService structured data
    const professionalServiceData = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': 'https://yoursite.lovable.app/#service',
      name: 'Asad Hossain Sirazi IT Services',
      description: 'Professional IT support, web development, and digital solutions',
      provider: {
        '@id': 'https://yoursite.lovable.app/#person',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Bangladesh',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'IT Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Web Development',
              description: 'Custom website development using PHP, Laravel, WordPress',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'IT Support',
              description: 'Technical support for office applications and digital solutions',
            },
          },
        ],
      },
    };

    const script1 = document.createElement('script');
    script1.type = 'application/ld+json';
    script1.text = JSON.stringify(structuredData);
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'application/ld+json';
    script2.text = JSON.stringify(websiteData);
    document.head.appendChild(script2);

    const script3 = document.createElement('script');
    script3.type = 'application/ld+json';
    script3.text = JSON.stringify(professionalServiceData);
    document.head.appendChild(script3);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.head.removeChild(script3);
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="relative min-h-screen">
        <AuroraBackground />
        <ParticlesBackground />
        <Header />
        <main role="main" aria-label="Main content">
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
