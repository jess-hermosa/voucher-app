import { Employee } from "@/common/backend-types";
import SlideOver from "@/components/Shared/SlideOver";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import InputForm from "./form/inputForm";

interface Props {
  selectedEmployee: Employee | null;
  clearForm: () => void;
}

const EmployeeForm: FC<Props> = ({ selectedEmployee, clearForm }) => {
  const form = useForm<Employee>({
    values: {
      id: selectedEmployee?.id ?? "",
      name: selectedEmployee?.name ?? "",
      position: selectedEmployee?.position ?? "",
    },
  });

  const onSubmit: SubmitHandler<Employee> = (data) => {
    if (selectedEmployee) {
      console.log("edited name: ", data.name);
    } else {
      console.log("name: ", data.name);
      console.log("position: ", data.position);
    }
  };

  return (
    <SlideOver
      header="New employee"
      onSubmit={form.handleSubmit(onSubmit)}
      clearForm={clearForm}
    >
      <InputForm label="Name" name="name" {...form} />
      <InputForm label="Position" name="position" {...form} />
    </SlideOver>
  );
};

export default EmployeeForm;
