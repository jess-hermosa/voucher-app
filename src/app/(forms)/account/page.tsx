import { Suspense } from "react";
import AccountList from "@/app/(forms)/account/accountList";

const AccountPage = async () => {
  return (
    <Suspense fallback={<>loading page</>}>
      <AccountList />
    </Suspense>
  );
};

export default AccountPage;
