import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap } from 'lucide-react';
import { useEducation } from '@/hooks/usePortfolioData';
import { Skeleton } from '@/components/ui/skeleton';

export const Education = () => {
  const { t, language } = useLanguage();
  const { data: items, isLoading } = useEducation();

  if (isLoading) return <section className="py-20 px-4"><div className="container mx-auto max-w-6xl"><Skeleton className="h-64 w-full" /></div></section>;

  const getT = (en: string | null, bn: string | null, ar: string | null) => {
    if (language === 'bn') return bn || en || '';
    if (language === 'ar') return ar || en || '';
    return en || '';
  };

  return (
    <section id="education" className="py-20 px-4" aria-labelledby="education-heading">
      <div className="container mx-auto max-w-6xl z-10 relative">
        <div className="text-center mb-12">
          <h2 id="education-heading" className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{t({ en: 'Education', bn: 'শিক্ষা', ar: 'التعليم' })}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {items?.map((edu, index) => (
            <div key={edu.id} className="glass-card hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0"><div className="w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center"><GraduationCap className="h-6 w-6 text-primary-foreground" /></div></div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-bold text-foreground">{getT(edu.degree_en, edu.degree_bn, edu.degree_ar)}</h3>
                  <p className="text-primary font-medium">{getT(edu.institution_en, edu.institution_bn, edu.institution_ar)}</p>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span>{getT(edu.year_en, edu.year_bn, edu.year_ar)}</span><span>•</span>
                    <span className="text-accent font-medium">{getT(edu.grade_en, edu.grade_bn, edu.grade_ar)}</span>
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
