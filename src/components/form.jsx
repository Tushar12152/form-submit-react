
const Form = () => {
    const handleSubmit=e=>{
        e.preventDefault();
        console.log("submitted");
        console.log(e.target.name.value);
        console.log(e.target.email.value);
       
    }

    return (
        <div>
       
            <div className="border-2 border-purple-700 w-[80%] mx-auto mt-32">
            <form onSubmit={handleSubmit}>
                  <input placeholder="name" name="name" className="border-2 border-pink-500 ml-[400px] mt-10" type="text" /> <br />
                 
                  <input placeholder="email" name="email" className="border-2 border-pink-500 ml-[400px] mt-10" type="text" /> <br />

                  <input className="border-2 p-2  bg-pink-500 ml-[450px] rounded-lg mt-10" type="Submit" value='Submit' />


                 
              </form>
            </div>
        </div>
    );
};

export default Form;