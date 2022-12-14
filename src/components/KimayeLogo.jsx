import React from "react";
import { Link } from "react-router-dom";
import navcss from "./navbar.module.css";
import "./navbargloble.css";

const KimayeLogo = () => {
  return (
    <div className="kimayelogo">
      <form>
        <li className="nav-item logo">
          <Link className="nav-link" to="/">
            <img
              className={navcss.logo}
              alt="Kimaye"
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_400x.png?v=1596288204"
            />
          </Link>
        </li>
      </form>
    </div>
  );
};

export default KimayeLogo;