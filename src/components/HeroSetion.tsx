import React from 'react'
import { FaApple } from "react-icons/fa";
import { Button } from './ui/button';
import { FaStar } from "react-icons/fa";
function HeroSetion() {
  return (
    <div className='min-h-[85vh] rounded-xl bg-purple-100 flex justify-center flex-col'>
        <div className='flex flex-col mx-10 font-semibold leading-7'>
        <p className='text-lg mx-2 font-[400]'>Ahead app</p>
        <h3 className='text-7xl'>Master your life</h3>
        <h3 className=' text-7xl'>by mastering</h3>
        <h3 className='text-7xl'>emotions</h3>
        </div>
        <div className='flex gap-4 items-start m-10'>
            <Button size={"lg"} className="px-2">
                
                <FaApple className='size-12' size={"xl"}/> <span className='flex flex-col items-start p-2 text-sm tracking-tighter'>
                     Download on the 
                    <span className='text-xl tracking-wider'>App Store</span>
                </span>
            </Button>
            <div className='flex flex-col '>
                <section className='flex justify-between'>
                {[1,2,3,4,5].map((i) => (
                    <FaStar key={i} className='text-3xl text-yellow-400 size-5 mb-2' size={"sm"}/>
                ))}
                </section>
                <h2 className='tracking-wide text-sm'>100+ App Store reviews</h2>
            </div>
        </div>
    </div>
            
  )
}

export default HeroSetion