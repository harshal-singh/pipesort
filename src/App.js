import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import StepForm from "./components/Form/Form";
import Lists from "./components/Lists/Lists";
import Products from "./components/Products/Products";

function App() {
  return (
    <>
      <header className="d-flex justify-content-between">
        <h3 className="logo">Harshal Singh</h3>
        <div className="nav-link">
          <a href="/">List</a>
          <a href="product">Product</a>
          <a href="step-form">Step Form</a>
        </div>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Lists />} />
          <Route path="product" element={<Products />} />
          <Route path="step-form" element={<StepForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
