import {
  ArchivedVoucher,
  Employee,
  Payee,
  VoucherAccount,
} from "./backend-types";

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

export type Option = {
  id: string | number;
  value: string;
};

export interface VoucherForm {
  id: string;
  code: string;
  date: Date;
  modeOfPayment: number;
  responsibilityCenter: number;
  certifiedBy: Option;
  payee: Option;
  particulars: string;
  accountEntities: VoucherAccount[];
  signatory1: Option;
  signatory2: Option;
  taxType: number;
  percentage1: number;
  percentage2: number;
  hasFixedGrossAmount: boolean;
  grossAmount: number;
}
