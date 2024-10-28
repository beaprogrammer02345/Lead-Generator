// utils/dbQueries.ts

import db from './db'; // Import your Drizzle database instance
import { aiOutputTable } from './schema'; // Import your table schema
import { desc } from 'drizzle-orm'; // Import the 'desc' utility

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
