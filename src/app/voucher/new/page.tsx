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
