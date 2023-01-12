import { Link } from 'react-router-dom';




function NavBar() {


  return (
    <div className="navbar max-w-[1220px] mx-auto max-xs:w-80">
      <div className="navbar-start bg-transparent">
        <div className="dropdown rounded-box" id="dropdown">
          <label tabIndex={0} id="dropbtn" className="">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} id="dropdown-content" className="menu menu-compact dropdown-content glass shadow rounded-box w-52  underline">
            <li className=""><Link to='/politics'>POLITICS</Link></li>
            <li className=""><Link to='/karakaya'>KARAKAYA</Link></li>
            <li className=""><Link to='/socialjustice'>SOCIAL JUSTICE AND DIVERSITY</Link></li>
            <li className=""><Link to='/publicAdministration'>PUBLIC ADMINISTRATION</Link></li>
            <li className=""><Link to='about'>ABOUT ME</Link></li>
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        <Link to='/contact' className="text-base md:text-lg lg:text-lg underline">CONTACT</Link>
      </div>
    </div>
  )
}

export default NavBar