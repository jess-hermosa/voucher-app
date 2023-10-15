import { Employee } from "@/common/backend-types";
import Input from "@/components/Shared/Input";
import { FC } from "react";
import { FormState, UseFormRegister } from "react-hook-form";

interface Props {
  name: keyof Employee;
  label: string;
  register: UseFormRegister<Employee>;
  formState: FormState<Employee>;
}

const InputForm: FC<Props> = ({ name, label, register, formState }) => {
  return <Input {...register(name)} name={name} label={label} />;
};

export default InputForm;
