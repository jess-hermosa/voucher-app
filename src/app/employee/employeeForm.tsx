import { Employee } from "@/common/backend-types";
import SlideOver from "@/components/Shared/SlideOver";
import { SubmitHandler, useForm } from "react-hook-form";
import InputForm from "./form/inputForm";

const EmployeeForm = () => {
  const form = useForm<Employee>();
  const onSubmit: SubmitHandler<Employee> = (data) => {
    console.log("name: ", data.name);
    console.log("code: ", data.position);
  };

  return (
    <SlideOver header="New employee" onSubmit={form.handleSubmit(onSubmit)}>
      <InputForm label="Name" name="name" {...form} />
      <InputForm label="Position" name="position" {...form} />
    </SlideOver>
  );
};

export default EmployeeForm;
