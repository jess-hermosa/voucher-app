import { accountUrl, employeeUrl, payeeUrl, voucherUrl } from "@/common/apiUrl";
import { Account, Employee, Payee, Voucher } from "@/common/backend-types";
import SectionHeader from "@/components/SectionHeader";
import { Suspense } from "react";
import VoucherForm from "./voucherForm";

const getAccounts = async () => {
  const res = await fetch(accountUrl);

  if (!res.ok) {
    throw new Error("Failed to fetch account");
  }

  return res.json();
};

const getPayees = async () => {
  const res = await fetch(payeeUrl);

  if (!res.ok) {
    throw new Error("Failed to fetch payee");
  }

  return res.json();
};

const getEmployees = async () => {
  const res = await fetch(employeeUrl);

  if (!res.ok) {
    throw new Error("Failed to fetch employee");
  }

  return res.json();
};

const getVoucher = async () => {
  const res = await fetch(voucherUrl);

  if (!res.ok) {
    throw new Error("Failed to fetch voucher");
  }

  return res.json();
};

const NewVoucher = async () => {
  const accountData = getAccounts();
  const payeeData = getPayees();
  const employeeData = getEmployees();
  const voucherData = getVoucher();

  const [account, payee, employee, voucher] = await Promise.all([
    accountData,
    payeeData,
    employeeData,
    voucherData,
  ]);
  // const voucher: Voucher = {
  //   id: "",
  //   code: "",
  //   date: new Date(),
  //   modeOfPayment: 0,
  //   responsibilityCenter: 0,
  //   certifiedBy: null,
  //   payee: null,
  //   particulars: "",
  //   accountEntities: [],
  //   tax: {
  //     id: null,
  //     type: 0,
  //     percentage1: 0,
  //     percentage2: 0,
  //     hasFixedGrossAmount: false,
  //     grossAmount: 0,
  //   },
  //   signatory1: null,
  //   signatory2: null,
  // };

  return (
    <Suspense fallback={<>loading page</>}>
      <SectionHeader header="Disbursement voucher" hasForm={false} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <VoucherForm
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
        />
      </div>
    </Suspense>
  );
};

export default NewVoucher;
