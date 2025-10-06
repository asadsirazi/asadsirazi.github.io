import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 border-t border-border/10">
      <div className="container mx-auto max-w-6xl z-10 relative">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Asad Hossain Sirazi
            </h3>
            <p className="text-sm text-muted-foreground">
              {t({
                en: 'IT Support & Specialist',
                bn: 'আইটি সাপোর্ট ও বিশেষজ্ঞ',
                ar: 'أخصائي الدعم التقني',
              })}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">
              {t({ en: 'Quick Contact', bn: 'দ্রুত যোগাযোগ', ar: 'تواصل سريع' })}
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+8801832591765" className="hover:text-foreground transition-colors">
                  +880 1832-591765
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:asadsirazi@gmail.com" className="hover:text-foreground transition-colors">
                  asadsirazi@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span>
                  {t({
                    en: 'Matarbari, Cox\'s Bazar, Bangladesh',
                    bn: 'মাতারবাড়ি, কক্সবাজার, বাংলাদেশ',
                    ar: 'ماتارباري، كوكس بازار، بنغلاديش',
                  })}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">
              {t({ en: 'Quick Links', bn: 'দ্রুত লিঙ্ক', ar: 'روابط سريعة' })}
            </h4>
            <div className="space-y-2 text-sm">
              {['home', 'about', 'skills', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-foreground transition-colors capitalize"
                >
                  {t({
                    en: section.charAt(0).toUpperCase() + section.slice(1),
                    bn: section === 'home' ? 'হোম' :
                       section === 'about' ? 'সম্পর্কে' :
                       section === 'skills' ? 'দক্ষতা' :
                       section === 'experience' ? 'অভিজ্ঞতা' :
                       'যোগাযোগ',
                    ar: section === 'home' ? 'الرئيسية' :
                       section === 'about' ? 'عني' :
                       section === 'skills' ? 'المهارات' :
                       section === 'experience' ? 'الخبرات' :
                       'تواصل',
                  })}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/10 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Asad Hossain Sirazi.{' '}
            {t({
              en: 'All rights reserved.',
              bn: 'সর্বস্বত্ব সংরক্ষিত।',
              ar: 'جميع الحقوق محفوظة.',
            })}
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            {t({
              en: 'Empowering digital solutions with expertise and innovation',
              bn: 'দক্ষতা ও উদ্ভাবনের মাধ্যমে ডিজিটাল সমাধান ক্ষমতায়ন',
              ar: 'تمكين الحلول الرقمية بالخبرة والابتكار',
            })}
          </p>
        </div>
      </div>
    </footer>
  );
};
