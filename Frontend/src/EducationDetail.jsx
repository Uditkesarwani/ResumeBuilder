// import React from "react";

// const EducationDetail = ({ data, setData }) => {
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData({ ...data, [name]: value });
//   };

//   return (
//     <div className="w-full max-w-3xl mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-sm space-y-6">
//       <h1 className="text-xl font-semibold text-gray-800 mb-4">Education</h1>

//       {/* Institute Name */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Institute</label>
//         <input
//           type="text"
//           name="institute"
//           value={data.institute}
//           onChange={handleChange}
//           placeholder="ABC University"
//           className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       {/* Degree & Year */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Degree</label>
//           <input
//             type="text"
//             name="degree"
//             value={data.degree}
//             onChange={handleChange}
//             placeholder="Bachelor of Computer Applications"
//             className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Year</label>
//           <input
//             type="text"
//             name="year"
//             value={data.year}
//             onChange={handleChange}
//             placeholder="2022 - 2025"
//             className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//       </div>

//       {/* Description */}
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Description</label>
//         <textarea
//           name="description"
//           value={data.description}
//           onChange={handleChange}
//           placeholder="Studied core subjects including Data Structures, DBMS, Web Development..."
//           rows={3}
//           className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       {/* Add School Button (non-functional yet) */}
//       <div className="bottom-4 right-4">
//         <input
//           type="button"
//           className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-200"
//           value="+Add School"
//         />
//       </div>
//     </div>
//   );
// };

// export default EducationDetail;



// import React from "react";

// const EducationDetail = ({ data, setData, onAdd }) => {
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData({ ...data, [name]: value });
//   };

//   return (
//     <div className="w-full max-w-3xl mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-sm space-y-6 mb-6">
//       <h1 className="text-xl font-semibold text-gray-800 mb-4">Education</h1>

//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Institute</label>
//         <input
//           type="text"
//           name="institute"
//           value={data.institute}
//           onChange={handleChange}
//           placeholder="ABC University"
//           className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2"
//         />
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Degree</label>
//           <input
//             type="text"
//             name="degree"
//             value={data.degree}
//             onChange={handleChange}
//             placeholder="BCA"
//             className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Year</label>
//           <input
//             type="text"
//             name="year"
//             value={data.year}
//             onChange={handleChange}
//             placeholder="2022 - 2025"
//             className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2"
//           />
//         </div>
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-700">Description</label>
//         <textarea
//           name="description"
//           value={data.description}
//           onChange={handleChange}
//           placeholder="DBMS, Web Dev, DSA..."
//           rows={3}
//           className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2"
//         />
//       </div>

//       <div className="flex justify-end">
//         <button
//           type="button"
//           onClick={onAdd}
//           className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//         >
//           + Add School
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EducationDetail;
import React from "react";
import { FaTrash } from "react-icons/fa";

const EducationDetail = ({ data, onChange, onAdd }) => {
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updated = [...data];
    updated[index][name] = value;
    onChange(updated);
  };

  const handleDelete = (index) => {
    const updated = [...data];
    updated.splice(index, 1); // remove 1 item at given index
    onChange(updated);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6 mt-2">

      {data.map((edu, index) => (
        
        <div
          key={index}
          className="relative p-6 bg-white border border-gray-300 rounded-lg shadow-sm space-y-6 mb-2"
        >
                <h1 className="text-xl font-semibold text-gray-800 mb-1 mt-3">Education</h1>

          {/* ❌ Delete Icon */}
          {data.length > 1 && (
            <button
              onClick={() => handleDelete(index)}
              className="absolute top-4 right-4 text-red-600 hover:text-red-800"
              title="Delete this education"
            >
              <FaTrash />
            </button>
          )}

          {/* Institute */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Institute
            </label>
            <input
              type="text"
              name="institute"
              value={edu.institute}
              onChange={(e) => handleChange(e, index)}
              placeholder="ABC University"
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Degree & Year */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Degree
              </label>
              <input
                type="text"
                name="degree"
                value={edu.degree}
                onChange={(e) => handleChange(e, index)}
                placeholder="Bachelor of Computer Applications"
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Year
              </label>
              <input
                type="text"
                name="year"
                value={edu.year}
                onChange={(e) => handleChange(e, index)}
                placeholder="2022 - 2025"
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
              name="description"
              value={edu.description}
              onChange={(e) => handleChange(e, index)}
              placeholder="Studied core subjects including Data Structures, DBMS, Web Development..."
              rows={3}
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      ))}

      {/* ➕ Add Button */}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={onAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-200"
        >
          + Add School
        </button>
      </div>
    </div>
  );
};

export default EducationDetail;
