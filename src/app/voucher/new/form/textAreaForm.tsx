import { Voucher } from "@/common/backend-types";
import TextArea from "@/components/Shared/TextArea";
import { FC } from "react";
import { FormState, UseFormRegister } from "react-hook-form";

interface Props {
  name: keyof Voucher;
  label: string;
  register: UseFormRegister<Voucher>;
  formState: FormState<Voucher>;
}

const TextAreaForm: FC<Props> = ({ name, label, register, formState }) => {
  return <TextArea {...register(name)} name={name} label={label} />;
};

export default TextAreaForm;
