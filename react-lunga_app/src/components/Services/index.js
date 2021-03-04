import React from 'react'
import icon1 from "../../images/svg-4.svg";
import icon2 from "../../images/svg-5.svg";
import icon3 from "../../images/svg-6.svg";
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP

} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={icon1}/>
                    <ServicesH2>
                      Reduce expenses  
                      <ServicesP>Our target market is everyone who uses a refuse bin and industries.</ServicesP>
                    </ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon2}/>
                    <ServicesH2>
                      Reduce expenses  
                      <ServicesP>Our target market is everyone who uses a refuse bin and industries.</ServicesP>
                    </ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon3}/>
                    <ServicesH2>
                      Reduce expenses  
                      <ServicesP>Our target market is everyone who uses a refuse bin and industries.</ServicesP>
                    </ServicesH2>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>

    )

}

export default Services