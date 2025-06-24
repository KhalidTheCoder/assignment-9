import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { getPaid } from "../utils";
import { FaCheckCircle } from "react-icons/fa";

const CardOfBill = ({ bill }) => {
  const [displayPaid, setDisplayPaid] = useState([]);
  useEffect(() => {
    const savedPaid = getPaid();
    setDisplayPaid(savedPaid);
  }, []);

  const isPaid =
    displayPaid.find((paidBill) => paidBill.id === bill.id) !== undefined;
  return (
    <div className="group block max-w-3xl mx-auto hover:no-underline focus:no-underline rounded-xl overflow-hidden bg-white shadow-lg lg:grid lg:grid-cols-12">
      <img
        src={bill.icon}
        alt={bill.organization}
        className="w-full h-64 sm:h-80 object-cover lg:col-span-5"
      />
      <div className="p-6 flex flex-col justify-center items-center text-center space-y-2 lg:col-span-7">
        <h3 className="text-2xl sm:text-3xl font-bold text-purple-600">
          <div className="flex justify-center items-center gap-2">
            {bill.organization}{" "}
            {isPaid && (
              <span className="text-green-600 text-xl" title="Paid">
                <FaCheckCircle size={24} />
              </span>
            )}
          </div>
        </h3>

        <p className="text-gray-600 font-medium">
          {bill.bill_type}
        </p>

        <p className="text-gray-600  font-medium">
          Amount: {bill.amount} ৳
        </p>

        <p className="text-gray-600 font-medium">
          Due Date: {new Date(bill["due-date"]).toLocaleDateString()}
        </p>

        <button>
          <Link
            to={`/billdetails/${bill.id}`}
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-black hover:bg-gray-800 focus:shadow-outline focus:outline-none"
          >
            View Details & Pay
          </Link>
        </button>
      </div>
    </div>
  );
};

export default CardOfBill;
