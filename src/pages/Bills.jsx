import React, { useState } from "react";
import { useLoaderData } from "react-router";
import CardOfBill from "../components/CardOfBill";

const Bills = () => {
  const bills = useLoaderData();
  const [selectedType, setSelectedType] = useState("All");

  const billTypes = ["All"];
  bills.forEach((bill) => {
    if (!billTypes.includes(bill.bill_type)) {
      billTypes.push(bill.bill_type);
    }
  });

  const filteredBills =
    selectedType === "All"
      ? bills
      : bills.filter((bill) => bill.bill_type === selectedType);

  return (
    <div style={{ minHeight: "calc(100vh - 250px)" }} className="bg-gray-50">
      <div className="container mx-auto max-w-6xl p-6 space-y-6 sm:space-y-12">
        <div className="mb-4">
          <label className="mr-2 text-black font-semibold">Bill Type:</label>
          <select
            className="border-2 border-black text-black font-medium px-2 py-1 rounded"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            {billTypes.map((type, index) => (
              <option className="font-medium text-purple-700" key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {filteredBills.map((bill) => (
          <CardOfBill key={bill.id} bill={bill} />
        ))}
      </div>
    </div>
  );
};

export default Bills;
