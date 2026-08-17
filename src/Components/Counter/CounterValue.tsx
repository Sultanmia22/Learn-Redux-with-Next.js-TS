"use client"
import type { RootState } from "@/lib/store";
import React from "react";
import { useSelector } from "react-redux";

const CounterValue = () => {

  const count = useSelector((state:RootState) => state.counter.value)

  console.log(count)

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="h-10 w-20 bg-cyan-800 text-center px-4 py-1 flex items-center justify-center my-5 rounded-lg">
          <span>{count}</span>
        </div>
      </div>
    </div>
  );
};

export default CounterValue;
