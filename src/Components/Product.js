import { useState } from "react";
import Header from "./Header";
export default function Products({ addToCart }) {
  const data = [
    {
      img: "https://placehold.co/450x300/png",
      title: "Fancy Product",
      price: "$80.00",
    },
    {
      img: "https://placehold.co/450x300/png",
      title: "Special item",
      price: "$20.00",
      discount: "$18.00",
    },
    {
      img: "https://placehold.co/450x300/png",
      title: "Sale item",
      price: "$50.00",
      discount: "$25.00",
    },
    {
      img: "https://placehold.co/450x300/png",
      title: "Popular item",
      price: "$40.00",
    },
  ];
  const [product, setProduct] = useState(data);
  const [count, setCount] = useState(0);

  function handleClick() {}
  return (
    <div className="container">
      {product.map((data, index) => (
        <div className="product" key={index}>
          <img src={data.img} alt="pic" />
          <h3>{data.title}</h3>
          {data.discount ? (
            <p>
              <span className="original-price">{data.price}</span>
              <span className="discounted-price">{data.discount}</span>
            </p>
          ) : (
            <p>{data.price}</p>
          )}
          <button onClick={() => addToCart(data)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}
