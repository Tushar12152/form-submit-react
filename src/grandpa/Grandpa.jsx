import { createContext, useState } from "react";
import Aunty from "./Aunty";
import Dad from "./Dad";
import Uncle from "./Uncle";

 export  const RingContext=createContext('Diamon Rong')
 export const moneyContext=createContext(1000)

const Grandpa = () => {
    const [money,setMoney]=useState(1000)

    return (
        <div className="border-2 p-5 mt-48 border-pink-300 rounded-lg w-[80%] mx-auto">
             <h1 className="text-xl font-bold text-center">Grandpa</h1>
             <h2 className="text-xl font-semibold text-center"> money:{money}</h2>
              <moneyContext.Provider value={[money,setMoney]}>

              <RingContext.Provider value="Diamond ring">
              <div className="flex gap-2">
              <Dad></Dad>
               <Uncle></Uncle>
               <Aunty></Aunty>
              </div>
              </RingContext.Provider>
              </moneyContext.Provider>

        </div>
    );
};

export default Grandpa;