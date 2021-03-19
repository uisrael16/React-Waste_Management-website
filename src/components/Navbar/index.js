import React, {useState, useEffect} from 'react'
import { AiOutlineQrcode } from "react-icons/ai";
import gatsbyIcon from "../../images/icon2.png";
import "../Footer/"
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
import {IconContext} from 'react-icons/lib'


const Navbar = ({ toggle }) => {
    const[scrollNav, setScrollNav] = useState(false); 
    
    const changeNav = ()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        }else {
            setScrollNav(false)
        }
    };

//Just to make sure this thing doesn't go crazy    
useEffect(() => {
    window.addEventListener('scroll', changeNav)
}, []);

    return (
        <>
        <IconContext.Provider value={{ color: '#01BF71'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                   <NavLogo to='/'  src={gatsbyIcon}>
                   </NavLogo>
                   <MobileIcon onClick={toggle}>
                       <AiOutlineQrcode />
                   </MobileIcon>
                   <NavMenu>
                   <NavItem>
                           <NavLinks to='discover'>About</NavLinks>
                        </NavItem>
                       <NavItem>
                           <NavLinks to='about'>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                           <NavLinks to='services'>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                           <NavLinks to='signin'>Send us email</NavLinks>
                        </NavItem>
                   </NavMenu>
                   <NavBtn>
                     {/* <NavBtnLink to="/foot">Talk To Us</NavBtnLink>   */}
                   </NavBtn>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
