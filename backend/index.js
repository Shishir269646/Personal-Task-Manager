require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app.js");


const PORT = process.env.PORT || 5000;


// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed");
    console.error(error.message);
    process.exit(1); // Exit process with failure
  }
};


// Start Server
app.listen(PORT, async () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  await connectDB();
});
