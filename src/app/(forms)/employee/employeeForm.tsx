import { employeeUrl } from "@/common/apiUrl";
import { Employee } from "@/common/backend-types";
import SlideOver from "@/components/Shared/SlideOver";
import { fetchEmployees } from "@/server/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import InputForm from "./form/inputForm";

interface Props {
  selectedEmployee: Employee | null;
  clearForm: () => void;
}

const EmployeeForm: FC<Props> = ({ selectedEmployee, clearForm }) => {
  const queryClient = useQueryClient();
  const addEmployee = useMutation({
    mutationFn: (employee: Employee) => {
      return axios.post(employeeUrl, employee);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [fetchEmployees.key] });
    },
  });

  const updateEmployee = useMutation({
    mutationFn: (employee: Employee) => {
      return axios.put(`${employeeUrl}/${employee.id}`, employee);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [fetchEmployees.key] });
    },
  });

  const form = useForm<Employee>({
    values: {
      id: selectedEmployee?.id ?? "",
      name: selectedEmployee?.name ?? "",
      position: selectedEmployee?.position ?? "",
    },
  });

  const onSubmit: SubmitHandler<Employee> = async (data) => {
    if (selectedEmployee) {
      await updateEmployee.mutateAsync({
        id: selectedEmployee.id,
        position: data.position,
        name: data.name,
      });
    } else {
      await addEmployee.mutateAsync({
        id: null,
        position: data.position,
        name: data.name,
      });
    }
  };

  return (
    <SlideOver
      header="New employee"
      onSubmit={form.handleSubmit(onSubmit)}
      clearForm={clearForm}
      loading={addEmployee.isLoading || updateEmployee.isLoading}
      success={addEmployee.isSuccess || updateEmployee.isSuccess}
    >
      <InputForm label="Name" name="name" {...form} />
      <InputForm label="Position" name="position" {...form} />
    </SlideOver>
  );
};

export default EmployeeForm;
