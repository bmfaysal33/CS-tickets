import "./App.css";
import MainCard from "./Components/MainCard/MainCard";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>

      {/* Banner  */}
      <div className="flex justify-around gap-5 mt-20 max-w-[1200px] mx-auto">
        {/* Card 01 */}
        <div className="card-vec bg-img-left">
          {/* Texts */}
          <div className="relative z-10 text-center text-white">
            <p>In-Progress</p>
            <h1 className="text-4xl font-semibold mt-1">0</h1>
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

        <MainCard></MainCard>
     
    </>
  );
}

export default App;
