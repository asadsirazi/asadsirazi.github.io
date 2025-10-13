import { useLanguage } from '@/contexts/LanguageContext';
import { Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const Certifications = () => {
  const { t } = useLanguage();

  const certifications = [
    {
      title: { en: 'PHP & Laravel Web Development (Intermediate)', bn: 'পিএইচপি ও লারাভেল ওয়েব ডেভেলপমেন্ট (মধ্যবর্তী)', ar: 'تطوير الويب PHP & Laravel (متوسط)' },
      institute: { en: 'Ostad (Online Learning Platform)', bn: 'ওস্তাদ (অনলাইন লার্নিং প্ল্যাটফর্ম)', ar: 'منصة Ostad التعليمية' },
      year: { en: '2024', bn: '২০২৪', ar: '٢٠٢٤' },
      skills: ['PHP', 'Laravel', 'MySQL', 'MVC'],
    },
    {
      title: { en: 'WordPress Customization', bn: 'ওয়ার্ডপ্রেস কাস্টমাইজেশন', ar: 'تخصيص WordPress' },
      institute: { en: 'SoftTech IT', bn: 'সফটেক আইটি', ar: 'SoftTech IT' },
      year: { en: '2020', bn: '২০২০', ar: '٢٠٢٠' },
      skills: ['WordPress', 'Theme Development', 'Plugin Customization'],
    },
    {
      title: { en: 'Microsoft Office Applications', bn: 'মাইক্রোসফট অফিস অ্যাপ্লিকেশন', ar: 'تطبيقات Microsoft Office' },
      institute: { en: 'Bangladesh Technical Education Board (BTEB)', bn: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড (বিটিইবি)', ar: 'مجلس التعليم التقني في بنغلاديش' },
      year: { en: '2013', bn: '২০১৩', ar: '٢٠١٣' },
      grade: { en: 'Grade: A+', bn: 'গ্রেড: এ+', ar: 'الدرجة: A+' },
      skills: ['MS Word', 'MS Excel', 'MS PowerPoint'],
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4" aria-labelledby="certifications-heading">
      <div className="container mx-auto max-w-6xl z-10 relative">
        <div className="text-center mb-12">
          <h2 id="certifications-heading" className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t({ en: 'Certifications & Training', bn: 'সার্টিফিকেশন ও প্রশিক্ষণ', ar: 'الشهادات والتدريب' })}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-card hover:shadow-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-accent to-primary flex items-center justify-center">
                      <Award className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground leading-tight">{t(cert.title)}</h3>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-primary font-medium">{t(cert.institute)}</p>
                  <p className="text-sm text-muted-foreground">
                    {t(cert.year)}
                    {cert.grade && (
                      <>
                        <span className="mx-2">•</span>
                        <span className="text-accent font-medium">{t(cert.grade)}</span>
                      </>
                    )}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="glass border-accent/20 text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
