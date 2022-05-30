import React, { Component } from "react";
import dataGlasses from "./dataGlasses.json";

export default class Glasses extends Component {
  state = {
    glassesItem: {
      "id": 1,
      "price": 30,
      "name": "GUCCI G8850U",
      "url": "./img/v1.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
  }

  renderGlassesList = () => {
    return dataGlasses.map((glass, index) => {
      return (
        <img onClick={() => {
          this.changeGlasses(glass)
        }}
          style={{
            width: "130px",
            marginLeft: "10px",
            border: "1px solid blue",
            padding: "5px",
            cursor: "pointer",
          }}
          key={index}
          src={glass.url}
        />
      );
    });
  };

  changeGlasses = (newGlasses) => {
    this.setState({
      glassesItem:newGlasses
    })
  }

  render() {
    const styleGlasses = {
      width: "150px",
      top: "76px",
      right: "117px",
      opacity: "0.8",
    };

    const infoGlasses = {
      top: "190px",
      width: "250px",
      left: "318px",
      background: "#ffa5008f",
      padding: "10px",
      textAlign: "left",
      color: "white",
    };

    return (
      <div
        style={{
          backgroundImage: "url(./img/background.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div style={{ backgroundColor: "rgba(0,0,0,.8)" }}>
          <h3
            style={{ backgroundColor: "rgba(0,0,0,.3)" }}
            className="text-center text-light p-5"
          >
            TRY GLASSES APP ONLINE
          </h3>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="position-relative">
                  <img
                    className="position-absolute"
                    style={{ width: "250px" }}
                    src="/img/model.jpg"
                    alt="model.jpg"
                  />
                  <img
                    style={styleGlasses}
                    className="position-absolute"
                    src={this.state.glassesItem.url}
                    alt=""
                  />
                  <div style={infoGlasses} className="position-relative">
                    <span style={{ color: "#800080a3", fontWeight: "bold" }}>
                      Tên Kinh: {this.state.glassesItem.name}
                    </span>
                    <br />
                    <span style={{ fontSize: "14px", fontWeight: "400" }}>
                      Mô tả: {this.state.glassesItem.desc}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img
                  style={{ width: "250px" }}
                  src="/img/model.jpg"
                  alt="model.jpg"
                />
              </div>
            </div>
          </div>
          <div className="bg-light container text-center mt-5 d-flex justify-content-center p-5">
            {this.renderGlassesList()}
          </div>
        </div>
      </div>
    );
  }
}
