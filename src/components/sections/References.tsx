import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, Building } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useReferences } from '@/hooks/usePortfolioData';
import { Skeleton } from '@/components/ui/skeleton';

export const References = () => {
  const { t, language } = useLanguage();
  const [emailRevealed, setEmailRevealed] = useState(false);
  const { data: items, isLoading } = useReferences();

  if (isLoading) return <section className="py-20 px-4"><div className="container mx-auto max-w-4xl"><Skeleton className="h-48 w-full" /></div></section>;

  const getT = (en: string | null, bn: string | null, ar: string | null) => {
    if (language === 'bn') return bn || en || '';
    if (language === 'ar') return ar || en || '';
    return en || '';
  };

  return (
    <section id="references" className="py-20 px-4" aria-labelledby="references-heading">
      <div className="container mx-auto max-w-4xl z-10 relative">
        <div className="text-center mb-12">
          <h2 id="references-heading" className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{t({ en: 'References', bn: 'রেফারেন্স', ar: 'المراجع' })}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>
        <div className="space-y-6">
          {items?.map((ref) => (
            <div key={ref.id} className="glass-card hover:shadow-glow transition-all duration-300 animate-fade-in">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{getT(ref.name_en, ref.name_bn, ref.name_ar)}</h3>
                  <p className="text-primary font-medium">{getT(ref.position_en, ref.position_bn, ref.position_ar)}</p>
                  <p className="text-muted-foreground text-sm flex items-center gap-2 mt-1"><Building className="h-4 w-4" />{getT(ref.organization_en, ref.organization_bn, ref.organization_ar)}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm"><Phone className="h-4 w-4 text-accent" /><a href={`tel:${ref.phone}`} className="text-muted-foreground hover:text-foreground transition-colors">{ref.phone}</a></div>
                  <div className="flex items-center gap-2 text-sm"><Mail className="h-4 w-4 text-accent" />
                    {emailRevealed ? <a href={`mailto:${ref.email}`} className="text-muted-foreground hover:text-foreground transition-colors">{ref.email}</a> : (
                      <Button variant="ghost" size="sm" onClick={() => setEmailRevealed(true)} className="h-auto p-0 text-muted-foreground hover:text-foreground">{t({ en: 'Click to reveal email', bn: 'ইমেল দেখতে ক্লিক করুন', ar: 'انقر لإظهار البريد الإلكتروني' })}</Button>
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
