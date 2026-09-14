const mongoose = require("mongoose");

async function connectDB() {

    await mongoose.connect("mongodb+srv://yt:0usZ6uP8PpS6YlcP@backend-project.pbtihsp.mongodb.net/project-1");

    console.log("MongoDB connected");

}

module.exports = connectDB;