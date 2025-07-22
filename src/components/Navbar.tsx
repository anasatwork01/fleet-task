import { User, LogOut, Bell } from "lucide-react";
import { User as UserType } from "../types";

interface NavbarProps {
  user: UserType | null;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-gray-900">QuickWheels</h1>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
            <Bell className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-3 border-l border-gray-200 pl-4">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{user?.name}</p>
              <p className="text-xs text-gray-500">{user?.company_name}</p>
            </div>
          </div>

          <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
