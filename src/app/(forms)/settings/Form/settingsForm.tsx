import { Payee, Settings } from "@/common/backend-types";
import { FC, useState } from "react";
import ComboboxForm from "./comboBoxForm";
import { Option } from "@/common/types";
import { useForm } from "react-hook-form";

interface Props {
  payees: Map<string, Payee> | null;
  setting: Settings;
}

const SettingsForm: FC<Props> = ({ setting, payees }) => {
  const [onEdit, setOnEdit] = useState(false);

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
        <form className="sm:flex items-center">
          <ComboboxForm
            name="defaultAccount"
            label=""
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
        onClick={() => setOnEdit(!onEdit)}
      >
        {onEdit ? "Update" : "Edit"}
      </button>
    </>
  );
};

export default SettingsForm;
