import React from "react";
import Card from "./Card";
import { CiBank } from "react-icons/ci";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { TiTick } from "react-icons/ti";

const CardsContainer = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-800 w-100 rounded-xl py-8 px-6 border shadow-lg shadow-slate-50">
      <p className="pb-2">Recent Transactions</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card
          bgColor="bg-red-400"
          paymentType="Payment amount"
          amountRemain="800.00"
          Icon={CiBank}
          iconColor="text-red-400"
          lastIban="4698"
        />
        <Card
          bgColor="bg-green-400"
          paymentType="Payment customer"
          amountRemain="400.00"
          Icon={IoIosPeople}
          iconColor="text-green-400"
          lastIban="8217"
        />
        <Card
          bgColor="bg-blue-400"
          paymentType="Payment order"
          amountRemain="200.00"
          Icon={AiOutlineUnorderedList}
          iconColor="text-blue-400"
          lastIban="6785"
        />
        <Card
          bgColor="bg-slate-400"
          paymentType="Payment preceded"
          amountRemain="120.00"
          Icon={TiTick}
          iconColor="text-brown-400"
          lastIban="4326"
        />
      </div>
    </div>
  );
};

export default CardsContainer;
