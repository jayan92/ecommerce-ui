import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const title = "About ShopCart";
  const description =
    "ShopCart - Your ultimate destination for seamless online shopping. Discover a curated collection of quality products, enjoy secure transactions.";
  const ItemTitle = "Categories";
  const quickTitle = "Quick Links";
  const tweetTitle = "Recent Tweets";

  const addressList = [
    {
      iconName: "icofont-google-map",
      text: "New York, USA.",
    },
    {
      iconName: "icofont-phone",
      text: "+880 123 456 789",
    },
    {
      iconName: "icofont-envelope",
      text: "info@shopcart.com",
    },
  ];

  const socialList = [
    {
      iconName: "icofont-facebook",
      siteLink: "#",
      className: "facebook",
    },
    {
      iconName: "icofont-twitter",
      siteLink: "#",
      className: "twitter",
    },
    {
      iconName: "icofont-linkedin",
      siteLink: "#",
      className: "linkedin",
    },
    {
      iconName: "icofont-instagram",
      siteLink: "#",
      className: "instagram",
    },
    {
      iconName: "icofont-pinterest",
      siteLink: "#",
      className: "pinterest",
    },
  ];

  const ItemList = [
    {
      text: "All Products",
      link: "/shop",
    },
    {
      text: "Shop",
      link: "/shop",
    },
    {
      text: "Blog",
      link: "/blog",
    },
    {
      text: "About",
      link: "/about",
    },
    {
      text: "Policy",
      link: "#",
    },
    {
      text: "FAQs",
      link: "/about",
    },
  ];

  const quickList = [
    {
      text: "Summer Sessions",
      link: "#",
    },
    {
      text: "Events",
      link: "#",
    },
    {
      text: "Gallery",
      link: "#",
    },
    {
      text: "Forums",
      link: "#",
    },
    {
      text: "Privacy Policy",
      link: "#",
    },
    {
      text: "Terms of Use",
      link: "#",
    },
  ];

  const tweetList = [
    {
      iconName: "icofont-twitter",
      desc: (
        <p>
          🛍️ Exciting updates from ShopCart! Discover the latest trends and exclusive offers. Join the shopping spree
          with Aminur Islam <a href="#">@ShopCart</a> #ShopCartDeals #FashionFinds
        </p>
      ),
    },
    {
      iconName: "icofont-twitter",
      desc: (
        <p>
          🎉 Don't miss out on the buzz! Somrat Islam shares the scoop from <a href="#">@ShopCart</a>. Unbox happiness
          with our 50% Big Sale Offer. #ShopNow #ShopCartSpecials 🛒
        </p>
      ),
    },
  ];

  const footerbottomList = [
    {
      text: "Forums",
      link: "#",
    },
    {
      text: "Privacy Policy",
      link: "#",
    },
    {
      text: "Terms of Use",
      link: "#",
    },
  ];

  return (
    <footer className="style-2">
      <div className="footer-top dark-view padding-tb">
        <div className="container">
          <div className="row g-4 row-cols-xl-4 row-cols-sm-2 row-cols-1 justify-content-center">
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>{title}</h4>
                    </div>
                    <div className="content">
                      <p>{description}</p>
                      <ul className="lab-ul office-address">
                        {addressList.map((val, i) => (
                          <li key={i}>
                            <i className={val.iconName}></i>
                            {val.text}
                          </li>
                        ))}
                      </ul>
                      <ul className="lab-ul social-icons">
                        {socialList.map((val, i) => (
                          <li key={i}>
                            <a href={val.siteLink} className={val.className}>
                              <i className={val.iconName}></i>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-item">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>{ItemTitle}</h4>
                    </div>
                    <div className="content">
                      <ul className="lab-ul">
                        {ItemList.map((val, i) => (
                          <li key={i}>
                            <a href={val.link}>{val.text}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-item">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>{quickTitle}</h4>
                    </div>
                    <div className="content">
                      <ul className="lab-ul">
                        {quickList.map((val, i) => (
                          <li key={i}>
                            <a href={val.link}>{val.text}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-item twitter-post">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>{tweetTitle}</h4>
                    </div>
                    <div className="content">
                      <ul className="lab-ul">
                        {tweetList.map((val, i) => (
                          <li key={i}>
                            <i className={val.iconName}></i>
                            {val.desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="section-wrapper">
            <p>
              &copy;2023 <Link to="/">Shop Cart</Link>
              Designed by Jayan
            </p>
            <div className="footer-bottom-list">
              {footerbottomList.map((val, i) => (
                <a href={val.link} key={i}>
                  {val.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
