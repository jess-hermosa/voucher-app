import { VoucherForm } from "@/common/types";
import Input from "@/components/Shared/Input";
import { FC } from "react";
import { FormState, UseFormRegister } from "react-hook-form";

interface Props {
  name: keyof VoucherForm;
  label: string;
  register: UseFormRegister<VoucherForm>;
  formState: FormState<VoucherForm>;
  disabled?: boolean;
}

const InputForm: FC<Props> = ({
  name,
  label,
  register,
  formState,
  disabled,
}) => {
  return (
    <Input {...register(name)} name={name} label={label} disabled={disabled} />
  );
};

export default InputForm;
