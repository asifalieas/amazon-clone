import React from "react";
import Product from "./Product";
import "./Home.css";
import bg_image from "./images/bg_image.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img src={bg_image} className="home__image" alt="home background"></img>

        <div className="home__row">
          <Product
            id="12111"
            title="Casa Copenhagen Ergonomic Desk Chair High Engineered Frame Durable and Adjustable Office Chair Modern Executive Chair with Armrests Lumbar Support - Black"
            price={5999}
            rating={4}
            imageURL="https://images-na.ssl-images-amazon.com/images/I/61qWwUCh9CL._SL1116_.jpg"
          />
          <Product
            id="12112"
            title="TP-Link AC750 Dual Band Wireless Cable Router, 4 10/100 LAN + 10/100 WAN Ports, Support Guest Network and Parental Control, 750Mbps Speed Wi-Fi, 3 Antennas (Archer C20)"
            price={1699}
            rating={3}
            imageURL="https://images-na.ssl-images-amazon.com/images/I/61uvEaXUcyL._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12113"
            title="American Tourister Polypropylene Small - 55 cm, Medium - 68 cm & Large - 79 cm Hard Trolley Bag (Set of 3) (ZKK-ALL_Coral Blue)"
            price={9199}
            rating={4}
            imageURL="https://images-na.ssl-images-amazon.com/images/I/71Se5swWJSL._SL1500_.jpg"
          />
          <Product
            id="12114"
            title="Acer Predator Triton 300 PT315-51 2019 15.6-inch Gaming Laptop (9th Gen Core i7 9750H/16GB/1TB HDD + 256GB SSD/Windows 10 Home/4GB NVIDIA GeForce GTX 1650 Graphics), Abyssal Black"
            price={95999}
            rating={5}
            imageURL="https://images-na.ssl-images-amazon.com/images/I/71EGs7rkM6L._SL1474_.jpg"
          />
          <Product
            id="12115"
            title="boAt Airdopes 441 TWS Ear-Buds with IWP Technology, Immersive Audio, Up to 30H Total Playback, IPX7 Water Resistance, Super Touch Controls, Secure Sports Fit & Type-C Port(Active Black)"
            price={2499}
            rating={3}
            imageURL="https://images-na.ssl-images-amazon.com/images/I/61-1B-m03bL._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12116"
            title="Samsung LC34J791WTWXXL 34 inch  Wide ScreenThunderbolt 3 Curved Monitor 3440 x 1440"
            price="80,399"
            rating={2}
            imageURL="https://images-na.ssl-images-amazon.com/images/I/91-hWcNu2yL._SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
