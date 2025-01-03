const express = require('express');
const Product = require('../models/products');

const router = express.Router()

router.get('/products', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1
    const pageSize = parseInt(req.query.pageSize) || 10
    const skip = (page - 1) * pageSize

    const products = await Product.find({})
      .select('ProductId ProductName CategoryName CategoryId')
      .skip(skip)
      .limit(pageSize);

    const totalRecords = await Product.countDocuments();
    // console.log(totalRecords)
    const totalPages = Math.ceil(totalRecords / pageSize);

    res.json({ data: products, currentPage: page, totalPages: totalPages, totalRecords: totalRecords
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.post("/products", async (req, res) => {
    try {
      const { ProductId, ProductName, CategoryName, CategoryId } = req.body;
  
      if (!ProductId || !ProductName || !CategoryName || !CategoryId) {
        return res.status(400).json({ error: "All fields are required." });
      }
  
      const newProduct = new Product({ProductId,ProductName, CategoryName, CategoryId,})
      const savedProduct = await newProduct.save()
      res.status(201).json({ message: "Product created successfully", product: savedProduct })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  })
  

module.exports = router
