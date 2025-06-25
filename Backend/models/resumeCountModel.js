const mongoose = require("mongoose");

const resumeCountSchema = new mongoose.Schema(
  {
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
);

module.exports = mongoose.model("resumeCountModel", resumeCountSchema);
