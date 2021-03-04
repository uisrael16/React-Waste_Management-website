import React from 'react'
import {Button} from '../ButtonElements'
// import { InforWrapper } from './infoElements'
import {
    InfoContainer, 
    InforWrapper, 
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap,
    ImgWrap,
    Img,

} from './infoElements';

function InfoSection({
    id,
    lightBg,
    lightText,
    topLine,
    headLine,
    description,
    buttonLabel,
    imgStart,
    img,
    alt,
    primary,
    darkText,
    dark,
    dark2

}) {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InforWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to="home" smooth={true} 
                                                        duration={500} 
                                                        spy={true} 
                                                        exact="true" 
                                                        offset={80} 
                                                        primary={primary ? 1 : 0}
                                                        dark={dark ? 1 : 0}
                                                        dark2={dark2 ? 1 : 0}
                                                        
                                                        >
                                                            {buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>

                </InforWrapper>
            </InfoContainer>
        </>
    );
}

export default InfoSection
