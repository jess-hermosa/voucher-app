import { employeeUrl } from "@/common/apiUrl";
import { Employee } from "@/common/backend-types";
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

  return <EmployeeList employees={employees} />;
};

export default Employee;
