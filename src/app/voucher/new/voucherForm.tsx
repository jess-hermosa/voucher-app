"use client";

import {
  Account,
  Employee,
  Payee,
  Voucher,
  VoucherAccount,
} from "@/common/backend-types";
import { VoucherForm } from "@/common/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { FC, useState } from "react";
import PayeeInfoSection from "./sections/payeeInfoSection";
import SignatoriesSection from "./sections/signatoriesSection";
import AccountingEntitiesSection from "./sections/accountingEntitiesSection";

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
        <PayeeInfoSection form={form} voucher={voucher} payees={payees} />
        <SignatoriesSection form={form} employees={employees} />
        <AccountingEntitiesSection
          accounts={accounts}
          accountEntities={accountEntities}
          setAccountEntities={(accountEntities: VoucherAccount[] | null) =>
            setAccountEntities(accountEntities)
          }
        />
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
