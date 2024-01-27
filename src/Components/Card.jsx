import React from "react";

const Card = ({
  bgColor,
  paymentType,
  amountRemain,
  Icon,
  iconColor,
  lastIban,
}) => {
  return (
    <div className={`${bgColor} rounded-md p-4 shadow-md h-48 md:h-auto`}>
      <div className="flex justify-between">
        <div>
          <p className="text-xs text-gray-600 uppercase">{paymentType}</p>
          <p className="font-bold text-2xl text-gray-900">£{amountRemain}</p>
        </div>
        <div
          className={`flex items-center justify-center w-12 h-12 bg-white rounded-full ${iconColor}`}
        >
          <Icon className="text-3xl" />
        </div>
      </div>
      <ul className="grid grid-cols-4 gap-2 pt-12 md:tp-8 text-gray-700 text-md md:text-sm">
        <li className="py-2">****</li>
        <li className="py-2">****</li>
        <li className="py-2">****</li>
        <li className="py-2 font-semibold">{lastIban}</li>
      </ul>
    </div>
  );
};

export default Card;
