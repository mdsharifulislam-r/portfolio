import React from "react";
import Heading from "../Heading/Heading";
import ServicesContainer from "./ServicesContainer/ServicesContainer";

export default function Services() {
  
  return (
    <div className="bg-black ">
      <div className="flex justify-center">
        <Heading title={"Services"} sub1={"Services "} sub2={"I provided"} />
          </div>
          <ServicesContainer/>
     
          
    </div>
  );
}
