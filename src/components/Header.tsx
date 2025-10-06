import { useState, useEffect } from 'react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: { en: 'Home', bn: 'হোম', ar: 'الرئيسية' } },
    { id: 'about', label: { en: 'About', bn: 'সম্পর্কে', ar: 'عني' } },
    { id: 'skills', label: { en: 'Skills', bn: 'দক্ষতা', ar: 'المهارات' } },
    { id: 'experience', label: { en: 'Experience', bn: 'অভিজ্ঞতা', ar: 'الخبرات' } },
    { id: 'education', label: { en: 'Education', bn: 'শিক্ষা', ar: 'التعليم' } },
    { id: 'certifications', label: { en: 'Certifications', bn: 'সার্টিফিকেট', ar: 'الشهادات' } },
    { id: 'projects', label: { en: 'Projects', bn: 'প্রকল্প', ar: 'المشاريع' } },
    { id: 'contact', label: { en: 'Contact', bn: 'যোগাযোগ', ar: 'تواصل' } },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <a
          href="#home"
          className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          Asad Sirazi
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm text-foreground/80 hover:text-foreground transition-colors relative group"
            >
              {t(item.label)}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all group-hover:w-full" />
            </button>
          ))}
        </div>

        <div className="hidden lg:block">
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass mt-4 mx-4 rounded-2xl p-6 animate-fade-in">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-foreground/80 hover:text-foreground transition-colors py-2"
              >
                {t(item.label)}
              </button>
            ))}
            <div className="pt-4 border-t border-border">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
