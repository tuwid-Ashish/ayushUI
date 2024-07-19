import Link from 'next/link'
import React from 'react'
import { Button } from "@/components/ui/button"


function Navbar() {
    const navitems= [
        {
            name: "Emotions",
            link: "/emotions"
        },
        {
            name:"Manifesto",
            link:"/manifesto"
        },
        {
            name:"self-awareness test",
            link:"/self-awareness"
        },
        {
            name:"work with us",
            link:"/work-with-us"
        }
    ]
  return (
    <div className='mx-4 flex justify-between items-center'>
        <div className='p-2 mx-4 '>
            <img src="/public/image.png" alt=""  className='size-20'/>
        </div>
        <div className='flex justify-between items-center gap-5 '>
        {navitems.map((item, index) => (
            <Link href={item.link} key={index} className='m-4'>
                <h2 className='text-base font-semibold'>{item.name}</h2>
            </Link>
        ))}
        </div>
        <Button variant={"default"} className='p-6 mx-4 text-base rounded-full'>Download app</Button>
    </div>
  )
}

export default Navbar