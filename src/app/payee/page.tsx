import { Payee } from "@/common/backend-types";
import PayeeList from "./payeeList";

const Payee = () => {
  const payees: Payee[] = [];

  return <PayeeList payees={payees} />;
};

export default Payee;
