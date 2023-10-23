import { Account } from "@/common/backend-types";
import SlideOver from "@/components/Shared/SlideOver";
import { useMutation } from "@tanstack/react-query";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import InputForm from "./form/inputForm";
import axios from "axios";
import { accountUrl } from "@/common/apiUrl";

interface Props {
  selectedAccount: Account | null;
  clearForm: () => void;
}

const AccountForm: FC<Props> = ({ selectedAccount, clearForm }) => {
  const addAccount = useMutation({
    mutationFn: (account: Account) => {
      return axios.post(accountUrl, account);
    },
  });

  const updateAccount = useMutation({
    mutationFn: (account: Account) => {
      return axios.put(`${accountUrl}/${account.id}`, account);
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
      console.log("edited name: ", data.name);
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
      {addAccount.isSuccess ?? <h1>account added!</h1>}
    </SlideOver>
  );
};

export default AccountForm;
