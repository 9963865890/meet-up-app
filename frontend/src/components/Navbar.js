import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">
        Meetup App
      </Link>

      <div>
        <Link className="btn btn-outline-light btn-sm" to="/create">
          + Create Event
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;