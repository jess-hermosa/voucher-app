import { fetchEmployees } from "@/server/api";
import { dehydrate, Hydrate, QueryClient } from "@tanstack/react-query";
import { Suspense } from "react";
import EmployeeList from "./employeeList";

const EmployeePage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [fetchEmployees.key],
    queryFn: fetchEmployees.get,
  });

  return (
    <Hydrate state={dehydrate(queryClient)}>
      <Suspense fallback={<>loading page</>}>
        <EmployeeList />
      </Suspense>
    </Hydrate>
  );
};

export default EmployeePage;
