import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MessageCircle, Send, Facebook } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

export const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters').max(100),
    email: z.string().email('Invalid email address').max(255),
    message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.open(`mailto:asadsirazi@gmail.com?subject=${subject}&body=${body}`, '_blank');
      
      toast({
        title: t({ en: 'Opening email client...', bn: 'ইমেল ক্লায়েন্ট খোলা হচ্ছে...', ar: 'فتح عميل البريد الإلكتروني...' }),
        description: t({ en: 'Your message will be composed in your default email app', bn: 'আপনার বার্তা আপনার ডিফল্ট ইমেল অ্যাপে তৈরি হবে', ar: 'سيتم إنشاء رسالتك في تطبيق البريد الإلكتروني الافتراضي الخاص بك' }),
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: t({ en: 'Validation Error', bn: 'যাচাইকরণ ত্রুটি', ar: 'خطأ في التحقق' }),
          description: error.errors[0].message,
          variant: 'destructive',
        });
      }
    }
  };

  const contactMethods = [
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: 'WhatsApp',
      value: '+880 1832-591765',
      link: 'https://wa.me/8801832591765',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: <Send className="h-5 w-5" />,
      label: 'Telegram',
      value: '+880 1832-591765',
      link: 'tg://resolve?phone=+8801832591765',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Imo / Call',
      value: '+880 1832-591765',
      link: 'tel:+8801832591765',
      hint: { en: 'Find me on Imo by this number', bn: 'এই নম্বরে Imo-তে আমাকে খুঁজুন', ar: 'ابحث عني على Imo بهذا الرقم' },
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'asadsirazi@gmail.com',
      link: 'mailto:asadsirazi@gmail.com',
      color: 'from-red-400 to-red-600',
    },
    {
      icon: <Facebook className="h-5 w-5" />,
      label: 'Facebook',
      value: 'asadsirazi',
      link: 'https://facebook.com/asadsirazi',
      color: 'from-blue-500 to-blue-700',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4" aria-labelledby="contact-heading">
      <div className="container mx-auto max-w-6xl z-10 relative">
        <div className="text-center mb-12">
          <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t({ en: 'Get In Touch', bn: 'যোগাযোগ করুন', ar: 'تواصل معي' })}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {t({
              en: 'Feel free to reach out through any of these channels. I\'m always open to discussing new projects and opportunities.',
              bn: 'এই চ্যানেলগুলির মাধ্যমে যোগাযোগ করতে দ্বিধা করবেন না। আমি সর্বদা নতুন প্রকল্প এবং সুযোগ নিয়ে আলোচনা করতে আগ্রহী।',
              ar: 'لا تتردد في التواصل من خلال أي من هذه القنوات. أنا دائمًا منفتح لمناقشة المشاريع والفرص الجديدة.',
            })}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Methods */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">
              {t({ en: 'Contact Methods', bn: 'যোগাযোগের মাধ্যম', ar: 'طرق الاتصال' })}
            </h3>
            
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.label === 'Email' ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="glass-card hover:shadow-glow transition-all duration-300 block group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${method.color} flex items-center justify-center text-white flex-shrink-0`}>
                    {method.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground">{method.label}</p>
                    <p className="text-sm text-muted-foreground truncate">{method.value}</p>
                    {method.hint && (
                      <p className="text-xs text-accent mt-1">{t(method.hint)}</p>
                    )}
                  </div>
                  <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="glass-card">
            <h3 className="text-xl font-semibold mb-6">
              {t({ en: 'Send a Message', bn: 'একটি বার্তা পাঠান', ar: 'أرسل رسالة' })}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder={t({ en: 'Your Name', bn: 'আপনার নাম', ar: 'اسمك' })}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="glass border-border/50"
                  required
                  maxLength={100}
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder={t({ en: 'Your Email', bn: 'আপনার ইমেল', ar: 'بريدك الإلكتروني' })}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="glass border-border/50"
                  required
                  maxLength={255}
                />
              </div>
              
              <div>
                <Textarea
                  placeholder={t({ en: 'Your Message', bn: 'আপনার বার্তা', ar: 'رسالتك' })}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="glass border-border/50 min-h-[150px]"
                  required
                  maxLength={1000}
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
              >
                <Mail className="mr-2 h-4 w-4" />
                {t({ en: 'Send Message', bn: 'বার্তা পাঠান', ar: 'أرسل الرسالة' })}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
