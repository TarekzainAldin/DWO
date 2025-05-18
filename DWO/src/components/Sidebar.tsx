
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, Users, ClipboardList, CircleDollarSign, 
  FileText, BookOpen, AlertCircle, Calendar, 
  LayoutGrid, BarChart3, BookOpen as BookOpenIcon,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

type NavItemProps = {
  to: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
};

const NavItem = ({ to, icon, label, active }: NavItemProps) => (
  <Link 
    to={to} 
    className={cn(
      "flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors",
      active 
        ? "bg-nonprofit-100 text-nonprofit-800" 
        : "text-gray-600 hover:bg-nonprofit-50 hover:text-nonprofit-700"
    )}
  >
    <div className="flex-shrink-0">{icon}</div>
    <span>{label}</span>
  </Link>
);

const Sidebar = () => {
  const location = useLocation();
  
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold text-nonprofit-800">
          <span className="text-purple-600">D W </span> O
        </h1>
      </div>
      
      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        <NavItem 
          to="/" 
          icon={<Home size={18} />} 
          label="Dashboard" 
          active={location.pathname === '/'}
        />
        
        <div className="pt-4 pb-2">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 mb-2">
            Governance
          </h2>
        </div>
        
        <NavItem 
          to="/board" 
          icon={<LayoutGrid size={18} />} 
          label="Board of Directors" 
          active={location.pathname.startsWith('/board')}
        />
        
        <NavItem 
          to="/committees" 
          icon={<ClipboardList size={18} />} 
          label="Committees" 
          active={location.pathname.startsWith('/committees')}
        />
        
        <NavItem 
          to="/meetings" 
          icon={<Calendar size={18} />} 
          label="Meetings" 
          active={location.pathname.startsWith('/meetings')}
        />
        
        <div className="pt-4 pb-2">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 mb-2">
            Operations
          </h2>
        </div>
        
        <NavItem 
          to="/users" 
          icon={<Users size={18} />} 
          label="Users & Roles" 
          active={location.pathname.startsWith('/users')}
        />
        
        <NavItem 
          to="/tickets" 
          icon={<BookOpenIcon size={18} />} 
          label="Ticketing System" 
          active={location.pathname.startsWith('/tickets')}
        />
        
        <NavItem 
          to="/financial" 
          icon={<CircleDollarSign size={18} />} 
          label="Financial Management" 
          active={location.pathname.startsWith('/financial')}
        />
        
        <NavItem 
          to="/documents" 
          icon={<FileText size={18} />} 
          label="Documents" 
          active={location.pathname.startsWith('/documents')}
        />
        
        <NavItem 
          to="/partners" 
          icon={<BookOpen size={18} />} 
          label="Partner Organizations" 
          active={location.pathname.startsWith('/partners')}
        />
        
        <div className="pt-4 pb-2">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 mb-2">
            Compliance
          </h2>
        </div>
        
        <NavItem 
          to="/ethics" 
          icon={<AlertCircle size={18} />} 
          label="Ethics & Legal" 
          active={location.pathname.startsWith('/ethics')}
        />
        
        <NavItem 
          to="/reports" 
          icon={<BarChart3 size={18} />} 
          label="Reports" 
          active={location.pathname.startsWith('/reports')}
        />
      </nav>
    </div>
  );
};

export default Sidebar;
