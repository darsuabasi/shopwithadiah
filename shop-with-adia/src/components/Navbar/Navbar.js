import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css} from 'styled-components/macro';
import { Button } from '../Button/Button';
import { menuData } from '../Data/MenuData';
import { FaBars } from 'react-icons/fa';

const Nav = styled.nav`
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background: #000;
    text-align: center;
    ${'' /* margin-top: 1%; */}

    @media screen and (max-width: 768px) {
        display: flex;
        height: 12vh;
        width: 100vw;
        float: none;
    }
`;

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    ${'' /* padding: 1% 5%; */}
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        color: rgb(255, 99, 71);
    }
`

const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
    ${'' /* margin-top: 5%;
    margin-bottom: 3%; */}
`;

const MenuBars = styled(FaBars)`
    height: 30px;
    color: #fff;
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        background-size: contain;
        height: 40px;
        width: 40px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 5 5%);
        margin-top: 3.5%
    }
`;

const NavMenu = styled.div`
    display: flex; 
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

const NavMenuLinks = styled(Link)`
    ${NavLink}
    font-weight: 500;
    font-variant: small-caps;
    font-size: 30px;
`

const NavButton = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`


const Navbar = ({toggle}) => {
    return (
        <Nav class="sidebar" className="main_navbar_container">
            <Logo to="/"> Adiah Logo </Logo>

            <MenuBars onClick={toggle}/>

            <NavMenu>

                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>

            <NavButton> 
                    <Button to='/contact' primary="true">
                        Contact Me
                    </Button>
                    

            </NavButton>

            {/* <ul className="navbar_ui">
                <li class="navbar_li">
                    <NavLink className="navigation-links" to={"/"}> Home </NavLink>
                </li>

                <li class="navbar_li">
                    <NavLink className="navigation-links" to={"/adiah"}> Adiah </NavLink>
                </li>

                <li class="navbar_li">
                    <NavLink className="navigation-links" to={"/adiah/explore"}> Explore </NavLink>
                </li>


                <li class="navbar_li">
                    <NavLink className="navigation-links" to={"/adiah/shop"}> Shop </NavLink>
                </li>
            </ul> */}
        </Nav> 
    )
}

export default  Navbar;