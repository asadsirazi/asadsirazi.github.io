import { useLanguage } from '@/contexts/LanguageContext';
import { Briefcase } from 'lucide-react';
import { useExperiences } from '@/hooks/usePortfolioData';
import { Skeleton } from '@/components/ui/skeleton';

export const Experience = () => {
  const { t, language } = useLanguage();
  const { data: items, isLoading } = useExperiences();

  if (isLoading) return <section className="py-20 px-4"><div className="container mx-auto max-w-6xl"><Skeleton className="h-64 w-full" /></div></section>;

  const getT = (en: string | null, bn: string | null, ar: string | null) => {
    if (language === 'bn') return bn || en || '';
    if (language === 'ar') return ar || en || '';
    return en || '';
  };

  return (
    <section id="experience" className="py-20 px-4" aria-labelledby="experience-heading">
      <div className="container mx-auto max-w-6xl z-10 relative">
        <div className="text-center mb-12">
          <h2 id="experience-heading" className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{t({ en: 'Work Experience', bn: 'কর্ম অভিজ্ঞতা', ar: 'الخبرة العملية' })}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>
        <div className="space-y-6">
          {items?.map((exp, index) => {
            const resps = (exp.responsibilities as any[]) || [];
            return (
              <div key={exp.id} className="glass-card hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0"><div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center"><Briefcase className="h-6 w-6 text-primary-foreground" /></div></div>
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{getT(exp.title_en, exp.title_bn, exp.title_ar)}</h3>
                      <p className="text-lg text-primary font-medium">{getT(exp.company_en, exp.company_bn, exp.company_ar)}</p>
                      <div className="flex flex-wrap gap-2 mt-1 text-sm text-muted-foreground">
                        <span>{getT(exp.location_en, exp.location_bn, exp.location_ar)}</span><span>•</span>
                        <span>{getT(exp.period_en, exp.period_bn, exp.period_ar)}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {resps.map((resp: any, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground text-justify">
                          <span className="text-accent mt-1.5 flex-shrink-0">▹</span>
                          <span>{typeof resp === 'string' ? resp : (language === 'bn' ? (resp.bn || resp.en) : language === 'ar' ? (resp.ar || resp.en) : resp.en)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
