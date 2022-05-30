import React from "react";

export default function Modal(props) {
  const { selectedProduct } = props;
  if (!selectedProduct) {
    return "";
  }
  return (
    <div className="modal" id="product-carts">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Information</h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              style={{ borderRadius: "50%", width: "30px" }}
            >
              X
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-sm-5">
                <img
                  style={{ width: "100%" }}
                  src={selectedProduct.image}
                  alt={selectedProduct.alias}
                />
              </div>
              <div className="col-sm-7">
                <h2>{selectedProduct.name}</h2>
                <div style={{ textAlign: "left" }} className="mt-4  ">
                  <p>Price: {selectedProduct.price}$</p>
                  <p>Description: {selectedProduct.description}</p>
                  <p>ShortDescription: {selectedProduct.shortDescription}</p>
                  <p>Quantity: {selectedProduct.quantity}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
