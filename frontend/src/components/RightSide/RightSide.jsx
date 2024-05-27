import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div className="mt-10">
        <h3 className="mb-4 text-2xl font-bold">Updates</h3>
        <Updates />
      </div>
      <div className="mt-10">
        <h3 className="text-2xl font-bold">Customer Review</h3>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightSide;