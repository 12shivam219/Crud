import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CompaniesTable } from "@/components/companies-table";
import { PlusCircle } from "lucide-react";
import type { Company } from "@shared/schema";

export default function Companies() {
  const { data: companies, isLoading } = useQuery<Company[]>({
    queryKey: ["/api/companies"],
  });

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
          Companies Directory
        </h1>
        <Link href="/companies/new">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Company
          </Button>
        </Link>
      </div>

      <CompaniesTable companies={companies || []} isLoading={isLoading} />
    </div>
  );
}
