import React, {useState} from 'react'
import InfoSection from '../components/infoSection';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Services from '../components/Services';
import Cookie from 'react-cookie';
import Signin from '../components/Signin/Signin';
import { homeObjOne } from '../components/infoSection/Data'
import { homeObjTwo } from '../components/infoSection/Data'
import { homeObjThree } from '../components/infoSection/Data'
import { homeObjFive } from '../components/infoSection/Data'

 const Home = () => {
     const [isOpen, setIsOpen] =useState(false); 

     const toggle = () => {
         setIsOpen(!isOpen)
     };

    return (
        <>
        {/* <Cookie/> */}
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            
            <Services/>
            <InfoSection {...homeObjFive}/>
            <InfoSection {...homeObjThree}/>
            <Signin/>
            <Footer id="footer"/>
        </>
    )
}


export default Home