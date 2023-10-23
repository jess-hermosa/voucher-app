import { fetchAccounts } from "@/server/api";
import { dehydrate, QueryClient, Hydrate } from "@tanstack/react-query";
import { Suspense } from "react";
import AccountList from "@/app/account/accountList";

const AccountPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [fetchAccounts.key],
    queryFn: fetchAccounts.get,
  });

  return (
    <Hydrate state={dehydrate(queryClient)}>
      <Suspense fallback={<>loading page</>}>
        <AccountList />
      </Suspense>
    </Hydrate>
  );
};

export default AccountPage;
