import UserContext from "../utils/UserContext";
import Typewriter from "typewriter-effect";

import User from "./User";
function About() {
  return (
    <div className="bg-gray-900 min-h-screen ">
      <h1 className=" text-center text-gray-600  text-4xl font-sans pt-16 ">
       This is About Us
      </h1>
      <h2 className="text-center text-4xl p-3 text-gray-600 mt-12">
        <Typewriter 
          options={{
            strings: ["This is a food ordering app made by ", "Vishal Kumar"],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
      <User />

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
  );
}

export default About;
