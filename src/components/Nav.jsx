import { Link } from "react-router-dom"
import { Logo } from "../assets/icons";




const Nav = () => {

    return (
        <>
            <Link to="#" className="absolute w-full font-poppins flex justify-center items-center text-slate-500 bg-pink-200/75 h-9 text-10xl">
                &nbsp; Check out our latest Simplified Report.
                <strong className="font-firma font-extrabold text-slate-600">&nbsp; Get it here ↗</strong>
            </Link>

            <nav className="absolute nav-header">
                <div className="h-full w-full py-0 px-5 max-container">
                    <div className="flex justify-center items-center h-full">
                        <Link to="/" className="brand mt-1.25 mr-14">
                            <Logo />
                        </Link>


                        <div className="flex justify-between w-full nav-menu">
                            <ul className="flex items-center text-14xl font-normal font-firma text-slate-400/100 h-full">
                                <li>
                                    <button className="has-dropdown relative">
                                        Personal
                                    </button>
                                </li>
                                <li className="ml-12">
                                    <button className="has-dropdown relative">
                                        Business
                                    </button>
                                </li>
                                <li className="ml-12">
                                    <button className="has-dropdown relative">
                                        Developer
                                    </button>
                                </li>
                                <li className="ml-12">
                                    <button className="has-dropdown relative">
                                        Learn
                                    </button>
                                </li>
                            </ul>



                            <div className="flex font-semibold items-center capitalize menu-right">
                                <Link to="#" alt="log in">
                                    log in
                                </Link>
                                <Link to="#" alt="sign-up">
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
