import { useContext } from "react";
import Children from "./Children";
import { moneyContext } from "./Grandpa";

 
const Uncle = () => {
    const [money]=useContext(moneyContext)
    return (
        <div className="border-2 mt-4 p-5 border-pink-300 rounded-lg w-[50%] mx-auto">
             <h1 className="text-xl font-bold text-center">Uncle</h1>
             <div className="flex gap-2">
                  <Children name={'rahim'}></Children>
                  <Children name={'karim'}></Children>

             </div>

             <p>dadar taka:{money}</p>
        </div>
    );
};

export default Uncle;