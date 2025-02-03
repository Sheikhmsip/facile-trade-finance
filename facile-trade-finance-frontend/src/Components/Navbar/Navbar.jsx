import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar h-28 common-bg opacity-90 z-50  fixed top-0 left-0  primary-text pr-10">
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
            className="menu menu-sm dropdown-content  rounded-box z-50 p-2 shadow secondary-bg opacity-45"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
              <ul className="p-2 secondary-text z-50">
                <li>
                  <a>Contact</a>
                </li>
                <li>
                  <a>Team Member</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Partners</a>
            </li>
          </ul>
        </div>
        <a className="ml-60 lg:ml-2">
          <img
            className="w-40"
            src="https://i.ibb.co.com/5c7hzGJ/Whats-App-Image-2025-01-27-at-12-55-09-8f8c5971-removebg-preview.png"
            alt=""
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex border-2 rounded-full px-2 ">
        <ul className="menu menu-horizontal text-xl font-bold lg:space-x-5 px-1">
          <li className="">
            <Link role="link" className="button-hover-effect" to="/">Home</Link>
          </li>
          <li className="hover:bg-none">
            <details>
              <summary className="hover:bg-none w-full">
                {" "}
                <Link className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[rgb(219,124,25)] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 hover:bg-[rgb(14,85,120)] hover:text-white" to="/about">About</Link>
              </summary>
              <ul className="p-2 z-50">
                <li>
                  <Link className="button-hover-effect" to="#">Contact</Link>
                </li>
                <li>
                  <Link className="button-hover-effect" to="#">Team Member</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link className="button-hover-effect" to="/services">Services</Link>
          </li>
          <li>
            <Link className="button-hover-effect" to="/partners">Partners</Link>
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
