import React from "react";
import web from "../src/image/img3.png";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Common from "./Common";
import './About.css'; // Create a CSS file for custom styling if needed

const About = () => {
  return (
    <>
      <Common 
        name="WELCOME TO ABOUT PAGE"
        name1="Our Vision Craft disruptive solutions that steer the way to efficient business"
        imgsrc={web} 
        visit="/contact"
        btname="Contact Now"
      />
      <div className="center-card">
        <div className="card black-card"> {/* Add the black-card class */}
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <img src="https://www.bing.com/images/search?view=detailV2&ccid=rAsHkatT&id=7980F2825DC3A03C7BC57B4C96D1C5AFE1EFD42F&thid=OIP.rAsHkatTm_T2OirqVk1TyQHaEc&mediaurl=https%3a%2f%2fwww.pngarts.com%2ffiles%2f5%2fCartoon-Avatar-PNG-Image-Transparent.png&exph=540&expw=900&q=avter+images+html&simid=608006604752886252&FORM=IRPRST&ck=9C2CF9A548670848ECECD84CAE6C5EA2&selectedIndex=7" alt="Web Developer" className="img-fluid"/>
              </div>
              <div className="col-md-8">
                <h2>Web Developer</h2>
                <p>“First, solve the problem. Then, write the code.”</p>
                <p><strong>Birthday:</strong> 17 September 2002</p>
                <p><strong>Nationality:</strong> Indian</p>
                <p><strong>Phone:</strong> 7004500519</p>
                <p><strong>City:</strong> Pune</p>
                <p><strong>Age:</strong> 22</p>
                <p><strong>Qualification:</strong> Masters Of Computer Application</p>
                <p><strong>Email:</strong> 1132220092@mitwpu.edu.in</p>
                <p><strong>Freelance:</strong> Available</p>
               
               <p>I'm a web developer with in-depth experience in UI/UX design. In a nutshell, I create websites that help organizations address business challenges and meet their needs. I manage everything from website navigation and layout to a company's web hosting and security architecture.</p>
             
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default About;
