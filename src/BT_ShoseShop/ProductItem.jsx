import React from "react";

export default function ProductItem(props) {
  const { product } = props;
  return (
    <div className="card">
      <img
        src={product.image}
        alt={product.name}
        className="card-img"
        width="100%"
        height="300px"
      />
      <div className="card-body" style={{ textAlign: "left" }}>
        <h4 className="card-title">{product.name}</h4>
        <span className="card-text">{product.price}$</span>
        <br />
        <button className="btn btn-dark">
          add to carts
          <i class="fa-solid fa-cart-plus" style={{ fontSize: "13px" }}></i>
        </button>
        <button
          className="btn btn-danger"
          data-toggle="modal"
          data-target="#product-carts"
          style={{ marginLeft: "10px" }}
          onClick={() => props.onShow(product)}
        >
          Information
        </button>
      </div>
    </div>
  );
}
