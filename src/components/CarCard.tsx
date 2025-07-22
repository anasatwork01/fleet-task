import { Car } from "../types";
import { Calendar, DollarSign } from "lucide-react";

interface CarCardProps {
  car: Car;
  onRequestBook: (car: Car) => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onRequestBook }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={car.image}
          alt={`${car.make} ${car.model}`}
          className="w-full h-48 object-cover"
        />
        <div
          className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${
            car.is_available
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {car.is_available ? "Available" : "Unavailable"}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {car.make} {car.model}
        </h3>
        <p className="text-gray-600 mb-4">Year: {car.year}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-700">
            <DollarSign className="w-4 h-4 mr-1" />
            <span className="font-semibold">${car.rent_per_day}</span>
            <span className="text-sm text-gray-500 ml-1">/day</span>
          </div>
        </div>

        <button
          onClick={() => onRequestBook(car)}
          disabled={!car.is_available}
          className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
            car.is_available
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          {car.is_available ? "Request to Book" : "Unavailable"}
        </button>
      </div>
    </div>
  );
};

export default CarCard;
