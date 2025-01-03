import React, { useState } from "react";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    ProductId: "", ProductName: "", CategoryName: "", CategoryId: "" })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:1008/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Product ID:</label>
        <input type="teaxt" name="ProductId" value={formData.ProductId} onChange={handleChange} required />
      </div>
      <div>
        <label>Product Name:</label>
        <input type="text" name="ProductName" value={formData.ProductName} onChange={handleChange}   required />
      </div>
      <div>
        <label>Category Name:</label>
        <input type="text" name="CategoryName" value={formData.CategoryName} onChange={handleChange} required />
      </div>
      <div>
        <label>Category ID:</label>
        <input type="number" name="CategoryId" value={formData.CategoryId} onChange={handleChange} required />
      </div>
      <button type="submit">Add Product</button>
    </form>
  )
}
export default ProductForm
