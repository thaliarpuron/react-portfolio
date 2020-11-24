import React from "react";
import image from "./home.jpg";
import "./style.css";

const Home = () => (
  <div className="background">
   <img src={image} alt="computer" className="home-image"/>
  </div>
);

export default Home;
