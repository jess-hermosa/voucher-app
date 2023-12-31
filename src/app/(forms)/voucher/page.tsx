import getQueryClient from "@/common/getQueryClient";
import { VoucherTransactions } from "@/common/types";
import SectionHeader from "@/components/SectionHeader";
import VoucherList from "@/components/VoucherList";
import { fetchArchivedVouchers } from "@/server/api";
import { dehydrate, Hydrate } from "@tanstack/react-query";

// const voucherTransactions: VoucherTransactions[] = [
//   {
//     dateTime: new Date(),
//     transactions: [
//       {
//         id: "00012",
//         payee: {
//           id: "00012",
//           name: "BODARE NPC",
//           address: "Tagbilaran City",
//         },
//         code: "DV-2023-01-0003",
//         date: new Date(),
//       },
//       {
//         id: "00011",
//         payee: {
//           id: "00011",
//           name: "James Bag-ao",
//           address: "Lindaville Subdivision Phase II",
//         },
//         code: "DV-2023-01-0002",
//         date: new Date(),
//       },
//       {
//         id: "00009",
//         payee: {
//           id: "00009",
//           name: "Van Rey Security Services",
//           address: "Dao Tagbilaran City",
//         },
//         code: "DV-2023-01-0001",
//         date: new Date(),
//       },
//     ],
//   },
//   {
//     dateTime: new Date(),
//     transactions: [
//       {
//         id: "00010",
//         payee: {
//           id: "00010",
//           name: "Panda Tea Garden",
//           address: "J.A Clarin Street",
//         },
//         code: "DV-2023-01-0001",
//         date: new Date(),
//       },
//     ],
//   },
// ];

const Voucher = async () => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: [fetchArchivedVouchers.key],
    queryFn: fetchArchivedVouchers.get,
  });

  return (
    <Hydrate state={dehydrate(queryClient)}>
      <SectionHeader header={"Voucher"} link="/voucher/new" />
      <VoucherList />
    </Hydrate>
  );
};

export default Voucher;
