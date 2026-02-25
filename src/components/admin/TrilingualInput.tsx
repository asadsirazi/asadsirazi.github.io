import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface TrilingualInputProps {
  label: string;
  valueEn: string;
  valueBn: string;
  valueAr: string;
  onChangeEn: (v: string) => void;
  onChangeBn: (v: string) => void;
  onChangeAr: (v: string) => void;
  multiline?: boolean;
}

export const TrilingualInput = ({
  label, valueEn, valueBn, valueAr,
  onChangeEn, onChangeBn, onChangeAr, multiline = false
}: TrilingualInputProps) => {
  const InputComponent = multiline ? Textarea : Input;

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Tabs defaultValue="en" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="en">English</TabsTrigger>
          <TabsTrigger value="bn">বাংলা</TabsTrigger>
          <TabsTrigger value="ar">العربية</TabsTrigger>
        </TabsList>
        <TabsContent value="en">
          <InputComponent value={valueEn} onChange={(e) => onChangeEn(e.target.value)} placeholder="English" />
        </TabsContent>
        <TabsContent value="bn">
          <InputComponent value={valueBn} onChange={(e) => onChangeBn(e.target.value)} placeholder="বাংলা" />
        </TabsContent>
        <TabsContent value="ar">
          <InputComponent value={valueAr} onChange={(e) => onChangeAr(e.target.value)} placeholder="العربية" dir="rtl" />
        </TabsContent>
      </Tabs>
    </div>
  );
};
