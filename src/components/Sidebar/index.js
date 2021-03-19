import React from 'react'
import {Link as linkR} from 'react-scroll';
import {Link as LinkS} from 'react-router-dom';
import {
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
    SideBtnWrap, 
    SidebarRoute 
} from './SidebarElements' 
import {BrowserRouter as Router, Switch,
    Route} from 'react-router-dom'

export const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <Router>
            <Switch>
          <Route path="/about">
            {/* <About /> */}
          </Route>
          <Route path="discover">
            {/* <Users /> */}
          </Route>
          <Route path="/">
            {/* <Home /> */}
          </Route>
        </Switch>
            </Router>
            <SidebarWrapper>
                <SidebarMenu>
                    
                    <SidebarLink to="discover"  onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>Discover</SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to="signin" onClick={toggle}>Send us email</SidebarLink>
                </SidebarMenu>
                
                {/* <SideBtnWrap>
                 <SidebarRoute to="signin" onClick={toggle}>Email us</SidebarRoute>  
                </SideBtnWrap> */}
            </SidebarWrapper>
                
        </SidebarContainer>
    );
};

export default Sidebar;