// components/HistorySection.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { fetchHistory } from '@/utils/dbqueries'; // Import the query function
import moment from 'moment'; // For formatting dates

interface HistoryItem {
  id: number;
  formData: string;
  templateSlug: string;
  aiResponse: string;
  createdBy: string;
  createdAt: Date;
}

function HistorySection() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch history on component mount
  useEffect(() => {
    const getHistory = async () => {
      const data = await fetchHistory();
      setHistory(data);
      setLoading(false);
    };
    getHistory();
  }, []);

  const handleCopy = (response: string) => {
    navigator.clipboard.writeText(response);
    alert('AI Response copied to clipboard!'); // Notify the user
  };

  const formatTemplateSlug = (slug: string) => {
    return slug
      .replace(/-/g, ' ') // Replace hyphens with spaces
      .split(' ') // Split the string into words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize first letter, lowercase the rest
      .join(' '); // Join the words back together
  };

  if (loading) return <div>Loading history...</div>;

  if (history.length === 0) {
    return <div>No history available.</div>;
  }

  return (
    <div className="p-5 bg-white"> {/* Set background to white */}
      <h2 className="text-xl font-bold mb-4">History</h2>
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200"> {/* Slight tint for the header */}
            <th className="border px-4 py-2">Template</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">AI Response</th>
            <th className="border px-4 py-2">Actions</th> {/* New column for actions */}
          </tr>
        </thead>
        <tbody>
          {history.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{formatTemplateSlug(item.templateSlug)}</td> {/* Format the template slug */}
              <td className="border px-4 py-2">
                {moment(item.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
              </td>
              <td className="border px-4 py-2">
                {item.aiResponse.length > 50
                  ? item.aiResponse.slice(0, 50) + '...' // Truncate response
                  : item.aiResponse}
              </td>
              <td className="border px-4 py-2">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() => handleCopy(item.aiResponse)} // Copy button
                >
                  Copy
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HistorySection;
