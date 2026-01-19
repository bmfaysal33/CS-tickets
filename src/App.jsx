import { Suspense, use, useState } from "react";
import "./App.css";
import MainCard from "./Components/MainCard/MainCard";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const ticketData = async () => {
  const res = await fetch("/CardData.json");
  return res.json();
};

const ticektPromise = ticketData();

function App() {
const [progress, setProgress] = useState(0);
const [resolved, setResolved]= useState(0)
 

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
            <h1 className="text-4xl font-semibold mt-1">{resolved}</h1>
          </div>
        </div>
      </div>

      <Suspense fallback={<h1>I'm coming...</h1>}>
        <MainCard ticektPromise={ticektPromise} progress={progress} setProgress={setProgress} resolved={resolved} setResolved={setResolved}></MainCard>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
