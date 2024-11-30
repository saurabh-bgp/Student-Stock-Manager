import React, { useState } from 'react';
import axios from 'axios';

const AddStock = () => {
  const [formData, setFormData] = useState({
    gender: '',
    shirtSize: 0,
    shirtQuantity: 0,
    pantSize: 0,
    pantQuantity: 0,
    bagQuantity: 0,
  });

  const [responseMessage, setResponseMessage] = useState(''); // To display success/error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'gender' ? value : parseInt(value), // Ensure numbers are parsed correctly
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/stock/addStock', formData);
      setResponseMessage('Stock added successfully!');
      console.log(response.data); // Log the response from the backend
    } catch (error) {
      setResponseMessage('Failed to add stock. Please try again.');
      console.error(error.message);
    }
  };

  return (
    <div className="min-h-scree flex items-center justify-center p-4">
      <div className="bg-white rounded shadow-md p-6 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Stock Form</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Gender Selector */}
          <div>
            <label className="block font-medium mb-1">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Shirt Size */}
          <div>
            <label className="block font-medium mb-1">Shirt Size</label>
            <input
              type="number"
              name="shirtSize"
              value={formData.shirtSize}
              onChange={handleChange}
              placeholder="Enter shirt size"
              className="border border-gray-300 rounded p-2 w-full"
            />
          </div>

          {/* Shirt Quantity */}
          <div>
            <label className="block font-medium mb-1">Shirt Quantity</label>
            <input
              type="number"
              name="shirtQuantity"
              value={formData.shirtQuantity}
              onChange={handleChange}
              placeholder="Enter shirt quantity"
              className="border border-gray-300 rounded p-2 w-full"
            />
          </div>

          {/* Pant Size */}
          <div>
            <label className="block font-medium mb-1">Pant Size</label>
            <input
              type="number"
              name="pantSize"
              value={formData.pantSize}
              onChange={handleChange}
              placeholder="Enter pant size"
              className="border border-gray-300 rounded p-2 w-full"
            />
          </div>

          {/* Pant Quantity */}
          <div>
            <label className="block font-medium mb-1">Pant Quantity</label>
            <input
              type="number"
              name="pantQuantity"
              value={formData.pantQuantity}
              onChange={handleChange}
              placeholder="Enter pant quantity"
              className="border border-gray-300 rounded p-2 w-full"
            />
          </div>

          {/* Bag Quantity */}
          <div>
            <label className="block font-medium mb-1">Bag Quantity</label>
            <input
              type="number"
              name="bagQuantity"
              value={formData.bagQuantity}
              onChange={handleChange}
              placeholder="Enter bag quantity"
              className="border border-gray-300 rounded p-2 w-full"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>

        {/* Response Message */}
        {responseMessage && (
          <p className="mt-4 text-lg font-medium text-center">
            {responseMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default AddStock;
