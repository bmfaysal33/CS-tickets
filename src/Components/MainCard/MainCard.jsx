import React from "react";
import Tickets from "./Tickets";

const MainCard = ({
  ticektPromise,progress, setProgress, setSelectedCard, selectedCard
}) => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between gap-6 max-w-[1200px] mx-auto mt-20 ">
      {/* left side div */}
      <div className="p-4 md:text-left md:w-3/4">
        <p className="text-2xl font-semibold mb-8">Customer Tickets</p>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
          <Tickets
            
            ticektPromise={ticektPromise}
             progress={progress} setProgress={setProgress}
             selectedCard={selectedCard} setSelectedCard={setSelectedCard}
          ></Tickets>
        </div>
      </div>

      {/* Right side div  */}
      <div className="md:w-1/4 text-center md:text-left ml-4">
        <p className="text-2xl font-semibold mb-2">Task Status</p>
        <div>
          {/* Task Card here  */}
          
          
            {selectedCard.length === 0 ? 
            <p className=" text-gray-500 font-semibold mb-8">
            Select a ticket to add to Task Status
          </p> : 
          
            selectedCard.map(cards => <div className="px-4 py-2 border-2 rounded-2xl my-4">
            <h1 className="mb-3 font-semibold">{cards.title}</h1>
            <button className="btn w-full bg-green-400 rounded-2xl">
              Complete
            </button>
          </div>)
          
          }
          
          
          
        </div>

        <p className="text-2xl font-semibold mb-2">Resolved Task</p>
        <div>
          
          {/* Task Card here  */}
          <div className="px-4 py-2 border-2 rounded-2xl my-4">
            <h1 className="mb-3 font-semibold">Payment Failed - card</h1>
            <button className="btn w-full bg-green-400 rounded-2xl">
              Solved
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
