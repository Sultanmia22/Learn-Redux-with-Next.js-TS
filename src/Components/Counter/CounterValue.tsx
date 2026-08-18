"use client"
import type { RootState } from "@/lib/store/store";
import React from "react";
import { useSelector } from "react-redux";

const CounterValue = () => {

  const count = useSelector((state:RootState) => state.counter.value)

  console.log(count)

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="h-14 w-24 bg-neutral-950 border-2 border-cyan-500 text-center px-4 py-1 flex items-center justify-center my-5 rounded-lg">
          <span className="text-2xl font-mono font-bold text-cyan-400">{count}</span>
        </div>
      </div>
    </div>
  );
};

export default CounterValue;