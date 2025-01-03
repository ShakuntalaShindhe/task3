import React, { useState, useEffect } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize] = useState(10)

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage])

  const fetchProducts = async (page) => {
    try {
      const response = await fetch(`http://localhost:1008/api/products?page=${page}&pageSize=${pageSize}`);
      const data = await response.json();

      setProducts(data.data);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  }
  return (
    <div>
      <h1>Product List</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ProductId</th>
            <th>ProductName</th>
            <th>CategoryName</th>
            <th>CategoryId</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}> {/* Ensure index is unique */}
              <td>{product.ProductId}</td>
              <td>{product.ProductName}</td>
              <td>{product.CategoryName}</td>
              <td>{product.CategoryId}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  )
}

export default ProductList
