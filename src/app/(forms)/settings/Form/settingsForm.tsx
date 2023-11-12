import { Payee, Settings } from "@/common/backend-types";
import { FC } from "react";
import ComboboxForm from "./comboBoxForm";
import { Option } from "@/common/types";
import { useForm } from "react-hook-form";

interface Props {
  onEdit: boolean;
  setOnEdit: (isOpen: boolean) => void;
  payees: Map<string, Payee> | null;
  setting: Settings;
}

const SettingsForm: FC<Props> = ({ onEdit, setOnEdit, setting, payees }) => {
  const payeesOption = () => {
    let options: Option[] = [];
    payees?.forEach((p) => {
      options.push({ id: p.id || "", value: p.name });
    });

    return options;
  };

  const form = useForm<{
    defaultAccount: Option;
  }>();

  return (
    <>
      {onEdit ? (
        <form>
          <ComboboxForm
            name="defaultAccount"
            label="Payee"
            options={payeesOption()}
            {...form}
          />
        </form>
      ) : (
        <div className="text-gray-900">{setting.account?.code || ""}</div>
      )}
      <button
        type="button"
        className="font-semibold text-indigo-600 hover:text-indigo-500"
      >
        Update
      </button>
    </>
  );
};

export default SettingsForm;
