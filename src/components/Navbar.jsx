// import { NavLink } from "react-router-dom";
// import { MdMail } from "react-icons/md";

const Navbar = () => {


//     const navLinks = <>
//     <li><NavLink to='/' className={({ isActive, isPending }) =>
//         isPending ? "pending" : isActive ? "text-cyan-800 underline" : ""
//     }>Home</NavLink></li>
//     <li><NavLink to='/about' className={({ isActive, isPending }) =>
//         isPending ? "pending" : isActive ? "text-cyan-800 underline" : ""
//     }>About</NavLink></li>
//     <li><NavLink to='/contact' className={({ isActive, isPending }) =>
//         isPending ? "pending" : isActive ? "text-cyan-800 underline" : ""
//     }>Contact</NavLink></li>

// </>




    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {/* {navLinks} */}
      </ul>
    </div>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {/* {navLinks} */}
        
    </ul>
  </div>
  <div className="navbar-end">
  {/* <a className="btn bg-neutral hover:bg-black text-white " href="mailto:ahnaf.ahmed.42173@gmail.com" download><MdMail></MdMail> Email Me</a> */}
  </div>
</div>
    );
};

export default Navbar;