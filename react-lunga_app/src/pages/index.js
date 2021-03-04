import React, {useState} from 'react'
import InfoSection from '../components/infoSection';
// import React from 'react'
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Services from '../components/Services';
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
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjOne}/>
            <Services/>
            <InfoSection {...homeObjThree}/>
            <InfoSection {...homeObjFive}/>
        </>
    )
}

export default Home