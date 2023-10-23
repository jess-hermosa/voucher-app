import { combineReducers, configureStore } from "@reduxjs/toolkit";
import uiReducer from "@/store/ui";
import menuReducer from "@/store/menu";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const rootReducer = combineReducers({
  ui: uiReducer,
  menu: menuReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type StateType = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector;
