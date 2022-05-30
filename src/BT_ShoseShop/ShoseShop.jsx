import React, { Component } from "react";
import data from "./data.json";
import ProductList from "./ProductList";
import Modal from "./Modal";

export default class ShoseShop extends Component {
  state = {
    selectedProduct: null,
  };

  showProductInformation = (product) => {
    this.setState({ selectedProduct: product });
  };

  render() {
    return (
      <div className="container">
        <h1>Shoes Shop</h1>
        <ProductList
          products={data}
          onShow={this.showProductInformation}
          selectedProduct={this.state.selectedProduct}
        />
        <Modal selectedProduct={this.state.selectedProduct} />
        <div>
          <button
            style={{
              position: "fixed",
              width: "50px",
              display: "block",
              bottom: "20px",
              right: "20px",
              borderRadius: "50%",
              height: "45px",
              color: "red",
              border: "1px solid",
            }}
          >
            <i class="fa-solid fa-cart-plus"></i>
          </button>
        </div>
      </div>
    );
  }
}
