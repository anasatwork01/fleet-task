import { useState, useEffect } from "react";
import { Car } from "../types";
import { useAuth } from "../hooks/useAuth";
import { fetchCompanyCars } from "../utils/api";
import CarCard from "../components/CarCard";
import BookingModal from "../components/BookingModal";

export default function CarsPage() {
  const { user } = useAuth();
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const loadCars = async () => {
      if (!user) return;

      try {
        const carsData = await fetchCompanyCars(user.company_id);
        setCars(carsData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load cars");
      } finally {
        setLoading(false);
      }
    };

    loadCars();
  }, [user]);

  const handleRequestBook = (car: Car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const handleBookingSubmit = (dates: {
    from_date: string;
    to_date: string;
  }) => {
    console.log("Booking request:", { car_id: selectedCar?.id, ...dates });
    setIsModalOpen(false);
    setSelectedCar(null);

    // Show toast notification
    setToast("Request Sent!");
    setTimeout(() => setToast(null), 3000);
  };

  if (!user) return null;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-md p-4">
        <p className="text-red-600">Error: {error}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Available Cars
        </h1>
        <p className="text-gray-600">
          Browse and request cars from {user.company_name}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} onRequestBook={handleRequestBook} />
        ))}
      </div>

      <BookingModal
        car={selectedCar}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedCar(null);
        }}
        onSubmit={handleBookingSubmit}
      />

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          {toast}
        </div>
      )}
    </div>
  );
}
