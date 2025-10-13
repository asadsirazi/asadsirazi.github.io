import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';

export const About = () => {
  const { t } = useLanguage();

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
            <h3 className="text-xl font-semibold text-primary mb-4">
              {t({ en: 'Professional Summary', bn: 'পেশাদার সারসংক্ষেপ', ar: 'الملخص المهني' })}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t({
                en: 'A highly motivated IT professional with expertise in computer applications, web programming, and office management tools. Skilled in Microsoft Office, Google Workspace, and digital platforms with strong ability in troubleshooting, reporting, and data management.',
                bn: 'কম্পিউটার অ্যাপ্লিকেশন, ওয়েব প্রোগ্রামিং এবং অফিস ম্যানেজমেন্ট টুলসে দক্ষতাসম্পন্ন একজন অত্যন্ত উদ্যমী আইটি পেশাদার। মাইক্রোসফ্ট অফিস, গুগল ওয়ার্কস্পেস এবং ডিজিটাল প্ল্যাটফর্মে দক্ষ এবং ট্রাবলশুটিং, রিপোর্টিং এবং ডেটা ম্যানেজমেন্টে শক্তিশালী দক্ষতা রয়েছে।',
                ar: 'محترف في تكنولوجيا المعلومات ذو دافعية عالية مع خبرة في تطبيقات الكمبيوتر وبرمجة الويب وأدوات إدارة المكاتب. ماهر في Microsoft Office وGoogle Workspace والمنصات الرقمية مع قدرة قوية على استكشاف الأخطاء وإعداد التقارير وإدارة البيانات.',
              })}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t({
                en: 'Experienced in both academic and non-profit sectors, with proven skills in technical training, project documentation, and multilingual communication (Bengali, English, Arabic).',
                bn: 'একাডেমিক এবং অলাভজনক উভয় ক্ষেত্রেই অভিজ্ঞ, প্রযুক্তিগত প্রশিক্ষণ, প্রকল্প ডকুমেন্টেশন এবং বহুভাষিক যোগাযোগে (বাংলা, ইংরেজি, আরবি) প্রমাণিত দক্ষতা সহ।',
                ar: 'خبرة في القطاعين الأكاديمي وغير الربحي، مع مهارات مثبتة في التدريب التقني وتوثيق المشاريع والتواصل متعدد اللغات (البنغالية، الإنجليزية، العربية).',
              })}
            </p>
          </div>

          <div className="glass-card space-y-6">
            <h3 className="text-xl font-semibold text-primary mb-4">
              {t({ en: 'Quick Facts', bn: 'দ্রুত তথ্য', ar: 'حقائق سريعة' })}
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">
                    {t({ en: 'Location', bn: 'অবস্থান', ar: 'الموقع' })}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t({
                      en: 'Matarbari, Cox\'s Bazar, Bangladesh',
                      bn: 'মাতারবাড়ি, কক্সবাজার, বাংলাদেশ',
                      ar: 'ماتارباري، كوكس بازار، بنغلاديش',
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">
                    {t({ en: 'Experience', bn: 'অভিজ্ঞতা', ar: 'الخبرة' })}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t({ en: '8+ Years', bn: '৮+ বছর', ar: '٨+ سنوات' })}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">
                    {t({ en: 'Languages', bn: 'ভাষা', ar: 'اللغات' })}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary">
                      {t({ en: 'Bengali (Native)', bn: 'বাংলা (মাতৃভাষা)', ar: 'البنغالية (أصلية)' })}
                    </Badge>
                    <Badge variant="secondary">
                      {t({ en: 'English', bn: 'ইংরেজি', ar: 'الإنجليزية' })}
                    </Badge>
                    <Badge variant="secondary">
                      {t({ en: 'Arabic', bn: 'আরবি', ar: 'العربية' })}
                    </Badge>
                    <Badge variant="secondary">
                      {t({ en: 'Urdu', bn: 'উর্দু', ar: 'الأردية' })}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">
                    {t({ en: 'Availability', bn: 'প্রাপ্যতা', ar: 'التوفر' })}
                  </p>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mt-2">
                    {t({ en: 'Available for Projects', bn: 'প্রকল্পের জন্য উপলব্ধ', ar: 'متاح للمشاريع' })}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
