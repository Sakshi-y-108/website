import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./ProductList.css";

// Sample product data
const products = [
  { 
    id: 1, 
    name: "Vase", 
    price: 25000, 
    image: "images/w1.7.jpg" },
  {
    id: 2,
    name: "Candle Holder",
    price: 15000,
    image: "images/r3.jpg",
  },
  {
    id: 3,
    name: "Picture Frame",
    price: 10000,
    image: "../images/image_deco7.jpg",
  },
  {
    id: 4,
    name: "R-Decoration",
    price: 20888,
    image: "../images/image_deco8.jpg",
  },
  {
    id: 5,
    name: "M-decoration",
    price: 25888,
    image: "images/p1.jpg",
  },

  {
    id: 6,
    name: "r-Decoration",
    price: 10888,
    image: "images/image_deco5.jpg",
  },
  {
    id: 7,
    name: "Picture Frame",
    price: 25888,
    image: "images/m6.jpg",
  },
  {
    id: 8,
    name: "Picture Frame",
    price: 12999,
    image: "images/g2.jpg",
  },
  {
    id: 9,
    name: "Picture Frame",
    price: 15999,
    image: "images/18.jpg",
  },

];

const ProductList = () => {
  // Destructure addToCart from the context
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <h3>{product.name}</h3>
          <p>{product.price}&#8377;</p>
          <button onClick={() => addToCart(product)}>Add to Booking</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
