import React from 'react'
import {FaBars} from 'react-icons/fa';
import gatsbyIcon from "../../images/icon6.jpg";
import{
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink,
} from './NavbarElements'



const Navbar = ({ toggle }) => {

    
    return (
        <>
            <Nav>
                <NavbarContainer>
                   <NavLogo   src={gatsbyIcon}>
                   </NavLogo>
                   <MobileIcon onClick={toggle}>
                       <FaBars />
                   </MobileIcon>
                   <NavMenu>
                       <NavItem>
                           <NavLinks to='about'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                           <NavLinks to='discover'>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                           <NavLinks to='service'>Service</NavLinks>
                        </NavItem>
                        <NavItem>
                           <NavLinks to='singnup'>Sign Up</NavLinks>
                        </NavItem>
                   </NavMenu>
                   <NavBtn>
                     <NavBtnLink to="/singnin">Sign In</NavBtnLink>  
                   </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
