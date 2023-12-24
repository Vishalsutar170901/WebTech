import React from "react";
import web from "../src/image/img6.png";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Common from "./Common";

const Home = () => {
  return (
   
      <>
      <Common 
      name="VISHAL SUTAR"
      name1="I'm a Web Developer from Solapur"
      imgsrc={web} 
      visit="/Service"
      btname="Get Started"
      />
    </>
   
  );
};

export default Home;
