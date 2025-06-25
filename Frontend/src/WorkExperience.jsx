import React from "react";
import { FaArrowDown, FaArrowUp, FaEye, FaTrash } from "react-icons/fa";

const WorkExperience = ({ data, setData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    
    <div className="w-full max-w-3xl mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-sm mt-2">
           

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold text-gray-800">Work Experience</h1>
        {/* <div className="flex space-x-3 text-gray-600 text-lg cursor-pointer">
          <FaArrowDown title="Move Down" />
          <FaArrowUp title="Move Up" />
          <FaEye title="View" />
          <FaTrash title="Delete" className="text-red-500" />
        </div> */}
      </div>

      {/* Company */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Company</label>
        <input
          type="text"
          name="company"
          value={data.company}
          onChange={handleChange}
          placeholder="ABC Academy"
          className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Job Title + Date */}
      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">Job Title</label>
          <input
            type="text"
            name="jobTitle"
            value={data.jobTitle}
            onChange={handleChange}
            placeholder="Software Engineer"
            className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="text"
            name="jobDate"
            value={data.jobDate}
            onChange={handleChange}
            placeholder="Jan 2022 - Present"
            className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          name="jobDesc"
          value={data.jobDesc}
          onChange={handleChange}
          placeholder="Describe your work experience..."
          rows={3}
          className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default WorkExperience;
