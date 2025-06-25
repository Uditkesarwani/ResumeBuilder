import React from 'react';

const Skill = ({ data, setData }) => {
  const handleChange = (e) => {
    setData({ ...data, skillList: e.target.value });
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-sm space-y-6 mt-2 ">
      <h1 className="text-xl font-semibold text-gray-800 mb-4">Skills</h1>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Skill List</label>
        <textarea
          name="skillList"
          value={data.skillList}
          onChange={handleChange}
          placeholder="e.g., HTML, CSS, JavaScript, React, Node.js"
          rows={4}
          className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default Skill;
