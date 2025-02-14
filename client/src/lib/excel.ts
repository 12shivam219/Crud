import type { Company } from "@shared/schema";

export async function downloadExcel(companies: Company[]) {
  // Dynamically import XLSX to avoid bundling it on initial load
  const XLSX = await import("xlsx");
  
  const worksheet = XLSX.utils.json_to_sheet(
    companies.map((company) => ({
      "Company Name": company.name,
      "Founded Year": company.foundedYear,
      "Description": company.description,
      "Website": company.website,
      "City": company.city,
      "Country": company.country,
      "Industry": company.industry,
      "Hiring Status": company.isHiring ? "Hiring" : "Not Hiring",
      "Employee Count": company.employeeCount,
      "Growth Indicators": company.growthIndicators,
      "LinkedIn URL": company.linkedinUrl,
    }))
  );

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Companies");

  XLSX.writeFile(workbook, "companies.xlsx");
}
