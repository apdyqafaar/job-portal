import { Header } from '@/components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className='grid-background '>
      
        <div className='min-h-screen container px-2 lg:px-20 mx-auto'>
           <Header/>
          <Outlet/>
          
        </div>
       
        <div className='bg-gray-600 text-white py-14 flex items-center justify-center'>
           developed by apdiqafaar ❤️
        </div>
    </div>
  
  )
}
