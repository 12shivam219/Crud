CREATE TABLE "companies" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"founded_year" integer NOT NULL,
	"description" text NOT NULL,
	"website" text NOT NULL,
	"city" text NOT NULL,
	"country" text NOT NULL,
	"industry" text NOT NULL,
	"is_hiring" boolean NOT NULL,
	"employee_count" integer NOT NULL,
	"growth_indicators" text NOT NULL,
	"linkedin_url" text NOT NULL
);
