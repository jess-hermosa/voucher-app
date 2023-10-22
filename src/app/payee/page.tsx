import { payeeUrl } from "@/common/apiUrl";
import { Payee } from "@/common/backend-types";
import PayeeList from "./payeeList";

const getPayees = async () => {
  const res = await fetch(payeeUrl);
  if (!res.ok) {
    throw new Error("Failed to fetch payees");
  }

  return res.json();
};

const Payee = async () => {
  const payees: Payee[] = await getPayees();

  return <PayeeList payees={payees} />;
};

export default Payee;
