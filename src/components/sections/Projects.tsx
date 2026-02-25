import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useProjects } from '@/hooks/usePortfolioData';
import { Skeleton } from '@/components/ui/skeleton';

export const Projects = () => {
  const { t, language } = useLanguage();
  const { data: items, isLoading } = useProjects();

  if (isLoading) return <section className="py-20 px-4"><div className="container mx-auto max-w-6xl"><Skeleton className="h-64 w-full" /></div></section>;

  const getT = (en: string | null, bn: string | null, ar: string | null) => {
    if (language === 'bn') return bn || en || '';
    if (language === 'ar') return ar || en || '';
    return en || '';
  };

  return (
    <section id="projects" className="py-20 px-4" aria-labelledby="projects-heading">
      <div className="container mx-auto max-w-6xl z-10 relative">
        <div className="text-center mb-12">
          <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{t({ en: 'Featured Projects', bn: 'প্রধান প্রকল্প', ar: 'المشاريع المميزة' })}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items?.map((project, index) => {
            const tags = (project.tags as string[]) || [];
            return (
              <div key={project.id} className="glass-card hover:shadow-glow transition-all duration-300 flex flex-col animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0"><Code className="h-5 w-5 text-primary-foreground" /></div>
                  <div className="flex-1"><h3 className="font-bold text-lg text-foreground leading-tight">{getT(project.title_en, project.title_bn, project.title_ar)}</h3></div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 flex-1 text-justify">{getT(project.description_en, project.description_bn, project.description_ar)}</p>
                <div className="flex flex-wrap gap-2 mb-4">{tags.map((tag, i) => <Badge key={i} variant="outline" className="glass border-primary/20 text-xs">{tag}</Badge>)}</div>
                <Button variant="outline" className="glass border-primary/30 hover:border-primary/50 w-full" size="sm" onClick={() => project.link && window.open(project.link, '_blank')}>
                  <ExternalLink className="mr-2 h-4 w-4" />{t({ en: 'View Details', bn: 'বিস্তারিত দেখুন', ar: 'عرض التفاصيل' })}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
