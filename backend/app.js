const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes")
const cors = require("cors")

const app = express()
const PORT = 1008

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://shakuntalashindhe:shindhe@cluster0.xegmm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });
app.use("/api", productRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
