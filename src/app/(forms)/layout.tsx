import { dehydrate, Hydrate } from "@tanstack/react-query";
import {
  fetchAccounts,
  fetchEmployees,
  fetchPayees,
  fetchVoucher,
} from "@/server/api";
import App from "./app";
import getQueryClient from "@/common/getQueryClient";

export default async function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = getQueryClient();

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
    <Hydrate state={dehydrate(queryClient)}>
      <App>{children}</App>
    </Hydrate>
  );
}
