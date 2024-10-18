import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        {/* <li><NavLink to='/signup'>Signup</NavLink></li> */}
        <li><NavLink to='/products'>Products</NavLink></li>
        <li><NavLink to='/upload'>Upload Product</NavLink></li>
    </>
    return (
        <div className="navbar text-white bg-gradient-to-r from-blue-500 to-green-500">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl text-green-400 font-bold">FARMERS MARKET</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={'/signup'} className="btn btn-success text-white text-lg">Join Now</Link>
            </div>
        </div>
    );
};

export default Header;