"use client";

import { Voucher } from "@/common/backend-types";
import { SubmitHandler, useForm } from "react-hook-form";
import Select from "@/components/Shared/Select";
import ComboboxSelect from "@/components/Shared/ComboboxSelect";
import TextArea from "@/components/Shared/TextArea";
import AccountingEntity from "@/components/AccountingEntity";
import Input from "@/components/Shared/Input";

const VoucherForm = () => {
  const form = useForm<Voucher>();

  const options = [
    { id: 1, value: "test1" },
    { id: 2, value: "test2" },
    { id: 3, value: "test3" },
    { id: 4, value: "test4" },
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

            <div className="sm:col-span-2">
              <Select
                label="Mode of payment"
                options={options}
                selectedOption={{ id: 1, value: "test1" }}
                onChange={() => {}}
              />
            </div>

            <div className="sm:col-span-5">
              <ComboboxSelect
                label="Payee"
                options={options}
                selectedOption={{ id: 1, value: "test1" }}
                onChange={() => {}}
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
              <Select
                label="Responsibility center"
                options={options}
                selectedOption={{ id: 1, value: "test1" }}
                onChange={() => {}}
              />
            </div>

            <div className="sm:col-span-5">
              <TextArea label="Particulars" />
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Signatories
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <ComboboxSelect
                label="Certified by"
                options={options}
                selectedOption={{ id: 1, value: "test1" }}
                onChange={() => {}}
              />
            </div>

            <div className="sm:col-span-3">
              <ComboboxSelect
                label="Accounting head"
                options={options}
                selectedOption={{ id: 1, value: "test1" }}
                onChange={() => {}}
              />
            </div>

            <div className="sm:col-span-3">
              <ComboboxSelect
                label="PARPO"
                options={options}
                selectedOption={{ id: 1, value: "test1" }}
                onChange={() => {}}
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
              <Select
                label="Tax type"
                options={options}
                selectedOption={{ id: 1, value: "test1" }}
                onChange={() => {}}
              />
            </div>

            <div className="sm:col-span-3">
              <ComboboxSelect
                label="Account"
                options={options}
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
                  { id: 1, value: "Debit" },
                  { id: 2, value: "Credit" },
                ]}
                selectedOption={{ id: 1, value: "Debit" }}
                onChange={() => {}}
              />
            </div>
          </div>

          <AccountingEntity />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default VoucherForm;
