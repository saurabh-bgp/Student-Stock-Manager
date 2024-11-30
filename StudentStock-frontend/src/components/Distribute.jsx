import React, { useState } from 'react';
import axios from 'axios';

const Distribute = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    gender: '',
    shirtSize: 0,
    pantSize: 0,
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/distribution/distribute', formData);
      setResponseMessage('Data distributed successfully!');
      console.log(response.data);
    } catch (error) {
      setResponseMessage('Failed to distribute data. Please try again.');
      console.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded shadow-md p-6 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Distribution Form</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Student Name */}
          <div>
            <label className="block font-medium mb-1">Student Name</label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              placeholder="Enter student name"
              className="border border-gray-300 rounded p-2 w-full"
              required
            />
          </div>

          {/* Gender Selector */}
          <div>
            <label className="block font-medium mb-1">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
              required
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
              required
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
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>

        {/* Response Message */}
        {responseMessage && (
          <p className="mt-4 text-lg font-medium text-center text-green-500">
            {responseMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default Distribute;
