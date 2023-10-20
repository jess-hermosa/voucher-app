import { Employee } from "@/common/backend-types";
import EmployeeList from "./employeeList";

const Employee = () => {
  const employees: Employee[] = [];

  return <EmployeeList employees={employees} />;
};

export default Employee;
