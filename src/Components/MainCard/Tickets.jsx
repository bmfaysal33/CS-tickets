import React, { use } from 'react'

const Tickets = ({ticektPromise, selectedCard, setSelectedCard, handleProgress}) => {
    const ticketInfo = use(ticektPromise)
    
    
      
    //   console.log(ticketInfo)
  return (
<>
{
    ticketInfo.map(ticket =>  <div onClick={()=> handleProgress(ticket.title)} className="border-2 rounded-xl p-4 hover:cursor-pointer">
        <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold">{ticket.title}</h3>
            <button className={`btn rounded-full text-green-800 ${ ticket.status === "Open"? "bg-green-400":"bg-yellow-400" }`}>{ticket.status}</button>
        </div>
        <p className='text-gray-600'>{ticket.description}</p>
        <div className="flex flex-col md:flex-row gap-3 justify-between items-center mt-4">
            <div className="flex justify-between items-center">
                <p className='mr-3 text-gray-600'>#{ticket.id}</p>
                <p className='text-red-600'>{ticket.priority}</p>
            </div>
            <div className="flex justify-between items-center">
                <p className='mr-5 text-gray-600'>{ticket.customer}</p>
                <p className='text-gray-600 flex items-center'><img className='mr-2' src="/calendar.png" alt="" />{ticket.createdAt}</p>
            </div>
        </div>
    </div>)
}
</>

  )
}

export default Tickets