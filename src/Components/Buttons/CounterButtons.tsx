"use client"
import { decrement, increment, incrementByNumber, reset } from '@/lib/features/counter/CounterSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

const CounterButtons = () => {

  const dispatch = useDispatch() 

  const handleCounter = (type: string) => {
    switch(type){
      case 'increment': 
      dispatch(increment())
      break;

      case 'decrement': 
      dispatch(decrement())
      break

      case 'reset': 
      dispatch(reset())
      break

      case "defult":
      dispatch(incrementByNumber(5))
    }
  }

  return (
    <div>
        <div className='flex items-center justify-center gap-4 '>
            <button onClick={() => handleCounter("increment")} className='outline-0 cursor-pointer border-2 border-cyan-500 transition-colors duration-300 ease-in-out hover:bg-cyan-500 hover:text-neutral-900 px-4 py-2 rounded-lg text-cyan-400 font-medium bg-transparent'>Increment</button>

            <button onClick={() => handleCounter("decrement")} className='outline-0 cursor-pointer border-2 border-neutral-600 transition-colors duration-300 ease-in-out hover:bg-neutral-600 hover:text-white px-4 py-2 rounded-lg text-neutral-300 font-medium bg-transparent'>Decriment</button>

             <button onClick={() => handleCounter("reset")} className='outline-0 cursor-pointer border-2 border-orange-500 transition-colors duration-300 ease-in-out hover:bg-orange-500 hover:text-neutral-900 px-4 py-2 rounded-lg text-orange-400 font-medium bg-transparent'>Reset</button>

              <button onClick={() => handleCounter("defult")} className='outline-0 cursor-pointer border-2 border-emerald-500 transition-colors duration-300 ease-in-out hover:bg-emerald-500 hover:text-neutral-900 px-4 py-2 rounded-lg text-emerald-400 font-medium bg-transparent'>IncrementBy5</button>
        </div>
    </div>
  )
}

export default CounterButtons