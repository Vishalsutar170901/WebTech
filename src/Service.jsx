import React from "react";
import Card from "./card"; // Make sure to use uppercase "Card" here
import Sdata  from "./sdata";
const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
             {
              Sdata.map((val,ind) => {
                return <Card key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                des={val.Des}
                btnname={val.btnname}
                />
              })
             }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
