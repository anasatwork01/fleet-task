import { NextApiRequest, NextApiResponse } from "next";
import mockData from "../../data/mockData.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Simulate authentication - in real app, verify JWT/session
  res.status(200).json(mockData.user);
}
