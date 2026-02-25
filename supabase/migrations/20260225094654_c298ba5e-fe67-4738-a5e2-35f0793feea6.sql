
-- Drop all existing policies and recreate as PERMISSIVE
-- site_settings
DROP POLICY IF EXISTS "Public read site_settings" ON public.site_settings;
DROP POLICY IF EXISTS "Admin write site_settings" ON public.site_settings;
CREATE POLICY "Public read site_settings" ON public.site_settings FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Admin write site_settings" ON public.site_settings FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- about_content
DROP POLICY IF EXISTS "Public read about" ON public.about_content;
DROP POLICY IF EXISTS "Admin write about" ON public.about_content;
CREATE POLICY "Public read about" ON public.about_content FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Admin write about" ON public.about_content FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- skills
DROP POLICY IF EXISTS "Public read skills" ON public.skills;
DROP POLICY IF EXISTS "Admin write skills" ON public.skills;
CREATE POLICY "Public read skills" ON public.skills FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Admin write skills" ON public.skills FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- experiences
DROP POLICY IF EXISTS "Public read experiences" ON public.experiences;
DROP POLICY IF EXISTS "Admin write experiences" ON public.experiences;
CREATE POLICY "Public read experiences" ON public.experiences FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Admin write experiences" ON public.experiences FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- education
DROP POLICY IF EXISTS "Public read education" ON public.education;
DROP POLICY IF EXISTS "Admin write education" ON public.education;
CREATE POLICY "Public read education" ON public.education FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Admin write education" ON public.education FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- certifications
DROP POLICY IF EXISTS "Public read certifications" ON public.certifications;
DROP POLICY IF EXISTS "Admin write certifications" ON public.certifications;
CREATE POLICY "Public read certifications" ON public.certifications FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Admin write certifications" ON public.certifications FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- projects
DROP POLICY IF EXISTS "Public read projects" ON public.projects;
DROP POLICY IF EXISTS "Admin write projects" ON public.projects;
CREATE POLICY "Public read projects" ON public.projects FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Admin write projects" ON public.projects FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- gallery
DROP POLICY IF EXISTS "Public read gallery" ON public.gallery;
DROP POLICY IF EXISTS "Admin write gallery" ON public.gallery;
CREATE POLICY "Public read gallery" ON public.gallery FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Admin write gallery" ON public.gallery FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- references_list
DROP POLICY IF EXISTS "Public read references" ON public.references_list;
DROP POLICY IF EXISTS "Admin write references" ON public.references_list;
CREATE POLICY "Public read references" ON public.references_list FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Admin write references" ON public.references_list FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- contact_methods
DROP POLICY IF EXISTS "Public read contact_methods" ON public.contact_methods;
DROP POLICY IF EXISTS "Admin write contact_methods" ON public.contact_methods;
CREATE POLICY "Public read contact_methods" ON public.contact_methods FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Admin write contact_methods" ON public.contact_methods FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- user_roles
DROP POLICY IF EXISTS "Users can view own roles" ON public.user_roles;
CREATE POLICY "Users can view own roles" ON public.user_roles FOR SELECT TO authenticated USING (auth.uid() = user_id);
