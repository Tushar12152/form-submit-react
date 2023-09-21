import { useState } from "react";

const StateOnForm = () => {

    const [email,setEmail]=useState(null);
    const [name,setName]=useState(null);

    const handleSubmit=e=>{
        e.preventDefault();
        console.log(email)
        console.log(name)


    }

    const handleChangeEmail=e=>{
        // console.log(e.target.value)
        setEmail(e.target.value)

    }

    const handleChangeName=e=>{
     setName(e.target.value)
    //  console.log(e.target.value)
    }
    return (
        <div>
            
            <div className="border-2 border-purple-700 w-[80%] mx-auto mt-32">
            <form onSubmit={handleSubmit}>
                  <input onChange={handleChangeName} placeholder="name" name="name" className="border-2 border-pink-500 ml-[400px] mt-10" type="text" /> <br />
                 
                  <input onChange={handleChangeEmail} placeholder="email" name="email"  required className="border-2 border-pink-500 ml-[400px] mt-10" type="text" /> <br />

                  <input className="border-2 p-2  bg-pink-500 ml-[450px] rounded-lg mt-10" type="Submit" value='Submit' />
  
              </form>
            </div>


        </div>
    );
};

export default StateOnForm;