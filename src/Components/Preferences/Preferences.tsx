import React from 'react'

const Preferences = () => {
  return (
    <div className='text-center space-y-3'>
        <h2 className='text-2xl font-semibold text-neutral-100'>Preferences</h2>

        <p className='text-neutral-400'>Dark Mode: Disable / Enable</p>

        <button className='px-3 py-1.5 font-medium text-neutral-950 bg-cyan-500 hover:bg-cyan-400 rounded-lg transition cursor-pointer'>Toggle Dark Mode</button>
    </div>
  )
}

export default Preferences