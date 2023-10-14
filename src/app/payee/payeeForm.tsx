import { Payee } from "@/common/backend-types";
import SlideOver from "@/components/Shared/SlideOver";
import { SubmitHandler, useForm } from "react-hook-form";
import InputForm from "./form/inputForm";

const PayeeForm = () => {
  const form = useForm<Payee>();
  const onSubmit: SubmitHandler<Payee> = (data) => {
    console.log("name: ", data.name);
    console.log("code: ", data.address);
  };

  return (
    <SlideOver header="New payee" onSubmit={form.handleSubmit(onSubmit)}>
      <InputForm label="Name" name="name" {...form} />
      <InputForm label="Address" name="address" {...form} />
    </SlideOver>
  );
};

export default PayeeForm;
