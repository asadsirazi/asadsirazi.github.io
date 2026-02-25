import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Code, FileText, Palette, Keyboard, Cpu, Globe } from 'lucide-react';
import { useSkills } from '@/hooks/usePortfolioData';
import { Skeleton } from '@/components/ui/skeleton';

const iconMap: Record<string, any> = { Code, FileText, Palette, Keyboard, Cpu, Globe };

export const Skills = () => {
  const { t, language } = useLanguage();
  const { data: items, isLoading } = useSkills();

  if (isLoading) return <section className="py-20 px-4"><div className="container mx-auto max-w-6xl"><Skeleton className="h-64 w-full" /></div></section>;

  return (
    <section id="skills" className="py-20 px-4" aria-labelledby="skills-heading">
      <div className="container mx-auto max-w-6xl z-10 relative">
        <div className="text-center mb-12">
          <h2 id="skills-heading" className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{t({ en: 'Skills & Expertise', bn: 'দক্ষতা ও পারদর্শিতা', ar: 'المهارات والخبرات' })}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items?.map((cat, index) => {
            const IconComp = iconMap[cat.icon_name || 'Code'] || Code;
            const title = { en: cat.title_en, bn: cat.title_bn || cat.title_en, ar: cat.title_ar || cat.title_en };
            const skillsList = (cat.skills as any[]) || [];
            return (
              <div key={cat.id} className="glass-card space-y-4 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary"><IconComp className="h-6 w-6" /></div>
                  <h3 className="text-lg font-semibold">{t(title)}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillsList.map((skill: any, i: number) => (
                    <Badge key={i} variant="outline" className="glass border-primary/20 hover:border-primary/40 transition-colors">
                      {typeof skill === 'string' ? skill : (language === 'bn' ? (skill.bn || skill.en) : language === 'ar' ? (skill.ar || skill.en) : skill.en)}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
