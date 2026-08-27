"use client"
import { toogleDarkMode } from '@/lib/features/preference/preferenceSlice'
import type { RootState } from '@/lib/store/store'
import { Moon, Sun } from 'lucide-react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Preferences = () => {

  const darkMode = useSelector((state: RootState) => state.preferences.darkMode)
  const dispatch = useDispatch()

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode)
    document.body.classList.toggle("light", !darkMode)
  },[darkMode])
  
  console.log(darkMode)

  return (
    <div className='text-center space-y-3'>
        <button 
  onClick={() => dispatch(toogleDarkMode())} 
  className='cursor-pointer relative p-2 rounded-full overflow-hidden'
>
  <Sun className={`w-5 h-5 transition-all duration-300 transform ${
    darkMode ? 'opacity-0 -rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
  }`} />

  
  <Moon className={`w-5 h-5 absolute inset-2 transition-all duration-300 transform ${
    darkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'
  }`} />
</button>
    </div>
  )
}

export default Preferences