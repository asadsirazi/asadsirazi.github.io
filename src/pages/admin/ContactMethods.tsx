import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useContactMethods } from '@/hooks/usePortfolioData';
import { useQueryClient } from '@tanstack/react-query';
import { TrilingualInput } from '@/components/admin/TrilingualInput';
import { Trash2, Plus } from 'lucide-react';

const AdminContactMethods = () => {
  const { data: items, isLoading } = useContactMethods();
  const { toast } = useToast();
  const qc = useQueryClient();

  const save = async (id: string, updates: any) => {
    const { error } = await supabase.from('contact_methods').update(updates).eq('id', id);
    if (error) toast({ title: 'Error', description: error.message, variant: 'destructive' });
    else { toast({ title: 'Saved!' }); qc.invalidateQueries({ queryKey: ['contact-methods'] }); }
  };

  const addItem = async () => {
    const maxOrder = items?.length ? Math.max(...items.map(i => i.sort_order || 0)) + 1 : 0;
    const { error } = await supabase.from('contact_methods').insert({ label: 'New Method', sort_order: maxOrder });
    if (error) toast({ title: 'Error', description: error.message, variant: 'destructive' });
    else { toast({ title: 'Added!' }); qc.invalidateQueries({ queryKey: ['contact-methods'] }); }
  };

  const deleteItem = async (id: string) => {
    const { error } = await supabase.from('contact_methods').delete().eq('id', id);
    if (error) toast({ title: 'Error', description: error.message, variant: 'destructive' });
    else { toast({ title: 'Deleted!' }); qc.invalidateQueries({ queryKey: ['contact-methods'] }); }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Contact Methods</h1>
        <Button onClick={addItem}><Plus className="h-4 w-4 mr-2" />Add</Button>
      </div>
      {items?.map((item) => (
        <Card key={item.id}>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>{item.label}</CardTitle>
            <Button variant="ghost" size="icon" onClick={() => deleteItem(item.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div><Label>Icon Name</Label><Input defaultValue={item.icon_name || ''} onBlur={e => save(item.id, { icon_name: e.target.value })} /></div>
            <div><Label>Label</Label><Input defaultValue={item.label} onBlur={e => save(item.id, { label: e.target.value })} /></div>
            <div><Label>Value</Label><Input defaultValue={item.value || ''} onBlur={e => save(item.id, { value: e.target.value })} /></div>
            <div><Label>Link</Label><Input defaultValue={item.link || ''} onBlur={e => save(item.id, { link: e.target.value })} /></div>
            <div><Label>Color Classes</Label><Input defaultValue={item.color || ''} onBlur={e => save(item.id, { color: e.target.value })} /></div>
            <TrilingualInput label="Hint" valueEn={item.hint_en || ''} valueBn={item.hint_bn || ''} valueAr={item.hint_ar || ''} onChangeEn={v => save(item.id, { hint_en: v })} onChangeBn={v => save(item.id, { hint_bn: v })} onChangeAr={v => save(item.id, { hint_ar: v })} />
            <div><Label>Sort Order</Label><Input type="number" defaultValue={item.sort_order || 0} onBlur={e => save(item.id, { sort_order: parseInt(e.target.value) })} /></div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AdminContactMethods;
