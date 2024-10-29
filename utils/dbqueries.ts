// utils/dbQueries.ts

import db from './db'; // Import your Drizzle database instance
import { aiOutputTable, leadTable } from './schema'; // Import your table schema
import { desc } from 'drizzle-orm'; // Import the 'desc' utility

// Insert dummy lead
// Track the index of the current lead (using closure or session storage)
let currentLeadIndex = 0; // Initialize to track which lead to show next

const dummyLeads = [
  { name: 'Alice Smith', email: 'alice.smith@gmail.com', source: 'Google Ads', conversionRate: 10.5 },
  { name: 'Bob Johnson', email: 'bob.johnson@gmail.com', source: 'Facebook Ads', conversionRate: 8.0 },
  { name: 'Charlie Brown', email: 'charlie.brown@gmail.com', source: 'Twitter', conversionRate: 12.0 },
  { name: 'David Williams', email: 'david.williams@gmail.com', source: 'Reddit', conversionRate: 6.5 },
  { name: 'Eve Adams', email: 'eve.adams@gmail.com', source: 'Referral', conversionRate: 15.0 },
];

// Function to insert and show only one lead per tool interaction
export const insertLeadPerInteraction = async (templateSlug: string) => {
  try {
    // Select the next lead based on the current index
    const lead = dummyLeads[currentLeadIndex];

    await db.insert(leadTable).values({
      name: lead.name,
      email: lead.email,
      templateSlug, // Associate with the current tool used
      source: lead.source, // Source of the lead
      conversionRate: lead.conversionRate.toString(), // Store conversion rate as a percentage
    });

    console.log('Lead added for tool:', templateSlug, 'Lead:', lead);

    // Move to the next lead, wrap around if all leads are used
    currentLeadIndex = (currentLeadIndex + 1) % dummyLeads.length;
  } catch (error) {
    console.error('Error inserting lead:', error);
  }
};

// Fetch all leads
export const fetchLeads = async () => {
  try {
    const leads = await db.select().from(leadTable);
    return leads;
  } catch (error) {
    console.error('Error fetching leads:', error);
    return [];
  }
};

// Fetch history data from the database
export const fetchHistory = async () => {
  try {
    const historyData = await db
      .select()
      .from(aiOutputTable)
      .orderBy(desc(aiOutputTable.createdAt)); // Correctly order by 'createdAt' in descending order
    return historyData;
  } catch (error) {
    console.error('Error fetching history:', error);
    return []; // Return an empty array in case of error
  }
  
};
