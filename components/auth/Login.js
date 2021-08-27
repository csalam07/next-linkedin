import LottieFiles from "./LottieFiles";
import { signIn } from "next-auth/client";

function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-linkedin">
      <div className="flex flex-col ">
        <LottieFiles />
        <h1
          onClick={signIn}
          className="mt-10 p-5 bg-[#0077B5] rounded-full cursor-pointer text-white text-center 
       transform transition duration-300 ease-in hover:scale-105 hover:shadow-xl "
        >
          Login with LinkedIn
        </h1>
      </div>
    </div>
  );
}

export default Login;
