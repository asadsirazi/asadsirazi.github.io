import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useSiteSettings } from '@/hooks/usePortfolioData';
import { useQueryClient } from '@tanstack/react-query';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';

const AdminSettings = () => {
  const { data: settings, isLoading } = useSiteSettings();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [personalInfo, setPersonalInfo] = useState<any>({});
  const [location, setLocation] = useState<any>({});
  const [socialLinks, setSocialLinks] = useState<any>({});

  useEffect(() => {
    if (settings) {
      setPersonalInfo(settings.personal_info || {});
      setLocation(settings.location || {});
      setSocialLinks(settings.social_links || {});
    }
  }, [settings]);

  const saveSettings = async (key: string, value: any) => {
    const { error } = await supabase.from('site_settings').update({ value }).eq('key', key);
    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Saved!' });
      queryClient.invalidateQueries({ queryKey: ['site-settings'] });
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="space-y-6 max-w-4xl">
      <h1 className="text-3xl font-bold">Site Settings</h1>

      <Card>
        <CardHeader><CardTitle>Personal Information</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <Tabs defaultValue="en">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="en">English</TabsTrigger>
              <TabsTrigger value="bn">বাংলা</TabsTrigger>
              <TabsTrigger value="ar">العربية</TabsTrigger>
            </TabsList>
            {['en', 'bn', 'ar'].map(lang => (
              <TabsContent key={lang} value={lang} className="space-y-3">
                <div><Label>Name ({lang.toUpperCase()})</Label>
                  <Input value={personalInfo[`name_${lang}`] || ''} onChange={e => setPersonalInfo({...personalInfo, [`name_${lang}`]: e.target.value})} /></div>
                <div><Label>Title ({lang.toUpperCase()})</Label>
                  <Input value={personalInfo[`title_${lang}`] || ''} onChange={e => setPersonalInfo({...personalInfo, [`title_${lang}`]: e.target.value})} /></div>
                <div><Label>Subtitle ({lang.toUpperCase()})</Label>
                  <Textarea value={personalInfo[`subtitle_${lang}`] || ''} onChange={e => setPersonalInfo({...personalInfo, [`subtitle_${lang}`]: e.target.value})} /></div>
              </TabsContent>
            ))}
          </Tabs>
          <div><Label>Profile Image URL</Label>
            <Input value={personalInfo.profile_image_url || ''} onChange={e => setPersonalInfo({...personalInfo, profile_image_url: e.target.value})} /></div>
          <div className="grid grid-cols-2 gap-4">
            <div><Label>CV URL (English)</Label>
              <Input value={personalInfo.cv_url_en || ''} onChange={e => setPersonalInfo({...personalInfo, cv_url_en: e.target.value})} /></div>
            <div><Label>CV URL (Arabic)</Label>
              <Input value={personalInfo.cv_url_ar || ''} onChange={e => setPersonalInfo({...personalInfo, cv_url_ar: e.target.value})} /></div>
          </div>
          <Button onClick={() => saveSettings('personal_info', personalInfo)}>Save Personal Info</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Location</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          {['en', 'bn', 'ar'].map(lang => (
            <div key={lang}><Label>Location Text ({lang.toUpperCase()})</Label>
              <Input value={location[`text_${lang}`] || ''} onChange={e => setLocation({...location, [`text_${lang}`]: e.target.value})} /></div>
          ))}
          <div><Label>Google Maps Embed URL</Label>
            <Textarea value={location.maps_embed || ''} onChange={e => setLocation({...location, maps_embed: e.target.value})} /></div>
          <Button onClick={() => saveSettings('location', location)}>Save Location</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Social Links</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          {Object.entries(socialLinks).map(([key, val]) => (
            <div key={key}><Label className="capitalize">{key}</Label>
              <Input value={(val as string) || ''} onChange={e => setSocialLinks({...socialLinks, [key]: e.target.value})} /></div>
          ))}
          <Button onClick={() => saveSettings('social_links', socialLinks)}>Save Social Links</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSettings;
