import React from "react";
import ServicesCard from "./ServiceCard/ServiceCard";

export default function ServicesContainer() {
  return (
    <div className="py-10 lg:px-24 md:px-24 px-10 lg:flex md:grid md:grid-cols-2 grid grid-cols-1 gap-5 place-items-center w-full h-auto justify-center">
      <ServicesCard />
      <ServicesCard />
      <ServicesCard />
      <ServicesCard />
    </div>
  );
}
