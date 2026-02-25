import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/admin/Login";
import AdminDashboard, { AdminHome } from "./pages/admin/Dashboard";
import { lazy, Suspense } from "react";

const AdminSettings = lazy(() => import("./pages/admin/Settings"));
const AdminAbout = lazy(() => import("./pages/admin/About"));
const AdminSkills = lazy(() => import("./pages/admin/Skills"));
const AdminExperience = lazy(() => import("./pages/admin/Experience"));
const AdminEducation = lazy(() => import("./pages/admin/Education"));
const AdminCertifications = lazy(() => import("./pages/admin/Certifications"));
const AdminProjects = lazy(() => import("./pages/admin/Projects"));
const AdminGallery = lazy(() => import("./pages/admin/Gallery"));
const AdminReferences = lazy(() => import("./pages/admin/References"));
const AdminContactMethods = lazy(() => import("./pages/admin/ContactMethods"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminDashboard />}>
                <Route index element={<AdminHome />} />
                <Route path="settings" element={<AdminSettings />} />
                <Route path="about" element={<AdminAbout />} />
                <Route path="skills" element={<AdminSkills />} />
                <Route path="experience" element={<AdminExperience />} />
                <Route path="education" element={<AdminEducation />} />
                <Route path="certifications" element={<AdminCertifications />} />
                <Route path="projects" element={<AdminProjects />} />
                <Route path="gallery" element={<AdminGallery />} />
                <Route path="references" element={<AdminReferences />} />
                <Route path="contact" element={<AdminContactMethods />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
