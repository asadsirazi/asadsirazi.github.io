import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useAboutContent } from '@/hooks/usePortfolioData';
import { useQueryClient } from '@tanstack/react-query';
import { TrilingualInput } from '@/components/admin/TrilingualInput';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Trash2, Plus } from 'lucide-react';

const AdminAbout = () => {
  const { data: items, isLoading } = useAboutContent();
  const { toast } = useToast();
  const qc = useQueryClient();
  const [newKey, setNewKey] = useState('');
  const [newEn, setNewEn] = useState('');
  const [newBn, setNewBn] = useState('');
  const [newAr, setNewAr] = useState('');

  const save = async (id: string, field: string, value: string) => {
    const { error } = await supabase.from('about_content').update({ [field]: value }).eq('id', id);
    if (error) toast({ title: 'Error', description: error.message, variant: 'destructive' });
    else { toast({ title: 'Saved!' }); qc.invalidateQueries({ queryKey: ['about-content'] }); }
  };

  const addItem = async () => {
    if (!newKey) return;
    const maxOrder = items?.length ? Math.max(...items.map(i => i.sort_order || 0)) + 1 : 0;
    const { error } = await supabase.from('about_content').insert({ key: newKey, value_en: newEn, value_bn: newBn, value_ar: newAr, sort_order: maxOrder });
    if (error) toast({ title: 'Error', description: error.message, variant: 'destructive' });
    else { toast({ title: 'Added!' }); qc.invalidateQueries({ queryKey: ['about-content'] }); setNewKey(''); setNewEn(''); setNewBn(''); setNewAr(''); }
  };

  const deleteItem = async (id: string) => {
    const { error } = await supabase.from('about_content').delete().eq('id', id);
    if (error) toast({ title: 'Error', description: error.message, variant: 'destructive' });
    else { toast({ title: 'Deleted!' }); qc.invalidateQueries({ queryKey: ['about-content'] }); }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="space-y-6 max-w-4xl">
      <h1 className="text-3xl font-bold">About Content</h1>
      {items?.map((item) => (
        <Card key={item.id}>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-mono">{item.key}</CardTitle>
            <Button variant="ghost" size="icon" onClick={() => deleteItem(item.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
          </CardHeader>
          <CardContent>
            <TrilingualInput
              label="Content" multiline
              valueEn={item.value_en || ''} valueBn={item.value_bn || ''} valueAr={item.value_ar || ''}
              onChangeEn={(v) => save(item.id, 'value_en', v)}
              onChangeBn={(v) => save(item.id, 'value_bn', v)}
              onChangeAr={(v) => save(item.id, 'value_ar', v)}
            />
          </CardContent>
        </Card>
      ))}
      <Card>
        <CardHeader><CardTitle>Add New</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div><Label>Key</Label><Input value={newKey} onChange={e => setNewKey(e.target.value)} placeholder="e.g. hobby_fact" /></div>
          <TrilingualInput label="Content" multiline valueEn={newEn} valueBn={newBn} valueAr={newAr} onChangeEn={setNewEn} onChangeBn={setNewBn} onChangeAr={setNewAr} />
          <Button onClick={addItem}><Plus className="h-4 w-4 mr-2" />Add</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminAbout;
