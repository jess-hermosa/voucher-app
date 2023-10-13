export interface Voucher {
  id: string;
  code: string;
  date: Date;
  modeOfPayment: number;
  responsibilityCenter: number;
  certifiedBy: Employee;
  payee: Payee;
  particulars: string;
  accountEntities: VoucherAccount[];
  tax: Tax;
  signatory1: Employee;
  signatory2: Employee;
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
  id: number;
  type: number;
  percentage1: number;
  percentage2: number;
  hasFixedGrossAmount: boolean;
  grossAmount: number;
}

export interface VoucherAccount {
  id: number;
  account: Account;
  debit: number;
  credit: number;
}

export interface ArchivedVoucher {
  id: string;
  code: string;
  payee: Payee;
  date: Date;
}
