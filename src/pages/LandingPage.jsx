import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'
import companies from '../Data/companies.json'

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"





export const LandingPage = () => {




  return (
    <div className='flex flex-col gap-10 sm:gap-20 py-10 sm:py-20'>
         <section className='text-center my-10'>
          <h1 className=' flex flex-col justify-center items-center text-4xl  sm:text-6xl lg:text-8xl font-extrabold gradient-title tracking-tighter '>Find Your dream Jop {" "}
            <span className='flex items-center justify-center'>
              and get {" "}
              <img src="/log.png" alt="" className='h-14 sm:24 lg:h-52'/>
            </span>
          </h1>
          <p className='text-gray-300 text-base md:text-lg mt-5 md:mt-0'>Explore Thousands of job listings or find the perfect candidate</p>
         </section>


       <section className="w-full">
  <div className="flex flex-col md:flex-row items-center md:justify-center gap-5">
    
    <Link to="/jobs" className='w-full md:w-auto'>
      <Button className="h-14 text-md hover:bg-blue-500 bg-blue-500 text-white w-full md:w-40 rounded-sm">
        Find Job
      </Button>
    </Link>

    <Link to="/post-job" className='w-full md:w-auto'>
      <Button variant="destructive" className="text-md h-14 w-full md:w-40 rounded-sm">
        Post Job
      </Button>
    </Link>

  </div>
</section>


<section className='w-full '>
   
    <Carousel
       plugins={[ Autoplay({ delay: 2000})]}
      className="w-full py-10"
    >
      <CarouselContent className={'w-full flex gap-20'}>
        {companies.map(({name, id , path}) => (
          <CarouselItem key={id} className="basis-1/3 md:basis-1/3 lg:basis-1/5 ">
            <div className="p-1">
              <img src={path} alt="" className='h-17' />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      
    </Carousel>
</section>

         
    </div>
  )
}
