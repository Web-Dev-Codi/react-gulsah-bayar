import { Link } from 'react-router-dom';




function NavBar() {


  return (
    <div className="navbar max-w-[1200px] mx-auto max-xs:w-80">
      <div className="navbar-start bg-primary">
        <div className="dropdown" id="dropdown">
          <label tabIndex={0} id="dropbtn" className="btn btn-ghost btn-circle md:hidden xl:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} id="dropdown-content" className="menu menu-compact bg-primary dropdown-content shadow rounded-box w-52">
            <li className="normal-case"><Link to='karakaya'>Karakaya</Link></li>
            <li className="normal-case"><Link to='/socialjustice'>Social Justice and Diversity</Link></li>
            <li className="normal-case"><Link to='/publicAdministration'>Public Administration</Link></li>
            <li className="normal-case"><Link to='about'>About Me</Link></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center xl:navbar-start xl:flex-start xl:absolute lg:navbar-start lg:flex-start lg:absolute md:navbar-start md:flex-start md:absolute">
        <div className="hidden md:visible lg:flex">
          <ul className="menu menu-horizontal p-0 text-white-100 rounded-full">
            <li className="underline" tabIndex={0}>
              <a>
                Politics
              </a>
              <ul className="rounded-b-lg">
                <li className="normal-case"><Link to='/socialjustice'>Social Justice and Diversity</Link></li>
                <li className="normal-case"><Link to='/publicAdministration'>Public Administration</Link></li>
              </ul>
            </li>
            <li className="underline normal-case"><Link to='karakaya'>Karakaya</Link></li>
            <li className="underline normal-case">
              <Link to='about'>
                About Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        <Link to='/contact' className="btn btn-xs xs:btn-sm sm:btn-sm md:btn-md normal-case text-lg">Contact</Link>
      </div>
    </div>
  )
}

export default NavBar