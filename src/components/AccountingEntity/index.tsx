import { VoucherAccount } from "@/common/backend-types";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FC } from "react";

interface Props {
  accountEntities: VoucherAccount[];
  onRemove: (index: number) => void;
}

const Voucher: FC<Props> = ({ accountEntities, onRemove }) => {
  return (
    <div>
      <div className="-mx-4 mt-8 flow-root sm:mx-0">
        <table className="min-w-full">
          <colgroup>
            <col className="w-full sm:w-1/2" />
            <col className="sm:w-1/6" />
            <col className="sm:w-1/6" />
            <col className="sm:w-1/6" />
          </colgroup>
          <thead className="border-b border-gray-300 text-gray-900">
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
              >
                Account Name
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-center text-sm font-semibold text-gray-900 sm:table-cell"
              >
                UACS Code
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Debit
              </th>
              <th
                scope="col"
                className="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0"
              >
                Credit
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {accountEntities.map((entity, index) => (
              <tr
                key={entity.account?.code}
                className="border-b border-gray-200"
              >
                <td className="max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0">
                  <div className="font-medium text-gray-900">
                    {entity.account?.name}
                  </div>
                </td>
                <td className="hidden px-3 py-5 text-center text-sm text-gray-500 sm:table-cell">
                  {entity.account?.code}
                </td>
                <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">
                  {entity.debit}
                </td>
                <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">
                  {entity.credit}
                </td>
                <td className="relative whitespace-nowrap py-4 pl-10 pr-4 text-right text-sm font-medium sm:pr-3">
                  <a href="#" className="" onClick={() => onRemove(index)}>
                    <XMarkIcon
                      className="text-indigo-600 hover:text-indigo-900 h-6 w-6 shrink-0"
                      aria-hidden="true"
                    />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
          {/* <tfoot>
            <tr>
              <th
                scope="row"
                colSpan={3}
                className="hidden pl-4 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
              >
                Subtotal
              </th>
              <th
                scope="row"
                className="pl-4 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden"
              >
                Subtotal
              </th>
              <td className="pl-3 pr-4 pt-6 text-right text-sm text-gray-500 sm:pr-0">
                $8,800.00
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                colSpan={3}
                className="hidden pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
              >
                Tax
              </th>
              <th
                scope="row"
                className="pl-4 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden"
              >
                Tax
              </th>
              <td className="pl-3 pr-4 pt-4 text-right text-sm text-gray-500 sm:pr-0">
                $1,760.00
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                colSpan={3}
                className="hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0"
              >
                Total
              </th>
              <th
                scope="row"
                className="pl-4 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden"
              >
                Total
              </th>
              <td className="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">
                $10,560.00
              </td>
            </tr>
          </tfoot> */}
        </table>
      </div>
    </div>
  );
};

export default Voucher;
