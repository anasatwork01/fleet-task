export interface User {
  id: number;
  name: string;
  company_id: number;
  company_name: string;
  role: string;
}

export interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  image: string;
  rent_per_day: number;
  is_available: boolean;
}

export interface BookingRequest {
  car_id: number;
  from_date: string;
  to_date: string;
}
