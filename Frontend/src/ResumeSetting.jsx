import React from 'react';

const ResumeSetting = ({ setting, setSetting }) => {
  const themeColors = [
    "#2563eb", // Blue
    "#dc2626", // Red
    "#16a34a", // Green
    "#f59e0b", // Amber
    "#6b7280", // Gray
    "#9333ea", // Purple
    "#0ea5e9", // Sky
    "#f43f5e", // Rose
  ];

  const handleChange = (e) => {
    setSetting({
      ...setting,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-sm space-y-6 mt-2">
      <h1 className="text-xl font-semibold text-gray-800 mb-4">Resume Settings</h1>

      {/* Theme Color */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Theme Color</label>
        <div className="flex flex-wrap gap-3">
          {themeColors.map((color) => (
            <div
              key={color}
              className={`w-10 h-10 rounded-full cursor-pointer border-4 ${
                setting.themeColor === color ? 'border-black' : 'border-transparent'
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setSetting({ ...setting, themeColor: color })}
            />
          ))}
        </div>
      </div>

      {/* Font Family */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Font Family</label>
        <select
          name="fontFamily"
          value={setting.fontFamily}
          onChange={handleChange}
          className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="sans-serif">Sans-serif</option>
          <option value="serif">Serif</option>
          <option value="monospace">Monospace</option>
          <option value="Inter">Inter</option>
          <option value="Poppins">Poppins</option>
        </select>
      </div>

      {/* Font Size */}
      {/* <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Font Size</label>
        <select
          name="fontSize"
          value={setting.fontSize}
          onChange={handleChange}
          className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="text-sm">12px</option>
          <option value="text-base">14px</option>
          <option value="text-lg">16px</option>
          <option value="text-xl">18px</option>
        </select>
      </div> */}

    
    </div>
  );
};

export default ResumeSetting;
