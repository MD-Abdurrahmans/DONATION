import { NavLink } from "react-router-dom"


export default function Navbar() {

    const links = <>

        <li className="text-lg font-bold">

            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-600" : ""


                }


            >
                Home
            </NavLink>
        </li>




        <li className="text-lg font-bold">

            <NavLink
                to="/donation"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-600" : ""


                }


            >
                Donation
            </NavLink>
        </li>

        <li className="text-lg font-bold">

            <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-600" : ""


                }


            >
                Statistics
            </NavLink>
        </li>

    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className="w-[150px]">
                     <img className="" src="../../../public/Logo.png" alt="logo" />
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {links}

                </ul>
            </div>
           
        </div>
    )
}
