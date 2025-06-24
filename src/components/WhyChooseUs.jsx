import React from "react";
import CountUp from "react-countup";

const WhyChooseUs = () => {
  return (
    <section className="p-6 py-10  mt-6">
      <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-white shadow hover:shadow-lg transition">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 text-white"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path d="M160 96.039V128.039H464V191.384L428.5 304.039H149.932L109.932 16H16V48H82.068L122.068 336.039H451.968L496 196.306V96.039H160z"></path>
              <path d="M176.984 368.344a64.073 64.073 0 0 0-64 64 64 64 0 0 0 128 0 64.072 64.072 0 0 0-64-64zm0 96a32 32 0 1 1 32-32 32.038 32.038 0 0 1-32 32z"></path>
            </svg>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-3xl text-black font-semibold">
              <CountUp end={200} duration={10} useEasing />+
            </p>
            <p className="capitalize text-gray-700 font-medium">Completed Orders</p>
          </div>
        </div>

        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-white shadow hover:shadow-lg transition">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 text-white"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path d="M256 16C123.452 16 16 123.452 16 256s107.452 240 240 240 240-107.452 240-240S388.548 16 256 16zM403.078 403.078a207.253 207.253 0 1 1 44.589-66.125 207.332 207.332 0 0 1-44.589 66.125z"></path>
              <path d="M256 384a104 104 0 0 0 104-104H152a104 104 0 0 0 104 104z"></path>
            </svg>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-3xl text-black font-semibold">
              <CountUp end={7500} duration={10} separator="," useEasing />+
            </p>
            <p className="capitalize text-gray-700 font-medium">New Customers</p>
          </div>
        </div>

        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-white shadow hover:shadow-lg transition">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 text-white"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path d="M425.706 142.294A240 240 0 0 0 16 312v88H160V368H48V312c0-114.691 93.309-208 208-208s208 93.309 208 208v56H352v32H496V312a238.432 238.432 0 0 0-70.294-169.706z"></path>
            </svg>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-3xl text-black font-semibold">
              <CountUp end={172} duration={10} useEasing />%
            </p>
            <p className="capitalize text-gray-700 font-medium">Business Growth</p>
          </div>
        </div>

        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-white shadow hover:shadow-lg transition">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 text-white"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path d="M454.423 278.957L328 243.839v-8.185a116 116 0 1 0-104 0V312H199.582l-18.494-22.6a90.414 90.414 0 0 0-126.43-13.367 20.862 20.862 0 0 0-8.026 33.47L215.084 496H472V302.08a24.067 24.067 0 0 0-17.577-23.123zM192 132a84 84 0 1 1 136 65.9V132a52 52 0 0 0-104 0v65.9A83.866 83.866 0 0 1 192 132z"></path>
            </svg>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-3xl text-black font-semibold">
              <CountUp end={17} duration={10} useEasing />%
            </p>
            <p className="capitalize text-gray-700 font-medium">Low Bounce Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
