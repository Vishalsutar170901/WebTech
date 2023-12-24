import React, { useState } from "react";

const Contact = () => {
  const [fullName, setFullName] = useState(""); 
  const [phoneNo, setPhoneNo] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [message, setMessage] = useState(""); 

  //  Handler function for FullName input changes karnaya sathi
  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

 
  const handlePhoneNoChange = (event) => {
    setPhoneNo(event.target.value);
  };

  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const formSubmit = (event) => {
    event.preventDefault();
    alert(`${fullName} "Thank you for getting in touch with me`);
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US !</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullName"
                  value={fullName}
                  onChange={handleFullNameChange}
                  placeholder="Enter FullName"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  PhoneNo
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phoneNo"
                  value={phoneNo}
                  onChange={handlePhoneNoChange}
                  placeholder="Enter Phone No"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  name="message"
                  value={message}
                  onChange={handleMessageChange}
                  rows="3"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-dark" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
