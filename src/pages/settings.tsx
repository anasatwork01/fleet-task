import { useAuth } from "../hooks/useAuth";
import {
  Settings as SettingsIcon,
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  Wrench,
} from "lucide-react";

export default function SettingsPage() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">
          Manage your account preferences and application settings
        </p>
      </div>

      {/* Under Development Card */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-100 border border-purple-200 rounded-2xl p-8 text-center mb-8">
        <div className="mx-auto w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mb-6">
          <Wrench className="w-10 h-10 text-white" />
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Settings Coming Soon
        </h2>

        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          We're building a comprehensive settings panel to give you full control
          over your account and preferences.
        </p>

        <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl">
          Stay Updated
        </button>
      </div>

      {/* Settings Categories Preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <User className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-gray-900">Profile Settings</h3>
              <p className="text-sm text-gray-500">Coming soon</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Update your personal information, contact details, and profile
            picture.
          </p>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Name</span>
              <span className="text-gray-900">{user.name}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Company</span>
              <span className="text-gray-900">{user.company_name}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Role</span>
              <span className="text-gray-900 capitalize">{user.role}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Bell className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-gray-900">Notifications</h3>
              <p className="text-sm text-gray-500">Coming soon</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Manage email notifications, booking alerts, and system updates.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Booking confirmations</li>
            <li>• Car availability alerts</li>
            <li>• Maintenance notifications</li>
            <li>• Weekly reports</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-red-600" />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-gray-900">Security</h3>
              <p className="text-sm text-gray-500">Coming soon</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Password management, two-factor authentication, and security logs.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Change password</li>
            <li>• Two-factor authentication</li>
            <li>• Active sessions</li>
            <li>• Login history</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Palette className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-gray-900">Appearance</h3>
              <p className="text-sm text-gray-500">Coming soon</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Customize the look and feel of your dashboard interface.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Dark/Light theme</li>
            <li>• Color schemes</li>
            <li>• Layout preferences</li>
            <li>• Font size options</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-gray-900">Preferences</h3>
              <p className="text-sm text-gray-500">Coming soon</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Language, timezone, currency, and regional settings.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Language: English</li>
            <li>• Timezone: UTC+5</li>
            <li>• Currency: USD</li>
            <li>• Date format: MM/DD/YYYY</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
              <SettingsIcon className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-gray-900">Advanced</h3>
              <p className="text-sm text-gray-500">Coming soon</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            API access, data export, integrations, and developer settings.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• API keys</li>
            <li>• Data export</li>
            <li>• Webhooks</li>
            <li>• Integration settings</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
