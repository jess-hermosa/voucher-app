import { VoucherForm } from "@/common/types";
import Input from "@/components/Shared/Input";
import { FC } from "react";
import { FormState, UseFormRegister } from "react-hook-form";

interface Props {
  name: keyof VoucherForm;
  label: string;
  register: UseFormRegister<VoucherForm>;
  formState: FormState<VoucherForm>;
}

const InputForm: FC<Props> = ({ name, label, register, formState }) => {
  return <Input {...register(name)} name={name} label={label} />;
};

export default InputForm;
