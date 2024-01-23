import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-6 m-12 flex border-4 ">{children}</div>;
};

export default Card;
