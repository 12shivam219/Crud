import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Companies from "@/pages/companies";
import NewCompany from "@/pages/companies/new";
import EditCompany from "@/pages/companies/edit";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Companies} />
      <Route path="/companies/new" component={NewCompany} />
      <Route path="/companies/:id/edit" component={EditCompany} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
