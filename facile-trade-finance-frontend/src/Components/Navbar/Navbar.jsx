import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar h-28  opacity-90 z-50  absolute top-0 left-0  primary-text pr-10">
      <div className="navbar-start w-full ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content  rounded-box z-50 p-2 shadow bg-white"
          >
            <li>
              <Link className="button-hover-effect" to="/">Home</Link>
            </li>
            <li>
              <Link className="button-hover-effect" to="/about">About</Link>
              <ul className="p-2 secondary-text z-50">
                <li>
                  <Link className="button-hover-effect">Contact</Link>
                </li>
                <li>
                  <Link className="button-hover-effect">Team Member</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="button-hover-effect" to="/services">Services</Link>
            </li>
            <li>
              <Link className="button-hover-effect" to="/partners">Partners</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className=" lg:ml-2">
          <img
            className="w-40"
            src="https://i.ibb.co.com/qL7mQzj3/faciletradefinance.png"
            alt=""
          />
        </Link>
        <h2 className="common-font md:text-3xl lg:text-3xl text-2xl secondary-text"> <Link to="/">Facile Trade Finance</Link></h2>
      </div>
      <div className="navbar-center hidden lg:flex  px-2 ">
        <ul className="menu menu-horizontal text-xl font-bold lg:space-x-5 px-1">
          <li className="">
            <Link role="link" className="button-hover-effect" to="/">
              Home
            </Link>
          </li>
          <li className="hover:bg-none">
            <details>
              <summary className="hover:bg-none w-full">
                {" "}
                <Link to="/about" className="button-hover-effect">
                  About
                </Link>
              </summary>
              <ul className="p-2 z-50">
                <li>
                  <Link className="button-hover-effect" to="#">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="button-hover-effect" to="#">
                    Team Member
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link className="button-hover-effect" to="/services">
              Services
            </Link>
          </li>
          <li>
            <Link className="button-hover-effect" to="/partners">
              Partners
            </Link>
          </li>
        </ul>
      </div>
      {/* <div className="navbar-end hidden">
        <a className="btn">Button</a>
      </div> */}
    </div>
  );
};

export default Navbar;
