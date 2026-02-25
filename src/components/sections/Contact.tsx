import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MessageCircle, Send, Facebook } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { useContactMethods, useSiteSettings } from '@/hooks/usePortfolioData';
import { Skeleton } from '@/components/ui/skeleton';

const iconMap: Record<string, any> = { MessageCircle, Send, Phone, Mail, Facebook };

export const Contact = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { data: methods, isLoading: methodsLoading } = useContactMethods();
  const { data: settings, isLoading: settingsLoading } = useSiteSettings();

  const locationData = settings?.location || {};
  const socialLinks = settings?.social_links || {};

  const contactSchema = z.object({
    name: z.string().min(2).max(100),
    email: z.string().email().max(255),
    message: z.string().min(10).max(1000),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      contactSchema.parse(formData);
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.open(`mailto:${socialLinks.email || 'asadsirazi@gmail.com'}?subject=${subject}&body=${body}`, '_blank');
      toast({ title: t({ en: 'Opening email client...', bn: 'ইমেল ক্লায়েন্ট খোলা হচ্ছে...', ar: 'فتح عميل البريد الإلكتروني...' }) });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      if (error instanceof z.ZodError) toast({ title: t({ en: 'Validation Error', bn: 'যাচাইকরণ ত্রুটি', ar: 'خطأ في التحقق' }), description: error.errors[0].message, variant: 'destructive' });
    }
  };

  if (methodsLoading || settingsLoading) return <section className="py-20 px-4"><div className="container mx-auto max-w-6xl"><Skeleton className="h-64 w-full" /></div></section>;

  return (
    <section id="contact" className="py-20 px-4" aria-labelledby="contact-heading">
      <div className="container mx-auto max-w-6xl z-10 relative">
        <div className="text-center mb-12">
          <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{t({ en: 'Get In Touch', bn: 'যোগাযোগ করুন', ar: 'تواصل معي' })}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-justify">{t({ en: "Feel free to reach out through any of these channels. I'm always open to discussing new projects and opportunities.", bn: 'এই চ্যানেলগুলির মাধ্যমে যোগাযোগ করতে দ্বিধা করবেন না।', ar: 'لا تتردد في التواصل من خلال أي من هذه القنوات.' })}</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">{t({ en: 'Contact Methods', bn: 'যোগাযোগের মাধ্যম', ar: 'طرق الاتصال' })}</h3>
            {methods?.map((method, index) => {
              const IconComp = iconMap[method.icon_name || 'Mail'] || Mail;
              const hint = language === 'bn' ? method.hint_bn : language === 'ar' ? method.hint_ar : method.hint_en;
              return (
                <a key={method.id} href={method.link || '#'} target={method.label === 'Email' ? undefined : '_blank'} rel="noopener noreferrer" className="glass-card hover:shadow-glow transition-all duration-300 block group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${method.color || 'from-blue-400 to-blue-600'} flex items-center justify-center text-white flex-shrink-0`}><IconComp className="h-5 w-5" /></div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground">{method.label}</p>
                      <p className="text-sm text-muted-foreground truncate">{method.value}</p>
                      {hint && <p className="text-xs text-accent mt-1">{hint}</p>}
                    </div>
                    <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</div>
                  </div>
                </a>
              );
            })}
          </div>
          <div className="glass-card">
            <h3 className="text-xl font-semibold mb-6">{t({ en: 'Send a Message', bn: 'একটি বার্তা পাঠান', ar: 'أرسل رسالة' })}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input type="text" placeholder={t({ en: 'Your Name', bn: 'আপনার নাম', ar: 'اسمك' })} value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="glass border-border/50" required maxLength={100} />
              <Input type="email" placeholder={t({ en: 'Your Email', bn: 'আপনার ইমেল', ar: 'بريدك الإلكتروني' })} value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="glass border-border/50" required maxLength={255} />
              <Textarea placeholder={t({ en: 'Your Message', bn: 'আপনার বার্তা', ar: 'رسالتك' })} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="glass border-border/50 min-h-[150px]" required maxLength={1000} />
              <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"><Mail className="mr-2 h-4 w-4" />{t({ en: 'Send Message', bn: 'বার্তা পাঠান', ar: 'أرسل الرسالة' })}</Button>
            </form>
          </div>
        </div>
        {locationData.maps_embed && (
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6 text-center">{t({ en: 'My Location', bn: 'আমার অবস্থান', ar: 'موقعي' })}</h3>
            <div className="glass-card p-0 overflow-hidden">
              <iframe src={locationData.maps_embed} width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={t({ en: 'Location Map', bn: 'অবস্থান মানচিত্র', ar: 'خريطة الموقع' })} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
