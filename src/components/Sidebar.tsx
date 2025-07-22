import { Car, Home, Calendar, Settings } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar: React.FC = () => {
  const router = useRouter();

  const menuItems = [
    { icon: Home, label: "Dashboard", href: "/" },
    { icon: Car, label: "Cars", href: "/cars" },
    { icon: Calendar, label: "Bookings", href: "/bookings" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  return (
    <aside className="w-64 bg-gray-900 min-h-screen">
      <div className="p-6">
        <div className="text-white text-xl font-bold">Navigation</div>
      </div>

      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = router.pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
