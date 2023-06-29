import React from "react";

const Subheading = ({ title }: { title: string }) => {
  return (
    <div className="flex text-xl font-overpass600">
      <p className="text-orange">#</p>
      <h1 className="tracking-wide text-black">{title}</h1>
    </div>
  );
};
export default Subheading;
