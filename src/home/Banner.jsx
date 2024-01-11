import React, { useState } from "react";
import productData from "../products.json";
import { SelectCategory } from "./SelectCategory";
import { Link } from "react-router-dom";

const Banner = () => {
  const title = (
    <h2>
      Search Your One From <span>Thousand</span> Of Products
    </h2>
  );

  const description = "We Have The Largest Collection of products";

  const bannerList = [
    {
      iconName: "icofont-users-alt-4",
      text: "1.5 Million Customers",
    },
    {
      iconName: "icofont-notification",
      text: "More then 2000 Marchent",
    },
    {
      iconName: "icofont-globe",
      text: "Buy Anything Online",
    },
  ];

  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    // Filter products based on the search term
    const filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(searchInput.toLocaleLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {title}
          <form>
            <SelectCategory select={"all"} />
            <input
              type="text"
              name="search"
              placeholder="Search your product"
              value={searchInput}
              onChange={handleSearch}
            />
            <button type="submit">
              <i className="icofont-search"></i>
            </button>
          </form>
          <p>{description}</p>
          <ul className="lab-ul">
            {searchInput &&
              filteredProducts.map((product, index) => (
                <li key={index}>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
