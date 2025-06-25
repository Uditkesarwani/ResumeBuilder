// src/components/ViewFeedbacks.jsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ViewFeedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch feedbacks from backend API
    fetch("https://resumebuilder-backend-10tg.onrender.com/api/user/getFeedback")
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching feedbacks:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-white p-6">
      <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">
        🗣️ User Feedbacks
      </h2>
      <div className="max-w-2xl mx-auto">
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : feedbacks.length === 0 ? (
          <p className="text-center text-gray-500">No feedbacks yet.</p>
        ) : (
          feedbacks.map((fb, i) => (
            <div
              key={i}
              className="bg-indigo-50 p-4 mb-4 rounded-md border-l-4 border-indigo-500"
            >
              <p className="font-bold">{fb.name}</p>
              <p>{fb.message}</p>
              <p className="text-xs text-gray-400 mt-1">
                {new Date(fb.date).toLocaleString()}
              </p>
            </div>
          ))
        )}

        <div className="mt-6 text-center">
          <Link
            to="/"
            className="text-blue-600 hover:underline hover:text-blue-800"
          >
            ⬅️ Back to Resume Builder
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewFeedbacks;
