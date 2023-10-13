import { FC, Fragment } from "react";
import { VoucherTransactions } from "@/common/types";

const statuses: any = {
  Printed: "text-green-700 bg-green-50 ring-green-600/20",
  Pending: "text-gray-600 bg-gray-50 ring-gray-500/10",
  Overdue: "text-red-700 bg-red-50 ring-red-600/10",
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  voucherTransactions: VoucherTransactions[];
}

const voucherTransactions = [
  {
    dateTime: new Date(),
    transactions: [
      {
        id: 1,
        payee: {
          id: "00012",
          name: "BODARE NPC",
          address: "Tagbilaran City",
        },
        code: "DV-2023-01-0003",
      },
      {
        id: 2,
        payee: {
          id: "00011",
          name: "James Bag-ao",
          address: "Lindaville Subdivision Phase II",
        },
        code: "DV-2023-01-0002",
      },
      {
        id: 3,
        payee: {
          id: "00009",
          name: "Van Rey Security Services",
          address: "Dao Tagbilaran City",
        },
        code: "DV-2023-01-0001",
      },
    ],
  },
  {
    dateTime: new Date(),
    transactions: [
      {
        id: 4,
        payee: {
          id: "00010",
          name: "Panda Tea Garden",
          address: "J.A Clarin Street",
        },
        code: "DV-2023-01-0001",
      },
    ],
  },
];

const VoucherList: FC<Props> = ({}) => {
  return (
    <div className="pt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-2xl text-base font-semibold leading-6 text-gray-900 lg:mx-0 lg:max-w-none">
          Recent activity
        </h2>
      </div>
      <div className="mt-6 overflow-hidden border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <table className="w-full text-left">
              <thead className="sr-only">
                <tr>
                  <th>Payee</th>
                  <th className="hidden sm:table-cell">Voucher number</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {voucherTransactions?.map((day) => (
                  <Fragment key={day.dateTime.toString()}>
                    <tr className="text-sm leading-6 text-gray-900">
                      <th
                        scope="colgroup"
                        colSpan={3}
                        className="relative isolate py-2 font-semibold"
                      >
                        <time dateTime={day.dateTime.toDateString()}>
                          {day.dateTime.toDateString()}
                        </time>
                        <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                        <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                      </th>
                    </tr>
                    {day.transactions.map((transaction) => (
                      <tr key={transaction.id}>
                        <td className="relative py-5 pr-6">
                          <div className="flex gap-x-6">
                            {/* <transaction
                              className="hidden h-6 w-5 flex-none text-gray-400 sm:block"
                              aria-hidden="true"
                            /> */}
                            <div className="flex-auto">
                              <div className="flex items-start gap-x-3">
                                <div className="text-sm font-medium leading-6 text-gray-900">
                                  {transaction.payee.name}
                                </div>
                                {/* <div
                                  className={classNames(
                                    statuses[transaction.status],
                                    "rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset"
                                  )}
                                >
                                  {transaction.status}
                                </div> */}
                              </div>
                              {transaction.payee ? (
                                <div className="mt-1 text-xs leading-5 text-gray-500">
                                  {transaction.payee.address}
                                </div>
                              ) : null}
                            </div>
                          </div>
                          <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
                          <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                        </td>
                        <td className="hidden py-5 pr-6 sm:table-cell">
                          <div className="text-sm leading-6 text-gray-600">
                            {transaction.code}
                          </div>
                          {/* <div className="mt-1 text-xs leading-5 text-gray-500">
                            {transaction.description}
                          </div> */}
                        </td>
                        <td className="py-5 text-right">
                          <div className="flex justify-end">
                            <a
                              className="text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500"
                              href="#"
                            >
                              View
                              <span className="hidden sm:inline"> voucher</span>
                            </a>
                          </div>
                          {/* <div className="mt-1 text-xs leading-5 text-gray-500">
                            Invoice{" "}
                            <span className="text-gray-900">
                              #{transaction.invoiceNumber}
                            </span>
                          </div> */}
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoucherList;
