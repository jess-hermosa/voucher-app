import { Account, Employee, Payee } from "@/common/backend-types";
import SectionHeader from "@/components/SectionHeader";
import {
  fetchAccounts,
  fetchEmployees,
  fetchPayees,
  fetchVoucher,
} from "@/server/api";
import { QueryClient } from "@tanstack/react-query";
import { Suspense } from "react";
import VoucherForm from "./voucherForm";

const NewVoucherPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [fetchEmployees.key],
    queryFn: fetchEmployees.get,
  });

  await queryClient.prefetchQuery({
    queryKey: [fetchAccounts.key],
    queryFn: fetchAccounts.get,
  });

  await queryClient.prefetchQuery({
    queryKey: [fetchPayees.key],
    queryFn: fetchPayees.get,
  });

  await queryClient.prefetchQuery({
    queryKey: [fetchVoucher.key],
    queryFn: fetchVoucher.get,
  });

  return (
    <Suspense fallback={<>loading page</>}>
      <SectionHeader header="Disbursement voucher" hasForm={false} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <VoucherForm
          voucher={voucher}
          accounts={
            new Map(
              account.map((obj: Account) => {
                return [obj.id || "", obj];
              })
            )
          }
          payees={
            new Map(
              payee.map((obj: Payee) => {
                return [obj.id, obj];
              })
            )
          }
          employees={
            new Map(
              employee.map((obj: Employee) => {
                return [obj.id, obj];
              })
            )
          }
        /> */}
        <VoucherForm />
      </div>
    </Suspense>
  );
};

export default NewVoucherPage;
