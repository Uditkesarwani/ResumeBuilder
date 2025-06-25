// import React from "react";

// const ResumePreview = ({
//   name,
//   objective,
//   email,
//   phone,
//   website,
//   location,
//   themeColor,
//   fontFamily,
//   fontSize,
//   work,
//   educationList,
//   project,
//   skill,
// }) => {
//   return (
//     <div
//       className={`w-full h-full p-5 bg-white text-black ${fontSize} overflow-y-auto print:overflow-visible`}
//       style={{
//         fontFamily: fontFamily || "sans-serif",
//         borderTop: `16px solid ${themeColor}`,
//         maxHeight: "100vh",
//       }}
//     >
//       <div className="space-y-6">
//         {/* Header Name */}
//         <div className="text-center">
//           <h2 className="text-4xl font-bold uppercase text-gray-800 ">
//             {name || "Your Name"}
//           </h2>
//           {objective && (
//             <p className="mt-2 text-sm italic text-gray-600 whitespace-pre-line">
//               {objective}
//             </p>
//           )}
//         </div>

//         {/* Contact Info */}
//         <div className="flex flex-wrap justify-center gap-5 text-sm text-gray-700 border-b border-gray-300 pb-3">
//           {email && (
//             <span>
//               <strong>Email:</strong> {email}
//             </span>
//           )}
//           {phone && (
//             <span>
//               <strong>Phone:</strong> {phone}
//             </span>
//           )}
//           {website && (
//             <span>
//               <strong>Website:</strong> {website}
//             </span>
//           )}
//           {location && (
//             <span>
//               <strong>Location:</strong> {location}
//             </span>
//           )}
//         </div>

//         {/* Work Experience */}
//         {(work?.company ||
//           work?.jobTitle ||
//           work?.jobDate ||
//           work?.jobDesc) && (
//           <div>
//             <div className="flex items-center gap-2 mb-2">
//               <div
//                 className="w-16 h-1 "
//                 style={{ backgroundColor: themeColor }}
//               ></div>
//               <h3 className="ml-4 text-xl font-semibold">Work Experience</h3>
//             </div>
//             <div className="text-sm text-gray-800 space-y-1">
//               {work.company && (
//                 <p>
//                   <strong>Company:</strong> {work.company}
//                 </p>
//               )}
//               {work.jobTitle && (
//                 <p>
//                   <strong>Title:</strong> {work.jobTitle}
//                 </p>
//               )}
//               {work.jobDate && (
//                 <p>
//                   <strong>Date:</strong> {work.jobDate}
//                 </p>
//               )}
//               {work.jobDesc && (
//                 <p>
//                   <strong>Description:</strong> {work.jobDesc}
//                 </p>
//               )}
//             </div>
//           </div>
//         )}

//         {/* Education */}
//         {educationList?.length > 0 && (
//           <div>
//             <div className="flex items-center gap-2 mb-2">
//               <div
//                 className="w-16 h-1 "
//                 style={{ backgroundColor: themeColor }}
//               ></div>
//               <h3 className="ml-4 text-xl font-semibold">Education</h3>
//             </div>
//             <div className="space-y-3 text-sm text-gray-800">
//               {educationList.map((edu, idx) => (
//                 <div key={idx} className="space-y-1">
//                   {edu.institute && (
//                     <p>
//                       <strong>Institute:</strong> {edu.institute}
//                     </p>
//                   )}
//                   {edu.degree && (
//                     <p>
//                       <strong>Degree:</strong> {edu.degree}
//                     </p>
//                   )}
//                   {edu.year && (
//                     <p>
//                       <strong>Year:</strong> {edu.year}
//                     </p>
//                   )}
//                   {edu.description && (
//                     <p>
//                       <strong>Description:</strong> {edu.description}
//                     </p>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Projects */}
//         {project?.length > 0 && (
//           <div>
//             <div className="flex items-center gap-2 mb-2">
//               <div
//                 className="w-16 h-1 "
//                 style={{ backgroundColor: themeColor }}
//               ></div>
//               <h3 className="ml-4 text-xl font-semibold">Projects</h3>
//             </div>
//             <div className="space-y-3 text-sm text-gray-800">
//               {project.map((proj, index) => (
//                 <div key={index} className="space-y-1">
//                   <div className="flex justify-between">
//                     {proj.projectName && (
//                       <p>
//                         <strong>Name:</strong> {proj.projectName}
//                       </p>
//                     )}
//                     {proj.projectDate && (
//                       <p>
//                         <strong>Date:</strong> {proj.projectDate}
//                       </p>
//                     )}
//                   </div>
//                   {/* {<p className="font-bold ">{proj.projectName}</p>} */}
//                   {proj.techStack && (
//                     <p>
//                       <strong>Tech Stack:</strong> {proj.techStack}
//                     </p>
//                   )}
//                   {proj.projectDesc && (
//                     <p className="whitespace-pre-line">
//                       <strong>Description:</strong> {proj.projectDesc}
//                     </p>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Skills */}
//         {skill?.skillList && (
//           <div>
//             <div className="flex items-center gap-2 mb-2">
//               <div
//                 className="w-16 h-1"
//                 style={{ backgroundColor: themeColor }}
//               ></div>
//               <h3 className="ml-4 text-xl font-semibold">Skills</h3>
//             </div>
//             <p className="text-sm text-gray-800 whitespace-pre-line">
//               {skill.skillList}
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ResumePreview;



import React from "react";
import "./ResumePreview.css";

const fontSizeMap = {
  "text-sm": "0.875rem",
  "text-base": "1rem",
  "text-lg": "1.125rem",
};

const ResumePreview = ({
  name,
  objective,
  email,
  phone,
  website,
  location,
  themeColor,
  fontFamily,
  fontSize,
  work,
  educationList,
  project,
  skill,
}) => {
  return (
    <div
      className="resume-preview"
      style={{
        fontFamily: fontFamily || "sans-serif",
        fontSize: fontSizeMap[fontSize] || "1rem",
        borderTop: `16px solid ${themeColor}`,
        backgroundColor: "white",
        color: "black",
        padding: "24px",
        lineHeight: "1.6",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div className="resume-section">
        {/* Header */}
        <div className="resume-header">
          <h2 className="resume-name">{name || "Your Name"}</h2>
          {objective && (
            <p className="resume-objective">{objective}</p>
          )}
        </div>

        {/* Contact */}
        <div className="resume-contact">
          {email && <span><strong>Email:</strong> {email}</span>}
          {phone && <span><strong>Phone:</strong> {phone}</span>}
          {website && <span><strong>Website:</strong> {website}</span>}
          {location && <span><strong>Location:</strong> {location}</span>}
        </div>

        {/* Work Experience */}
        {(work?.company || work?.jobTitle || work?.jobDate || work?.jobDesc) && (
          <div className="resume-block">
            <div className="section-header">
              <div className="section-line" style={{ backgroundColor: themeColor }}></div>
              <h3>Work Experience</h3>
            </div>
            <div className="section-body">
              {work.company && <p><strong>Company:</strong> {work.company}</p>}
              {work.jobTitle && <p><strong>Title:</strong> {work.jobTitle}</p>}
              {work.jobDate && <p><strong>Date:</strong> {work.jobDate}</p>}
              {work.jobDesc && <p><strong>Description:</strong> {work.jobDesc}</p>}
            </div>
          </div>
        )}

        {/* Education */}
        {educationList?.length > 0 && (
          <div className="resume-block">
            <div className="section-header">
              <div className="section-line" style={{ backgroundColor: themeColor }}></div>
              <h3>Education</h3>
            </div>
            <div className="section-body">
              {educationList.map((edu, idx) => (
                <div key={idx} className="education-block">
                  {edu.institute && <p><strong>Institute:</strong> {edu.institute}</p>}
                  {edu.degree && <p><strong>Degree:</strong> {edu.degree}</p>}
                  {edu.year && <p><strong>Year:</strong> {edu.year}</p>}
                  {edu.description && <p><strong>Description:</strong> {edu.description}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {project?.length > 0 && (
          <div className="resume-block">
            <div className="section-header">
              <div className="section-line" style={{ backgroundColor: themeColor }}></div>
              <h3>Projects</h3>
            </div>
            <div className="section-body">
              {project.map((proj, index) => (
                <div key={index} className="project-block">
                  <div className="project-header">
                    {proj.projectName && <p><strong>Name:</strong> {proj.projectName}</p>}
                    {proj.projectDate && <p><strong>Date:</strong> {proj.projectDate}</p>}
                  </div>
                  {proj.techStack && <p><strong>Tech Stack:</strong> {proj.techStack}</p>}
                  {proj.projectDesc && <p><strong>Description:</strong> {proj.projectDesc}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {skill?.skillList && (
          <div className="resume-block">
            <div className="section-header">
              <div className="section-line" style={{ backgroundColor: themeColor }}></div>
              <h3>Skills</h3>
            </div>
            <div className="section-body">
              <p>{skill.skillList}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumePreview;
