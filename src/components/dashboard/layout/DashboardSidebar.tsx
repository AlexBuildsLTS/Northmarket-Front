import { NavLink } from 'react-router-dom';
import {
  Home,
  BarChart2,
  Users,
  Megaphone,
  Settings,
  Info,
  MessageSquare,
} from 'lucide-react';

const DashboardSidebar = ({ user }) => {
  const navItems = [
    { icon: Home, label: 'Home', path: '/dashboard' },
    { icon: BarChart2, label: 'Analytics', path: '/dashboard/analytics' },
    { icon: Users, label: 'Clients', path: '/dashboard/clients' },
    ...(user?.isSeller ? [{ icon: Megaphone, label: 'Advertisement', path: '/dashboard/ads' }] : []),
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
    { icon: Info, label: 'About', path: '/dashboard/about' },
    { icon: MessageSquare, label: 'Feedback', path: '/dashboard/feedback' },
  ];

  return (
    <div className="w-64 bg-navy-800 border-r border-navy-700">
      <nav>
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded-lg ${
                isActive ? 'text-emerald-500 bg-navy-700' : 'text-gray-400 hover:bg-navy-700 hover:text-white'
              }`
            }
          >
            <item.icon className="mr-3" />
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default DashboardSidebar;
