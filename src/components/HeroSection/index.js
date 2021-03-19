import React, {useState} from 'react';
// import React from 'react' 
import{Button} from '../ButtonElements'
import Video from '../../videos/video.mp4';
import signin from '../Signin/Signin'
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
        <HeroContainer >
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
               <HeroH1>Ubuhlebezwe Waste Solutions</HeroH1>
               <HeroP>Claiming the land back from waste.</HeroP>
               <HeroBtnWrapper>
                   <Button  to="signin" 
                   onMouseEnter={onHover} 
                   onMouseLeave={onHover}
                   primary='true'
                   dark='true'
                   >
                    Send us email{hover ? <ArrowForward /> : <ArrowRight
                     />}
                     </Button>
                </HeroBtnWrapper> 
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
