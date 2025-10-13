import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: { en: 'Al-Iman Organization Website', bn: 'আল-ঈমান সংস্থার ওয়েবসাইট', ar: 'موقع منظمة الإيمان' },
      description: {
        en: 'Multi-language website for charitable organization with donation tracking and project reporting.',
        bn: 'দাতব্য সংস্থার জন্য বহুভাষিক ওয়েবসাইট যেখানে দান ট্র্যাকিং এবং প্রকল্প রিপোর্টিং রয়েছে।',
        ar: 'موقع متعدد اللغات لمنظمة خيرية مع تتبع التبرعات وتقارير المشاريع.',
      },
      tags: ['WordPress', 'PHP', 'MySQL', 'Multilingual'],
    },
    {
      title: { en: 'Madrasah Management System', bn: 'মাদ্রাসা ম্যানেজমেন্ট সিস্টেম', ar: 'نظام إدارة المدرسة' },
      description: {
        en: 'Digital platform for managing student records, examinations, and administrative tasks.',
        bn: 'শিক্ষার্থী রেকর্ড, পরীক্ষা এবং প্রশাসনিক কাজ পরিচালনার জন্য ডিজিটাল প্ল্যাটফর্ম।',
        ar: 'منصة رقمية لإدارة سجلات الطلاب والامتحانات والمهام الإدارية.',
      },
      tags: ['Laravel', 'MySQL', 'Bootstrap', 'Admin Panel'],
    },
    {
      title: { en: 'Donor Reporting Portal', bn: 'দাতা রিপোর্টিং পোর্টাল', ar: 'بوابة تقارير المتبرعين' },
      description: {
        en: 'Automated system for generating and submitting multilingual project reports to international donors.',
        bn: 'আন্তর্জাতিক দাতাদের কাছে বহুভাষিক প্রকল্প রিপোর্ট তৈরি এবং জমা দেওয়ার স্বয়ংক্রিয় সিস্টেম।',
        ar: 'نظام آلي لإنشاء وتقديم تقارير المشاريع متعددة اللغات للمتبرعين الدوليين.',
      },
      tags: ['PHP', 'PDF Generation', 'Email Integration', 'Arabic Support'],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4" aria-labelledby="projects-heading">
      <div className="container mx-auto max-w-6xl z-10 relative">
        <div className="text-center mb-12">
          <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t({ en: 'Featured Projects', bn: 'প্রধান প্রকল্প', ar: 'المشاريع المميزة' })}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card hover:shadow-glow transition-all duration-300 flex flex-col animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <Code className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-foreground leading-tight">
                    {t(project.title)}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 flex-1">
                {t(project.description)}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <Badge
                    key={tagIndex}
                    variant="outline"
                    className="glass border-primary/20 text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <Button
                variant="outline"
                className="glass border-primary/30 hover:border-primary/50 w-full"
                size="sm"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                {t({ en: 'View Details', bn: 'বিস্তারিত দেখুন', ar: 'عرض التفاصيل' })}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
