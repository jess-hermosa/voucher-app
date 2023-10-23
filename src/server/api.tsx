import axios from "axios";
import { accountUrl, employeeUrl, payeeUrl } from "@/common/apiUrl";

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