import { combineReducers, configureStore } from "@reduxjs/toolkit";
import uiReducer from "@/store/ui";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const rootReducer = combineReducers({
  ui: uiReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type StateType = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector;
