import React, { useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className='navbar'>
        <img src={logo} alt="" width="50" height="50"/>
        <img src={menu_open} onClick={openMenu} alt="" className='nav-open'/>
        <ul ref={menuRef} className='nav-menu'>
          <img className='nav-close' onClick={closeMenu} src={menu_close} alt="" height="24px"/>
            <li><AnchorLink className='anchor-link' href='#home'><p className='nav-para' onClick={() => setMenu("home")}>Home</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p className='nav-para' onClick={() => setMenu("about")}>About</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#project'><p className='nav-para' onClick={() => setMenu("project")}>Projects</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#skill'><p className='nav-para' onClick={() => setMenu("skill")}>Skills</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p className='nav-para' onClick={() => setMenu("contact")}>Contact</p></AnchorLink></li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar