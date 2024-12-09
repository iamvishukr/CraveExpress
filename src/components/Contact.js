// import { Linkedin } from "lucide-react";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Contact = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <h1 className="text-gray-600 text-6xl text-center pt-24">Contact Us</h1>
      <h1 className="text-gray-600 text-2xl text-center pt-24">
        <Typewriter
          options={{
            strings: ["iamvishukr.dev@gmail.com", "Ranchi Jharkhand India"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <div className="flex space-x-6 justify-center mt-8">
        <div className="bg-white w-fit rounded-2xl mt-6 ">
          <Link to={"https://www.linkedin.com/in/vishu23/"}>
            {" "}
            <LiaLinkedin color="blue" size={60} />{" "}
          </Link>
        </div>
        <div className="bg-white w-fit rounded-2xl mt-6">
          <Link to={"https://github.com/iamvishukr"}>
            {" "}
            <BsGithub color="red" size={60} />{" "}
          </Link>
        </div>
        <div className="bg-white w-fit rounded-2xl  mt-6">
          <Link to={"https://www.linkedin.com/in/vishu23/"}>
            {" "}
            <BsTwitter color="blue" size={60} />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
