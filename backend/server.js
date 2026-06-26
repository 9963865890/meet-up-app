const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const eventRoutes = require("./routes/eventRoutes");
app.use("/api/events", eventRoutes);

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});