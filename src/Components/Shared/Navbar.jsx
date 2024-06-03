import { Link } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

const Navbar = () => {
  const {user, logOut} = useAuthContext();
  // console.log(user);
  const navLinks = (
    <>
      <li>
        <Link className="font-bold text-white text-lg" to="/">
          <div>Home</div>
        </Link>
      </li>
      <li>
        <Link className="font-bold text-white text-lg" to="/allTrainers">
          <div>All Trainers</div>
        </Link>
      </li>
      <li>
        <Link className="font-bold text-white text-lg" to="/allClasses">
          <div>All Classes</div>
        </Link>
      </li>
      <li>
        <Link className="font-bold text-white text-lg" to="/forums">
          <div>Forums</div>
        </Link>
      </li>
      <li>
        <Link className="font-bold text-white text-lg" to="/forums">
          <div>Forums</div>
        </Link>
      </li>
      {user ? (
        <li>
          <Link className="font-bold text-white text-lg" to="/login">
            <div onClick={logOut}>LogOut</div>
          </Link>
        </li>
      ) : (
        <li>
          <Link className="font-bold text-white text-lg" to="/login">
            <div>Login</div>
          </Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-[#57cc99]">
      <div className="navbar-start">
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
            className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn text-white btn-ghost text-2xl font-bold">
         Fit Flow
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <Link className="">
          <div className="w-10 ">
            <img
              className="rounded-full"
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
//
