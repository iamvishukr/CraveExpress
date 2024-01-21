import User from "./User";
function About() {
  return (
    
    <div className="bg-pink-500 hover:bg-purple-400 h-[500px] w-[1200px] ml-44">
            <h1 className=" text-center font-bold text-8xl font-sans ">About</h1>
            <h2 className="text-center text-4xl p-3 mt-12">This is a food ordering app made by Vishal Kumar.</h2>
             <User/>   
    </div>
  )
}

export default About;