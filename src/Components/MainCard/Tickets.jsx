import React, { use } from "react";
import { toast } from "react-toastify";

const Tickets = ({
  progress,
  setProgress,
  setSelectedCard,
  selectedCard,
  ticket,
}) => {
  const handleProgress = (card) => {
    const isAlreadySelected = selectedCard.find((cd) => cd.id === card.id);
    if (!isAlreadySelected) {
      setProgress(progress + 1);
      setSelectedCard([...selectedCard, card]);
      toast("In-progress");
    } else {
      toast.warn("Already Selected");
    }

    // console.log(card)
  };
  const isSelected = selectedCard.find((item) => item.id === ticket.id);

  return (
    <div
      onClick={() => {
        handleProgress(ticket);
      }}
      className={`border-2 rounded-xl p-4 ${isSelected ? "opacity-50 cursor-not-allowed bg-gray-100" : "hover:cursor-pointer hover:border-blue-400 hover:bg-blue-100"} `}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold">{ticket.title}</h3>
        <button
          className={`btn rounded-full ${ticket.status === "Open" ? "bg-green-300 text-green-800" : "bg-yellow-300 text-yellow-800"}`}
        >
          {ticket.status}
        </button>
      </div>

      <p className="text-gray-600">{ticket.description}</p>
      <div className="flex flex-col md:flex-row gap-3 justify-between items-center mt-4">
        <div className="flex justify-between items-center">
          <p className="mr-3 text-gray-600">#{ticket.id}</p>
          <p
            className={`font-bold ${ticket.priority === "Critical" ? "text-red-800" : ticket.priority === "High" ? "text-red-500" : ticket.priority === "Medium" ? "text-amber-500" : "text-emerald-600"}`}
          >
            {ticket.priority}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="mr-5 text-gray-600">{ticket.customer}</p>
          <p className="text-gray-600 flex items-center">
            <img className="mr-2" src="/calendar.png" alt="" />
            {ticket.createdAt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
