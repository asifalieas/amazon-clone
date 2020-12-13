import React from "react";
import "./Checkout.css";
import checkout_ad2 from "./images/checkout_ad2.jpg";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={checkout_ad2} alt="checkout ad" />

        <div>
          <h1 className="checkout__title">Your Checkout Basket</h1>
        </div>
      </div>

      <div className="checkout__right">
        <h2>The subtotal</h2>
      </div>
    </div>
  );
}

export default Checkout;
