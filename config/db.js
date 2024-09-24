const mongoose = require("mongoose");
mongoose.connect(`${process.env.MONGO_URI}expensetracker`)
const conn = mongoose.connection;
conn.on("open", () => {
    console.log("Mongoose connected to DB");
});

conn.on("error", (err) => {
    console.log("database connection error:", err);
});

module.exports = conn;
