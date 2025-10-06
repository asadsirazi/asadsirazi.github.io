import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Download, Mail, MessageCircle, Send } from 'lucide-react';
import profileImage from '@/assets/profile-asad.png';

export const Hero = () => {
  const { t, language } = useLanguage();

  const openWhatsApp = () => {
    window.open('https://wa.me/8801832591765', '_blank');
  };

  const openTelegram = () => {
    window.open('tg://resolve?phone=+8801832591765', '_blank');
  };

  const downloadCV = () => {
    const cvUrl = language === 'ar' ? '/cv/Asad_Hossain_Sirazi_CV_AR.pdf' : '/cv/Asad_Hossain_Sirazi_CV.pdf';
    window.open(cvUrl, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-4">
      <div className="container mx-auto max-w-6xl z-10">
        <div className="glass-card text-center space-y-8 animate-fade-in">
          <div className="flex justify-center">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow">
              <img
                src={profileImage}
                alt="Asad Hossain Sirazi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {t({
                en: 'Asad Hossain Sirazi',
                bn: 'আছআদ হোছাইন সিরাজী',
                ar: 'أسعد حسين سراجي',
              })}
            </h1>

            <p className="text-xl md:text-2xl text-secondary font-medium">
              {t({
                en: 'IT Support & Specialist',
                bn: 'আইটি সাপোর্ট ও বিশেষজ্ঞ',
                ar: 'أخصائي الدعم التقني',
              })}
            </p>

            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t({
                en: 'Skilled in Office Applications, Web Programming, and Digital Solutions. Passionate about leveraging technology to create innovative solutions.',
                bn: 'অফিস অ্যাপ্লিকেশন, ওয়েব প্রোগ্রামিং এবং ডিজিটাল সমাধানে দক্ষ। উদ্ভাবনী সমাধান তৈরিতে প্রযুক্তি ব্যবহারে উৎসাহী।',
                ar: 'ماهر في تطبيقات المكتب، برمجة الويب، والحلول الرقمية. شغوف بالاستفادة من التكنولوجيا لإنشاء حلول مبتكرة.',
              })}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={openWhatsApp}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              {t({ en: 'WhatsApp', bn: 'হোয়াটসঅ্যাপ', ar: 'واتساب' })}
            </Button>

            <Button
              onClick={openTelegram}
              variant="outline"
              className="glass border-primary/30 hover:border-primary/50"
            >
              <Send className="mr-2 h-4 w-4" />
              {t({ en: 'Telegram', bn: 'টেলিগ্রাম', ar: 'تيليجرام' })}
            </Button>

            <Button
              onClick={downloadCV}
              variant="outline"
              className="glass border-secondary/30 hover:border-secondary/50"
            >
              <Download className="mr-2 h-4 w-4" />
              {t({ en: 'Download CV', bn: 'সিভি ডাউনলোড', ar: 'تحميل السيرة الذاتية' })}
            </Button>

            <Button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              className="glass border-accent/30 hover:border-accent/50"
            >
              <Mail className="mr-2 h-4 w-4" />
              {t({ en: 'Contact Me', bn: 'যোগাযোগ করুন', ar: 'تواصل معي' })}
            </Button>
          </div>

          <div className="pt-6 text-sm text-muted-foreground">
            <p>
              {t({
                en: '📍 Matarbari, Maheshkhali, Cox\'s Bazar, Bangladesh',
                bn: '📍 মাতারবাড়ি, মহেশখালী, কক্সবাজার, বাংলাদেশ',
                ar: '📍 ماتارباري، مهيشخالي، كوكس بازار، بنغلاديش',
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
