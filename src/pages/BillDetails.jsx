import React, { use, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData, useParams } from "react-router";
import { handlePaid, getPaid } from "../utils";
import { AuthContext } from "../provider/AuthProvider";

const BillDetails = () => {
  const [selectedCard, setSelectedCard] = useState("");
  const bills = useLoaderData();
  const { id } = useParams();
  const bill = bills.find((bill) => bill.id === parseInt(id));

  const { balance, reduceBalance } = use(AuthContext);
  const [isPaid, setIsPaid] = useState(false);

  useEffect(() => {
    const paidList = getPaid();
    const alreadyPaid = paidList.some((b) => b.id === bill.id);
    setIsPaid(alreadyPaid);
  }, [bill.id]);

  if (!bill) {
    return <div className="text-center p-6">Bill not found</div>;
  }

  const handlePay = () => {
    if (!selectedCard) {
      toast.error("Please select a card!");
      return;
    }

    if (isPaid) {
      toast.error("This bill has already been paid!");
      return;
    }

    if (balance < bill.amount) {
      toast.error("Insufficient balance!");
      return;
    }

    handlePaid(bill);
    reduceBalance(bill.amount);
    toast.success(`Paid ৳${bill.amount} with ${selectedCard}`);
    setIsPaid(true);
  };

  return (
    <div
      style={{ minHeight: "calc(100vh - 250px)" }}
      className="bg-gray-50 flex items-center justify-center"
    >
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
            <h2 className="mb-3 text-3xl text-black font-extrabold leading-none sm:text-4xl">
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

            <div className="mb-4">
              <label className="block mb-1 font-medium text-gray-700">
                Select a Payment Method
              </label>
              <select
                value={selectedCard}
                onChange={(e) => setSelectedCard(e.target.value)}
                className="border-2 text-black border-black font-semibold rounded p-2"
              >
                <option className="font-medium text-violet-700" value="">
                  Choose a Card
                </option>
                <option className="font-medium text-violet-700" value="Bkash">
                  Bkash
                </option>
                <option className="font-medium text-violet-700" value="Nagad">
                  Nagad
                </option>
                <option className="font-medium text-violet-700" value="Paypal">
                  Paypal
                </option>
                <option
                  className="font-medium text-violet-700"
                  value="MasterCard"
                >
                  MasterCard
                </option>
              </select>
            </div>

            <div className="flex items-center">
              <button
                onClick={handlePay}
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-black hover:bg-gray-800 focus:shadow-outline focus:outline-none"
              >
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
