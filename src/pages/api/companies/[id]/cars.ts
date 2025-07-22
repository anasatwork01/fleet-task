import { NextApiRequest, NextApiResponse } from "next";
import mockData from "../../../../data/mockData.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const companyId = id as string;
  const company =
    mockData.companies[companyId as keyof typeof mockData.companies];

  if (!company) {
    return res.status(404).json({ message: "Company not found" });
  }

  res.status(200).json(company.cars);
}
