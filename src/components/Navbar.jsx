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
    <nav className="p-4 text-slate-900 font-medium text-lg">
      <div className="hidden sm:flex justify-center gap-x-4 py-2">
        <Link to="/" className={`${classNavLink} ${pathname === '/' ? activeNav : ''}`}>Home</Link>
        <Link to="/about" className={`${classNavLink} ${pathname === '/about' ? activeNav : ''}`}>About</Link>
        <Link to="/experience" className={`${classNavLink} ${pathname === '/experience' ? activeNav : ''}`}>Experience</Link>
        <Link to="/skills" className={`${classNavLink} ${pathname === '/skills' ? activeNav : ''}`}>Skills</Link>
        <Link to="/interest" className={`${classNavLink} ${pathname === '/interest' ? activeNav : ''}`}>Interest</Link>
        <Link to="/awards" className={`${classNavLink} ${pathname === '/awards' ? activeNav : ''}`}>Awards</Link>
      </div>
      <button className="sm:hidden">V</button>
    </nav>
  )
}

export default Navbar;