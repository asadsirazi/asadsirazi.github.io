import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export const useSiteSettings = () => {
  return useQuery({
    queryKey: ['site-settings'],
    queryFn: async () => {
      const { data, error } = await supabase.from('site_settings').select('*');
      if (error) throw error;
      const settings: Record<string, any> = {};
      data?.forEach((row) => { settings[row.key] = row.value; });
      return settings;
    },
    staleTime: 5 * 60 * 1000,
  });
};

export const useAboutContent = () => {
  return useQuery({
    queryKey: ['about-content'],
    queryFn: async () => {
      const { data, error } = await supabase.from('about_content').select('*').order('sort_order');
      if (error) throw error;
      return data || [];
    },
    staleTime: 5 * 60 * 1000,
  });
};

export const useSkills = () => {
  return useQuery({
    queryKey: ['skills'],
    queryFn: async () => {
      const { data, error } = await supabase.from('skills').select('*').order('sort_order');
      if (error) throw error;
      return data || [];
    },
    staleTime: 5 * 60 * 1000,
  });
};

export const useExperiences = () => {
  return useQuery({
    queryKey: ['experiences'],
    queryFn: async () => {
      const { data, error } = await supabase.from('experiences').select('*').order('sort_order');
      if (error) throw error;
      return data || [];
    },
    staleTime: 5 * 60 * 1000,
  });
};

export const useEducation = () => {
  return useQuery({
    queryKey: ['education'],
    queryFn: async () => {
      const { data, error } = await supabase.from('education').select('*').order('sort_order');
      if (error) throw error;
      return data || [];
    },
    staleTime: 5 * 60 * 1000,
  });
};

export const useCertifications = () => {
  return useQuery({
    queryKey: ['certifications'],
    queryFn: async () => {
      const { data, error } = await supabase.from('certifications').select('*').order('sort_order');
      if (error) throw error;
      return data || [];
    },
    staleTime: 5 * 60 * 1000,
  });
};

export const useProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const { data, error } = await supabase.from('projects').select('*').order('sort_order');
      if (error) throw error;
      return data || [];
    },
    staleTime: 5 * 60 * 1000,
  });
};

export const useGallery = () => {
  return useQuery({
    queryKey: ['gallery'],
    queryFn: async () => {
      const { data, error } = await supabase.from('gallery').select('*').order('sort_order');
      if (error) throw error;
      return data || [];
    },
    staleTime: 5 * 60 * 1000,
  });
};

export const useReferences = () => {
  return useQuery({
    queryKey: ['references'],
    queryFn: async () => {
      const { data, error } = await supabase.from('references_list').select('*').order('sort_order');
      if (error) throw error;
      return data || [];
    },
    staleTime: 5 * 60 * 1000,
  });
};

export const useContactMethods = () => {
  return useQuery({
    queryKey: ['contact-methods'],
    queryFn: async () => {
      const { data, error } = await supabase.from('contact_methods').select('*').order('sort_order');
      if (error) throw error;
      return data || [];
    },
    staleTime: 5 * 60 * 1000,
  });
};
