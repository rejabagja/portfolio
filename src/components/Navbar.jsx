import { useState } from "react";
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const {pathname} = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeNav = "border-b-2 border-slate-900";
  const classNavLink = "hover:border-b-2 hover:border-slate-900";
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <nav className="p-4 text-slate-900 font-medium text-lg flex justify-end sm:justify-center">
      <div className={`fixed top-14 inset-x-0 bottom-0 z-10 bg-white flex-col sm:static sm:flex sm:flex-row justify-center gap-x-4 py-2 items-center gap-y-4 ${isMenuOpen ? 'flex' : 'hidden'}`}>
        <Link 
          to="/" 
          className={`${classNavLink} ${pathname === '/' ? activeNav : ''}`}
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className={`${classNavLink} ${pathname === '/about' ? activeNav : ''}`}
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
        <Link 
          to="/experience" 
          className={`${classNavLink} ${pathname === '/experience' ? activeNav : ''}`}
          onClick={() => setIsMenuOpen(false)}
        >
          Experience
        </Link>
        <Link 
          to="/skills" 
          className={`${classNavLink} ${pathname === '/skills' ? activeNav : ''}`}
          onClick={() => setIsMenuOpen(false)}
        >
          Skills
        </Link>
        <Link 
          to="/interest" 
          className={`${classNavLink} ${pathname === '/interest' ? activeNav : ''}`}
          onClick={() => setIsMenuOpen(false)}
        >
          Interest
        </Link>
        <Link 
          to="/awards" 
          className={`${classNavLink} ${pathname === '/awards' ? activeNav : ''}`}
          onClick={() => setIsMenuOpen(false)}
        >
          Awards
        </Link>
      </div>
      <span className="sm:hidden text-5xl cursor-pointer" onClick={() => toggleMenu()}>+</span>
    </nav>
  )
}

export default Navbar;