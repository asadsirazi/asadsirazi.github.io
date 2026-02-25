import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useExperiences } from '@/hooks/usePortfolioData';
import { useQueryClient } from '@tanstack/react-query';
import { TrilingualInput } from '@/components/admin/TrilingualInput';
import { Trash2, Plus } from 'lucide-react';

const AdminExperience = () => {
  const { data: items, isLoading } = useExperiences();
  const { toast } = useToast();
  const qc = useQueryClient();

  const save = async (id: string, updates: any) => {
    const { error } = await supabase.from('experiences').update(updates).eq('id', id);
    if (error) toast({ title: 'Error', description: error.message, variant: 'destructive' });
    else { toast({ title: 'Saved!' }); qc.invalidateQueries({ queryKey: ['experiences'] }); }
  };

  const addItem = async () => {
    const maxOrder = items?.length ? Math.max(...items.map(i => i.sort_order || 0)) + 1 : 0;
    const { error } = await supabase.from('experiences').insert({ title_en: 'New Experience', sort_order: maxOrder });
    if (error) toast({ title: 'Error', description: error.message, variant: 'destructive' });
    else { toast({ title: 'Added!' }); qc.invalidateQueries({ queryKey: ['experiences'] }); }
  };

  const deleteItem = async (id: string) => {
    const { error } = await supabase.from('experiences').delete().eq('id', id);
    if (error) toast({ title: 'Error', description: error.message, variant: 'destructive' });
    else { toast({ title: 'Deleted!' }); qc.invalidateQueries({ queryKey: ['experiences'] }); }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Experience</h1>
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
            <TrilingualInput label="Company" valueEn={item.company_en || ''} valueBn={item.company_bn || ''} valueAr={item.company_ar || ''} onChangeEn={v => save(item.id, { company_en: v })} onChangeBn={v => save(item.id, { company_bn: v })} onChangeAr={v => save(item.id, { company_ar: v })} />
            <TrilingualInput label="Location" valueEn={item.location_en || ''} valueBn={item.location_bn || ''} valueAr={item.location_ar || ''} onChangeEn={v => save(item.id, { location_en: v })} onChangeBn={v => save(item.id, { location_bn: v })} onChangeAr={v => save(item.id, { location_ar: v })} />
            <TrilingualInput label="Period" valueEn={item.period_en || ''} valueBn={item.period_bn || ''} valueAr={item.period_ar || ''} onChangeEn={v => save(item.id, { period_en: v })} onChangeBn={v => save(item.id, { period_bn: v })} onChangeAr={v => save(item.id, { period_ar: v })} />
            <div><Label>Responsibilities (JSON)</Label>
              <Textarea defaultValue={JSON.stringify(item.responsibilities || [], null, 2)} onBlur={e => {
                try { save(item.id, { responsibilities: JSON.parse(e.target.value) }); } catch { toast({ title: 'Invalid JSON', variant: 'destructive' }); }
              }} className="font-mono text-xs" rows={8} /></div>
            <div><Label>Sort Order</Label>
              <Input type="number" defaultValue={item.sort_order || 0} onBlur={e => save(item.id, { sort_order: parseInt(e.target.value) })} /></div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AdminExperience;
