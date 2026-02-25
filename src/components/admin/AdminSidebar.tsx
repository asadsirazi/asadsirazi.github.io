import { NavLink } from 'react-router-dom';
import {
  Settings, User, Code, Briefcase, GraduationCap, Award,
  FolderOpen, Image, Users, Phone, LogOut, LayoutDashboard, BookOpen
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const navItems = [
  { to: '/admin', icon: LayoutDashboard, label: 'Dashboard', end: true },
  { to: '/admin/settings', icon: Settings, label: 'Site Settings' },
  { to: '/admin/about', icon: User, label: 'About' },
  { to: '/admin/skills', icon: Code, label: 'Skills' },
  { to: '/admin/experience', icon: Briefcase, label: 'Experience' },
  { to: '/admin/education', icon: GraduationCap, label: 'Education' },
  { to: '/admin/certifications', icon: Award, label: 'Certifications' },
  { to: '/admin/projects', icon: FolderOpen, label: 'Projects' },
  { to: '/admin/gallery', icon: Image, label: 'Gallery' },
  { to: '/admin/references', icon: BookOpen, label: 'References' },
  { to: '/admin/contact', icon: Phone, label: 'Contact Methods' },
];

export const AdminSidebar = () => {
  const { signOut } = useAuth();

  return (
    <aside className="w-64 min-h-screen bg-card border-r border-border flex flex-col">
      <div className="p-6 border-b border-border">
        <h1 className="text-lg font-bold text-primary">Admin Panel</h1>
        <p className="text-xs text-muted-foreground mt-1">Portfolio Management</p>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                isActive ? 'bg-primary/10 text-primary font-medium' : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`
            }
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="p-4 border-t border-border">
        <button
          onClick={signOut}
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-destructive hover:bg-destructive/10 w-full transition-colors"
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </button>
      </div>
    </aside>
  );
};
