import { useToast } from "@/hooks/use-toast";
import { CompanyForm } from "@/components/company-form";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useLocation } from "wouter";
import type { InsertCompany } from "@shared/schema";

export default function NewCompany() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();

  const onSubmit = async (data: InsertCompany) => {
    try {
      await apiRequest("POST", "/api/companies", data);
      // Invalidate the companies query to refetch the list
      await queryClient.invalidateQueries({ queryKey: ["/api/companies"] });
      toast({
        title: "Success",
        description: "Company created successfully",
      });
      setLocation("/");
    } catch (error) {
      toast({
        title: "Error",
        description: (error as Error).message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
        Add New Company
      </h1>
      <CompanyForm onSubmit={onSubmit} />
    </div>
  );
}