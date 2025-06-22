import React from "react";
import { FaBolt, FaFireAlt, FaGlobe, FaUniversity } from "react-icons/fa";

const Svg = (
  <svg
    className="w-5 h-5 mt-px text-violet-500"
    stroke="currentColor"
    viewBox="0 0 52 52"
  >
    <polygon
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      points="29 13 14 29 25 29 23 39 38 23 27 23"
    />
  </svg>
);

const Featured = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
        <div className="lg:w-1/2">
          <h2 className="max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none xl:max-w-lg">
            Pay Your Bills Easily, Quickly & Securely
          </h2>
        </div>
        <div className="lg:w-1/2">
          <p className="text-base font-medium text-gray-700 md:text-lg">
            We support payments for electricity, gas, internet, tuition, and
            more — all in one place with maximum security and convenience.
          </p>
        </div>
      </div>

      <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <FaBolt className="w-8 h-8 text-violet-600" />
          </div>
          <h6 className="mb-2 text-lg sm:text-xl font-semibold leading-5">
            Electricity Bill
          </h6>
          <ul className="-ml-1 space-y-2">
            <li className="flex items-start">
              <span className="mr-1">{Svg}</span>
              <span className="font-semibold text-gray-700">DESCO</span>
            </li>
            <li className="flex items-start">
              <span className="mr-1">{Svg}</span>
              <span className="font-semibold text-gray-700">NESCO</span>
            </li>
            <li className="flex items-start">
              <span className="mr-1">{Svg}</span>
              <span className="font-semibold text-gray-700">PDB</span>
            </li>
          </ul>
        </div>

        <div>
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <FaFireAlt className="w-8 h-8 text-violet-600" />
          </div>
          <h6 className="mb-2 text-lg sm:text-xl font-semibold leading-5">
            Gas Bill
          </h6>
          <ul className="-ml-1 space-y-2">
            <li className="flex items-start">
              <span className="mr-1">{Svg}</span>
              <span className="font-semibold text-gray-700">Titas Gas</span>
            </li>
            <li className="flex items-start">
              <span className="mr-1">{Svg}</span>
              <span className="font-semibold text-gray-700">Bakhrabad Gas</span>
            </li>
            <li className="flex items-start">
              <span className="mr-1">{Svg}</span>
              <span className="font-semibold text-gray-700">Jalalabad Gas</span>
            </li>
          </ul>
        </div>

        <div>
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <FaGlobe className="w-8 h-8 text-violet-600" />
          </div>
          <h6 className="mb-2 text-lg sm:text-xl font-semibold leading-5">
            Internet Bill
          </h6>
          <ul className="-ml-1 space-y-2">
            <li className="flex items-start">
              <span className="mr-1">{Svg}</span>
              <span className="font-semibold text-gray-700">Link3</span>
            </li>
            <li className="flex items-start">
              <span className="mr-1">{Svg}</span>
              <span className="font-semibold text-gray-700">Carnival</span>
            </li>
            <li className="flex items-start">
              <span className="mr-1">{Svg}</span>
              <span className="font-semibold text-gray-700">Amber IT</span>
            </li>
          </ul>
        </div>

        <div>
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <FaUniversity className="w-8 h-8 text-violet-600" />
          </div>
          <h6 className="mb-2 text-lg sm:text-xl font-semibold leading-5">
            Tuition Fee
          </h6>
          <ul className="-ml-1 space-y-2">
            <li className="flex items-start">
              <span className="mr-1">{Svg}</span>
              <span className="font-semibold text-gray-700">School Fee</span>
            </li>
            <li className="flex items-start">
              <span className="mr-1">{Svg}</span>
              <span className="font-semibold text-gray-700">College Fee</span>
            </li>
            <li className="flex items-start">
              <span className="mr-1">{Svg}</span>
              <span className="font-semibold text-gray-700">
                University Fee
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Featured;
