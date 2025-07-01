"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface AnalyticsData {
  _id: string;
  count: number;
}

export default function AdminPage() {
  const [data, setData] = useState<AnalyticsData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/analytics`);
        console.log("Analytics response:", res.data);

        if (Array.isArray(res.data)) {
          setData(res.data);
        } else if (Array.isArray(res.data?.data)) {
          setData(res.data.data); 
        } else {
          throw new Error("Invalid analytics response format");
        }
      } catch (error) {
        console.error("Failed to fetch analytics:", error);
        setError("Could not load analytics data.");
      }
    };

    fetchAnalytics();
  }, []);

  return (
    <div className="p-6">
      <h1 className="mb-6">Admin Analytics Dashboard</h1>

      {error && <p className="text-red">{error}</p>}

      {data.length === 0 && !error ? (
        <p className="text-gray-500">No analytics data available.</p>
      ) : (
        <div >
          <table className="min-w-full border border-black bg-white shadow-md rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Date</th>
                <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Event Count</th>
              </tr>
            </thead>
            <tbody>
              {data.map((entry, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b text-sm">{entry._id}</td>
                  <td className="px-4 py-2 border-b text-sm">{entry.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <br />
      <Link href="/" className="mt-5 px-4 py-2 bg-purple-600">
        Go to Home Page
      </Link>
    </div>
  );
}
