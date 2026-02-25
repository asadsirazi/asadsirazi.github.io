import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useReferences } from '@/hooks/usePortfolioData';
import { useQueryClient } from '@tanstack/react-query';
import { TrilingualInput } from '@/components/admin/TrilingualInput';
import { Trash2, Plus } from 'lucide-react';

const AdminReferences = () => {
  const { data: items, isLoading } = useReferences();
  const { toast } = useToast();
  const qc = useQueryClient();

  const save = async (id: string, updates: any) => {
    const { error } = await supabase.from('references_list').update(updates).eq('id', id);
    if (error) toast({ title: 'Error', description: error.message, variant: 'destructive' });
    else { toast({ title: 'Saved!' }); qc.invalidateQueries({ queryKey: ['references'] }); }
  };

  const addItem = async () => {
    const maxOrder = items?.length ? Math.max(...items.map(i => i.sort_order || 0)) + 1 : 0;
    const { error } = await supabase.from('references_list').insert({ name_en: 'New Reference', sort_order: maxOrder });
    if (error) toast({ title: 'Error', description: error.message, variant: 'destructive' });
    else { toast({ title: 'Added!' }); qc.invalidateQueries({ queryKey: ['references'] }); }
  };

  const deleteItem = async (id: string) => {
    const { error } = await supabase.from('references_list').delete().eq('id', id);
    if (error) toast({ title: 'Error', description: error.message, variant: 'destructive' });
    else { toast({ title: 'Deleted!' }); qc.invalidateQueries({ queryKey: ['references'] }); }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">References</h1>
        <Button onClick={addItem}><Plus className="h-4 w-4 mr-2" />Add</Button>
      </div>
      {items?.map((item) => (
        <Card key={item.id}>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>{item.name_en}</CardTitle>
            <Button variant="ghost" size="icon" onClick={() => deleteItem(item.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <TrilingualInput label="Name" valueEn={item.name_en} valueBn={item.name_bn || ''} valueAr={item.name_ar || ''} onChangeEn={v => save(item.id, { name_en: v })} onChangeBn={v => save(item.id, { name_bn: v })} onChangeAr={v => save(item.id, { name_ar: v })} />
            <TrilingualInput label="Position" valueEn={item.position_en || ''} valueBn={item.position_bn || ''} valueAr={item.position_ar || ''} onChangeEn={v => save(item.id, { position_en: v })} onChangeBn={v => save(item.id, { position_bn: v })} onChangeAr={v => save(item.id, { position_ar: v })} />
            <TrilingualInput label="Organization" valueEn={item.organization_en || ''} valueBn={item.organization_bn || ''} valueAr={item.organization_ar || ''} onChangeEn={v => save(item.id, { organization_en: v })} onChangeBn={v => save(item.id, { organization_bn: v })} onChangeAr={v => save(item.id, { organization_ar: v })} />
            <div><Label>Phone</Label><Input defaultValue={item.phone || ''} onBlur={e => save(item.id, { phone: e.target.value })} /></div>
            <div><Label>Email</Label><Input defaultValue={item.email || ''} onBlur={e => save(item.id, { email: e.target.value })} /></div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AdminReferences;
