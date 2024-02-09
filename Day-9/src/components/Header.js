import { LOGO_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/fontawesome-free-solid";
import { Link } from "react-router-dom";

// Title component for display logo
const Title = () => (
  <a href="/">
    <img className="logo" src={LOGO_URL} alt="Food Fire Logo" />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faCartPlus} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
