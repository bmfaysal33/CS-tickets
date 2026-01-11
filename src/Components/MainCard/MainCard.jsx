import React from 'react'
import Tickets from './Tickets'

const MainCard = () => {
  return (
     <div className="flex justify-between items-center max-w-[1200px] mx-auto mt-20">
        {/* left side div */}
        <div>
          <p className="text-2xl font-semibold">Customer Tickets</p>
            <Tickets></Tickets>
        </div>

        {/* Right side div  */}
        <div>
          <p className="text-2xl font-semibold">Task Status</p>
          <div></div>
        </div>
      </div>
  )
}

export default MainCard