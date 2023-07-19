import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container" style={{display: "flex", fontFamily: "Rubik"}}>
          <NavLink className="navbar-brand" to="/">
            <i class="fa-solid fa-futbol NavLogo" style={{ color: "#ffffff" }}></i>
            Team Taverns
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li class="nav-item">
                <form class="form-inline my-2 my-lg-0">
                  <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;