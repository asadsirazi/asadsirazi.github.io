import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Download, Mail, MessageCircle, Send } from 'lucide-react';
import profileImage from '@/assets/profile-asad.png';
import { useSiteSettings } from '@/hooks/usePortfolioData';
import { Skeleton } from '@/components/ui/skeleton';

export const Hero = () => {
  const { t, language } = useLanguage();
  const { data: settings, isLoading } = useSiteSettings();

  const personalInfo = settings?.personal_info || {};
  const locationData = settings?.location || {};
  const socialLinks = settings?.social_links || {};

  const name = { en: personalInfo.name_en || 'Asad Hossain Sirazi', bn: personalInfo.name_bn || '', ar: personalInfo.name_ar || '' };
  const title = { en: personalInfo.title_en || '', bn: personalInfo.title_bn || '', ar: personalInfo.title_ar || '' };
  const subtitle = { en: personalInfo.subtitle_en || '', bn: personalInfo.subtitle_bn || '', ar: personalInfo.subtitle_ar || '' };
  const locationText = { en: locationData.text_en || '', bn: locationData.text_bn || '', ar: locationData.text_ar || '' };

  const imgSrc = personalInfo.profile_image_url || profileImage;
  const cvUrl = language === 'ar' ? (personalInfo.cv_url_ar || '/cv/Asad_Hossain_Sirazi_CV_AR.pdf') : (personalInfo.cv_url_en || '/cv/Asad_Hossain_Sirazi_CV.pdf');

  if (isLoading) return <section className="min-h-screen flex items-center justify-center pt-20"><Skeleton className="h-96 w-full max-w-2xl" /></section>;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-4" role="banner">
      <div className="container mx-auto max-w-6xl z-10">
        <article className="glass-card text-center space-y-8 animate-fade-in">
          <div className="flex justify-center">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow">
              <img src={imgSrc} alt={t(name)} className="w-full h-full object-cover" width="160" height="160" />
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">{t(name)}</h1>
            <p className="text-xl md:text-2xl text-secondary font-medium">{t(title)}</p>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-justify">{t(subtitle)}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button onClick={() => window.open(socialLinks.whatsapp || 'https://wa.me/8801832591765', '_blank')} className="bg-gradient-to-r from-primary to-accent hover:opacity-90"><MessageCircle className="mr-2 h-4 w-4" />{t({ en: 'WhatsApp', bn: 'হোয়াটসঅ্যাপ', ar: 'واتساب' })}</Button>
            <Button onClick={() => window.open(socialLinks.telegram || 'tg://resolve?phone=+8801832591765', '_blank')} variant="outline" className="glass border-primary/30"><Send className="mr-2 h-4 w-4" />{t({ en: 'Telegram', bn: 'টেলিগ্রাম', ar: 'تيليجرام' })}</Button>
            <Button onClick={() => window.open(cvUrl, '_blank')} variant="outline" className="glass border-secondary/30"><Download className="mr-2 h-4 w-4" />{t({ en: 'Download CV', bn: 'সিভি ডাউনলোড', ar: 'تحميل السيرة الذاتية' })}</Button>
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} variant="outline" className="glass border-accent/30"><Mail className="mr-2 h-4 w-4" />{t({ en: 'Contact Me', bn: 'যোগাযোগ করুন', ar: 'تواصل معي' })}</Button>
          </div>
          <div className="pt-6 text-sm text-muted-foreground"><p>📍 {t(locationText)}</p></div>
        </article>
      </div>
    </section>
  );
};
