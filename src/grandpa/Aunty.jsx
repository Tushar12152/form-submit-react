import { useContext } from "react";
import Children from "./Children";
import { moneyContext } from "./Grandpa";


const Aunty = () => {
    const [money,setMoney]=useContext(moneyContext)
    return (
        <div className="border-2 mt-4 border-pink-300 p-5 rounded-lg w-[50%] mx-auto">
             <h1 className="text-xl font-bold text-center">Aunty</h1>
            <div className="flex gap-2">
               <Children name={"kodu"}></Children>
               <Children name={"modhu"}></Children>
            </div>
 
    <h1  className="text-xl font-semibold text-center mt-12">dadar taka:{money}</h1>
             <button onClick={()=>setMoney(money+1000)} className="bg-purple-400 p-2 rounded-xl ml-24  mt-4">Add 1000 tk</button>
        </div>
    );
};

export default Aunty;