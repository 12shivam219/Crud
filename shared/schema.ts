import { pgTable, text, integer, boolean, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const companies = pgTable("companies", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  foundedYear: integer("founded_year").notNull(),
  description: text("description").notNull(),
  website: text("website").notNull(),
  city: text("city").notNull(),
  country: text("country").notNull(),
  industry: text("industry").notNull(),
  isHiring: boolean("is_hiring").notNull(),
  employeeCount: integer("employee_count").notNull(),
  growthIndicators: text("growth_indicators").notNull(),
  linkedinUrl: text("linkedin_url").notNull(),
});

export const insertCompanySchema = createInsertSchema(companies)
  .omit({ id: true })
  .extend({
    website: z.string().url("Must be a valid URL"),
    linkedinUrl: z.string().url("Must be a valid LinkedIn URL").regex(/linkedin\.com/, { message: "Must be a LinkedIn URL" }),
    foundedYear: z.number().min(1800).max(new Date().getFullYear()),
    employeeCount: z.number().min(1),
  });

export type InsertCompany = z.infer<typeof insertCompanySchema>;
export type Company = typeof companies.$inferSelect;