import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css} from 'styled-components/macro';
import { Button } from '../Button/Button';
import { menuData } from '../Data/MenuData';
import { FaBars } from 'react-icons/fa';
import { GiShoppingCart } from 'react-icons/gi';
// import { useSelector, useDispatch } from "react-redux";
// import { useStateValue } from "../../StateProvider";
import { useSelector, useDispatch } from "react-redux";
import logoOne from '../../assets/logo-w-black.png';
import logoTwo from '../../assets/logo-w-pink.png'


const Nav = styled.nav`
    height: 11vh;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background: #000;
    text-align: center;
    background: transparent;
    ${'' /* margin-top: 1%; */}

    &.active {
        background: #000000;
    }

    @media screen and (max-width: 768px) {
        display: flex;
        height: 11vh;
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

const ShoppingCart = styled(GiShoppingCart)`
    height: 2rem;
    width: 2rem;

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

const BasketDiv = styled.div`
    display: flex;
    align-items: center;
    color: white;
    
    @media screen and (max-width: 768px) {
        ${'' /* display: none; */}
    }
`

const SpanBasket = styled.span `
    margin-left: 3px;
    margin-right: 3px;
    font-size: 18px;
    font-weight: 800;
`

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
    margin-right: 4px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavButtonTwo = styled.div`
    display: flex;
    align-items: center;
    ${'' /* margin-right: 24px; */}

`;

const BasketButton  = styled(Link) `
    background: ${({ primary }) => (primary ? '#fff' : 'CD853F')};
    white-space: nowrap;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursror: pointer;
    text-decoration: none;
    transition: 0.4s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({big}) => (big ? '16px 40px' : '14px 24px')}; 
    color: ${({ primary }) => (primary ? '#000' : '000d1a')};
    font-size: ${({ big }) => (big ? '20px' : '14px')}; 
`

const Navbar = ({toggle, totalItems}) => {
    const location = useLocation();

    return (
        <Nav class="sidebar" className="main_navbar_container active">
            <Logo to="/"> <img style={{width: '90px', height: '78px'}} src={logoTwo} /> </Logo>

            <MenuBars onClick={toggle}/>

            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>

            <NavButton> 
                {/* <Button to='/contact' primary="true">
                    Contact Me
                </Button> */}
                {/* {location.pathname === '/adiah/shop/cart'  && ( */}
                    <BasketButton to='/adiah/shop/cart'>
                        <BasketDiv>
                            <ShoppingCart/>
                            <SpanBasket>
                                {totalItems}
                            </SpanBasket>
                        </BasketDiv>
                    </BasketButton>
                {/* )} */}
            </NavButton>
        </Nav> 
    )
}

export default  Navbar;