import { VoucherForm } from "@/common/types";
import TextArea from "@/components/Shared/TextArea";
import { FC } from "react";
import { FormState, UseFormRegister } from "react-hook-form";

interface Props {
  name: keyof VoucherForm;
  label: string;
  register: UseFormRegister<VoucherForm>;
  formState: FormState<VoucherForm>;
}

const TextAreaForm: FC<Props> = ({ name, label, register, formState }) => {
  return <TextArea {...register(name)} name={name} label={label} />;
};

export default TextAreaForm;
