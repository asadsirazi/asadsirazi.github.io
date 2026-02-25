import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';
import { useAboutContent } from '@/hooks/usePortfolioData';
import { Skeleton } from '@/components/ui/skeleton';

export const About = () => {
  const { t, language } = useLanguage();
  const { data: items, isLoading } = useAboutContent();

  if (isLoading) return <section className="py-20 px-4"><div className="container mx-auto max-w-6xl"><Skeleton className="h-64 w-full" /></div></section>;

  const summaries = items?.filter(i => i.key.startsWith('summary')) || [];
  const locationFact = items?.find(i => i.key === 'location_fact');
  const expFact = items?.find(i => i.key === 'experience_fact');
  const langFact = items?.find(i => i.key === 'languages_fact');
  const availFact = items?.find(i => i.key === 'availability_fact');

  const getText = (item: any) => {
    if (!item) return '';
    return language === 'bn' ? (item.value_bn || item.value_en) : language === 'ar' ? (item.value_ar || item.value_en) : (item.value_en || '');
  };

  return (
    <section id="about" className="py-20 px-4" aria-labelledby="about-heading">
      <div className="container mx-auto max-w-6xl z-10 relative">
        <div className="text-center mb-12">
          <h2 id="about-heading" className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t({ en: 'About Me', bn: 'আমার সম্পর্কে', ar: 'عني' })}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card space-y-4">
            <h3 className="text-xl font-semibold text-primary mb-4">{t({ en: 'Professional Summary', bn: 'পেশাদার সারসংক্ষেপ', ar: 'الملخص المهني' })}</h3>
            {summaries.map(s => <p key={s.id} className="text-muted-foreground leading-relaxed text-justify">{getText(s)}</p>)}
          </div>
          <div className="glass-card space-y-6">
            <h3 className="text-xl font-semibold text-primary mb-4">{t({ en: 'Quick Facts', bn: 'দ্রুত তথ্য', ar: 'حقائق سريعة' })}</h3>
            <div className="space-y-3">
              {locationFact && <div className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><div><p className="font-medium">{t({ en: 'Location', bn: 'অবস্থান', ar: 'الموقع' })}</p><p className="text-sm text-muted-foreground">{getText(locationFact)}</p></div></div>}
              {expFact && <div className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><div><p className="font-medium">{t({ en: 'Experience', bn: 'অভিজ্ঞতা', ar: 'الخبرة' })}</p><p className="text-sm text-muted-foreground">{getText(expFact)}</p></div></div>}
              {langFact && <div className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><div><p className="font-medium">{t({ en: 'Languages', bn: 'ভাষা', ar: 'اللغات' })}</p><div className="flex flex-wrap gap-2 mt-2">{getText(langFact).split(',').map((l: string, i: number) => <Badge key={i} variant="secondary">{l.trim()}</Badge>)}</div></div></div>}
              {availFact && <div className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><div><p className="font-medium">{t({ en: 'Availability', bn: 'প্রাপ্যতা', ar: 'التوفر' })}</p><Badge className="bg-green-500/20 text-green-400 border-green-500/30 mt-2">{getText(availFact)}</Badge></div></div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
