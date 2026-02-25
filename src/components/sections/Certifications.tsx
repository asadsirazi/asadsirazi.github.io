import { useLanguage } from '@/contexts/LanguageContext';
import { Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useCertifications } from '@/hooks/usePortfolioData';
import { Skeleton } from '@/components/ui/skeleton';

export const Certifications = () => {
  const { t, language } = useLanguage();
  const { data: items, isLoading } = useCertifications();

  if (isLoading) return <section className="py-20 px-4"><div className="container mx-auto max-w-6xl"><Skeleton className="h-64 w-full" /></div></section>;

  const getT = (en: string | null, bn: string | null, ar: string | null) => {
    if (language === 'bn') return bn || en || '';
    if (language === 'ar') return ar || en || '';
    return en || '';
  };

  return (
    <section id="certifications" className="py-20 px-4" aria-labelledby="certifications-heading">
      <div className="container mx-auto max-w-6xl z-10 relative">
        <div className="text-center mb-12">
          <h2 id="certifications-heading" className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{t({ en: 'Certifications & Training', bn: 'সার্টিফিকেশন ও প্রশিক্ষণ', ar: 'الشهادات والتدريب' })}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items?.map((cert, index) => {
            const skillsList = (cert.skills as string[]) || [];
            const grade = getT(cert.grade_en, cert.grade_bn, cert.grade_ar);
            return (
              <div key={cert.id} className="glass-card hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0"><div className="w-10 h-10 rounded-lg bg-gradient-to-r from-accent to-primary flex items-center justify-center"><Award className="h-5 w-5 text-primary-foreground" /></div></div>
                    <div className="flex-1"><h3 className="font-bold text-foreground leading-tight">{getT(cert.title_en, cert.title_bn, cert.title_ar)}</h3></div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-primary font-medium">{getT(cert.institute_en, cert.institute_bn, cert.institute_ar)}</p>
                    <p className="text-sm text-muted-foreground">
                      {getT(cert.year_en, cert.year_bn, cert.year_ar)}
                      {grade && <><span className="mx-2">•</span><span className="text-accent font-medium">{grade}</span></>}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {skillsList.map((skill, i) => <Badge key={i} variant="outline" className="glass border-accent/20 text-xs">{skill}</Badge>)}
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
