import { fetchSettings } from "@/server/api";
import { useQuery } from "@tanstack/react-query";

const VoucherSettings = () => {
  const { data: settings } = useQuery({
    queryKey: [fetchSettings.key],
    queryFn: fetchSettings.get,
  });

  return <></>;
};

export default VoucherSettings;
