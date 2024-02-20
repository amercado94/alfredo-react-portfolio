import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "../style/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'


const socials = [
    {
      name: "GitHub",
      url: "https://github.com/amercado94",
      icon: faGithub,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/alfredo-mercado/",
      icon: faLinkedin,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/acemercado_/",
      icon: faInstagram,
    },
  ];

  const Footer = () => {
    return (
      <footer className="footer bg-dark text-white">
        <div className="footer-container">
          <section className="social-icons-wrapper d-flex flex-md-row justify-content-center">
            {socials.map(({ name, url, icon, color }) => (
              <div
                key={name}
                className="d-flex flex-column align-items-center mx-md-2 transparent-bg"
              >
                <a
                  href={url}
                  className={`icon ${name}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={icon}
                    className="footer-icon-size" 
                    style={{ color: color }}
                  />
                </a>
                <a href={url} target="_blank" rel="noreferrer">
                  <span className="d-inline-block mx-1 name">{name}</span>
                </a>
              </div>
            ))}
             </section>
        <section className="form-footer">
        <h6 className="name-text">&copy; 2024 All rights reserved Design by Alfredo Mercado</h6>
        </section>
      </div>
    </footer>
  );
};

export default Footer;