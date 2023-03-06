import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            Use Context
          </Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/ "
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/Abaout "
              >
                Abaout
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/Login "
              >
                Login
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
      {/* <Link to="">Home</Link>
      <Link to="/about">Abuot</Link>
      <Link to="/login">Login</Link> */}
    </>
  );
};
