import React from 'react'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Button } from './ui/button';
function Quickguide() {
    return (
        <div className='min-h-[85vh] my-10 rounded-3xl bg-blue-50 flex flex-col justify-center items-center'>
            <div className='flex flex-col mx-20 font-semibold leading-7'>
            <p className='text-lg mx-2 font-[400]'>Build out of frustration</p>
            <h3 className='text-5xl mb-10'>Meet the ahead app</h3>
            </div>
            <div className='relative flex gap-4 items-start flex-col pe-40 max-w-[40%]'>
                    <div className='relative flex'>
                    <Button size={"icon"} className="px-2 absolute z-20 hover:bg-none rounded-full bg-orange-700 left-3 top-3">1</Button>
                    <RiVerifiedBadgeFill className='text-5xl text-orange-500 size-16' />
                    <div className="border-t border-8 border-dashed border-orange-500 w-full"></div>
                    </div>
                    <div className='bg-orange-400 size-2 my-auto'></div>
                    <h2 className='mt-4 text-base'>
                        Think of it as a packet cheerleader towards your emotional well-being.
                    </h2>
                </div>
            </div>
  )

}

export default Quickguide