import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from './ui/button';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-1 glass rounded-full p-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('en')}
        className={`rounded-full px-3 py-1 text-xs transition-all ${
          language === 'en'
            ? 'bg-primary text-primary-foreground'
            : 'text-foreground/70 hover:text-foreground'
        }`}
      >
        EN
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('bn')}
        className={`rounded-full px-3 py-1 text-xs transition-all ${
          language === 'bn'
            ? 'bg-primary text-primary-foreground'
            : 'text-foreground/70 hover:text-foreground'
        }`}
      >
        বাং
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('ar')}
        className={`rounded-full px-3 py-1 text-xs transition-all ${
          language === 'ar'
            ? 'bg-primary text-primary-foreground'
            : 'text-foreground/70 hover:text-foreground'
        }`}
        dir="rtl"
      >
        ع
      </Button>
    </div>
  );
};
