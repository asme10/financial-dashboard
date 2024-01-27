import React from "react";

const TableContainer = () => {
  return (
    <div className="overflow-auto md:overflow-hidden bg-slate-100 dark:bg-slate-800 w-100 rounded-xl py-8 px-6 border shadow-lg shadow-slate-50">
      <p className="pb-2">Finance data</p>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-sky-800 dark:bg-sky-700 border shadow-lg text-white text-left">
            <th className="p-3">Date</th>
            <th className="p-3">Transaction Type</th>
            <th className="p-3">Description</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Status</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white-100 border shadow-lg text-slate-600 text-left">
            <td className="p-3">01/01/2024</td>
            <td className="p-3">Expenses</td>
            <td className="p-3">Shopping products</td>
            <td className="p-3">£200.00</td>
            <td className="p-3 text-green-600">Completed</td>
            <td className="p-3 text-green-600">Edit</td>
          </tr>
          <tr className="bg-white border shadow-lg text-slate-600 text-left">
            <td className="p-3">10/01/2024</td>
            <td className="p-3">Income</td>
            <td className="p-3">Client payment</td>
            <td className="p-3">£550.00</td>
            <td className="p-3 text-orange-600">Pending</td>
            <td className="p-3 text-green-600">Edit</td>
          </tr>
          <tr className="bg-white-100 border shadow-lg text-slate-600 text-left">
            <td className="p-3">20/01/2024</td>
            <td className="p-3">Expense</td>
            <td className="p-3">Travel Expenses</td>
            <td className="p-3">£350.00</td>
            <td className="p-3 text-orange-600">Pending</td>
            <td className="p-3 text-green-600">Edit</td>
          </tr>
          <tr className="bg-white border shadow-lg text-slate-600 text-left">
            <td className="p-3">30/01/2024</td>
            <td className="p-3">Expense</td>
            <td className="p-3">Marketing</td>
            <td className="p-3">£250.00</td>
            <td className="p-3 text-green-600">Approved</td>
            <td className="p-3"></td>
          </tr>

          <tr className="bg-sky-800 border shadow-lg text-white text-left">
            <td className="p-3" colSpan="6">
              Total: £1350.00
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableContainer;
