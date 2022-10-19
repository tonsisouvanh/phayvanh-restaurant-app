import { AiFillLock } from "react-icons/ai";
import { FaStarOfLife } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";

const Login = () => {

  return (
    <div className="w-full h-screen flex items-center">
      <div className="max-w-[700px] p-8 w-full mx-auto">
        <div className="shadow-xl rounded-lg border border-gray-100">
          <div className="flex gap-1 items-center border-b-[1px] p-4">
            <AiFillLock className="text-xl"/>
            <h1 className="font-bold text-xl">Login</h1>
          </div>
          <form className="flex flex-col p-4 gap-8" action="">
            <div>
              <label className="">Login</label>
              <div className="flex mt-2 p-3 items-center border rounded-lg">
                <BsPersonFill className="mr-1" />
                <input
                  className="outline-none"
                  type="email"
                  placeholder="user@hotmail.com"
                />
              </div>
              <p className="text-[13px] mt-1 text-gray-500">
                Please enter your login
              </p>
            </div>

            <div>
              <label className="">Password</label>
              <div className="flex mt-2 p-3 items-center border rounded-lg">
                <FaStarOfLife className="mr-1" />
                <input
                  className="outline-none"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <p className="text-[13px] mt-1 text-gray-500">
                Please enter your login
              </p>
            </div>

            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <span>Remember</span>
            </div>

            <div className="flex gap-3">
              <button className="w-fit px-7 py-2 rounded-md text-white bg-blue-600">Login</button>
              <button className="w-fit px-7 py-2 rounded-md border">Back</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
