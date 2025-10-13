import { useLanguage } from '@/contexts/LanguageContext';
import { Briefcase } from 'lucide-react';

export const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      title: { en: 'Executive (Correspondence & Reporting)', bn: 'এক্সিকিউটিভ (চিঠিপত্র ও রিপোর্টিং)', ar: 'تنفيذي (المراسلات والتقارير)' },
      company: { en: 'Al-Iman Charitable Society', bn: 'আল-ঈমান দাতব্য সমিতি', ar: 'جمعية الإيمان الخيرية' },
      location: { en: 'Cox\'s Bazar, Bangladesh', bn: 'কক্সবাজার, বাংলাদেশ', ar: 'كوكس بازار، بنغلاديش' },
      period: { en: 'June 2017 - Present', bn: 'জুন ২০১৭ - বর্তমান', ar: 'يونيو ٢٠١٧ - الحاضر' },
      responsibilities: [
        { en: 'Managing official correspondence with foreign donors', bn: 'বিদেশী দাতাদের সাথে সরকারী চিঠিপত্র পরিচালনা', ar: 'إدارة المراسلات الرسمية مع المتبرعين الأجانب' },
        { en: 'Preparing and submitting project reports in Arabic and English', bn: 'আরবি এবং ইংরেজিতে প্রকল্প রিপোর্ট প্রস্তুত ও জমা দেওয়া', ar: 'إعداد وتقديم تقارير المشاريع بالعربية والإنجليزية' },
        { en: 'Data management and documentation', bn: 'ডেটা ম্যানেজমেন্ট এবং ডকুমেন্টেশন', ar: 'إدارة البيانات والتوثيق' },
      ],
    },
    {
      title: { en: 'Lecturer (Arabic & Digital Technology)', bn: 'প্রভাষক (আরবি ও ডিজিটাল প্রযুক্তি)', ar: 'محاضر (اللغة العربية والتكنولوجيا الرقمية)' },
      company: { en: 'Al-Iman Ideal Women\'s Madrasah', bn: 'আল-ঈমান আদর্শ মহিলা মাদ্রাসা', ar: 'مدرسة الإيمان النموذجية للبنات' },
      location: { en: 'Cox\'s Bazar, Bangladesh', bn: 'কক্সবাজার, বাংলাদেশ', ar: 'كوكس بازار، بنغلاديش' },
      period: { en: 'June 2017 - Present', bn: 'জুন ২০১৭ - বর্তমান', ar: 'يونيو ٢٠١٧ - الحاضر' },
      responsibilities: [
        { en: 'Teaching Arabic Language and Islamic Studies', bn: 'আরবি ভাষা এবং ইসলামিক স্টাডিজ পড়ানো', ar: 'تدريس اللغة العربية والدراسات الإسلامية' },
        { en: 'Supervising Islamic cultural activities', bn: 'ইসলামিক সাংস্কৃতিক কার্যক্রম তত্ত্বাবধান', ar: 'الإشراف على الأنشطة الثقافية الإسلامية' },
        { en: 'Head of the Digital Technology Department', bn: 'ডিজিটাল প্রযুক্তি বিভাগের প্রধান', ar: 'رئيس قسم التكنولوجيا الرقمية' },
      ],
    },
    {
      title: { en: 'Teacher (Arabic & Islamic Studies)', bn: 'শিক্ষক (আরবি ও ইসলামিক স্টাডিজ)', ar: 'مدرس (اللغة العربية والدراسات الإسلامية)' },
      company: { en: 'Jamia Imam Muslim (R.A.)', bn: 'জামিয়া ইমাম মুসলিম (রঃ)', ar: 'جامعة الإمام المسلم (رحمه الله)' },
      location: { en: 'Cox\'s Bazar, Bangladesh', bn: 'কক্সবাজার, বাংলাদেশ', ar: 'كوكس بازار، بنغلاديش' },
      period: { en: 'June 2015 - May 2017', bn: 'জুন ২০১৫ - মে ২০১৭', ar: 'يونيو ٢٠١٥ - مايو ٢٠١٧' },
      responsibilities: [
        { en: 'Taught Arabic language and Islamic subjects', bn: 'আরবি ভাষা এবং ইসলামিক বিষয়গুলি পড়িয়েছি', ar: 'تدريس اللغة العربية والمواد الإسلامية' },
        { en: 'Supervised cultural forums', bn: 'সাংস্কৃতিক ফোরাম তত্ত্বাবধান', ar: 'الإشراف على المنتديات الثقافية' },
        { en: 'Managed student examination results', bn: 'শিক্ষার্থীদের পরীক্ষার ফলাফল পরিচালনা', ar: 'إدارة نتائج امتحانات الطلاب' },
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4" aria-labelledby="experience-heading">
      <div className="container mx-auto max-w-6xl z-10 relative">
        <div className="text-center mb-12">
          <h2 id="experience-heading" className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t({ en: 'Work Experience', bn: 'কর্ম অভিজ্ঞতা', ar: 'الخبرة العملية' })}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-card hover:shadow-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>

                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{t(exp.title)}</h3>
                    <p className="text-lg text-primary font-medium">{t(exp.company)}</p>
                    <div className="flex flex-wrap gap-2 mt-1 text-sm text-muted-foreground">
                      <span>{t(exp.location)}</span>
                      <span>•</span>
                      <span>{t(exp.period)}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-accent mt-1.5 flex-shrink-0">▹</span>
                        <span>{t(resp)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
