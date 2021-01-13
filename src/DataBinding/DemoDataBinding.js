import React, { Component } from "react";

export default class DemoDataBinding extends Component {
  //thuoc tinh
  image =
    "data:image/jpeg;base64,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";
  //phuong thuc
  hienThiCauNoi = () => {
      document.getElementById("p").innerHTML = "Hasagi";
    // console.log("Hasagi");
  };
  render() {
    //bien
    const name = "Yasuo";
    return (
      <div>
        <h2>Data Binding</h2>
        <p>name: {name} </p>
        <img src={this.image} alt="hinh-dep"></img>
        <span id="p"></span>
        <br></br>
        <button onClick={this.hienThiCauNoi} className="mb-5 mt-3 btn btn-success">Hien thi cau noi</button>
      </div>
    );
  }
}
