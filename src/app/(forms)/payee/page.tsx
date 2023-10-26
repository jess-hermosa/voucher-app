import { Suspense } from "react";
import PayeeList from "@/app/(forms)/payee/payeeList";

const PayeePage = async () => {
  return (
    <Suspense fallback={<>loading page</>}>
      <PayeeList />
    </Suspense>
  );
};

export default PayeePage;
