import { Payee } from "@/common/backend-types";
import Input from "@/components/Shared/Input";
import { FC } from "react";
import { FormState, UseFormRegister } from "react-hook-form";

interface Props {
  name: keyof Payee;
  label: string;
  register: UseFormRegister<Payee>;
  formState: FormState<Payee>;
}

const inputForm: FC<Props> = ({ name, label, register, formState }) => {
  return <Input {...register(name)} name={name} label={label} />;
};

export default inputForm;
