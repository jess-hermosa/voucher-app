"use client";

import { Employee } from "@/common/backend-types";
import EmptyList from "@/components/EmptyList";
import SectionHeader from "@/components/SectionHeader";
import { fetchEmployees } from "@/server/api";
import { uiActions } from "@/store/ui";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useDispatch } from "react-redux";
import EmployeeForm from "./employeeForm";

const EmployeeList = () => {
  const { data: employees } = useQuery({
    queryKey: [fetchEmployees.key],
    queryFn: fetchEmployees.get,
  });

  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );
  const dispatch = useDispatch();

  return (
    <>
      <SectionHeader header={"Employee"} hasForm={employees?.length > 0} />
      {employees?.length > 0 ? (
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {employees.map((employee: Employee) => (
                      <tr key={employee.name}>
                        <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                          <div className="flex items-center">
                            <div className="h-11 w-11 flex-shrink-0">
                              <UserCircleIcon className="h-11 w-11 rounded-full text-gray-400" />
                            </div>
                            <div className="ml-4">
                              <div className="font-medium text-gray-900">
                                {employee.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                          <div className="text-gray-900">
                            {employee.position}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                          Member
                        </td>
                        <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                          <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900"
                            onClick={() => {
                              setSelectedEmployee(employee);
                              dispatch(uiActions.toggleSidebar("slideover"));
                            }}
                          >
                            Edit
                            <span className="sr-only">, {employee.name}</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyList listname="employee" />
      )}

      <EmployeeForm
        selectedEmployee={selectedEmployee}
        clearForm={() => setSelectedEmployee(null)}
      />
    </>
  );
};

export default EmployeeList;
