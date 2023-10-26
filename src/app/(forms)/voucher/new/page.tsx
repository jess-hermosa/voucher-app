import SectionHeader from "@/components/SectionHeader";
import VoucherForm from "./voucherForm";

const NewVoucherPage = async () => {
  return (
    <>
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
    </>
  );
};

export default NewVoucherPage;
