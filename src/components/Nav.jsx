import { Link } from "react-router-dom"
import { Logo, Dropdown } from "../assets/icons";




const Nav = () => {

  return (
    <>
        <Link to="" alt="" className="absolute w-full font-poppins flex justify-center items-center text-slate-500 bg-pink-200/75 h-9 py-2 px-0 text-10xl">
            &nbsp; Check out our latest Simplified Report.
            <strong className="font-firma font-extrabold text-slate-600">&nbsp; Get it here ↗</strong>
        </Link>
        <nav className="text-2xl nav-header z-100">
            <div className="max-container w-full h-full py-0 px-5">
                <div className="brand flex items-center h-full">
                    <Link to="/" className="brand__logo mt-5 mr-14">
                        <Logo />
                    </Link>
                    <div className="flex justify-between items-center w-full">
                        <ul className="flex text-base font-medium font-firma text-slate-400/100">
                            <li>
                                <button className="flex items-center has-dropdown">
                                    Personal <Dropdown />
                                </button>
                            </li>
                            <li className="ml-12">
                                <button className="flex items-center has-dropdown">
                                    Business <Dropdown />
                                </button>
                            </li>
                            <li className="ml-12">
                                <button className="flex items-center has-dropdown">
                                    Developer <Dropdown />
                                </button>
                            </li>
                            <li className="ml-12">
                                <button className="flex items-center has-dropdown">
                                    Learn <Dropdown />
                                </button>
                            </li>
                        </ul>
                        <div className="capitalize flex items-center text-base font-poppins font-semibold">
                            <Link to="" className="text-blue-600 mr-30">
                                log in
                            </Link>
                            <Link to="" className="text-white flex items-center bg-blue-600 min-h-11 px-4.5 rounded-md">
                                sign up for free 
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>
  );
};

export default Nav;
