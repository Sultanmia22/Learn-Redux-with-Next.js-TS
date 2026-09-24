// src/types/weather.ts

export interface IWeatherData {
  coord: Coordinates;
  weather: WeatherCondition[];
  base: string;
  main: MainWeather;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: System;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface Coordinates {
  lon: number;
  lat: number;
}

export interface WeatherCondition {
  id: number;
  main: string;        // যেমন: "Rain", "Clear", "Clouds"
  description: string; // যেমন: "light rain", "clear sky"
  icon: string;        // যেমন: "10d"
}

export interface MainWeather {
  temp: number;        // বর্তমান তাপমাত্রা
  feels_like: number;  // অনুভূত তাপমাত্রা
  temp_min: number;
  temp_max: number;
  pressure: number;    // hPa
  humidity: number;    // %
  sea_level?: number;  // optional
  grnd_level?: number; // optional
}

export interface Wind {
  speed: number;       // m/s
  deg: number;         // degree
  gust?: number;       // optional
}

export interface Clouds {
  all: number;         // %
}

export interface System {
  country: string;     // যেমন: "BD", "US"
  sunrise: number;     // Unix timestamp
  sunset: number;      // Unix timestamp
}