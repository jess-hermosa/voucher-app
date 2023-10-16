import { Menu } from "@/common/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  FolderIcon,
  UserIcon,
  RectangleGroupIcon,
  BriefcaseIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

interface State {
  menu: Menu;
}

const initialState: State = {
  menu: {
    menuItem: [
      { name: "Dashboard", href: "/", icon: RectangleGroupIcon, active: true },
      { name: "Vouchers", href: "/voucher", icon: FolderIcon, active: false },
      {
        name: "Accounts",
        href: "/account",
        icon: ClipboardDocumentListIcon,
        active: false,
      },
      { name: "Payee", href: "/payee", icon: UserIcon, active: false },
      {
        name: "Employee",
        href: "/employee",
        icon: BriefcaseIcon,
        active: false,
      },
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
