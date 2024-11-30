import React, { useState, useEffect } from 'react'
import axios from 'axios';
const AllStock = () => {
    const [data, setData] = useState([]); // Initialize state as an empty array

    useEffect(() => {
      const onHandle = async () => {
        try {
          const response = await axios.get('http://localhost:8080/stock/allStock');
          setData(response.data); // Update state with the fetched data
        } catch (error) {
          console.log(error.message); // Handle errors
        }
      };
      onHandle();
    }, []);
  
  return (
    <div className="flex items-center flex-col min-h-[90vh]">
    <h1 className='px-5 py-2 rounded mt-2 text-green-600'>All Stock</h1>
    {data.length > 0 ? (
      <table className="table-auto border-collapse border border-gray-500 w-full">
        <thead>
          <tr>
            <th className="border border-gray-500 px-4 py-2">Gender</th>
            <th className="border border-gray-500 px-4 py-2">Shirt Size</th>
            <th className="border border-gray-500 px-4 py-2">Shirt Quantity</th>
            <th className="border border-gray-500 px-4 py-2">Pant Size</th>
            <th className="border border-gray-500 px-4 py-2">Pant Quantity</th>
            <th className="border border-gray-500 px-4 py-2">Bag Quantity</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-500 px-4 py-2">{item.gender}</td>
              <td className="border border-gray-500 px-4 py-2">{item.shirtSize}</td>
              <td className="border border-gray-500 px-4 py-2">{item.shirtQuantity}</td>
              <td className="border border-gray-500 px-4 py-2">{item.pantSize}</td>
              <td className="border border-gray-500 px-4 py-2">{item.pantQuantity}</td>
              <td className="border border-gray-500 px-4 py-2">{item.bagQuantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>No data fetched yet</p>
    )}
  </div>
  )
}

export default AllStock
