import React from 'react'
import { Search } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'


function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between items-center bg-white'>
        <div className='flex gap-2 items-center p-2 border rounded-md max-w-md bg-white'>
            <Search />
            <input type="text" placeholder="Search..." name="" id="" 
            className='outline-none'/>

        </div>
        <div className='flex  gap-5 items-center '>
          <div className='bg-primary p-2 rounded-full text-xs text-white px-2'>
            <h2>Try For Free For next 30 days </h2>
          </div>
          <UserButton />
        </div>

    </div>
  )
}

export default Header