import React from "react";

const Steps = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-100">
            How it works
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="how-it-works-pattern"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect fill="url(#how-it-works-pattern)" width="52" height="24" />
            </svg>
            <span className="relative">Simple</span>
          </span>{" "}
          Steps To Pay Your Bills
        </h2>
        <p className="text-base font-medium text-gray-700 md:text-lg">
          Follow these easy steps to pay your electricity, gas, internet, or
          tuition bills securely.
        </p>
      </div>

      <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-violet-500 bg-indigo-50 sm:mx-auto">
            1
          </div>
          <h6 className="mb-2 font-semibold text-xl leading-5">Login / Register</h6>
          <p className="max-w-md mb-3 text-sm font-medium text-gray-500 sm:mx-auto">
            You have to Signin or SignUp first to pay your bills.
          </p>
        </div>

        <div className="sm:text-center">
          <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-violet-500 bg-indigo-50 sm:mx-auto">
            2
          </div>
          <h6 className="mb-2 font-semibold text-xl leading-5">Go to Payments Section</h6>
          <p className="max-w-md mb-3 text-sm font-medium text-gray-500 sm:mx-auto">
            In the Payments section select your payable item by click on see details
          </p>
        </div>

        <div className="sm:text-center">
          <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-violet-500 bg-indigo-50 sm:mx-auto">
            3
          </div>
          <h6 className="mb-2 font-semibold text-xl leading-5">
            Confirm & Pay Securely
          </h6>
          <p className="max-w-md mb-3 text-sm font-medium text-gray-500 sm:mx-auto">
            Then Press on Pay Bills button and confirm your Pay securely
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
