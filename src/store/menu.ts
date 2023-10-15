import { Menu, MenuItem } from "@/common/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  FolderIcon,
  GlobeAltIcon,
  ServerIcon,
  SignalIcon,
} from "@heroicons/react/24/outline";

interface State {
  menu: Menu;
}

const initialState: State = {
  menu: {
    menuItem: [
      { name: "Dashboard", href: "/", active: true },
      { name: "Vouchers", href: "/voucher", active: false },
      { name: "Accounts", href: "/account", active: false },
      { name: "Payee", href: "/payee", active: false },
      { name: "Employee", href: "/employee", active: false },
    ],
  },
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setSelectedMenu: (state, a: PayloadAction<string>) => {
      const index = state.menu.menuItem.findIndex((x) => x.active === true);
      if (index !== -1)
        state.menu.menuItem[index] = {
          ...state.menu.menuItem[index],
          active: false,
        };

      const selectedIndex = state.menu.menuItem.findIndex((x) => {
        const navs = a.payload.split("/").filter((x) => x !== "");
        if (navs.length < 1) return true;

        return navs.includes(x.href.replace("/", ""));
      });

      if (selectedIndex !== -1)
        state.menu.menuItem[selectedIndex] = {
          ...state.menu.menuItem[selectedIndex],
          active: true,
        };
    },
  },
});

const { ...actions } = {
  ...menuSlice.actions,
};

export const menuActions = actions;
export default menuSlice.reducer;
