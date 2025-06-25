

// const AddFeedback = async(req, res)=>{
//     res.send("hey feedback here")
//     console.log('hii');
    
// }


// module.exports = {
//   AddFeedback
// };


const FeedbackModel = require("../models/userFeedbackModel");
const resumeCountModel = require("../models/resumeCountModel")

const AddFeedback = async (req, res) => {
  try {
    const { name, message } = req.body;

    // Check if name or message is empty
    if (!name || !message) {
      return res.status(400).json({ error: "Name and message are required" });
    }

    // Create and save new feedback
    const newFeedback = new FeedbackModel({
      name,
      message,
    });

    await newFeedback.save();

    res.status(201).json({
      message: "Feedback added successfully",
      feedback: newFeedback,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to add feedback" });
  }
};
const getFeedback = async (req, res) => {
  try {
    const feedbacks = await FeedbackModel.find().sort({ date: -1 }); 
    res.status(200).json(feedbacks);
  } catch (error) {
    console.error("❌ Error fetching feedbacks:", error);
    res.status(500).json({ error: "Failed to fetch feedbacks" });
  }
};

const Resumecount = async (req, res) => {
  try {
    const count = await resumeCountModel.countDocuments(); // ✅ now using correct model
    res.status(200).json({ count });
  } catch (error) {
    console.error("❌ Error fetching resume count:", error);
    res.status(500).json({ error: "Failed to fetch resume count" });
  }
};


const printResume = async (req, res) => {
  try {
    const newEntry = new resumeCountModel({});
    await newEntry.save();

    res.status(201).json({
      message: "Resume print recorded successfully",
    });
  } catch (error) {
    console.error("❌ Error in printResume:", error);
    res.status(500).json({ error: "Failed to record resume print" });
  }
};
module.exports = { AddFeedback , getFeedback, Resumecount, printResume};
