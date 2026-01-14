import { Suspense, useState } from "react";
import "./App.css";
import MainCard from "./Components/MainCard/MainCard";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const ticketData = async () => {
      const res = await fetch("/CardData.json")
      return res.json()
    }
    
    const ticektPromise = ticketData()


    function App() {   

      const [progress, setProgress] = useState(0)
      const [selectedCard, setSelectedCard]= useState([])
      
      const handleProgress = (title)=> {
        setProgress(progress + 1)
        setSelectedCard((p)=> [...selectedCard, <div className="px-4 py-2 border-2 rounded-2xl my-4">
                <h1 className="mb-3 font-semibold">{title}</h1>
                <button className="btn w-full bg-green-400 rounded-2xl">Complete</button>
          </div>])
      }
      
      // console.log(data)
      return (
    <>
      <Navbar></Navbar>

      {/* Banner  */}
      <div className="flex justify-between p-4 gap-5 mt-20 max-w-[1200px] mx-auto">
        {/* Card 01 */}
        <div className="card-vec bg-img-left">
          {/* Texts */}
          <div className="relative z-10 text-center text-white">
            <p>In-Progress</p>
            <h1 className="text-4xl font-semibold mt-1">{progress}</h1>
          </div>
        </div>

        {/* Card 02 */}
        <div className="card-vec bg-img-right">
          {/* Texts */}
          <div className="relative z-10 text-center text-white">
            <p>Resolved</p>
            <h1 className="text-4xl font-semibold mt-1">0</h1>
          </div>
        </div>
      </div>

        <Suspense fallback={<h1>I'm coming...</h1>}>
          <MainCard handleProgress={handleProgress} ticektPromise={ticektPromise} selectedCard={selectedCard} setSelectedCard={setSelectedCard}></MainCard>
        </Suspense>
        <Footer></Footer>
     
    </>
  );
}

export default App;
