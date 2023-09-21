
import Children from "./Children";
import Myself from "./Myself";


const Dad = () => {
    return (
        <div className="border-2 p-5 mt-4 border-pink-300 rounded-lg w-[50%] mx-auto">
               <h1 className="text-xl font-bold text-center">dad</h1>
              <div className="flex gap-2">
              <Myself></Myself>
               <Children name={'bon'}></Children>
              </div>
        </div>
    );
};

export default Dad;