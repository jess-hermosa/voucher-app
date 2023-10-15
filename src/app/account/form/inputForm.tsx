import { Account } from "@/common/backend-types";
import Input from "@/components/Shared/Input";
import { FC } from "react";
import { FormState, UseFormRegister } from "react-hook-form";

interface Props {
  name: keyof Account;
  label: string;
  register: UseFormRegister<Account>;
  formState: FormState<Account>;
}

const InputForm: FC<Props> = ({ name, label, register, formState }) => {
  return <Input {...register(name)} name={name} label={label} />;
};

export default InputForm;
