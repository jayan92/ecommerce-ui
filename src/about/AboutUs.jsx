import React from "react";
import PageHeader from "../components/PageHeader";

const AboutUs = () => {
  const subTitle = "About Our Brand";
  const title = "Good Quality Services And Better Experiences";
  const desc =
    "Lorem ipsum dolor sit amet consectetur voluptate. Corporis  cum necessitatibus rem nihil. Sed optio quidem necessitatibus error quia tenetur numquam ut. Dolorem ducimus, iste ex repellendus non doloremque similique fuga eligendi. Cumque veritatis velit eligendi nisi laudantium ut quibusdam omnis magnam doloribus commodi ducimus nemo quod repellat, blanditiis unde, voluptas saepe voluptates cupiditate";

  const year = "10+";
  const experience = "Years Of Experiences";

  const aboutList = [
    {
      imgUrl: "/assets/images/about/icon/01.jpg",
      imgAlt: "about icon rajibraj91 rajibraj",
      title: "Consectetur voluptate",
      desc: "Distinctively provide acces mutfuncto users whereas communicate leveraged services",
    },
    {
      imgUrl: "/assets/images/about/icon/02.jpg",
      imgAlt: "about icon rajibraj91 rajibraj",
      title: "Lorem ipsum dolor sit amet",
      desc: "Distinctively provide acces mutfuncto users whereas communicate leveraged services",
    },
    {
      imgUrl: "/assets/images/about/icon/03.jpg",
      imgAlt: "about icon rajibraj91 rajibraj",
      title: "Necessitatibus rem nihil",
      desc: "Distinctively provide acces mutfuncto users whereas communicate leveraged services",
    },
  ];

  return (
    <div>
      <PageHeader title="About Our Brand" curPage="About" />
      <div className="about-section style-3 padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center">
            <div className="col">
              <div className="about-left">
                <div className="about-thumb">
                  <img src="/assets/images/about/01.jpg" alt="about" />
                </div>
                <div className="abs-thumb">
                  <img src="/assets/images/about/02.jpg" alt="about" />
                </div>
                <div className="about-left-content">
                  <h3>{year}</h3>
                  <p>{experience}</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="about-right">
                <div className="section-header">
                  <span className="subtitle">{subTitle}</span>
                  <h2 className="title">{title}</h2>
                  <p>{desc}</p>
                </div>
                <div className="section-wrapper">
                  <ul className="lab-ul">
                    {aboutList.map((val, i) => (
                      <li key={i}>
                        <div className="sr-left">
                          <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                        </div>
                        <div className="sr-right">
                          <h5>{val.title}</h5>
                          <p>{val.desc}</p>
                        </div>
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
  );
};

export default AboutUs;
