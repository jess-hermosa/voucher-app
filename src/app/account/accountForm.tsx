import { Account } from "@/common/backend-types";
import SlideOver from "@/components/Shared/SlideOver";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import InputForm from "./form/inputForm";
import axios from "axios";
import { accountUrl } from "@/common/apiUrl";
import { fetchAccounts } from "@/server/api";

interface Props {
  selectedAccount: Account | null;
  clearForm: () => void;
}

const AccountForm: FC<Props> = ({ selectedAccount, clearForm }) => {
  const queryClient = useQueryClient();
  const addAccount = useMutation({
    mutationFn: (account: Account) => {
      return axios.post(accountUrl, account);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [fetchAccounts.key] });
    },
  });

  const updateAccount = useMutation({
    mutationFn: (account: Account) => {
      return axios.put(`${accountUrl}/${account.id}`, account);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [fetchAccounts.key] });
    },
  });

  const form = useForm<Account>({
    values: {
      id: selectedAccount?.id ?? "",
      name: selectedAccount?.name ?? "",
      code: selectedAccount?.code ?? "",
    },
  });

  const onSubmit: SubmitHandler<Account> = async (data) => {
    if (selectedAccount) {
      await updateAccount.mutateAsync({
        id: selectedAccount.id,
        code: data.code,
        name: data.name,
      });
    } else {
      await addAccount.mutateAsync({
        id: null,
        code: data.code,
        name: data.name,
      });
    }
  };

  return (
    <SlideOver
      header="New account"
      onSubmit={form.handleSubmit(onSubmit)}
      clearForm={clearForm}
    >
      <InputForm label="Name" name="name" {...form} />
      <InputForm label="Code" name="code" {...form} />
    </SlideOver>
  );
};

export default AccountForm;
