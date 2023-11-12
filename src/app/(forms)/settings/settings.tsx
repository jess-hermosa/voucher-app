"use client";

import { Payee, Settings } from "@/common/backend-types";
import { fetchPayees, fetchSettings } from "@/server/api";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import SettingsForm from "./Form/settingsForm";

const VoucherSettings = () => {
  const [onEdit, setOnEdit] = useState(true);

  const payeesQuery = useQuery({
    queryKey: [fetchPayees.key],
    queryFn: fetchPayees.get,
  });

  const { data: settings } = useQuery({
    queryKey: [fetchSettings.key],
    queryFn: fetchSettings.get,
  });

  const payees: Map<string, Payee> | null = payeesQuery.isSuccess
    ? new Map(
        payeesQuery.data?.map((obj: Payee) => {
          return [obj.id, obj];
        })
      )
    : null;

  return (
    <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
      <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
        <div>
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Default accounts
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-500">
            This accounts will be the default for computations
          </p>

          <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
            {settings.map((setting: Settings) => (
              <div className="pt-6 sm:flex">
                <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                  {setting.name}
                </dt>
                <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                  <SettingsForm
                    onEdit={onEdit}
                    setOnEdit={(isOpen: boolean) => setOnEdit(isOpen)}
                    payees={payees || null}
                    setting={setting}
                  />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
};

export default VoucherSettings;
