"use client";

import ComboboxSelect from "@/components/Shared/ComboboxSelect";
import { Option } from "@/common/types";
import Input from "@/components/Shared/Input";
import Select from "@/components/Shared/Select";
import { FC, useState } from "react";
import { Account, VoucherAccount } from "@/common/backend-types";
import { entityTypeOptions } from "@/common/constant-fields";
import AccountingEntity from "@/components/AccountingEntity";

interface Props {
  accounts: Map<string, Account>;
  accountEntities: VoucherAccount[] | null;
  setAccountEntities: (accountEntities: VoucherAccount[] | null) => void;
}

const AccountingEntitiesSection: FC<Props> = ({
  accounts,
  accountEntities,
  setAccountEntities,
}) => {
  const [selectedAccount, setSelectedAccount] = useState<Option | null>(null);
  const [amount, setAmount] = useState<number>(0);

  const onValueChange = (selected: Option) => {
    if (!selectedAccount || amount < 1 || selected.id === 1) return;
    let entities = [...(accountEntities || [])];

    const existingAccountIndex = accountEntities?.findIndex(
      (x) => x.account?.id === selectedAccount.id
    );

    if (existingAccountIndex && existingAccountIndex != -1) {
      if (selected.id === 2) {
        entities[existingAccountIndex].credit = null;
        entities[existingAccountIndex].debit = amount;
        setAccountEntities(entities);
      } else {
        entities[existingAccountIndex].credit = amount;
        entities[existingAccountIndex].debit = null;
        setAccountEntities(entities);
      }

      setSelectedAccount(null);
      setAmount(0);
      return;
    }

    if (selected.id === 2) {
      entities.push({
        id: null,
        account: accounts.get(selectedAccount.id.toString()) || null,
        debit: amount,
        credit: null,
      });
      setAccountEntities(entities);
    } else {
      entities.push({
        id: null,
        account: accounts.get(selectedAccount.id.toString()) || null,
        debit: null,
        credit: amount,
      });
      setAccountEntities(entities);
    }

    setSelectedAccount(null);
    setAmount(0);
  };

  const accountsOption = () => {
    let options: Option[] = [];
    accounts.forEach((p) => {
      options.push({ id: p.id || "", value: p.code });
    });

    return options;
  };

  const onEntityRemove = (index: number) => {
    const entities = [...(accountEntities || [])];
    entities?.splice(index, 1);

    setAccountEntities([...entities]);
  };

  return (
    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Accounting Entities
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <ComboboxSelect
            label="Account"
            options={accountsOption()}
            selectedOption={selectedAccount}
            onChange={(account: Option) => setSelectedAccount(account)}
          />
        </div>

        <div className="sm:col-span-1">
          <Input
            label="Amount"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
          />
        </div>

        <div className="sm:col-span-1">
          <Select
            label="Add as"
            options={entityTypeOptions}
            selectedOption={{ id: 1, value: "-Select-" }}
            onChange={(selected: Option) => onValueChange(selected)}
          />
        </div>
      </div>

      <AccountingEntity
        accountEntities={accountEntities || []}
        onRemove={onEntityRemove}
      />
    </div>
  );
};

export default AccountingEntitiesSection;
