import { ArchivedVoucher } from "./backend-types";

export interface VoucherTransactions {
  dateTime: Date;
  transactions: ArchivedVoucher[];
}

export interface Menu {
  menuItem: MenuItem[];
}

export interface MenuItem {
  name: string;
  href: string;
  icon: any;
  active: boolean;
}
