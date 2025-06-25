

import React from "react";

const NameDetail = ({ data, setData }) => {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-sm space-y-6">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder="John Deo"
          className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Objective textarea */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Objective</label>
        <textarea
          name="objective"
          value={data.objective}
          onChange={handleChange}
          placeholder="Entrepreneur and educator obsessed with making education free for everyone"
          rows={4}
          className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="johndeo@gmail.com"
            className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            value={data.phone}
            onChange={handleChange}
            placeholder="(123) 456-789"
            className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Website & Location */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Website</label>
          <input
            type="text"
            name="website"
            value={data.website}
            onChange={handleChange}
            placeholder="linkedin.com/in/yourprofile"
            className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={data.location}
            onChange={handleChange}
            placeholder="City, Country"
            className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default NameDetail;
