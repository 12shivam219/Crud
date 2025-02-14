import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { CompanyForm } from "@/components/company-form";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useLocation, useParams } from "wouter";
import type { Company, InsertCompany } from "@shared/schema";

export default function EditCompany() {
  const { id } = useParams();
  const { toast } = useToast();
  const [, setLocation] = useLocation();

  const { data: company, isLoading } = useQuery<Company>({
    queryKey: [`/api/companies/${id}`],
  });

  const onSubmit = async (data: InsertCompany) => {
    try {
      await apiRequest("PUT", `/api/companies/${id}`, data);
      await queryClient.invalidateQueries({ queryKey: ["/api/companies"] });
      toast({
        title: "Success",
        description: "Company updated successfully",
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

  if (isLoading) return <div>Loading...</div>;
  if (!company) return <div>Company not found</div>;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
        Edit Company
      </h1>
      <CompanyForm onSubmit={onSubmit} defaultValues={company} />
    </div>
  );
}
