import { Account } from "@/common/backend-types";
import SlideOver from "@/components/Shared/SlideOver";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import InputForm from "./form/inputForm";

interface Props {
  selectedAccount: Account | null;
  clearForm: () => void;
}

const AccountForm: FC<Props> = ({ selectedAccount, clearForm }) => {
  const form = useForm<Account>({
    values: {
      id: selectedAccount?.id ?? "",
      name: selectedAccount?.name ?? "",
      code: selectedAccount?.code ?? "",
    },
  });

  const onSubmit: SubmitHandler<Account> = (data) => {
    if (selectedAccount) {
      console.log("edited name: ", data.name);
    } else {
      console.log("name: ", data.name);
      console.log("code: ", data.code);
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
