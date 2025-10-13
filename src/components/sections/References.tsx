import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, Building } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export const References = () => {
  const { t } = useLanguage();
  const [emailRevealed, setEmailRevealed] = useState(false);

  const references = [
    {
      name: { en: 'MD Abdul Gaffar', bn: 'এমডি আব্দুল গাফফার', ar: 'عبد الغفار' },
      position: { en: 'Principal', bn: 'অধ্যক্ষ', ar: 'المدير' },
      organization: { en: 'Al-Iman Ideal Women\'s Madrasah', bn: 'আল-ঈমান আদর্শ মহিলা মাদ্রাসা', ar: 'مدرسة الإيمان النموذجية للبنات' },
      phone: '+8801817274072',
      email: 'alimanmadrasah2005@gmail.com',
    },
  ];

  return (
    <section id="references" className="py-20 px-4" aria-labelledby="references-heading">
      <div className="container mx-auto max-w-4xl z-10 relative">
        <div className="text-center mb-12">
          <h2 id="references-heading" className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t({ en: 'References', bn: 'রেফারেন্স', ar: 'المراجع' })}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="space-y-6">
          {references.map((ref, index) => (
            <div
              key={index}
              className="glass-card hover:shadow-glow transition-all duration-300 animate-fade-in"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{t(ref.name)}</h3>
                  <p className="text-primary font-medium">{t(ref.position)}</p>
                  <p className="text-muted-foreground text-sm flex items-center gap-2 mt-1">
                    <Building className="h-4 w-4" />
                    {t(ref.organization)}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-accent" />
                    <a
                      href={`tel:${ref.phone}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {ref.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-accent" />
                    {emailRevealed ? (
                      <a
                        href={`mailto:${ref.email}`}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {ref.email}
                      </a>
                    ) : (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setEmailRevealed(true)}
                        className="h-auto p-0 text-muted-foreground hover:text-foreground"
                      >
                        {t({ en: 'Click to reveal email', bn: 'ইমেল দেখতে ক্লিক করুন', ar: 'انقر لإظهار البريد الإلكتروني' })}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
