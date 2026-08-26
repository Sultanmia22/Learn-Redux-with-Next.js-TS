"use client"
import { toogleDarkMode } from '@/lib/features/preference/preferenceSlice'
import type { RootState } from '@/lib/store/store'
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
        <h2 className='text-2xl font-semibold text-neutral-900 dark:text-gray-100 '>Preferences</h2>

        <p className='text-neutral-400'>Dark Mode: {darkMode ? "Enabled" : "disabled"}</p>

        <button onClick={() => dispatch(toogleDarkMode())} className='px-3 py-1.5 font-medium text-neutral-900 dark:text-gray-100 bg-cyan-500 hover:bg-cyan-400 rounded-lg transition cursor-pointer '>Toggle Dark Mode</button>
    </div>
  )
}

export default Preferences