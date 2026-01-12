import React from 'react'
import Tickets from './Tickets'

const MainCard = ({ticektPromise}) => {
  

  return (
     <div className="flex justify-between gap-6 max-w-[1200px] mx-auto mt-20 ">
        {/* left side div */}
        <div className='w-3/4'>
          <p className="text-2xl font-semibold mb-8">Customer Tickets</p>
          <div className=" grid grid-cols-2 gap-4">
          <Tickets ticektPromise={ticektPromise}></Tickets>
          </div>
        </div>

        {/* Right side div  */}
        <div className='w-1/4 border-2'>
          <p className="text-2xl font-semibold mb-8">Task Status</p>
          <div>

          </div>
        </div>
      </div>
  )
}

export default MainCard