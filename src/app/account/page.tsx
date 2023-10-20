import { Account } from "@/common/backend-types";
import AccountList from "./accountList";

const Account = () => {
  const accounts: Account[] = [];

  return <AccountList accounts={accounts} />;
};

export default Account;
