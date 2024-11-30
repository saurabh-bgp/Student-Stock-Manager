import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllDistribution = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDistributions = async () => {
      try {
        const response = await axios.get('http://localhost:8080/distribution/allDistributions');
        setData(response.data);
      } catch (err) {
        setError('Failed to fetch data. Please try again.');
        console.error(err.message);
      }
    };

    fetchDistributions();
  }, []);

  return (
    <div className="min-h-screen p-4 flex justify-center">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">All Distributions</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {data.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="border border-gray-300 px-4 py-2">Student Name</th>
                  <th className="border border-gray-300 px-4 py-2">Gender</th>
                  <th className="border border-gray-300 px-4 py-2">Shirt Size</th>
                  <th className="border border-gray-300 px-4 py-2">Pant Size</th>
                  <th className="border border-gray-300 px-4 py-2">Bags Distributed</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border border-gray-300 px-4 py-2">{item.studentName}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.gender}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.shirtSize}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.pantSize}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.bagDistributed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          !error && <p className="text-center text-gray-500">No data available</p>
        )}
      </div>
    </div>
  );
};

export default AllDistribution;
