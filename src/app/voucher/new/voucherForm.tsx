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
import { useQuery } from "@tanstack/react-query";
import {
  fetchAccounts,
  fetchEmployees,
  fetchPayees,
  fetchVoucher,
} from "@/server/api";

const VoucherForm = () => {
  const employeesQuery = useQuery({
    queryKey: [fetchEmployees.key],
    queryFn: fetchEmployees.get,
  });

  const payeesQuery = useQuery({
    queryKey: [fetchPayees.key],
    queryFn: fetchPayees.get,
  });

  const accountsQuery = useQuery({
    queryKey: [fetchAccounts.key],
    queryFn: fetchAccounts.get,
  });

  const { data: voucher } = useQuery({
    queryKey: [fetchVoucher.key],
    queryFn: fetchVoucher.get,
  });

  const accounts: Map<string, Account> | null = accountsQuery.isSuccess
    ? new Map(
        accountsQuery.data?.map((obj: Account) => {
          return [obj.id || "", obj];
        })
      )
    : null;

  const payees: Map<string, Payee> | null = payeesQuery.isSuccess
    ? new Map(
        payeesQuery.data?.map((obj: Payee) => {
          return [obj.id, obj];
        })
      )
    : null;

  const employees: Map<string, Employee> | null = employeesQuery.isSuccess
    ? new Map(
        employeesQuery.data?.map((obj: Employee) => {
          return [obj.id, obj];
        })
      )
    : null;

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
      certifiedBy: employees?.get(data.certifiedBy.id.toString()) || null,
      payee: payees?.get(data.payee.id.toString()) || null,
      particulars: "",
      accountEntities: accountEntities || [],
      tax: {
        id: null,
        type: data.taxType,
        percentage1: data.percentage1,
        percentage2: data.percentage2,
        hasFixedGrossAmount: data.hasFixedGrossAmount,
        grossAmount: data.grossAmount,
      },
      signatory1: employees?.get(data.signatory1.id.toString()) || null,
      signatory2: employees?.get(data.signatory2.id.toString()) || null,
    };
  };

  return (
    <form>
      <div className="space-y-12">
        {payees && voucher && (
          <PayeeInfoSection form={form} voucher={voucher} payees={payees} />
        )}
        {employees && <SignatoriesSection form={form} employees={employees} />}
        {accounts && (
          <AccountingEntitiesSection
            accounts={accounts ?? null}
            accountEntities={accountEntities}
            setAccountEntities={(accountEntities: VoucherAccount[] | null) =>
              setAccountEntities(accountEntities)
            }
          />
        )}
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
