import React, { useState } from 'react';
import axios from 'axios';

const GetStockByGender = () => {
  const [gender, setGender] = useState('');
  const [stockData, setStockData] = useState([]);
  const [responseMessage, setResponseMessage] = useState('');

  const handleFetch = async () => {
    if (!gender) {
      setResponseMessage('Please select a gender');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:8080/stock/getStockByGender/${gender}`);
      setStockData(response.data);
      setResponseMessage('');
    } catch (error) {
      setResponseMessage('Failed to fetch stock data. Please try again.');
      console.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded shadow-md p-6 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Get Stock By Gender</h1>
        
        {/* Gender Selector */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <button
          onClick={handleFetch}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 transition"
        >
          Fetch Stock
        </button>

        {/* Response Message */}
        {responseMessage && (
          <p className="mt-4 text-lg font-medium text-center text-red-500">
            {responseMessage}
          </p>
        )}

        {/* Display Stock Data in Table */}
        {stockData.length > 0 && (
          <div className="mt-6 overflow-x-auto">
            <table className="w-full border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border px-4 py-2 text-left">Gender</th>
                  <th className="border px-4 py-2 text-left">Shirt Size</th>
                  <th className="border px-4 py-2 text-left">Shirt Quantity</th>
                  <th className="border px-4 py-2 text-left">Pant Size</th>
                  <th className="border px-4 py-2 text-left">Pant Quantity</th>
                  <th className="border px-4 py-2 text-left">Bag Quantity</th>
                </tr>
              </thead>
              <tbody>
                {stockData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border px-4 py-2">{item.gender}</td>
                    <td className="border px-4 py-2">{item.shirtSize}</td>
                    <td className="border px-4 py-2">{item.shirtQuantity}</td>
                    <td className="border px-4 py-2">{item.pantSize}</td>
                    <td className="border px-4 py-2">{item.pantQuantity}</td>
                    <td className="border px-4 py-2">{item.bagQuantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetStockByGender;
