import React from 'react'
// import icon1 from "../../images/svg-4.svg";
import icon2 from "../../images/svg-5.svg";
import icon3 from "../../images/svg-6.svg";
import {
    Container,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP

} from './ServicesElements'

export default function Services() {
    return (
        <>
        <Container id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                
                <ServicesCard>
                    <ServicesIcon src={icon2}/>
                    <ServicesH2>
                    Services
                      <ServicesP>We believe that not all waste management solutions are best suited all waste categories. It is
                                essential to comprehend your waste streams
                                We investigate and have them characterized on the off
                                chance that they are not pre-grouped, to assist you with choosing the most fitting answer for
                                either re-use, recuperate, treat or securely discard each stream. Thus we proud ourselves in these
                                following services</ServicesP>
                    </ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon3}/>
                    <ServicesH2>
                     
                      <ServicesP   > 1. Segregate  waste.
                                     2. Recycle waste and convert it to bio-gas, bio-fuel and compost<br />
                                     3. Formalizing informal waste pickers will give them a sense of stability and assurance that
                                          they will get constant income.<br />
                                     4. Reselling the bio-energy back to the community<br /></ServicesP>
                    </ServicesH2>
                </ServicesCard>
            </ServicesWrapper>
        </Container>
        </>
    )

}

// export default Services