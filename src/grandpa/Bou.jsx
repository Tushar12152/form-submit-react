import { useContext } from "react";
import { RingContext } from "./Grandpa";

const Bou = () => {
    
    const dadirDewaGift=useContext(RingContext)
    return (
        <div className="border-2 p-5 mt-4 border-pink-300 rounded-lg w-[80%] mx-auto">
             <h1  className="text-xl font-bold text-center">Bou</h1>
              <p>Has :{dadirDewaGift} </p>
        </div>
    );
};

export default Bou;