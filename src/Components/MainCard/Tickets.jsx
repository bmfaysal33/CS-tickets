import React from 'react'

const Tickets = () => {
  return (
    <div className="border-2 rounded-sm p-4">
        <div className="flex items-center justify-between mb-4">
            <h3>Login Issues - Can't Access Account</h3>
            <button className='btn rounded-full bg-green-300 text-green-800'>Open</button>
        </div>
        <p>Customer is unable to log in to their account. They've tried resetting their password multiple times but still...</p>
        <div className="flex justify-between items-center mt-4">
            <div className="flex justify-between items-center">
                <p className='mr-3'>#1001</p>
                <p>HIGH PRIORITY</p>
            </div>
            <div className="flex justify-between items-center">
                <p className='mr-4'>John Smith</p>
                <p>1/12/2025</p>
            </div>
        </div>
    </div>
  )
}

export default Tickets