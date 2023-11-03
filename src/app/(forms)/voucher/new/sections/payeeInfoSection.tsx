import { Payee, Voucher } from "@/common/backend-types";
import { Option, VoucherForm } from "@/common/types";
import {
  modeOfPaymentOptions,
  responsibilityCenterOptions,
  taxTypeOptions,
} from "@/common/constant-fields";
import { FC, useEffect, useState } from "react";
import CheckboxForm from "../form/checkBoxForm";
import ComboboxForm from "../form/comboBoxForm";
import InputForm from "../form/inputForm";
import SelectForm from "../form/selectForm";
import TextAreaForm from "../form/textAreaForm";
import { UseFormReturn } from "react-hook-form";

interface Props {
  form: UseFormReturn<VoucherForm, any, undefined>;
  voucher: Voucher;
  payees: Map<string, Payee>;
}

const PayeeInfoSection: FC<Props> = ({ form, voucher, payees }) => {
  const [address, setAddress] = useState(
    payees.get(form.getValues().payee?.id.toString())?.address || ""
  );

  const payeesOption = () => {
    let options: Option[] = [];
    payees.forEach((p) => {
      options.push({ id: p.id || "", value: p.name });
    });

    return options;
  };

  return (
    <div className="border-b border-gray-900/10 pb-12">
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Disbursement Voucher No:
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            {voucher?.code}
          </p>
        </div>

        <div className="sm:col-span-3">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Date:
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            {voucher.date.toString()}
          </p>
        </div>

        <div className="sm:col-span-3">
          <ComboboxForm
            name="payee"
            label="Payee"
            options={payeesOption()}
            onChange={() => {
              setAddress(
                payees.get(form.getValues().payee?.id.toString())?.address || ""
              );
            }}
            {...form}
          />
        </div>

        <div className="sm:col-span-2">
          <SelectForm
            name="modeOfPayment"
            label="Mode of payment"
            options={modeOfPaymentOptions}
            {...form}
          />
        </div>

        <div className="col-span-full">
          <h2 className="text-sm font-medium leading-7 text-gray-900">
            Address:
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">{address}</p>
        </div>

        <div className="sm:col-span-2">
          <SelectForm
            name="responsibilityCenter"
            label="Responsibility center"
            options={responsibilityCenterOptions}
            {...form}
          />
        </div>

        <div className="sm:col-span-5">
          <TextAreaForm name="particulars" label="Particulars" {...form} />
        </div>

        <div className="col-span-full">
          <CheckboxForm
            name="hasFixedGrossAmount"
            label="Custom gross amount"
            description="Enable this if you want to specify the gross amount to be calculated in tax"
            {...form}
          />
        </div>

        <div className="sm:col-span-2">
          <SelectForm
            name="taxType"
            label="Tax type"
            options={taxTypeOptions}
            {...form}
          />
        </div>

        <div className="sm:col-span-1">
          <InputForm
            name="grossAmount"
            label="Custom Gross Amount"
            {...form}
            disabled
          />
        </div>

        <div className="sm:col-span-1">
          <InputForm name="percentage1" label="Percentage" {...form} disabled />
        </div>

        <div className="sm:col-span-1">
          <InputForm name="percentage2" label="Percentage" {...form} disabled />
        </div>
      </div>
    </div>
  );
};

export default PayeeInfoSection;
