import "./styles.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Product from "./Components/Product";
import { useState } from "react";
export default function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  return (
    <div className="App">
      <Header cart={cart} />
      <Product addToCart={addToCart} />
      <Footer />
    </div>
  );
}
