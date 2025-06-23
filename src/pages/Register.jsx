import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;

    if (name.length < 5) {
      setError("Name should be at least 5 characters");
      return;
    }

    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError("Password must be at least 6 characters or long.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    } else if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      return;
    }

    setError("");

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser({
              ...user,
              displayName: name,
              photoURL: photo,
            });

            navigate(`${location.state ? location.state : "/"}`);
          })
          .catch((error) => {
            console.error("Profile update error:", error);
            toast.error("Profile update failed!", {
              duration: 2000,
              icon: "⚠️",
            });
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
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
          Register your account
        </h2>
        <p className="text-sm text-center font-medium text-gray-600 mb-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-purple-600 font-semibold hover:underline focus:underline"
          >
            Sign in here
          </Link>
        </p>

        <div className="my-6 space-y-4">
          <button className="btn w-full btn-outline btn-info">
            <FcGoogle size={24}></FcGoogle> Login With Google
          </button>
        </div>

        <div className="flex items-center w-full my-4">
          <hr className="w-full border-gray-400" />
          <p className="px-2 text-gray-600 text-sm">OR</p>
          <hr className="w-full border-gray-400" />
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full px-3 py-2 border rounded-md border-gray-400 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
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
            <label className="block mb-1 text-sm font-medium">Photo URL</label>
            <input
              type="text"
              id="photo"
              name="photo"
              placeholder="Your Photo URL"
              className="w-full px-3 py-2 border rounded-md border-gray-400 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••"
              className="w-full px-3 py-2 border rounded-md border-gray-400 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            {error && (
              <p className="text-red-400 text-xs font-medium mt-1">{error}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 font-semibold rounded-md bg-black text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
