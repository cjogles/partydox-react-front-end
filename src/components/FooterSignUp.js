import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footerSign">
      <div>
        <Link to="/">
          <h1>
            Party Dox!{" "}
            <span role="img" aria-label="tada">
              🎉
            </span>
          </h1>
        </Link>
      </div>
      <p>
        {" "}
        <span role="img" aria-label="copyright">
          ©️
        </span>{" "}
        Created by Jackson Ogles 2020
      </p>
      <div>
        <a
          rel="noopener noreferrer"
          href="https://jacksonogles.com"
          target="_blank"
        >
          <h2>jacksonogles.com</h2>
        </a>
      </div>
    </div>
  );
}

export default Footer;
