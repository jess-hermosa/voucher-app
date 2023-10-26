import { Employee } from "@/common/backend-types";
import { Option, VoucherForm } from "@/common/types";
import { FC } from "react";
import { UseFormReturn } from "react-hook-form";
import ComboboxForm from "../form/comboBoxForm";

interface Props {
  form: UseFormReturn<VoucherForm, any, undefined>;
  employees: Map<string, Employee>;
}

const SignatoriesSection: FC<Props> = ({ form, employees }) => {
  const employeesOption = () => {
    let options: Option[] = [];
    employees.forEach((p) => {
      options.push({ id: p.id || "", value: p.name });
    });

    return options;
  };

  return (
    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Signatories
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-2">
          <ComboboxForm
            name="certifiedby"
            label="Certified by"
            options={employeesOption()}
            {...form}
          />
        </div>
        <div className="sm:col-span-2">
          <ComboboxForm
            name="signatory1"
            label="Accounting head"
            options={employeesOption()}
            {...form}
          />
        </div>

        <div className="sm:col-span-2">
          <ComboboxForm
            name="signatory2"
            label="PARPO"
            options={employeesOption()}
            {...form}
          />
        </div>
      </div>
    </div>
  );
};

export default SignatoriesSection;
