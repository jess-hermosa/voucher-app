export interface Voucher {
  id: string;
  code: string;
  date: Date;
  modeOfPayment: number;
  responsibilityCenter: number;
  certifiedBy: Employee | null;
  payee: Payee | null;
  particulars: string;
  accountEntities: VoucherAccount[];
  tax: Tax;
  signatory1: Employee | null;
  signatory2: Employee | null;
}

export interface Employee {
  id: string;
  name: string;
  position: string;
}

export interface Payee {
  id: string;
  name: string;
  address: string;
}

export interface Account {
  id: string;
  name: string;
  code: string;
}

export interface Settings {
  id: number;
  name: string;
  accountId: string;
  account: Account;
}

export interface Tax {
  id: number | null;
  type: number;
  percentage1: number;
  percentage2: number;
  hasFixedGrossAmount: boolean;
  grossAmount: number;
}

export interface VoucherAccount {
  id: number | null;
  account: Account | null;
  debit: number | null;
  credit: number | null;
}

export interface ArchivedVoucher {
  id: string;
  code: string;
  payee: Payee;
  date: Date;
}
