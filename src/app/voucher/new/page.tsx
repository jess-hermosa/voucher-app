import SectionHeader from "@/components/SectionHeader";
import VoucherForm from "./voucherForm";

const NewVoucher = () => {
  return (
    <>
      <SectionHeader header="Disbursement voucher" hasForm={false} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <VoucherForm />
      </div>
    </>
  );
};

export default NewVoucher;
