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
  onChange?: () => void;
}

const ComboboxForm: FC<Props> = ({
  name,
  label,
  control,
  formState,
  options,
  disabled,
  onChange,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={null}
      render={({ field }) => (
        <ComboboxSelect
          selectedOption={field.value}
          onChange={(selected) => {
            field.onChange(selected);
            if (onChange) onChange();
          }}
          label={label}
          options={options}
        />
      )}
    />
  );
};

export default ComboboxForm;
