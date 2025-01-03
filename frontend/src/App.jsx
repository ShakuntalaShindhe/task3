import React from "react";

import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductsList";

function App() {
  return (
    <div className="App">
      <h1>Product Management</h1>
      <ProductForm />
      <ProductList />
    </div>
  );
}

export default App
