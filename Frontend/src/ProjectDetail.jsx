
import React from "react";
import { FaTrash } from "react-icons/fa";

const ProjectDetail = ({ data, onChange, onAdd }) => {
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updated = [...data];
    updated[index][name] = value;
    onChange(updated);
  };

  const handleDelete = (index) => {
    const updated = [...data];
    updated.splice(index, 1);
    onChange(updated);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">

      {data.map((project, index) => (
        <div
          key={index}
          className="relative p-6 bg-white border border-gray-300 rounded-lg shadow-sm space-y-6 mb-2 mt-2"
        >
                <h1 className="text-xl font-semibold text-gray-800 mb-4">Projects</h1>

          {/* ❌ Delete Icon */}
          {data.length > 1 && (
            <button
              onClick={() => handleDelete(index)}
              className="absolute top-4 right-4 text-red-600 hover:text-red-800"
              title="Delete this project"
            >
              <FaTrash />
            </button>
          )}

          {/* Project Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Project Name
            </label>
            <input
              type="text"
              name="projectName"
              value={project.projectName}
              onChange={(e) => handleChange(e, index)}
              placeholder="E-Commerce Website"
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Tech Stack & Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tech Stack
              </label>
              <input
                type="text"
                name="techStack"
                value={project.techStack}
                onChange={(e) => handleChange(e, index)}
                placeholder="React, Node.js, MongoDB"
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="text"
                name="projectDate"
                value={project.projectDate}
                onChange={(e) => handleChange(e, index)}
                placeholder="2024"
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="projectDesc"
              value={project.projectDesc}
              onChange={(e) => handleChange(e, index)}
              placeholder="Built a full-stack e-commerce platform with user authentication, cart, and payment integration."
              rows={3}
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      ))}

      {/* ➕ Add Project Button */}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={onAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-200"
        >
          + Add Project
        </button>
      </div>
    </div>
  );
};

export default ProjectDetail;

