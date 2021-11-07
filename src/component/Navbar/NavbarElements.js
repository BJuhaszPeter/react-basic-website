import React, { useState, useEffect } from 'react';
import classes from './NavbarElements.module.css';
import { FaBars } from 'react-icons/fa';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS, animateScroll as scroll } from 'react-scroll';

import styled from 'styled-components';

const NavbarElements = (props) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active{
    border-bottom: 3px solid #01bf71;
  }
  `;

  return (

    <>

      <nav className={scrollNav ? classes.Nav : classes.ScrollNav}>
        <div className={classes.NavbarContainer}>
          <LinkR to='/' className={classes.NavLogo} onClick={toggleHome}>
                dolla
          </LinkR>
          <div className={classes.MobileIcon} onClick={() => props.setIsOpen()}>
            <FaBars />
          </div>
          <ul className={classes.NavMenu}>
            <li className={classes.NavItems}><NavLinks smooth duration={500} spy exact='true' offset={-80} to='about'>About </NavLinks>
            </li>
            <li className={classes.NavItems}><NavLinks smooth duration={500} spy exact='true' offset={-80} to='discover'>Discover</NavLinks>
            </li>
            <li className={classes.NavItems}><NavLinks smooth duration={500} spy exact='true' offset={-80} to='services'>Services</NavLinks>
            </li>
            <li className={classes.NavItems}><NavLinks smooth duration={500} spy exact='true' offset={-80} to='signup'>Sing Up</NavLinks>
            </li>
          </ul>
          <nav className={classes.NavBtn}>
            <LinkR to='/signin' className={classes.NavBtnLink}>Sign In</LinkR>
          </nav>
        </div>
      </nav>
    </>
  );
};

export default NavbarElements;
