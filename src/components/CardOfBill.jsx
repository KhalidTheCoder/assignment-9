import React from "react";
import { Link } from "react-router";

const CardOfBill = ({ bill }) => {
  return (
    <div className="group block max-w-3xl mx-auto hover:no-underline focus:no-underline rounded-xl overflow-hidden bg-white dark:bg-gray-900 shadow-lg lg:grid lg:grid-cols-12">
      <img
        src={bill.icon}
        alt={bill.organization}
        className="w-full h-64 sm:h-80 object-cover lg:col-span-5"
      />
      <div className="p-6 flex flex-col justify-center items-center text-center space-y-2 lg:col-span-7">
        <h3 className="text-2xl sm:text-3xl font-bold group-hover:underline group-focus:underline text-gray-800 dark:text-white">
          {bill.organization}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 font-medium">
          {bill.bill_type}
        </p>

        <p className="text-gray-600 dark:text-gray-300 font-medium">
          Amount: {bill.amount} ৳
        </p>

        <p className="text-gray-600 dark:text-gray-300 font-medium">
          Due Date: {new Date(bill["due-date"]).toLocaleDateString()}
        </p>

        <button>
          <Link
            to="/"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
            aria-label="Sign up"
            title="Sign up"
          >
            See Details
          </Link>
        </button>
      </div>
    </div>
  );
};

export default CardOfBill;
