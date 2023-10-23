import { employeeUrl } from "@/common/apiUrl";
import { Employee } from "@/common/backend-types";
import { Suspense } from "react";
import EmployeeList from "./employeeList";

const getEmployees = async () => {
  const res = await fetch(employeeUrl);
  if (!res.ok) {
    throw new Error("Failed to fetch employees");
  }

  return res.json();
};

const Employee = async () => {
  const employees: Employee[] = await getEmployees();

  return (
    <Suspense fallback={<>loading page</>}>
      <EmployeeList employees={employees} />
    </Suspense>
  );
};

export default Employee;
