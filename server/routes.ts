import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertCompanySchema } from "@shared/schema";

export async function registerRoutes(app: Express) {
  app.get("/api/companies", async (_req, res) => {
    const companies = await storage.getCompanies();
    res.json(companies);
  });

  app.get("/api/companies/:id", async (req, res) => {
    const company = await storage.getCompany(Number(req.params.id));
    if (!company) return res.status(404).json({ message: "Company not found" });
    res.json(company);
  });

  app.post("/api/companies", async (req, res) => {
    const result = insertCompanySchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json(result.error);
    }
    const company = await storage.createCompany(result.data);
    res.status(201).json(company);
  });

  app.put("/api/companies/:id", async (req, res) => {
    const result = insertCompanySchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json(result.error);
    }
    const company = await storage.updateCompany(Number(req.params.id), result.data);
    if (!company) return res.status(404).json({ message: "Company not found" });
    res.json(company);
  });

  app.delete("/api/companies/:id", async (req, res) => {
    const success = await storage.deleteCompany(Number(req.params.id));
    if (!success) return res.status(404).json({ message: "Company not found" });
    res.status(204).end();
  });

  return createServer(app);
}
