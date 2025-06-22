import React from "react";
import desco from "../assets/unnamed.png";
import nesco from "../assets/nesco.png";
import wasa from "../assets/wasa.png";
import pdb from "../assets/pdb.jpg";
import titas from "../assets/titash-gas.png";
import link3 from "../assets/link3.png";

const OrgCard = () => {
  const orgs = [
    { name: "DESCO", icon: desco },
    { name: "NESCO", icon: nesco },
    { name: "WASA", icon: wasa },
    { name: "PDB", icon: pdb },
    { name: "Titas Gas", icon: titas },
    { name: "Link3 Internet", icon: link3 },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
      {orgs.map((org, index) => (
        <div
          key={index}
          className="max-w-xs mx-auto p-4 rounded-md shadow-md bg-gray-50 text-gray-900"
        >
          <img
            src={org.icon}
            alt={org.name}
            className="object-contain object-center w-full rounded-md h-24 md:h-32"
          />
          <div className="mt-2 text-center">
            <p className="text-sm font-medium tracking-wide uppercase text-violet-600">
              {org.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrgCard;