import logo from "../../assets/react.png";

function NavBar() {
  return (
    <>
      <div className="flex items-center  space-x-2">
        <img className="h-10 w-auto" src={logo}></img>
        <p> React Jobs</p>
      </div>
    </>
  );
}

export default NavBar;
