"use client";

import { Account, Employee, Payee, Voucher } from "@/common/backend-types";
import { VoucherForm } from "@/common/types";
import { SubmitHandler, useForm } from "react-hook-form";
import AccountingEntity from "@/components/AccountingEntity";
import ComboboxForm from "./form/comboBoxForm";
import { FC } from "react";
import SelectForm from "./form/selectForm";
import TextAreaForm from "./form/textAreaForm";
import InputForm from "./form/inputForm";
import CheckboxForm from "./form/checkBoxForm";
import ComboboxSelect from "@/components/Shared/ComboboxSelect";
import Input from "@/components/Shared/Input";
import Select from "@/components/Shared/Select";

interface Props {
  account: Account[];
  payee: Payee[];
  employee: Employee[];
}

const VoucherForm: FC<Props> = ({ account, payee, employee }) => {
  const form = useForm<VoucherForm>();

  const taxTypeOptions = [
    { id: 0, value: "None" },
    { id: 1, value: "Goods" },
    { id: 2, value: "Services" },
    { id: 3, value: "Straight" },
    { id: 4, value: "Custom" },
  ];

  const modeOfPaymentOptions = [
    { id: 0, value: "MDS" },
    { id: 1, value: "Commercial" },
    { id: 2, value: "ADA" },
    { id: 4, value: "Others" },
  ];

  const responsibilityCenterOptions = [
    { id: 0, value: "MOOE" },
    { id: 1, value: "PS" },
  ];

  const onSubmit: SubmitHandler<Voucher> = (data) => {
    console.log("data: ", data);
  };

  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Disbursement Voucher No:
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                DV-2023-01-0001
              </p>
            </div>

            <div className="sm:col-span-3">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Date:
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">03/03/22</p>
            </div>

            <div className="sm:col-span-3">
              <ComboboxForm
                name="payee"
                label="Payee"
                options={payee.map((p) => {
                  return { id: p.id, value: p.name };
                })}
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
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Dao Tagbilaran City
              </p>
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
              />
            </div>

            <div className="sm:col-span-1">
              <InputForm name="percentage1" label="Percentage" {...form} />
            </div>

            <div className="sm:col-span-1">
              <InputForm name="percentage2" label="Percentage" {...form} />
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Signatories
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <ComboboxForm
                name=""
                label="Certified by"
                options={employee.map((p) => {
                  return { id: p.id, value: p.name };
                })}
                {...form}
              />
            </div>
            <div className="sm:col-span-2">
              <ComboboxForm
                name="signatory1"
                label="Accounting head"
                options={employee.map((p) => {
                  return { id: p.id, value: p.name };
                })}
                {...form}
              />
            </div>

            <div className="sm:col-span-2">
              <ComboboxForm
                name="signatory2"
                label="PARPO"
                options={employee.map((p) => {
                  return { id: p.id, value: p.name };
                })}
                {...form}
              />
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Accounting Entities
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <ComboboxSelect
                label="Account"
                options={account.map((p) => {
                  return { id: p.id, value: p.name };
                })}
                selectedOption={{ id: 1, value: "test1" }}
                onChange={() => {}}
              />
            </div>

            <div className="sm:col-span-1">
              <Input label="Amount" />
            </div>

            <div className="sm:col-span-1">
              <Select
                label="Add as"
                options={[
                  { id: 1, value: "-Select-" },
                  { id: 2, value: "Debit" },
                  { id: 3, value: "Credit" },
                ]}
                selectedOption={{ id: 1, value: "-Select-" }}
                onChange={() => {}}
              />
            </div>
          </div>

          <AccountingEntity />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Print
        </button>
      </div>
    </form>
  );
};

export default VoucherForm;
