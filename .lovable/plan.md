

# Portfolio Website Enhancement & Admin Panel

## Overview
This plan covers three major areas: design improvements, database setup with all website content, and a full admin panel for managing everything dynamically.

---

## Part 1: Design Improvements

### Text Alignment
- All paragraph (`<p>`) elements across every section (About, Experience, Education, Projects, Certifications, References, Contact, Hero) will get `text-justify` alignment
- This applies to all language versions (English, Bengali, Arabic)

### Visual Enhancements
- Improved section spacing and typography
- Better card hover effects with subtle scale transforms
- Enhanced gradient text effects on headings
- Smoother transitions between sections
- Better mobile responsiveness with refined padding

---

## Part 2: Database Structure (Supabase)

### Tables to Create

1. **`site_settings`** - General site settings (name, title, description, profile image URL, CV URLs, location, Google Maps embed, social links)

2. **`about_content`** - About section content (summary texts, quick facts in 3 languages)

3. **`skills`** - Skill categories with icon name, title (en/bn/ar), and skills list

4. **`experiences`** - Work experience entries (title, company, location, period, responsibilities - all trilingual)

5. **`education`** - Education entries (degree, institution, year, grade - all trilingual)

6. **`certifications`** - Certification entries (title, institute, year, grade, skills - all trilingual)

7. **`projects`** - Project entries (title, description, tags, link - all trilingual)

8. **`gallery`** - Gallery images (image URL, alt text, sort order)

9. **`references_list`** - Reference entries (name, position, organization, phone, email - all trilingual)

10. **`contact_methods`** - Contact methods (icon, label, value, link, color, sort order)

All tables will have:
- `id` (UUID primary key)
- `sort_order` (integer for ordering)
- `created_at`, `updated_at` timestamps
- Trilingual fields: `title_en`, `title_bn`, `title_ar` pattern

### Data Auto-Insert
All current hardcoded data from the components will be inserted into the database automatically using SQL insert statements.

### RLS Policies
- Public read access for all tables (portfolio is public)
- Write access only for authenticated admin user

---

## Part 3: Authentication

### Admin Login
- Supabase Auth with email/password
- Login page at `/admin/login`
- A user account will be created - credentials will be provided to you after setup
- No user profiles table needed (single admin user)

---

## Part 4: Admin Panel

### Route: `/admin`
Protected route requiring authentication.

### Admin Dashboard Layout
- Sidebar navigation with links to each content section
- Clean, functional UI using existing shadcn/ui components

### Admin Pages (CRUD for each section):

1. **Site Settings** (`/admin/settings`)
   - Edit name, title, subtitle, description (en/bn/ar)
   - Profile image URL field
   - CV file URLs (English, Arabic)
   - Location text, Google Maps embed URL
   - Social media links (WhatsApp, Telegram, Facebook, etc.)

2. **About** (`/admin/about`)
   - Edit professional summary (en/bn/ar)
   - Manage quick facts

3. **Skills** (`/admin/skills`)
   - Add/edit/delete/reorder skill categories
   - Each category: icon selector, title (en/bn/ar), skills list

4. **Experience** (`/admin/experience`)
   - Add/edit/delete/reorder work experiences
   - Fields: title, company, location, period, responsibilities (all trilingual)

5. **Education** (`/admin/education`)
   - Add/edit/delete/reorder education entries

6. **Certifications** (`/admin/certifications`)
   - Add/edit/delete/reorder certifications

7. **Projects** (`/admin/projects`)
   - Add/edit/delete/reorder projects
   - Image URL field for project thumbnails

8. **Gallery** (`/admin/gallery`)
   - Add/edit/delete/reorder gallery images
   - Image URL input field

9. **References** (`/admin/references`)
   - Add/edit/delete reference contacts

10. **Contact Methods** (`/admin/contact`)
    - Add/edit/delete/reorder contact methods

---

## Part 5: Frontend Integration

### Dynamic Data Loading
- All section components (Hero, About, Skills, etc.) will be refactored to fetch data from Supabase instead of using hardcoded values
- React Query will be used for data fetching and caching
- Loading skeletons while data loads
- Fallback to empty states if no data

### New Files to Create
- `src/lib/supabase.ts` - Supabase client
- `src/pages/admin/Login.tsx` - Admin login page
- `src/pages/admin/Dashboard.tsx` - Admin layout with sidebar
- `src/pages/admin/Settings.tsx` - Site settings editor
- `src/pages/admin/Skills.tsx` - Skills manager
- `src/pages/admin/Experience.tsx` - Experience manager
- `src/pages/admin/Education.tsx` - Education manager
- `src/pages/admin/Certifications.tsx` - Certifications manager
- `src/pages/admin/Projects.tsx` - Projects manager
- `src/pages/admin/Gallery.tsx` - Gallery manager
- `src/pages/admin/References.tsx` - References manager
- `src/pages/admin/ContactMethods.tsx` - Contact methods manager
- `src/pages/admin/About.tsx` - About content manager
- `src/hooks/usePortfolioData.ts` - Custom hooks for data fetching
- `src/components/admin/AdminSidebar.tsx` - Admin sidebar navigation
- `src/components/admin/TrilingualInput.tsx` - Reusable trilingual text input component

### Modified Files
- All section components updated to use dynamic data
- `src/App.tsx` - Add admin routes
- `src/index.css` - Add `text-justify` and design improvements

---

## Technical Notes

- **Database migrations**: Multiple SQL migrations for table creation, RLS policies, and data seeding
- **Authentication**: Supabase email auth, admin route protection via `useEffect` + redirect
- **Drag-and-drop reordering**: Sort order field in all list tables, up/down buttons in admin
- **Image handling**: URL-based (user provides image URLs, no file upload needed)
- **Trilingual input**: A reusable component with tabs for EN/BN/AR input fields
- **Admin URL**: `https://asadsirazi.lovable.app/admin/login`

