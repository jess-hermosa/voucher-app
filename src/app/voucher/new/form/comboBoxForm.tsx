import ComboboxSelect from "@/components/Shared/ComboboxSelect";
import { FC } from "react";
import { Control, Controller, FormState } from "react-hook-form";
import { Option } from "@/common/types";

interface Props {
  name: string;
  label: string;
  control: Control<any>;
  formState: FormState<any>;
  options: Option[];
  required?: boolean;
  disabled?: boolean;
}

const ComboboxForm: FC<Props> = ({
  name,
  label,
  control,
  formState,
  options,
  disabled,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={null}
      render={({ field }) => {
        return (
          <ComboboxSelect
            selectedOption={field.value}
            onChange={field.onChange}
            label={label}
            options={options}
          />
        );
      }}
    />
  );
};

export default ComboboxForm;
