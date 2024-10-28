// utils/dbQueries.ts

import db from './db'; // Import your Drizzle database instance
import { aiOutputTable , leadTable } from './schema'; // Import your table schema
import { desc } from 'drizzle-orm'; // Import the 'desc' utility

//insert dummy lead 
// Track the index of the current lead (using closure or session storage)
let currentLeadIndex = 0; // Initialize to track which lead to show next

const dummyLeads = [
  { name: 'Alice Smith', email: 'alice@example.com' },
  { name: 'Bob Johnson', email: 'bob@example.com' },
  { name: 'Charlie Brown', email: 'charlie@example.com' },
  { name: 'David Williams', email: 'david@example.com' },
  { name: 'Eve Adams', email: 'eve@example.com' },
];


// Insert a dummy lead
// Function to insert and show only one lead per tool interaction
export const insertLeadPerInteraction = async (templateSlug: string) => {
  try {
    // Select the next lead based on the current index
    const lead = dummyLeads[currentLeadIndex];

    await db.insert(leadTable).values({
      ...lead,
      templateSlug, // Associate with the current tool used
    });

    console.log('Lead added for tool:', templateSlug, 'Lead:', lead);

    // Move to the next lead, wrap around if all leads are used
    currentLeadIndex = (currentLeadIndex + 1) % dummyLeads.length;
  } catch (error) {
    console.error('Error inserting lead:', error);
  }
};

//fetch the dummy lead 
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
