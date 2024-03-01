import { configureStore } from "@reduxjs/toolkit";
import weatherReduser from "./weather_slice";
// import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: { weather: weatherReduser }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
