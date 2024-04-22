import { configureStore } from "@reduxjs/toolkit";
import weatherReduser from "./weather_slice";

const store = configureStore({
  reducer: { weather: weatherReduser }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
