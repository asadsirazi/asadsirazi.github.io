import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useGallery } from '@/hooks/usePortfolioData';
import { useQueryClient } from '@tanstack/react-query';
import { Trash2, Plus } from 'lucide-react';

const AdminGallery = () => {
  const { data: items, isLoading } = useGallery();
  const { toast } = useToast();
  const qc = useQueryClient();

  const save = async (id: string, updates: any) => {
    const { error } = await supabase.from('gallery').update(updates).eq('id', id);
    if (error) toast({ title: 'Error', description: error.message, variant: 'destructive' });
    else { toast({ title: 'Saved!' }); qc.invalidateQueries({ queryKey: ['gallery'] }); }
  };

  const addItem = async () => {
    const maxOrder = items?.length ? Math.max(...items.map(i => i.sort_order || 0)) + 1 : 0;
    const { error } = await supabase.from('gallery').insert({ image_url: '', alt_text: 'New Image', sort_order: maxOrder });
    if (error) toast({ title: 'Error', description: error.message, variant: 'destructive' });
    else { toast({ title: 'Added!' }); qc.invalidateQueries({ queryKey: ['gallery'] }); }
  };

  const deleteItem = async (id: string) => {
    const { error } = await supabase.from('gallery').delete().eq('id', id);
    if (error) toast({ title: 'Error', description: error.message, variant: 'destructive' });
    else { toast({ title: 'Deleted!' }); qc.invalidateQueries({ queryKey: ['gallery'] }); }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Gallery</h1>
        <Button onClick={addItem}><Plus className="h-4 w-4 mr-2" />Add Image</Button>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {items?.map((item) => (
          <Card key={item.id}>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-sm truncate">{item.alt_text || 'Image'}</CardTitle>
              <Button variant="ghost" size="icon" onClick={() => deleteItem(item.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {item.image_url && <img src={item.image_url} alt={item.alt_text || ''} className="w-full h-40 object-cover rounded-lg" />}
              <div><Label>Image URL</Label><Input defaultValue={item.image_url} onBlur={e => save(item.id, { image_url: e.target.value })} /></div>
              <div><Label>Alt Text</Label><Input defaultValue={item.alt_text || ''} onBlur={e => save(item.id, { alt_text: e.target.value })} /></div>
              <div><Label>Sort Order</Label><Input type="number" defaultValue={item.sort_order || 0} onBlur={e => save(item.id, { sort_order: parseInt(e.target.value) })} /></div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminGallery;
