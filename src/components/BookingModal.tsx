import { useState } from "react";
import { Car } from "../types";
import { X, DollarSign, Clock, MapPin, Car as CarIcon } from "lucide-react";

interface BookingModalProps {
  car: Car | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (dates: { from_date: string; to_date: string }) => void;
}

const BookingModal: React.FC<BookingModalProps> = ({
  car,
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen || !car) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (fromDate && toDate) {
      setIsLoading(true);

      // Simulate API call delay
      setTimeout(() => {
        onSubmit({ from_date: fromDate, to_date: toDate });
        setFromDate("");
        setToDate("");
        setIsLoading(false);
      }, 1000);
    }
  };

  const calculateDays = () => {
    if (fromDate && toDate) {
      const from = new Date(fromDate);
      const to = new Date(toDate);
      const diffTime = Math.abs(to.getTime() - from.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 ? diffDays : 1;
    }
    return 0;
  };

  const totalCost = calculateDays() * car.rent_per_day;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="relative p-6 pb-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-blue-100 rounded-xl">
              <CarIcon className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Book Your Car
              </h2>
              <p className="text-gray-500">
                Reserve {car.make} {car.model}
              </p>
            </div>
          </div>
        </div>

        {/* Car Info Card */}
        <div className="mx-6 mb-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
            <div className="flex items-center space-x-4">
              <img
                src={car.image}
                alt={`${car.make} ${car.model}`}
                className="w-20 h-16 object-cover rounded-lg shadow-sm"
              />
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900">
                  {car.make} {car.model}
                </h3>
                <div className="flex items-center space-x-4 mt-1">
                  <span className="text-sm text-gray-600">{car.year}</span>
                  <div className="flex items-center text-sm text-blue-600 font-semibold">
                    <DollarSign className="w-4 h-4 mr-1" />
                    <span>${car.rent_per_day}/day</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-6">
          {/* Date Selection */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Pick-up Date
              </label>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className={`w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  fromDate
                    ? "text-gray-900 bg-blue-50 border-blue-200"
                    : "text-gray-500"
                }`}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Return Date
              </label>
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                min={fromDate || new Date().toISOString().split("T")[0]}
                className={`w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  toDate
                    ? "text-gray-900 bg-blue-50 border-blue-200"
                    : "text-gray-500"
                }`}
                required
              />
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span>Pick-up: 9:00 AM</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>Main Office</span>
            </div>
          </div>

          {/* Cost Breakdown */}
          {totalCost > 0 && (
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>Rental duration</span>
                  <span>
                    {calculateDays()} {calculateDays() === 1 ? "day" : "days"}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>Rate per day</span>
                  <span>${car.rent_per_day}</span>
                </div>
                <hr className="border-green-200" />
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">
                    Total Cost
                  </span>
                  <span className="text-2xl font-bold text-green-600">
                    ${totalCost}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="flex-1 py-3 px-4 border-2 border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 font-semibold transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </>
              ) : (
                <span>Request Booking</span>
              )}
            </button>
          </div>
        </form>

        {/* Terms */}
        <div className="px-6 pb-6">
          <p className="text-xs text-gray-500 text-center">
            By proceeding, you agree to our terms and conditions. Booking
            requests are subject to approval.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
