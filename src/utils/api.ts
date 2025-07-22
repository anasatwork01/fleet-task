import { Car } from "../types";

export const fetchCompanyCars = async (companyId: number): Promise<Car[]> => {
  const response = await fetch(`/api/companies/${companyId}/cars`);
  if (!response.ok) {
    throw new Error("Failed to fetch cars");
  }
  return response.json();
};
