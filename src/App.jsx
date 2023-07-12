import './App.css'
import { Home } from './Home'

import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import ProductsPage from './ProductsPage';
import ContactPage from './ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
