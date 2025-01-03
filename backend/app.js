const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");
const cors = require("cors");
require("dotenv").config(); 

const app = express();
const PORT = process.env.PORT || 3000; 

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.error("Error connecting to MongoDB:", error.message);
})

app.use("/api", productRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
})