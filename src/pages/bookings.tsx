import { useAuth } from "../hooks/useAuth";
import { Calendar, Clock, Wrench, ArrowRight } from "lucide-react";

export default function BookingsPage() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Bookings</h1>
        <p className="text-gray-600">
          Manage your car rental bookings and requests
        </p>
      </div>

      {/* Under Development Card */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-2xl p-8 text-center">
        <div className="mx-auto w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-6">
          <Wrench className="w-10 h-10 text-white" />
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Under Development
        </h2>

        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          We&#39;re working hard to bring you a comprehensive booking management
          system. This feature will be available soon!
        </p>

        {/* Coming Soon Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Booking History
            </h3>
            <p className="text-sm text-gray-600">
              View all your past and current bookings
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Request Status</h3>
            <p className="text-sm text-gray-600">
              Track your booking request status
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <ArrowRight className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Quick Actions</h3>
            <p className="text-sm text-gray-600">
              Cancel, modify, or extend bookings
            </p>
          </div>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl">
          Get Notified When Ready
        </button>
      </div>

      {/* Mock Stats for Context */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Pending Requests
              </p>
              <p className="text-2xl font-semibold text-gray-900">3</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Active Bookings
              </p>
              <p className="text-2xl font-semibold text-gray-900">2</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Calendar className="w-6 h-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Past Bookings</p>
              <p className="text-2xl font-semibold text-gray-900">15</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
