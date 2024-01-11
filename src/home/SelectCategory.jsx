import React from "react";

export const SelectCategory = ({ select }) => {
  return (
    <select defaultValue={select}>
      <option value="all">All Categories</option>
      <option value="electronics">Electronics</option>
      <option value="computer">Computer</option>
      <option value="smart-home">Smart Home</option>
      <option value="baby">Baby</option>
      <option value="beauty">Beauty</option>
      <option value="personal-care">Personal Care</option>
      <option value="digital-products">Digital Products</option>
    </select>
  );
};
