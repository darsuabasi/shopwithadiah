import React from 'react';
import { menuData } from '../Data/MenuData';
import { Link } from 'react-router-dom';
import styled, { css} from 'styled-components/macro';
import Button from '../Button/Button';
import { FaTimes } from 'react-icons/fa';


const DropdownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #cd853f;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transtiontion: 0.3s ease-in-out;
    opacity: ${({isOpen}) => isOpen ? '1' : '0'};
    top: ${({isOpen}) => isOpen ? '0' : -'100%'};
`;

const Icon = styled.div `
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent: 
    cursor: pointer;
    font-size: 1rem;
    outline: none;

`;

const CloseIcon = styled(FaTimes) `
    color: #000d1a;
`;

const DropdownWrapper = styled.div ``;

const DropdownMenu = styled.div `
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4rem;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(4, 60px);
    }
`;

const BTNWrap = styled.div `
    display: flex;
    justify-content: center;

`;

const DropdownLink = styled(Link)`
    display: flex;
    color: #000;
    align-items: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    cursor: pointer: 
    color: purple;
    transtiontion: 0.2s ease-in-out;

    &:hover {
        color: #000d1a;
    }
`;

const Dropdown = ({isOpen, toggle}) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle} > 
            <Icon onClick={toggle} >
                <CloseIcon/>
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {menuData.map((item, index) => (
                        <DropdownLink to={item.link} key={index}>
                            {item.title}
                        </DropdownLink>
                    ))}
                </DropdownMenu>
                <BTNWrap>
                        <Button primary="true" round="true" to="/contact">
                            Contact Me
                        </Button>

                </BTNWrap>
            </DropdownWrapper>

        </DropdownContainer>
    )

}

export default Dropdown;