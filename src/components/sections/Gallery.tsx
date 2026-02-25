import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { X } from 'lucide-react';
import { useGallery } from '@/hooks/usePortfolioData';
import { Skeleton } from '@/components/ui/skeleton';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';

const fallbackImages: Record<string, string> = {
  '/assets/gallery-1.jpg': gallery1,
  '/assets/gallery-2.jpg': gallery2,
  '/assets/gallery-3.jpg': gallery3,
};

export const Gallery = () => {
  const { t } = useLanguage();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const { data: items, isLoading } = useGallery();

  if (isLoading) return <section className="py-20 px-4"><div className="container mx-auto max-w-6xl"><Skeleton className="h-64 w-full" /></div></section>;

  const getImageSrc = (url: string) => fallbackImages[url] || url;

  return (
    <section id="gallery" className="py-20 px-4" aria-labelledby="gallery-heading">
      <div className="container mx-auto max-w-6xl z-10 relative">
        <div className="text-center mb-12">
          <h2 id="gallery-heading" className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{t({ en: 'Gallery', bn: 'গ্যালারি', ar: 'المعرض' })}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items?.map((image, index) => (
            <div key={image.id} className="glass-card p-0 overflow-hidden cursor-pointer group animate-fade-in" style={{ animationDelay: `${index * 150}ms` }} onClick={() => setLightboxImage(getImageSrc(image.image_url))}>
              <div className="relative overflow-hidden aspect-[4/3]">
                <img src={getImageSrc(image.image_url)} alt={image.alt_text || ''} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-sm text-foreground">{t({ en: 'Click to enlarge', bn: 'বড় করতে ক্লিক করুন', ar: 'انقر للتكبير' })}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {lightboxImage && (
          <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in" onClick={() => setLightboxImage(null)}>
            <button className="absolute top-4 right-4 glass rounded-full p-3 hover:bg-primary/10 transition-colors" onClick={() => setLightboxImage(null)} aria-label="Close"><X className="h-6 w-6" /></button>
            <img src={lightboxImage} alt="Enlarged view" className="max-w-full max-h-[90vh] object-contain glass-card" onClick={e => e.stopPropagation()} />
          </div>
        )}
      </div>
    </section>
  );
};
