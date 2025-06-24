import React, { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FiRefreshCw } from "react-icons/fi";
import { useNavigate } from "react-router";

const UpdateProfile = () => {
  const { updateUserProfile } = use(AuthContext);
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    updateUserProfile(name, photo)
      .then(() => {
        e.target.reset();
         navigate("/profile");
      })
      .catch(() => {});
  };
  return (
    <div
      style={{ minHeight: "calc(100vh - 250px)" }}
      className="flex justify-center items-center bg-gray-50"
    >
      <div className="w-full max-w-sm p-6 bg-white  rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 ">
          Update Profile
        </h2>
        <form className="p-5" onSubmit={handleUpdate}>
          <div className="mb-3">
            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </g>
              </svg>
              <input type="text" name="name" required placeholder="Username" />
            </label>
          </div>

          <div className="mb-2">
            <label className="input validator">
              <svg
                className="h-[1em] opacity-50 inline-block mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14l4-4h10l4 4z"></path>
                </g>
              </svg>
              <input
                type="text"
                name="photo"
                required
                placeholder="Photo URL"
              />
            </label>
          </div>

          <div className="flex justify-center">
            <button type="submit" className="btn bg-purple-700 border-none text-white  mt-5">
            Update <FiRefreshCw className="text-lg" />
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
