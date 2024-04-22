import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import WeatherService from "./WeatherService";
import { WeatherData, WeatherState } from "./types";

const initialState: WeatherState = {
  loading: true,
  data: null,
};

export const fetchWeather = createAsyncThunk<WeatherData, string>(
  "weather/getData",
  async (cityName) => WeatherService.getData(cityName)
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchWeather.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchWeather.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default weatherSlice.reducer;
