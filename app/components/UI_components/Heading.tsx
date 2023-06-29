import React from "react";

const Heading = ({ title }:any) => {
  return (
    <div className="flex text-4xl font-overpass600">
      <p className="text-orange">#</p>
      <h1 className="tracking-wide text-black">{title}</h1>
    </div>
  );
};
export default Heading;
