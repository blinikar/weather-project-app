import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import starredCitiesSlice from "store/StarredReducer";

const store = configureStore({
  reducer: {
    starredCities: starredCitiesSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

store.subscribe(() => {
  localStorage.setItem(
    "starredCities",
    JSON.stringify(store.getState().starredCities),
  );
});
