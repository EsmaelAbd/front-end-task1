import "./FirstNavStyle.css";
import { FaEnvelope } from "react-icons/fa6";
import { FaMap } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const FirstNav = () => {
  return (
    <nav className="fnav">
      <ul className="info">
        <li>
          <i className="info-icons">
            <FaEnvelope />
          </i>
          info@company.com
        </li>
        <li>
          <i className="info-icons">
            <FaMap />
          </i>
          Sunny Isles Beach, FL 33160
        </li>
      </ul>
      <ul className="info2">
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaInstagram />
        </li>
      </ul>
    </nav>
  );
};

export default FirstNav;
