// components/LeadSection.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { fetchLeads } from '@/utils/dbqueries';
import moment from 'moment'; // For formatting dates

interface Lead {
  id: number;
  name: string;
  email: string;
  templateSlug: string;
  createdAt: Date;
}

function LeadSection() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch leads on component mount
  useEffect(() => {
    const getLeads = async () => {
      const fetchedLeads = await fetchLeads();
      setLeads(fetchedLeads);
      setLoading(false);
    };
    getLeads();
  }, []);

  const formatTemplateSlug = (slug: string) => {
    return slug
      .replace(/-/g, ' ') // Replace hyphens with spaces
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize first letter of each word
      .join(' ');
  };
  const downloadCSV = () => {
    const csvContent = [
      ['Template', 'Name', 'Email', 'Date'], // CSV headers
      ...leads.map((lead) => [
        formatTemplateSlug(lead.templateSlug),
        lead.name,
        lead.email,
        moment(lead.createdAt).format('MMMM Do YYYY'),
      ]),
    ]
      .map((row) => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'leads.csv');
    link.click();
  };

  if (loading) return <div>Loading leads...</div>;

  if (leads.length === 0) return <div>No leads available.</div>;

  return (
    <div className="p-5 bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Leads</h2>
        <button
          className="bg-primary text-white font-semibold px-6 py-3 rounded-lg
                    shadow-lg hover:bg-primary-dark transition duration-300 ease-in-out"
          onClick={downloadCSV}
        >
          Download CSV
        </button>
      </div>

      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Template</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td className="border px-4 py-2">
                {formatTemplateSlug(lead.templateSlug)}
              </td>
              <td className="border px-4 py-2">{lead.name}</td>
              <td className="border px-4 py-2">{lead.email}</td>
              <td className="border px-4 py-2">
                {moment(lead.createdAt).format('MMMM Do YYYY')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeadSection;
