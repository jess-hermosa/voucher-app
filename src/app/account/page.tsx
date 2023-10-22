import { accountUrl } from "@/common/apiUrl";
import { Account } from "@/common/backend-types";
import AccountList from "./accountList";

const getAccounts = async () => {
  const res = await fetch(accountUrl);
  if (!res.ok) {
    throw new Error("Failed to fetch accounts");
  }

  return res.json();
};

const Account = async () => {
  const accounts: Account[] = await getAccounts();

  return <AccountList accounts={accounts} />;
};

export default Account;
