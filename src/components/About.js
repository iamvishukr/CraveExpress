import UserContext from "../utils/UserContext";
import User from "./User";
function About() {
  
  return (
    
    <div className="bg-pink-500 hover:bg-purple-400 h-[500px] w-[1200px] ml-44">
            <h1 className=" text-center font-bold text-8xl font-sans ">About</h1>
            <h2 className="text-center text-4xl p-3 mt-12">This is a food ordering app made by Vishal Kumar.</h2>
             <User/> 

{/*  this is how we can use context in class based component since we can't use Hooks here !!!

            <div>
              <UserContext.Consumer>
                {({random})=>
                    <h1 className="text-2xl">{random}</h1>
                }
              </UserContext.Consumer>
            </div>
                                                                        */}


    </div>
  )
}

export default About;