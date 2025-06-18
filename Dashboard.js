import React from 'react';

export default function Dashboard() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#eaf3f8] to-[#fdfdfd] overflow-hidden">
      {/* Moving Background Effect */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 animate-pulse"></div>

      <header className="relative z-10 text-center py-8">
        <h1 className="text-4xl font-semibold text-gray-800">
          Transforming Grievance Resolution Through <span className="text-blue-500">Smart Bidding</span>
        </h1>
        <p className="mt-2 text-gray-600">Connect citizens, contractors, and admins in a transparent solution ecosystem.</p>
      </header>

      <main className="relative z-10 flex flex-col items-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-full max-w-5xl">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <div className="text-blue-500 text-4xl mb-2">⚠️</div>
            <h2 className="text-xl font-bold mb-1">I'm a Citizen</h2>
            <p className="text-sm text-gray-600">Report grievances and track their resolution</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit Grievance</button>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <div className="text-green-500 text-4xl mb-2">👷</div>
            <h2 className="text-xl font-bold mb-1">I'm a Contractor</h2>
            <p className="text-sm text-gray-600">Bid on projects and grow your business</p>
            <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">View Tenders</button>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <div className="text-purple-500 text-4xl mb-2">🛠️</div>
            <h2 className="text-xl font-bold mb-1">I'm an Admin</h2>
            <p className="text-sm text-gray-600">Manage the platform and oversee contracts</p>
            <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">Admin Panel</button>
          </div>
        </div>

        <section className="mt-10 w-full max-w-5xl">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Recent Grievances</h3>
          <div className="bg-white shadow rounded-lg p-4 space-y-3">
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="font-medium">Pothole on Main Street</p>
                <p className="text-sm text-gray-500">Downtown • Roads</p>
              </div>
              <div className="text-sm text-red-600 font-semibold">High</div>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="font-medium">Street Light Not Working</p>
                <p className="text-sm text-gray-500">Park Avenue • Infrastructure</p>
              </div>
              <div className="text-sm text-yellow-600 font-semibold">Medium</div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Garbage Collection Issue</p>
                <p className="text-sm text-gray-500">Residential Area • Sanitation</p>
              </div>
              <div className="text-sm text-green-600 font-semibold">Low</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}