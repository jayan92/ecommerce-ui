import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const title = "Become a Marchant";
  const subTitle = "Why Choose Us";
  const desc =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nesciunt in dolor sequi dolorem suscipit accusantium!";
  const btnText = "Apply  Now";

  const countList = [
    {
      iconName: "icofont-users-alt-4",
      count: "12600",
      text: "Customers",
    },
    {
      iconName: "icofont-law-document",
      count: "30",
      text: "Categories",
    },
    {
      iconName: "icofont-notification",
      count: "100",
      text: "Rewards and GitCards",
    },
  ];

  return (
    <div className="instructor-section style-2 padding-tb section-bg-ash">
      <div className="container">
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-1 row-cols-xl-3 align-items-center">
            <div className="col">
              {countList.map((val, index) => (
                <div className="count-item" key={index}>
                  <div className="count-inner">
                    <div className="count-icon">
                      <i className={val.iconName}></i>
                    </div>
                    <div className="count-content">
                      <h2>
                        <span className="count">
                          <CountUp end={val.count} />
                        </span>
                        <span>+</span>
                      </h2>
                      <p>{val.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col">
              <div className="instructor-content">
                <span className="subtitle">{subTitle}</span>
                <h2 className="title">{title}</h2>
                <p>{desc}</p>
                <Link to="/signup" className="lab-btn">
                  <span>{btnText}</span>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="instructor-thumb">
                <img src="/assets/images/instructor/01.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
