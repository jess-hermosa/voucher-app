import { Payee } from "@/common/backend-types";
import SlideOver from "@/components/Shared/SlideOver";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import InputForm from "./form/inputForm";

interface Props {
  selectedPayee: Payee | null;
  clearForm: () => void;
}

const PayeeForm: FC<Props> = ({ selectedPayee, clearForm }) => {
  const form = useForm<Payee>({
    values: {
      id: selectedPayee?.id ?? "",
      name: selectedPayee?.name ?? "",
      address: selectedPayee?.address ?? "",
    },
  });

  const onSubmit: SubmitHandler<Payee> = (data) => {
    if (selectedPayee) {
      console.log("edited name: ", data.name);
    } else {
      console.log("name: ", data.name);
      console.log("address: ", data.address);
    }
  };

  return (
    <SlideOver
      header="New payee"
      onSubmit={form.handleSubmit(onSubmit)}
      clearForm={clearForm}
    >
      <InputForm label="Name" name="name" {...form} />
      <InputForm label="Address" name="address" {...form} />
    </SlideOver>
  );
};

export default PayeeForm;
