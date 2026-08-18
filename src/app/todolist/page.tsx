
import Preferences from '@/Components/Preferences/Preferences'
import TodoList from '@/Components/TodoList/TodoList'
import React from 'react'

const FetchData = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      
      <section>
         <TodoList />
      </section>

      <section>
       <Preferences />
      </section>
    </div>
  )
}

export default FetchData