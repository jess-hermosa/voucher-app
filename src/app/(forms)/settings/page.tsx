import getQueryClient from "@/common/getQueryClient";
import { fetchSettings } from "@/server/api";
import { dehydrate, Hydrate } from "@tanstack/react-query";
import VoucherSettings from "./settings";

const SettingsPage = async () => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: [fetchSettings.key],
    queryFn: fetchSettings.get,
  });

  return (
    <Hydrate state={dehydrate(queryClient)}>
      <VoucherSettings />
    </Hydrate>
  );
};

export default SettingsPage;
