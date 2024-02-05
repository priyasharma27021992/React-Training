import { LOGO_URL } from "../utils/constants";

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
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
