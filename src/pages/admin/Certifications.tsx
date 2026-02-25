import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useCertifications } from '@/hooks/usePortfolioData';
import { useQueryClient } from '@tanstack/react-query';
import { TrilingualInput } from '@/components/admin/TrilingualInput';
import { Trash2, Plus } from 'lucide-react';

const AdminCertifications = () => {
  const { data: items, isLoading } = useCertifications();
  const { toast } = useToast();
  const qc = useQueryClient();

  const save = async (id: string, updates: any) => {
    const { error } = await supabase.from('certifications').update(updates).eq('id', id);
    if (error) toast({ title: 'Error', description: error.message, variant: 'destructive' });
    else { toast({ title: 'Saved!' }); qc.invalidateQueries({ queryKey: ['certifications'] }); }
  };

  const addItem = async () => {
    const maxOrder = items?.length ? Math.max(...items.map(i => i.sort_order || 0)) + 1 : 0;
    const { error } = await supabase.from('certifications').insert({ title_en: 'New Certification', sort_order: maxOrder });
    if (error) toast({ title: 'Error', description: error.message, variant: 'destructive' });
    else { toast({ title: 'Added!' }); qc.invalidateQueries({ queryKey: ['certifications'] }); }
  };

  const deleteItem = async (id: string) => {
    const { error } = await supabase.from('certifications').delete().eq('id', id);
    if (error) toast({ title: 'Error', description: error.message, variant: 'destructive' });
    else { toast({ title: 'Deleted!' }); qc.invalidateQueries({ queryKey: ['certifications'] }); }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Certifications</h1>
        <Button onClick={addItem}><Plus className="h-4 w-4 mr-2" />Add</Button>
      </div>
      {items?.map((item) => (
        <Card key={item.id}>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>{item.title_en}</CardTitle>
            <Button variant="ghost" size="icon" onClick={() => deleteItem(item.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <TrilingualInput label="Title" valueEn={item.title_en} valueBn={item.title_bn || ''} valueAr={item.title_ar || ''} onChangeEn={v => save(item.id, { title_en: v })} onChangeBn={v => save(item.id, { title_bn: v })} onChangeAr={v => save(item.id, { title_ar: v })} />
            <TrilingualInput label="Institute" valueEn={item.institute_en || ''} valueBn={item.institute_bn || ''} valueAr={item.institute_ar || ''} onChangeEn={v => save(item.id, { institute_en: v })} onChangeBn={v => save(item.id, { institute_bn: v })} onChangeAr={v => save(item.id, { institute_ar: v })} />
            <TrilingualInput label="Year" valueEn={item.year_en || ''} valueBn={item.year_bn || ''} valueAr={item.year_ar || ''} onChangeEn={v => save(item.id, { year_en: v })} onChangeBn={v => save(item.id, { year_bn: v })} onChangeAr={v => save(item.id, { year_ar: v })} />
            <TrilingualInput label="Grade" valueEn={item.grade_en || ''} valueBn={item.grade_bn || ''} valueAr={item.grade_ar || ''} onChangeEn={v => save(item.id, { grade_en: v })} onChangeBn={v => save(item.id, { grade_bn: v })} onChangeAr={v => save(item.id, { grade_ar: v })} />
            <div><Label>Skills (JSON array)</Label>
              <Textarea defaultValue={JSON.stringify(item.skills || [], null, 2)} onBlur={e => {
                try { save(item.id, { skills: JSON.parse(e.target.value) }); } catch { toast({ title: 'Invalid JSON', variant: 'destructive' }); }
              }} className="font-mono text-xs" rows={4} /></div>
            <div><Label>Sort Order</Label>
              <Input type="number" defaultValue={item.sort_order || 0} onBlur={e => save(item.id, { sort_order: parseInt(e.target.value) })} /></div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AdminCertifications;
