import axios from "axios";
import {
  accountUrl,
  employeeUrl,
  payeeUrl,
  settingsUrl,
  voucherUrl,
} from "@/common/apiUrl";

export const fetchAccounts = {
  key: "accounts",
  get: async () => {
    return await (
      await axios.get(accountUrl)
    ).data;
  },
};

export const fetchPayees = {
  key: "payees",
  get: async () => {
    return await (
      await axios.get(payeeUrl)
    ).data;
  },
};

export const fetchEmployees = {
  key: "employees",
  get: async () => {
    return await (
      await axios.get(employeeUrl)
    ).data;
  },
};

export const fetchVoucher = {
  key: "voucher",
  get: async () => {
    return await (
      await axios.get(voucherUrl)
    ).data;
  },
};

export const fetchArchivedVouchers = {
  key: "archived-voucher",
  get: async () => {
    return await (
      await axios.get(voucherUrl)
    ).data;
  },
};

export const fetchSettings = {
  key: "settings",
  get: async () => {
    return await (
      await axios.get(settingsUrl)
    ).data;
  },
};
