import React from 'react'
import { FaAngleRight } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import { CgClose } from "react-icons/cg";
import { motion } from "framer-motion"
const Navbar = () => {

    const [showMobileBar, setMobileBar] = useState(false)

    return (
        <div className='navbar'>
            
            <NavLink className='logo' to='/'>
                <h1>REACT ANVAR</h1>
            </NavLink>
            <ul className='nav_links'>
                <li>
                    <NavLink to='/'>Bosh Sahifa</NavLink>
                    <NavLink to='/loyihalar'>Loyihalar</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                </li>
            </ul>
            <a className='contact_phone' href='tel:+998913333294'>Bog'lanish <FaAngleRight /></a>
            <button onClick={() => { setMobileBar(true) }} className='burger_menu'><GiHamburgerMenu /></button>

            {showMobileBar && <div className='mobile_bar'>

                <img className='green_png' src='https://s3-alpha-sig.figma.com/img/8596/6361/60953640368fdca00d60b69708ae02c9?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mPAzHjmW1pueDJstkjxZTdZpFxR8pdGseNsn6bV9KoT-MBBqraAJl7Cx7z~NucQobQoQm~E1iiqOVmAuHWCKQwUUHaZthqf-5T0LnOEuYZheZDMLXqPNXeOW4qnltlXyzyRUD3MCN6SEb-Mb-a-rAit6C9CcjLMVAu0-tqQlxFOUs6DyuHr554V9gbTR~u8b9ALbcAPwCiZ6o9hBjpETi3gywKW6Xcchg1hqlyw17LJn8RpL25LYMGcvYdUfcABV0M2CKvTTITCGyGGeEDK3NF6QEs2vrKHxBhUd-zkZqcJbxMxHRdRDlRMxlcIIOTo-x-4Ka10KuGujYj9lK2E27A__' />

                <button onClick={() => { setMobileBar(false) }} className='burger_menu_close'><CgClose /></button>
                <NavLink onClick={() => { setMobileBar(false) }} className='logo' to='/'>
                    <h1>REACT ANVAR</h1>
                </NavLink>
                
                <ul>
                    <li>
                        <NavLink onClick={() => { setMobileBar(false) }} to='/'>Bosh Sahifa</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => { setMobileBar(false) }} to='/loyihalar'>Loyihalar</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => { setMobileBar(false) }} to='/blog'>Blog</NavLink>
                    </li>
                </ul>
            </div>}
        </div>
    )
}

export default Navbar