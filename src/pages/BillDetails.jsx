import React from "react";
import { Link, useLoaderData, useParams } from "react-router";

const BillDetails = () => {
  const bills = useLoaderData();
  const { id } = useParams();
  const bill = bills.find((bill) => bill.id === parseInt(id));
  if (!bill) {
    return <div className="text-center p-6">Bill not found</div>;
  }

  return (
    <div style={{ minHeight: "calc(100vh - 250px)" }} className="bg-gray-50 flex items-center justify-center">
      <div className="px-4 py-16 w-full max-w-screen-lg">
        <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white rounded-lg shadow-lg lg:flex-row sm:mx-auto">
          <div className="relative lg:w-1/2">
            <img
              src={bill.icon}
              alt={bill.organization}
              className="object-cover w-full h-80 lg:absolute lg:h-full"
            />
            <svg
              className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
              viewBox="0 0 20 104"
              fill="currentColor"
            >
              <polygon points="17.3036738 0 20 0 20 104 0.824555778 104" />
            </svg>
          </div>
          <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
            <div>
              <p className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-gray-700 uppercase rounded-full bg-gray-200">
                Bill Details
              </p>
            </div>
            <h2 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
              {bill.organization}
            </h2>
            <p className="mb-2 text-gray-800 font-medium">
              Type: {bill.bill_type}
            </p>
            <p className="mb-2 text-gray-800 font-medium">
              Amount: {bill.amount} ৳
            </p>
            <p className="mb-4 text-gray-800 font-medium">
              Due Date: {new Date(bill["due-date"]).toLocaleDateString()}
            </p>
            <div className="flex items-center">
              <button className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-black hover:bg-gray-800 focus:shadow-outline focus:outline-none">
                Pay Now
              </button>
              <Link
                to="/bills"
                className="ml-4 inline-flex items-center font-semibold text-purple-600 hover:underline hover:text-violet-800 transition-colors duration-200"
              >
                Back to Bills
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M3.707 6.707a1 1 0 0 1-1.414-1.414L6 1.586l1.414 1.414L5.414 5H11v2H5.414l2 2-1.414 1.414L3.707 6.707z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillDetails;
