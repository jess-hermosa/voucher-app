import { VoucherForm } from "@/common/types";
import Checkbox from "@/components/Shared/Checkbox";
import { FC } from "react";
import { FormState, UseFormRegister } from "react-hook-form";

interface Props {
  name: keyof VoucherForm;
  label: string;
  register: UseFormRegister<VoucherForm>;
  formState: FormState<VoucherForm>;
  onChange: () => void;
  description?: string;
}

const CheckboxForm: FC<Props> = ({
  name,
  label,
  register,
  description,
  onChange,
  formState,
}) => {
  return (
    <Checkbox
      {...register(name)}
      name={name}
      label={label}
      description={description}
      onChange={onChange}
    />
  );
};

export default CheckboxForm;
