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
            <button onClick={() => handleCounter("increment")} className='outline-0 cursor-pointer hover:border transition-colors duration-300 ease-in-out hover:border-blue-700 px-4 py-2 rounded-lg border-white text-white font-normal bg-gray-400 border-2'>Increment</button>
            <button onClick={() => handleCounter("decrement")} className='outline-0 cursor-pointer hover:border-2  transition-colors duration-300 ease-in-out hover:border-blue-700 px-4 py-2 rounded-lg border-white text-white font-normal bg-gray-400 border-2'>Decriment</button>

             <button onClick={() => handleCounter("reset")} className='outline-0 cursor-pointer hover:border-2  transition-colors duration-300 ease-in-out hover:border-blue-700 px-4 py-2 rounded-lg border-white text-white font-normal bg-gray-400 border-2'>Reset</button>

              <button onClick={() => handleCounter("defult")} className='outline-0 cursor-pointer hover:border-2  transition-colors duration-300 ease-in-out hover:border-blue-700 px-4 py-2 rounded-lg border-white text-white font-normal bg-gray-400 border-2'>IncrementBy5</button>
        </div>
    </div>
  )
}

export default CounterButtons