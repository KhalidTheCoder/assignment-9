import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, googleSignIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

    const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result);
        toast.success("Signed in with Google!");
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error("Google sign in failed!");
        console.error(error);
      });
  };


  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("Signed In Successfully");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        toast.error(errorMessage, {
          duration: 2000,
          icon: "❌",
        });
      });
  };
  return (
    <div
      style={{ minHeight: "calc(100vh - 250px)" }}
      className="min-h-screen flex items-center justify-center bg-gray-50 p-4"
    >
      <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-white text-black">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Login to your account
        </h2>
        <p className="text-sm text-center font-medium text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/register"
            state={location.state}
            className="text-purple-600 font-semibold hover:underline focus:underline"
          >
            Sign up here
          </Link>
        </p>

        <div className="my-6 space-y-4">
          <button onClick={handleGoogleSignIn} className="btn w-full btn-outline btn-info">
            <FcGoogle size={24}></FcGoogle> Login With Google
          </button>
        </div>

        <div className="flex items-center w-full my-4">
          <hr className="w-full border-gray-400" />
          <p className="px-2 text-gray-600 text-sm">OR</p>
          <hr className="w-full border-gray-400" />
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-3 py-2 border rounded-md border-gray-400 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <a
                href="#"
                className="text-xs text-black font-semibold hover:underline"
              >
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••"
              className="w-full px-3 py-2 border rounded-md border-gray-400 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 font-semibold rounded-md bg-black text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
