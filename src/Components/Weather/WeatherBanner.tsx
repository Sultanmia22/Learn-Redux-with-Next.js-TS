"use client";
import { FetchweatherData } from "@/lib/features/weather/weatherSlice";
import type { AppDispatch, RootState } from "@/lib/store/store";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { X, ArrowLeft } from "lucide-react";
import WeatherCard from "./WeatherCard";

const WeatherBanner = () => {
  const [clickForSearch, setClickForSearch] = useState<boolean>(false);
  const [city, setCity] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const { weatherData } = useSelector((state: RootState) => state?.weather);

  const handleSearchWeather = () => {
    if (city.trim() !== "") {
      dispatch(FetchweatherData(city));
    }
  };

  const handleCloseSearch = () => {
    setClickForSearch(false);
    setCity("");
  };

  // কী দেখাবো তার লজিক
  const showInitialButton = !clickForSearch && !weatherData;
  const showSearchBox = clickForSearch;
  const showWeatherCard = !!weatherData;

  return (
    <div>
      <div className="relative h-[500px] w-full border-2 overflow-hidden">
        <Image
          src="/Weather-hero.avif"
          alt="weather-banner"
          width={1000}
          height={500}
          className="w-full h-full object-cover"
        />

        {/* Centered Overlay Wrapper */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          
          {/* ১. Initial Search Button */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              showInitialButton ? "opacity-100 max-h-20" : "opacity-0 max-h-0 pointer-events-none"
            }`}
          >
            <button
              onClick={() => setClickForSearch(true)}
              className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition shadow-lg"
            >
              Click For Search
            </button>
          </div>

          {/* ২. Search Input Area (স্মুথ ট্রানজিশনের জন্য max-h ব্যবহার করা হলো) */}
          <div
            className={`flex items-center gap-3 transition-all duration-500 ease-in-out overflow-hidden ${
              showSearchBox 
                ? "opacity-100 scale-100 max-h-20" 
                : "opacity-0 scale-95 max-h-0 pointer-events-none"
            }`}
          >
            <button
              onClick={handleCloseSearch}
              className="p-2.5 rounded-full bg-white/90 text-cyan-600 hover:bg-white transition shadow-lg flex-shrink-0"
              title="Close Search"
            >
              <X size={20} strokeWidth={2.5} />
            </button>

            <input
              onChange={(e) => setCity(e.target.value)}
              type="search"
              className="border-2 border-cyan-600 text-cyan-600 font-bold shadow py-2 w-64 rounded focus:outline-0 px-5 placeholder:text-base placeholder:text-cyan-600 placeholder:font-normal bg-white/90 backdrop-blur-sm"
              placeholder="Enter Your City Name"
            />
            <button
              onClick={handleSearchWeather}
              className="bg-cyan-600 text-white px-6 py-2 rounded hover:bg-cyan-800 transition shadow-lg flex-shrink-0"
            >
              Search
            </button>
          </div>

          {/* ৩. Weather Card Area */}
          <div
            className={`flex flex-col items-center gap-4 transition-all duration-500 ease-in-out overflow-hidden ${
              showWeatherCard ? "opacity-100 max-h-[600px]" : "opacity-0 max-h-0 pointer-events-none"
            }`}
          >
            {/* Search Another City Button (কন্ডিশনাল রেন্ডারিং এর বদলে opacity ব্যবহার করা হলো) */}
            <button
              onClick={() => setClickForSearch(true)}
              className={`flex items-center gap-2 bg-white/90 text-cyan-600 px-5 py-2 rounded-full shadow-lg hover:bg-white transition font-semibold overflow-hidden ${
                showWeatherCard && !clickForSearch 
                  ? "opacity-100 max-h-20" 
                  : "opacity-0 max-h-0 pointer-events-none"
              }`}
            >
              <ArrowLeft size={16} /> Search Another City
            </button>

            <WeatherCard weatherData={weatherData} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default WeatherBanner;