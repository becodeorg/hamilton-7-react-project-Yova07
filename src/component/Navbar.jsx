import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export default function Navbar() {

    const [toggleNav, setToggleNav] = useState(false);
    const isMediumScreen = useMediaQuery({ query: '(min-width: 1024px)' })

    const closeHandler = () => {
        setToggleNav(toggleNav === false)
    }


    const clickHandler = () => {
        setToggleNav(!toggleNav);
    }


    return (
        <nav>
            <ul className='navBar' style={{ left: isMediumScreen ? '0px':(toggleNav ? '0px' : '-300px')}}>
                <NavLink onClick={closeHandler} className='links' to='/'>Home</NavLink>
                <NavLink onClick={closeHandler} className='links' to='/games'>Games</NavLink>
                <NavLink onClick={closeHandler} className='links' to='/platforms'>Platforms</NavLink>
                <ul className="platform--nav">
                    <NavLink onClick={closeHandler} className='platform__links' to='/games/18'>Playstation 4</NavLink>
                    <NavLink onClick={closeHandler} className='platform__links' to='/games/1'>Xbox One</NavLink>
                    <NavLink onClick={closeHandler} className='platform__links' to='/games/4'>PC</NavLink>
                    <NavLink onClick={closeHandler} className='platform__links' to='/games/21'>Android</NavLink>
                    <NavLink onClick={closeHandler} className='platform__links' to='/games/3'>iOS</NavLink>
                    <NavLink onClick={closeHandler} className='platform__links' to='/games/7'>Nintendo Switch</NavLink>
                    
                </ul>

            </ul>
            <i onClick={clickHandler} className="fa-solid fa-bars menu" style={{ display: toggleNav ? 'none' : 'block' }}></i>
            <i onClick={clickHandler} className="fa-solid fa-xmark cross" style={{ display: toggleNav ? 'block' : 'none' }}></i>
        </nav>
    )
}