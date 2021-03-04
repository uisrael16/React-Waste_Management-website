import React, {useState} from 'react';
// import React from 'react' 
import{Button} from '../ButtonElements'
import Video from '../../videos/video.mp4';
import { HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight } from "./HeroElements";

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover) 
    } 

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
               <HeroH1>Help To Keep The Environment Clean</HeroH1>
               <HeroP>Make qoutations today... or send us an email.</HeroP>
               <HeroBtnWrapper>
                   <Button to='signup' 
                   onMouseEnter={onHover} 
                   onMouseLeave={onHover}
                   primary='true'
                   dark='true'
                   >
                    Get started{hover ? <ArrowForward /> : <ArrowRight
                     />}
                     </Button>
                </HeroBtnWrapper> 
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
