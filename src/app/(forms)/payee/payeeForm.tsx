import { payeeUrl } from "@/common/apiUrl";
import { Payee } from "@/common/backend-types";
import getQueryClient from "@/common/getQueryClient";
import SlideOver from "@/components/Shared/SlideOver";
import { fetchPayees } from "@/server/api";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import InputForm from "./form/inputForm";

interface Props {
  selectedPayee: Payee | null;
  clearForm: () => void;
}

const PayeeForm: FC<Props> = ({ selectedPayee, clearForm }) => {
  const queryClient = getQueryClient();
  const addPayee = useMutation({
    mutationFn: (payee: Payee) => {
      return axios.post(payeeUrl, payee);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [fetchPayees.key] });
    },
  });

  const updatePayee = useMutation({
    mutationFn: (payee: Payee) => {
      return axios.put(`${payeeUrl}/${payee.id}`, payee);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [fetchPayees.key] });
    },
  });

  const form = useForm<Payee>({
    values: {
      id: selectedPayee?.id ?? "",
      name: selectedPayee?.name ?? "",
      address: selectedPayee?.address ?? "",
    },
  });

  const onSubmit: SubmitHandler<Payee> = async (data) => {
    if (selectedPayee) {
      await updatePayee.mutateAsync({
        id: selectedPayee.id,
        address: data.address,
        name: data.name,
      });
    } else {
      await addPayee.mutateAsync({
        id: null,
        address: data.address,
        name: data.name,
      });
    }
  };

  return (
    <SlideOver
      header="New payee"
      onSubmit={form.handleSubmit(onSubmit)}
      clearForm={clearForm}
      loading={addPayee.isLoading || updatePayee.isLoading}
      success={addPayee.isSuccess || updatePayee.isSuccess}
    >
      <InputForm label="Name" name="name" {...form} />
      <InputForm label="Address" name="address" {...form} />
    </SlideOver>
  );
};

export default PayeeForm;
