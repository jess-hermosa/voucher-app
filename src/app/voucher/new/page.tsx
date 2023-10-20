import { Account, Employee, Payee, Voucher } from "@/common/backend-types";
import SectionHeader from "@/components/SectionHeader";
import VoucherForm from "./voucherForm";

async function getData() {
  const res = await fetch("https://api.example.com/...");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const NewVoucher = () => {
  const account: Account[] = [];
  const payee: Payee[] = [];
  const employee: Employee[] = [];
  const voucher: Voucher = {
    id: "",
    code: "",
    date: new Date(),
    modeOfPayment: 0,
    responsibilityCenter: 0,
    certifiedBy: null,
    payee: null,
    particulars: "",
    accountEntities: [],
    tax: {
      id: 0,
      type: 0,
      percentage1: 0,
      percentage2: 0,
      hasFixedGrossAmount: false,
      grossAmount: 0,
    },
    signatory1: null,
    signatory2: null,
  };

  return (
    <>
      <SectionHeader header="Disbursement voucher" hasForm={false} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <VoucherForm
          voucher={voucher}
          accounts={
            new Map(
              account.map((obj) => {
                return [obj.id, obj];
              })
            )
          }
          payees={
            new Map(
              payee.map((obj) => {
                return [obj.id, obj];
              })
            )
          }
          employees={
            new Map(
              employee.map((obj) => {
                return [obj.id, obj];
              })
            )
          }
        />
      </div>
    </>
  );
};

export default NewVoucher;
