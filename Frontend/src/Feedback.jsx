// src/components/Feedback.jsx

import React, { useState } from "react";

const Feedback = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setLoading(true);
    try {
      const response = await fetch("https://resumebuilder-backend-10tg.onrender.com/api/user/addFeedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, message }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess("✅ Feedback submitted successfully!");
        setName("");
        setMessage("");
      } else {
        setSuccess("❌ Failed to submit feedback.");
      }
    } catch (error) {
      setSuccess("❌ Server error. Try again later.");
    } finally {
      setLoading(false);
      setTimeout(() => setSuccess(""), 3000);
    }
  };

  return (
    <div className="bg-indigo-50 p-6 rounded-xl shadow-md my-6">
      <h2 className="text-2xl font-bold text-center text-indigo-700 mb-4">
        💬 Share Your Feedback
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          value={name}
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your feedback..."
          rows={3}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          {loading ? "Submitting..." : "Submit Feedback"}
        </button>
        {success && <p className="text-center text-sm text-green-600">{success}</p>}
      </form>
    </div>
  );
};

export default Feedback;
