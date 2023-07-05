import { Link, NavLink } from "react-router-dom";

const NavBar = () => {

    const navObject = [
        { path: '/', title: 'Home' },
        { path: '/projects', title: 'Projects' },
        { path: '/contact', title: 'Contact' },
        { path: '/about', title: 'About' },
    ]

    const navItems = navObject.map((pd, index) => <li key={index}><NavLink className={'transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-10 mx-3'} to={pd.path}>{pd.title}</NavLink></li>)




    return (
        <>
            <div data-theme='synthwave' className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to={'/'} className="normal-case text-xl">Nagib Mahfuz</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn">
                        <a href="https://drive.google.com/u/0/uc?id=1wVXhyCRpcW1z0Zrk8fOaSKcmQYOvJBD_&export=download">Download Resume</a>
                    </button>
                </div>
            </div>
        </>
    );
};

export default NavBar;