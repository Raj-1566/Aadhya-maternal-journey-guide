
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Heart, 
  Hospital, 
  Video, 
  Calendar, 
  FileText, 
  Menu, 
  X, 
  BabyIcon
} from 'lucide-react';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  
  const toggleSidebar = () => {
    setExpanded(!expanded);
  };
  
  const menuItems = [
    { name: 'Dashboard', icon: Home, path: '/' },
    { name: 'Health History', icon: Heart, path: '/health' },
    { name: 'Hospital Support', icon: Hospital, path: '/hospital' },
    { name: 'Learning Resources', icon: Video, path: '/resources' },
    { name: 'Appointments', icon: Calendar, path: '/appointments' },
    { name: 'Notes & Journal', icon: FileText, path: '/journal' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {!expanded ? null : (
        <div 
          className="fixed inset-0 bg-black/30 z-20 md:hidden" 
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`
          fixed md:sticky top-0 h-screen z-30 md:z-0
          bg-white border-r border-border transition-all duration-300
          ${expanded ? 'left-0 w-64' : '-left-full md:left-0 w-0 md:w-20'} 
        `}
      >
        <div className="h-full flex flex-col overflow-hidden">
          {/* Logo and toggle */}
          <div className="h-16 flex items-center px-4 border-b border-border">
            <div className={`flex items-center ${expanded ? '' : 'md:justify-center'}`}>
              <BabyIcon className="h-8 w-8 text-aadhya-purple" />
              {expanded && (
                <h1 className="ml-2 text-xl font-display text-aadhya-purple">Aadhya</h1>
              )}
            </div>
            <button 
              className="ml-auto md:hidden" 
              onClick={toggleSidebar}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          {/* Toggle button for desktop */}
          <button 
            className="hidden md:flex items-center justify-center h-12 text-muted-foreground hover:text-foreground"
            onClick={toggleSidebar}
          >
            <Menu className="h-6 w-6" />
          </button>
          
          {/* Navigation items */}
          <nav className="flex-1 py-4 overflow-y-auto">
            <ul className="space-y-1 px-2">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => `
                      flex items-center px-4 py-3 rounded-lg transition-colors
                      ${isActive 
                        ? 'bg-aadhya-purple/10 text-aadhya-purple' 
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      }
                    `}
                  >
                    <item.icon className={`h-5 w-5 ${expanded ? 'mr-3' : 'mx-auto'}`} />
                    {expanded && <span>{item.name}</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Footer */}
          <div className="p-4 border-t border-border">
            {expanded ? (
              <div className="text-xs text-muted-foreground">
                <p>Pregnancy: Week 24</p>
                <p>Next Appointment: May 15</p>
              </div>
            ) : (
              <div className="text-center">
                <span className="text-xs text-muted-foreground">W24</span>
              </div>
            )}
          </div>
        </div>
      </aside>
      
      {/* Mobile toggle button */}
      <button 
        className="fixed bottom-4 right-4 md:hidden p-3 bg-aadhya-purple text-white rounded-full shadow-lg z-10"
        onClick={toggleSidebar}
      >
        <Menu className="h-6 w-6" />
      </button>
    </>
  );
};

export default Sidebar;
