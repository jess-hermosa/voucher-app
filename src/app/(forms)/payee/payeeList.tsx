"use client";

import { Payee } from "@/common/backend-types";
import EmptyList from "@/components/EmptyList";
import SectionHeader from "@/components/SectionHeader";
import { fetchPayees } from "@/server/api";
import { uiActions } from "@/store/ui";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useDispatch } from "react-redux";
import PayeeForm from "./payeeForm";

const PayeeList = () => {
  const { data: payees } = useQuery({
    queryKey: [fetchPayees.key],
    queryFn: fetchPayees.get,
  });

  const [selectedPayee, setSelectedPayee] = useState<Payee | null>(null);
  const dispatch = useDispatch();

  return (
    <>
      <SectionHeader header={"Payee"} hasForm={payees?.length > 0} />
      {payees.length > 0 ? (
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Address
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {payees.map((payee: Payee) => (
                      <tr key={payee.name}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          {payee.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {payee.address}
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                          <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900"
                            onClick={() => {
                              setSelectedPayee(payee);
                              dispatch(uiActions.toggleSidebar("slideover"));
                            }}
                          >
                            Edit<span className="sr-only">, {payee.name}</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyList listname="payee" />
      )}

      <PayeeForm
        selectedPayee={selectedPayee}
        clearForm={() => setSelectedPayee(null)}
      />
    </>
  );
};

export default PayeeList;
