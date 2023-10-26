import { Suspense } from "react";
import EmployeeList from "@/app/(forms)/employee/employeeList";

const EmployeePage = async () => {
  return (
    <Suspense fallback={<>loading page</>}>
      <EmployeeList />
    </Suspense>
  );
};

export default EmployeePage;
