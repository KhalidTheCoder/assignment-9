import React from "react";
import { useLoaderData } from "react-router";
import CardOfBill from "../components/CardOfBill";

const Bills = () => {
  const bills = useLoaderData();

  return (
   <div className="bg-gray-50">
     <div className="container mx-auto max-w-6xl p-6 space-y-6 sm:space-y-12">
      {bills.map((bill) => (
        <CardOfBill key={bill.id} bill={bill} />
      ))}
    </div>
   </div>
  );
};

export default Bills;
