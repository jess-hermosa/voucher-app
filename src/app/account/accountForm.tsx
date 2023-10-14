import { Account } from "@/common/backend-types";
import SlideOver from "@/components/Shared/SlideOver";
import { SubmitHandler, useForm } from "react-hook-form";
import InputForm from "./form/inputForm";

const AccountForm = () => {
  const form = useForm<Account>();
  const onSubmit: SubmitHandler<Account> = (data) => {
    console.log("name: ", data.name);
    console.log("code: ", data.code);
  };

  return (
    <SlideOver header="New account" onSubmit={form.handleSubmit(onSubmit)}>
      <InputForm label="Name" name="name" {...form} />
      <InputForm label="Code" name="code" {...form} />
    </SlideOver>
  );
};

export default AccountForm;
