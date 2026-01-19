import React, { use, useState } from "react";
import Tickets from "./Tickets";
import { toast } from "react-toastify";

const MainCard = ({
  ticektPromise,
  progress,
  setProgress,
  resolved,
  setResolved,
}) => {
  const ticketInfo = use(ticektPromise);

  const [tickets, setTickets] = useState(ticketInfo);
  const [selectedCard, setSelectedCard] = useState([]);
  const [task, setTask] = useState([]);

  const removeCard = (cd) => {
    const fileteredCards = tickets.filter((card) => card.id !== cd.id);
    setTickets(fileteredCards);
  };

  const handleTask = (taskish) => {
    removeCard(taskish);
    const taskData = selectedCard.filter((card) => card.id !== taskish.id);
    setSelectedCard(taskData);
    setTask([...task, taskish]);
    setProgress(progress - 1);
    setResolved(resolved + 1);
    toast("Completed");
  };

  return (
    <div className="flex flex-col-reverse md:flex-row justify-between gap-6 max-w-[1200px] mx-auto mt-20 ">
      {/* left side div */}
      <div className="p-4 md:text-left md:w-3/4">
        <p className="text-2xl font-semibold mb-8">Customer Tickets</p>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
          {tickets.map((ticket) => (
            <Tickets
              removeCard={removeCard}
              ticket={ticket}
              progress={progress}
              setProgress={setProgress}
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
            ></Tickets>
          ))}
        </div>
      </div>

      {/* Right side div  */}
      <div className="md:w-1/4 text-center md:text-left ml-4">
        <p className="text-2xl font-semibold mb-2">Task Status</p>
        <div className="max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
          {/* Task Card here  */}

          {selectedCard.length === 0 ? (
            <p className=" text-gray-500 font-semibold mb-8">
              Select a ticket to add to Task Status
            </p>
          ) : (
            selectedCard.map((cards) => (
              <div className="px-4 py-2 border-2 rounded-2xl my-4">
                <h1 className="mb-3 font-semibold">{cards.title}</h1>
                <button
                  onClick={() => handleTask(cards)}
                  className="btn w-full bg-green-400 rounded-2xl"
                >
                  Complete
                </button>
              </div>
            ))
          )}
        </div>

        <p className="text-2xl font-semibold mb-2">Resolved Task</p>
        <div className="max-h-[300px] overflow-y-auto pr-2">
          {/* Task Card here  */}

          {task.length === 0 ? (
            <p className=" text-gray-500 font-semibold mb-8">
              Solve a Task to add to Solved Status
            </p>
          ) : (
            task.map((cards) => (
              <div className="px-4 py-2 border-2 bg-green-100 font-semibold rounded-2xl my-4 text-left">
                <h1 className="mb-3 font-semibold">{cards.title}</h1>
                <p className=" w-full  text-green-600 font-semibold rounded-2xl">
                  Completed
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MainCard;
