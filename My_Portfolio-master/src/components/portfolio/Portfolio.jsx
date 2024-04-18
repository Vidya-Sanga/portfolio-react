import "./portfolio.css";

import IMG1 from "../../assets/job portal.png";
import IMG2 from "../../assets/Homeo_Doctor.jpg";
import IMG3 from "../../assets/Generation.jpg";

import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "GigMosaic",
      img: IMG1,
      description:
        "It is the website for providing a platform for asprirants to find felxible opportunities and also employeers find skilled aspirants for their short tem projects.",
      technologies: "React.js | SpringBoot  |  JavaScript | MySql" ,
     
    },
    {
      id: 2,
      title: "Homeo Doctor",
      img: IMG2,
      description:
        "This Homeo-Doctor application generates a report regarding patient's condition and status of health./n •	This Homeo-Doctor application generates a report regarding patient's condition and status of health.",
      technologies: "Kotlin | Xml | Android | Firebase",
      
    },
    {
      id: 3,
      title: "Generation JobPortal",
      img: IMG3,
      description:
        "Mob Inspire streamlines the business operations in corporate sector by providing cost-effective and highly productive software solutions.",
      technologies: "springBoot | java | MySQL | React",
     
    },

    
     
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
