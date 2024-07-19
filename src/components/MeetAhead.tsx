import React from 'react'

function MeetAhead() {
  return (
        <div className='min-h-[85vh] my-10 rounded-3xl bg-orange-50 flex justify-between items-center'>
            <div className='flex flex-col mx-20 font-semibold leading-7'>
            <p className='text-lg mx-2 font-[400]'>Build out of frustration</p>
            <h3 className='text-5xl mb-10'>Meet the ahead app</h3>
            <img src="https://img.freepik.com/premium-photo/cute-halloween-ghost-mascot_567420-699.jpg?w=740" alt="" className='size-60 mx-auto ' />
            </div>
            <div className='flex gap-4 items-start flex-col pe-40 max-w-[40%]'>
                    <h2 className='text-base'>personalized pocket coach that provides bite-sized,science-driven tools to boost emotional intelligence.</h2>
                    <h2 className='mt-4 text-base'>
                        Think of it as a packet cheerleader towards your emotional well-being.
                    </h2>
                </div>
            </div>
  )
}

export default MeetAhead