// src/components/WeatherCard.tsx

import {
  MapPin,
  Calendar,
  Droplets,
  Wind,
  Gauge,
  Eye,
  Sunrise,
  Sunset,
} from "lucide-react";
import { IWeatherData } from "@/types/weather.interface";
import Image from "next/image";

interface WeatherCardProps {
  weatherData: IWeatherData;
}

const WeatherCard = ({ weatherData }: WeatherCardProps) => {
  if (!weatherData) return null;

  const {
    name,
    sys: { country, sunrise, sunset },
    main: { temp, feels_like, humidity, pressure },
    weather: [{ description, icon }],
    wind: { speed },
    visibility,
    dt,
  } = weatherData;

  const formatTime = (timestamp: number) =>
    new Date(timestamp * 1000).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

  const currentDate = new Date(dt * 1000).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-full max-w-sm bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl shadow-xl text-white p-5">
      {/* Header: City & Date */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-1.5">
          <MapPin size={16} className="text-white/80" />
          <h2 className="text-lg font-bold">
            {name}, {country}
          </h2>
        </div>
        <div className="flex items-center gap-1 text-xs text-white/80">
          <Calendar size={12} />
          <span>{currentDate}</span>
        </div>
      </div>

      {/* Main Temp Section (Horizontal layout to reduce height) */}
      <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-3 mb-4">
        <Image
          src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
          alt={description}
          width={90}
          height={90}
          className="drop-shadow-md"
        />
        <div className="text-right">
          <p className="text-4xl font-bold leading-none">
            {Math.round(temp)}°C
          </p>
          <p className="text-xs capitalize text-white/90 mt-1">{description}</p>
          <p className="text-[10px] text-white/70 mt-0.5">
            Feels like {Math.round(feels_like)}°
          </p>
        </div>
      </div>

      {/* Metrics Row (Single row instead of grid to save vertical space) */}
      <div className="flex justify-between px-1 mb-4 text-center">
        <div className="flex flex-col items-center gap-1">
          <Droplets size={16} className="text-white/80" />
          <span className="text-[10px] text-white/70">Humidity</span>
          <span className="text-xs font-semibold">{humidity}%</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Wind size={16} className="text-white/80" />
          <span className="text-[10px] text-white/70">Wind</span>
          <span className="text-xs font-semibold">{speed} m/s</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Gauge size={16} className="text-white/80" />
          <span className="text-[10px] text-white/70">Pressure</span>
          <span className="text-xs font-semibold">{pressure} hPa</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Eye size={16} className="text-white/80" />
          <span className="text-[10px] text-white/70">Visibility</span>
          <span className="text-xs font-semibold">
            {(visibility / 1000).toFixed(0)} km
          </span>
        </div>
      </div>

      {/* Sunrise & Sunset (Compact bar) */}
      <div className="flex justify-between items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-xs">
        <div className="flex items-center gap-2">
          <Sunrise size={14} className="text-yellow-200" />
          <div>
            <p className="text-white/60 text-[10px]">Sunrise</p>
            <p className="font-semibold">{formatTime(sunrise)}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Sunset size={14} className="text-orange-200" />
          <div>
            <p className="text-white/60 text-[10px]">Sunset</p>
            <p className="font-semibold">{formatTime(sunset)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
