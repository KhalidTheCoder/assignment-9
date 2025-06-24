import React, { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaGithub, FaDribbble, FaTwitter, FaEdit } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router";

const Profile = () => {
  const { user } = use(AuthContext);

  return (
    <div
      style={{ minHeight: "calc(100vh - 250px)" }}
      className="flex justify-center items-center bg-gray-50 "
    >
      <div className="flex flex-col items-center justify-center w-xs md:w-xl p-6 rounded-xl shadow-md bg-white text-gray-800">
        <img
          src={
            user?.photoURL || "https://source.unsplash.com/150x150/?portrait?3"
          }
          alt="Profile"
          className="w-32 h-32 mx-auto rounded-full object-cover aspect-square border-4 border-gray-300"
        />

        <div className="w-full mt-4 space-y-3 text-center border-t pt-4 border-gray-200">
          <div>
            <h2 className="text-xl font-semibold sm:text-2xl">
              {user?.displayName || "John Doe"}
            </h2>
            <p className="text-sm text-gray-600">
              {user?.email || "your.email@example.com"}
            </p>
          </div>

          <div className="flex justify-center space-x-4">
            <a
              href="#"
              aria-label="GitHub"
              className="text-gray-800 hover:text-violet-600 transition-colors text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              aria-label="Dribbble"
              className="text-gray-800 hover:text-violet-600  transition-colors text-xl"
            >
              <FaDribbble />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-800 hover:text-violet-600 transition-colors text-xl"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              aria-label="Email"
              className="text-gray-800 hover:text-violet-600 transition-colors text-xl"
            >
              <HiOutlineMail />
            </a>
          </div>
        </div>

        <div className="mt-4">
          <Link to="/updateprofile" className="btn btn-neutral">
            <FaEdit className="text-lg" />
            Update Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
