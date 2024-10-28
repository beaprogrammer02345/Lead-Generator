// utils/schema.ts
import { pgTable, varchar, text, timestamp, serial } from 'drizzle-orm/pg-core';

export const aiOutputTable = pgTable('aiOutput', {
  id: serial('id').primaryKey(),
  formData: text('formData').notNull(),  
  templateSlug: text('templateSlug').notNull(),
  aiResponse: text('aiResponse').notNull(),
  createdBy: varchar('createdBy').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
});
