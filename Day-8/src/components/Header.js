import { LOGO_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/fontawesome-free-solid";

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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>
            <FontAwesomeIcon icon={faCartPlus} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
