import React from "react";
import ProductItem from "./ProductItem";
import Modal from "./Modal";

export default function ProductList(props) {
  const { products, onShow, selectedProduct } = props;
  return (
    <div className="row">
      {products.map((product) => {
        return (
          <div key={product.id} className="col-sm-4">
            <ProductItem product={product} onShow={onShow} />
          </div>
        );
      })}
    </div>
  );
}
