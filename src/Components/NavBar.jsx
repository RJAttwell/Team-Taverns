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
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
