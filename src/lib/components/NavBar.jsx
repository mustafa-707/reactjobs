import logo from "../../assets/react.png";
import { NavLink } from "react-router-dom";

function NavBar() {
  const navLinker = ({ isActive }) =>
    isActive ? "selectedBtn" : "unSelectedBtn";
  return (
    <>
      <nav className="navbar">
        <div className="alignment">
          <div className="justafier">
            <div className="center">
              <img className="logo" src={logo} alt="React Jobs"></img>
              <span className="sitename"> React Jobs</span>
              <div className="gap">
                <div className="spacer">
                  <NavLink className={navLinker} to="/">
                    Home
                  </NavLink>
                  <NavLink className={navLinker} to="/jobs">
                    Jobs
                  </NavLink>
                  <NavLink className={navLinker} to="/add-job">
                    Add Job
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
