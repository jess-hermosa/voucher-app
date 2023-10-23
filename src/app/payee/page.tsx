import { fetchPayees } from "@/server/api";
import { dehydrate, Hydrate, QueryClient } from "@tanstack/react-query";
import { Suspense } from "react";
import PayeeList from "./payeeList";

const PayeePage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [fetchPayees.key],
    queryFn: fetchPayees.get,
  });

  return (
    <Suspense fallback={<>loading page</>}>
      <Hydrate state={dehydrate(queryClient)}>
        <PayeeList />
      </Hydrate>
    </Suspense>
  );
};

export default PayeePage;
