import type { IWeatherData } from '@/types/weather.interface';
import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'

export const FetchweatherData = createAsyncThunk('todos/fetchTodos', async (city:string) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`)
  if (!response.ok) {
    throw new Error('City not found');
  }

  const data: IWeatherData = await response.json(); 
  return data; 
})


interface IInitialWeatherState {
  weatherData : IWeatherData | null,
  loading: boolean,
  error: string | null
}

const initialState:IInitialWeatherState = {
 weatherData: null,
 loading: false,
 error: null
}

const weatherSlice = createSlice({
    name: "weather",
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
      builder.addCase(FetchweatherData.pending, (state) => {
        state.loading = true
      });

      builder.addCase(FetchweatherData.fulfilled, (state,action: PayloadAction<IWeatherData>) => {
        state.loading = false;
        state.weatherData = action.payload;
      });

      builder.addCase(FetchweatherData.rejected, (state,action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong'
      });

    }
})

export const {} = weatherSlice.actions;

export default weatherSlice.reducer;