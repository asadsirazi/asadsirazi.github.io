import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import {
  Code,
  FileText,
  Palette,
  Keyboard,
  Cpu,
  Globe,
} from 'lucide-react';

export const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: { en: 'Office Applications', bn: 'অফিস অ্যাপ্লিকেশন', ar: 'تطبيقات المكتب' },
      skills: [
        'MS Word',
        'MS Excel',
        'MS PowerPoint',
        'Google Docs',
        'Google Sheets',
        'Google Slides',
        'Google Forms',
      ],
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: { en: 'Web Development', bn: 'ওয়েব ডেভেলপমেন্ট', ar: 'تطوير الويب' },
      skills: ['HTML', 'CSS', 'PHP', 'Laravel', 'MySQL', 'WordPress', 'Google Sites'],
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: { en: 'Graphic Design', bn: 'গ্রাফিক ডিজাইন', ar: 'التصميم الجرافيكي' },
      skills: [
        'Adobe Photoshop',
        'Adobe Illustrator',
        'Canva',
      ],
    },
    {
      icon: <Keyboard className="h-6 w-6" />,
      title: { en: 'Typing Skills', bn: 'টাইপিং দক্ষতা', ar: 'مهارات الطباعة' },
      skills: [
        { en: 'Bengali Typing', bn: 'বাংলা টাইপিং', ar: 'الطباعة بالبنغالية' },
        { en: 'English Typing', bn: 'ইংরেজি টাইপিং', ar: 'الطباعة بالإنجليزية' },
        { en: 'Arabic Typing', bn: 'আরবি টাইপিং', ar: 'الطباعة بالعربية' },
      ],
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: { en: 'AI & Modern Tools', bn: 'এআই ও আধুনিক টুলস', ar: 'الذكاء الاصطناعي والأدوات الحديثة' },
      skills: [
        { en: 'AI Tools Usage', bn: 'এআই টুলস ব্যবহার', ar: 'استخدام أدوات الذكاء الاصطناعي' },
        { en: 'ChatGPT', bn: 'চ্যাটজিপিটি', ar: 'تشات جي بي تي' },
        { en: 'AI Image Generation', bn: 'এআই ইমেজ জেনারেশন', ar: 'توليد صور الذكاء الاصطناعي' },
      ],
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: { en: 'Research & Internet', bn: 'গবেষণা ও ইন্টারনেট', ar: 'البحث والإنترنت' },
      skills: [
        { en: 'Internet Research', bn: 'ইন্টারনেট গবেষণা', ar: 'البحث عبر الإنترنت' },
        { en: 'Web Browsing', bn: 'ওয়েব ব্রাউজিং', ar: 'تصفح الويب' },
        { en: 'Data Mining', bn: 'ডেটা মাইনিং', ar: 'استخراج البيانات' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4" aria-labelledby="skills-heading">
      <div className="container mx-auto max-w-6xl z-10 relative">
        <div className="text-center mb-12">
          <h2 id="skills-heading" className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t({ en: 'Skills & Expertise', bn: 'দক্ষতা ও পারদর্শিতা', ar: 'المهارات والخبرات' })}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card space-y-4 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold">{t(category.title)}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="outline"
                    className="glass border-primary/20 hover:border-primary/40 transition-colors"
                  >
                    {typeof skill === 'string' ? skill : t(skill)}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
