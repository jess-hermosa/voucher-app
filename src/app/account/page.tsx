import { accountUrl } from "@/common/apiUrl";
import { Account } from "@/common/backend-types";
import { Suspense } from "react";
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

  return (
    <Suspense fallback={<>loading page</>}>
      <AccountList accounts={accounts} />
    </Suspense>
  );
};

export default Account;
