import React from "react";
import { Link } from "react-router-dom";

const LocationSprade = () => {
  const title = (
    <h2 className="title">
      More Then <span className="yellow-color">60,000</span> Customers
    </h2>
  );
  const description =
    "Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";
  const clientsList = [
    {
      imgUrl: "/assets/images/clients/avater.jpg",
      imgAlt: "education thumb rajibraj91 rajibraj",
      text: "Join with Us",
    },
    {
      imgUrl: "/assets/images/clients/avater.jpg",
      imgAlt: "education thumb rajibraj91 rajibraj",
      text: "Join with Us",
    },
    {
      imgUrl: "/assets/images/clients/avater.jpg",
      imgAlt: "education thumb rajibraj91 rajibraj",
      text: "Join with Us",
    },
    {
      imgUrl: "/assets/images/clients/avater.jpg",
      imgAlt: "education thumb rajibraj91 rajibraj",
      text: "Join with Us",
    },
    {
      imgUrl: "/assets/images/clients/avater.jpg",
      imgAlt: "education thumb rajibraj91 rajibraj",
      text: "Join with Us",
    },
    {
      imgUrl: "/assets/images/clients/avater.jpg",
      imgAlt: "education thumb rajibraj91 rajibraj",
      text: "Join with Us",
    },
    {
      imgUrl: "/assets/images/clients/avater.jpg",
      imgAlt: "education thumb rajibraj91 rajibraj",
      text: "Join with Us",
    },
  ];

  return (
    <div className="clients-section style-2 padding-tb">
      <div className="container">
        <div className="section-header text-center">
          {title}
          <p>{description}</p>
        </div>

        <div className="section-wrapper">
          <div className="clients">
            {clientsList.map((client, index) => (
              <div className="client-list" key={index}>
                <Link to="/signup" className="client-content">
                  <span>{client.text}</span>
                </Link>

                <div className="client-thumb">
                  <img src={`${client.imgUrl}`} alt={`${client.imgAlt}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSprade;
