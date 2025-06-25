const mongoose = require("mongoose");

// Get from .env file
const mongoURI = process.env.MONGO_URI;

async function connectDB() {
  const url = mongoURI;
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected...");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
  }
}

module.exports = connectDB; // ✅ default export
