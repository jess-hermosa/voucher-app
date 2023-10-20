"use client";

import {
  Account,
  Employee,
  Payee,
  Voucher,
  VoucherAccount,
} from "@/common/backend-types";
import { Option, VoucherForm } from "@/common/types";
import { SubmitHandler, useForm } from "react-hook-form";
import AccountingEntity from "@/components/AccountingEntity";
import ComboboxForm from "./form/comboBoxForm";
import { FC, useState } from "react";
import SelectForm from "./form/selectForm";
import TextAreaForm from "./form/textAreaForm";
import InputForm from "./form/inputForm";
import CheckboxForm from "./form/checkBoxForm";
import ComboboxSelect from "@/components/Shared/ComboboxSelect";
import Input from "@/components/Shared/Input";
import Select from "@/components/Shared/Select";
import {
  entityTypeOptions,
  modeOfPaymentOptions,
  responsibilityCenterOptions,
  taxTypeOptions,
} from "@/common/constant-fields";

interface Props {
  voucher: Voucher;
  accounts: Map<string, Account>;
  payees: Map<string, Payee>;
  employees: Map<string, Employee>;
}

const VoucherForm: FC<Props> = ({ voucher, accounts, payees, employees }) => {
  const [accountEntities, setAccountEntities] = useState<
    VoucherAccount[] | null
  >(null);
  const [selectedAccount, setSelectedAccount] = useState<Option | null>(null);
  const [amount, setAmount] = useState<number>(0);

  const onValueChange = (selected: Option) => {
    if (!selectedAccount || amount < 1 || selected.id === 1) return;
    let entities = [...(accountEntities || [])];

    if (selected.id === 2) {
      entities.push({
        id: accountEntities?.length || 0,
        account: accounts.get(selectedAccount.id.toString()) || null,
        debit: amount,
        credit: null,
      });
      setAccountEntities(entities);
    } else {
      entities.push({
        id: accountEntities?.length || 0,
        account: accounts.get(selectedAccount.id.toString()) || null,
        debit: null,
        credit: amount,
      });
      setAccountEntities(entities);
    }

    setSelectedAccount(null);
    setAmount(0);
  };

  const employeesOption = () => {
    let options: Option[] = [];
    employees.forEach((p) => {
      options.push({ id: p.id, value: p.name });
    });

    return options;
  };

  const payeesOption = () => {
    let options: Option[] = [];
    payees.forEach((p) => {
      options.push({ id: p.id, value: p.name });
    });

    return options;
  };

  const accountsOption = () => {
    let options: Option[] = [];
    accounts.forEach((p) => {
      options.push({ id: p.id, value: p.code });
    });

    return options;
  };

  const onEntityRemove = (index: number) => {
    const entities = [...(accountEntities || [])];
    entities?.splice(index, 1);

    setAccountEntities([...entities]);
  };

  const form = useForm<VoucherForm>();

  const onSubmit: SubmitHandler<VoucherForm> = (data) => {
    const updatedVoucher: Voucher = {
      id: voucher.id,
      code: voucher.code,
      date: voucher.date || new Date(),
      modeOfPayment: data.modeOfPayment,
      responsibilityCenter: data.responsibilityCenter,
      certifiedBy: employees.get(data.certifiedBy.id.toString()) || null,
      payee: payees.get(data.payee.id.toString()) || null,
      particulars: "",
      accountEntities: accountEntities || [],
      tax: {
        id: voucher.tax.id,
        type: data.taxType,
        percentage1: data.percentage1,
        percentage2: data.percentage2,
        hasFixedGrossAmount: data.hasFixedGrossAmount,
        grossAmount: data.grossAmount,
      },
      signatory1: employees.get(data.signatory1.id.toString()) || null,
      signatory2: employees.get(data.signatory2.id.toString()) || null,
    };
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
                {voucher.code}
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
                {payees.get(form.getValues().payee?.id.toString())?.address ||
                  ""}
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
                disabled
              />
            </div>

            <div className="sm:col-span-1">
              <InputForm
                name="percentage1"
                label="Percentage"
                {...form}
                disabled
              />
            </div>

            <div className="sm:col-span-1">
              <InputForm
                name="percentage2"
                label="Percentage"
                {...form}
                disabled
              />
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

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Accounting Entities
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <ComboboxSelect
                label="Account"
                options={accountsOption()}
                selectedOption={selectedAccount}
                onChange={(account: Option) => setSelectedAccount(account)}
              />
            </div>

            <div className="sm:col-span-1">
              <Input
                label="Amount"
                value={amount}
                onChange={(e) => setAmount(parseInt(e.target.value))}
              />
            </div>

            <div className="sm:col-span-1">
              <Select
                label="Add as"
                options={entityTypeOptions}
                selectedOption={{ id: 1, value: "-Select-" }}
                onChange={(selected: Option) => onValueChange(selected)}
              />
            </div>
          </div>

          <AccountingEntity
            accountEntities={accountEntities || []}
            onRemove={onEntityRemove}
          />
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
