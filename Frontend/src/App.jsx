// import React, { useState, useEffect } from "react";
// import "./App.css";
// import NameDetail from "./NameDetail";
// import WorkExperience from "./WorkExperience";
// import EducationDetail from "./EducationDetail";
// import ProjectDetail from "./ProjectDetail";
// import Skill from "./Skill";
// import ResumeSetting from "./ResumeSetting";
// import ResumePreview from "./ResumePreview";
// import Feedback from "./Feedback";
// import { useNavigate } from "react-router-dom";

// function App() {
//   const navigate = useNavigate();

//   // State for user personal details
//   const [personal, setPersonal] = useState({
//     name: "",
//     objective: "",
//     email: "",
//     phone: "",
//     website: "",
//     location: "",
//   });

//   const [workExperience, setWorkExperience] = useState({
//     company: "",
//     jobTitle: "",
//     jobDate: "",
//     jobDesc: "",
//   });

//   const [educationList, setEducationList] = useState([
//     { institute: "", degree: "", year: "", description: "" },
//   ]);

//   const [project, setProject] = useState([
//     {
//       projectName: "",
//       techStack: "",
//       projectDate: "",
//       projectDesc: "",
//     },
//   ]);

//   const [skill, setSkill] = useState({
//     skillList: "",
//   });

//   const [setting, setSetting] = useState({
//     themeColor: "#2563eb",
//     fontFamily: "sans-serif",
//     fontSize: "text-base",
//   });

//   // ✅ Resume Count State
//   const [resumeCount, setResumeCount] = useState(0);

//   // ✅ useEffect to fetch resume count (dummy/static for now)
//   useEffect(() => {
//     // 🔄 Either fetch from backend or use static count
//     fetch("http://localhost:5000/api/user/Resumecount")
//       .then((res) => res.json())
//       .then((data) => setResumeCount(data.count))
//       .catch((err) => console.error(err));

    
//   }, []);


//   const handlePrintResume = async () => {
//   try {
//     // First call: update backend
//     await fetch("http://localhost:5000/api/user/printResume", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     // Second call: resume count fetch (same as useEffect logic)
//     fetch("http://localhost:5000/api/user/Resumecount")
//       .then((res) => res.json())
//       .then((data) => setResumeCount(data.count))
//       .catch((err) => console.error(err));

//     // Trigger print
//     window.print();
//   } catch (error) {
//     console.error("❌ Failed to update resume count:", error);
//     window.print(); // fallback print
//   }
// };




//   return (
//     <div className="min-h-screen bg-gray-100 p-6 md:p-10">
//       {/* 🔘 Resume Count + Feedback Button */}
//       <div className="flex justify-start items-center gap-4 mb-4 print:hidden">
//         <div className="bg-white text-black px-4 py-2 rounded-md shadow border border-gray-300">
//           Total Users Created Resume:{" "}
//           <span className="font-bold text-blue-600">{resumeCount}</span>
//         </div>
//         <button
//           onClick={() => navigate("/feedback")}
//           className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
//         >
//           View Feedbacks
//         </button>
//       </div>

//       <div className="flex flex-col lg:flex-row gap-6">
//         {/* Left: Form Section */}
//         <div className="w-full lg:w-1/2 max-h-screen overflow-y-auto pr-2 print:hidden">
//           <NameDetail data={personal} setData={setPersonal} />
//           <WorkExperience data={workExperience} setData={setWorkExperience} />
//           <EducationDetail
//             data={educationList}
//             onChange={setEducationList}
//             onAdd={() =>
//               setEducationList([
//                 ...educationList,
//                 {
//                   institute: "",
//                   degree: "",
//                   year: "",
//                   description: "",
//                 },
//               ])
//             }
//           />
//           <ProjectDetail
//             data={project}
//             onChange={setProject}
//             onAdd={() =>
//               setProject([
//                 ...project,
//                 {
//                   projectName: "",
//                   techStack: "",
//                   projectDate: "",
//                   projectDesc: "",
//                 },
//               ])
//             }
//           />
//           <Skill data={skill} setData={setSkill} />
//           <ResumeSetting setting={setting} setSetting={setSetting} />

//           {/* Feedback Form */}
//           <Feedback />

//           <div className="flex justify-end sticky bottom-0 bg-gray-100 py-14">
//             <button
//               className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all duration-200"
//               onClick={handlePrintResume}
//             >
//               Print Resume
//             </button>
//           </div>
//         </div>

//         {/* Right: Resume Preview */}
//         <div className="w-full lg:w-1/2 h-screen sticky top-0 overflow-hidden">
//           <ResumePreview
//             name={personal.name}
//             objective={personal.objective}
//             email={personal.email}
//             phone={personal.phone}
//             website={personal.website}
//             location={personal.location}
//             themeColor={setting.themeColor}
//             fontFamily={setting.fontFamily}
//             fontSize={setting.fontSize}
//             work={workExperience}
//             educationList={educationList}
//             project={project}
//             skill={skill}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import NameDetail from "./NameDetail";
import WorkExperience from "./WorkExperience";
import EducationDetail from "./EducationDetail";
import ProjectDetail from "./ProjectDetail";
import Skill from "./Skill";
import ResumeSetting from "./ResumeSetting";
import ResumePreview from "./ResumePreview";
import Feedback from "./Feedback";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function App() {
  const navigate = useNavigate();
  const resumeRef = useRef();

  const [personal, setPersonal] = useState({
    name: "",
    objective: "",
    email: "",
    phone: "",
    website: "",
    location: "",
  });

  const [workExperience, setWorkExperience] = useState({
    company: "",
    jobTitle: "",
    jobDate: "",
    jobDesc: "",
  });

  const [educationList, setEducationList] = useState([
    { institute: "", degree: "", year: "", description: "" },
  ]);

  const [project, setProject] = useState([
    {
      projectName: "",
      techStack: "",
      projectDate: "",
      projectDesc: "",
    },
  ]);

  const [skill, setSkill] = useState({
    skillList: "",
  });

  const [setting, setSetting] = useState({
    themeColor: "#2563eb",
    fontFamily: "sans-serif",
    fontSize: "text-base",
  });

  const [resumeCount, setResumeCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/api/user/Resumecount")
      .then((res) => res.json())
      .then((data) => setResumeCount(data.count))
      .catch((err) => console.error(err));
  }, []);

  const handlePrintResume = async () => {
    try {
      await fetch("http://localhost:5000/api/user/printResume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      fetch("http://localhost:5000/api/user/Resumecount")
        .then((res) => res.json())
        .then((data) => setResumeCount(data.count))
        .catch((err) => console.error(err));

      window.print();
    } catch (error) {
      console.error("❌ Failed to update resume count:", error);
      window.print();
    }
  };

  const handleDownloadPDF = async () => {
    try {
      await fetch("http://localhost:5000/api/user/printResume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      fetch("http://localhost:5000/api/user/Resumecount")
        .then((res) => res.json())
        .then((data) => setResumeCount(data.count))
        .catch((err) => console.error(err));

      const input = resumeRef.current;
      const canvas = await html2canvas(input, {
        scale: 2,
        useCORS: true,
      });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("Resume.pdf");
    } catch (error) {
      console.error("❌ PDF Download Failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-10">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 mb-4 print:hidden">
        {/* Left */}
        <div className="flex items-center gap-3">
          <div className="bg-white text-black px-4 py-2 rounded-md shadow border border-gray-300">
            Total Users Created Resume:{" "}
            <span className="font-bold text-blue-600">{resumeCount}</span>
          </div>
          <button
            onClick={() => navigate("/feedback")}
            className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
          >
            View Feedbacks
          </button>
        </div>

        {/* Right */}
        <a
          href="https://aboutudit.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
        >
          About Developer
        </a>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 max-h-[90vh] overflow-y-auto pr-0 sm:pr-2 print:hidden">
          <NameDetail data={personal} setData={setPersonal} />
          <WorkExperience data={workExperience} setData={setWorkExperience} />
          <EducationDetail
            data={educationList}
            onChange={setEducationList}
            onAdd={() =>
              setEducationList([
                ...educationList,
                {
                  institute: "",
                  degree: "",
                  year: "",
                  description: "",
                },
              ])
            }
          />
          <ProjectDetail
            data={project}
            onChange={setProject}
            onAdd={() =>
              setProject([
                ...project,
                {
                  projectName: "",
                  techStack: "",
                  projectDate: "",
                  projectDesc: "",
                },
              ])
            }
          />
          <Skill data={skill} setData={setSkill} />
          <ResumeSetting setting={setting} setSetting={setSetting} />
          <Feedback />

          {/* Bottom Button */}
          <div className="flex justify-center sm:justify-end sticky bottom-0 bg-gray-100 py-4 gap-4 z-10">
            <button
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
              onClick={handleDownloadPDF}
            >
              Download PDF
            </button>
          </div>
        </div>

        {/* Right Section (Resume Preview) */}
        <div className="w-full lg:w-1/2 h-screen sticky top-0 overflow-auto">
          <div ref={resumeRef}>
            <ResumePreview
              name={personal.name}
              objective={personal.objective}
              email={personal.email}
              phone={personal.phone}
              website={personal.website}
              location={personal.location}
              themeColor={setting.themeColor}
              fontFamily={setting.fontFamily}
              fontSize={setting.fontSize}
              work={workExperience}
              educationList={educationList}
              project={project}
              skill={skill}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
