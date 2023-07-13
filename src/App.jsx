import "./App.css";
import { Home } from "./Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./ProductsPage";
import ContactPage from "./ContactPage";
import Product from "./Product";

function App() {
  const products = [
    { name: "Chair", path: "chair" },
    { name: "Table", path: "table" },
    { name: "Couch", path: "couch" },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {products.map((product, ind) => (
          <Route
            key={ind}
            path={`/product/${product.path}`}
            element={<Product name={product.name} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
