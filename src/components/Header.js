import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secundary pointing menu">
      <Link to="/" className="item">
        Streamy
      </Link>
      <div className="right menu"></div>
      <Link to="/" className="item">
        All Streams
      </Link>
    </div>
  );
};

export default Header;
