import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap } from 'lucide-react';

export const Education = () => {
  const { t } = useLanguage();

  const educationData = [
    {
      degree: { en: 'Master\'s Degree in Hadith Studies', bn: 'হাদিস শাস্ত্রে মাস্টার্স ডিগ্রি', ar: 'ماجستير في علوم الحديث' },
      institution: { en: 'Al-Jamiya Al-Islamia Al-Arabiyya', bn: 'আল-জামিয়া আল-ইসলামিয়া আল-আরাবিয়্যা', ar: 'الجامعة الإسلامية العربية' },
      year: { en: '2019', bn: '২০১৯', ar: '٢٠١٩' },
      grade: { en: 'Excellent', bn: 'কৃতিত্ব', ar: 'ممتاز' },
    },
    {
      degree: { en: 'Bachelor\'s Degree in Arabic Language', bn: 'আরবি ভাষায় স্নাতক ডিগ্রি', ar: 'بكالوريوس في اللغة العربية' },
      institution: { en: 'Jamia Darul Ma\'arif Al-Islamia, Chittagong', bn: 'জামিয়া দারুল মাআরিফ আল-ইসলামিয়া, চট্টগ্রাম', ar: 'جامعة دار المعارف الإسلامية، شيتاغونغ' },
      year: { en: '2015', bn: '২০১৫', ar: '٢٠١٥' },
      grade: { en: 'Excellent', bn: 'কৃতিত্ব', ar: 'ممتاز' },
    },
  ];

  return (
    <section id="education" className="py-20 px-4" aria-labelledby="education-heading">
      <div className="container mx-auto max-w-6xl z-10 relative">
        <div className="text-center mb-12">
          <h2 id="education-heading" className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t({ en: 'Education', bn: 'শিক্ষা', ar: 'التعليم' })}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="glass-card hover:shadow-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>

                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-bold text-foreground">{t(edu.degree)}</h3>
                  <p className="text-primary font-medium">{t(edu.institution)}</p>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span>{t(edu.year)}</span>
                    <span>•</span>
                    <span className="text-accent font-medium">{t(edu.grade)}</span>
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
