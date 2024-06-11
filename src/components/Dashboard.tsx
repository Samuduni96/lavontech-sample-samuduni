import React from "react";

const Dashboard: React.FC = () => {

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-darkBlue">

      <header className="text-3xl font-bold mb-8">
        DASHBOARD
        <p className="text-lg font-normal">Welcome to your dashboard</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Download Reports
        </button>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-white shadow-md rounded-md">Total Customers</div>
        <div className="p-4 bg-white shadow-md rounded-md">Sales Today</div>
        <div className="p-4 bg-white shadow-md rounded-md">Monthly Sale</div>
        <div className="p-4 bg-white shadow-md rounded-md">Yearly Sales</div>
      </div>
      <div className="mt-8 text-gray-500">Loading data...</div>
    </div>
  );
};

export default Dashboard;
