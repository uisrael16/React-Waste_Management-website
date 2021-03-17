import React from 'react'

import {
    InfoContainer, 
    InforWrapper, 
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine,
    TopLine2, 
    Heading, 
    Subtitle,
    Subtitle2, 
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
            <InfoContainer lightBg={lightBg} id={id} >
                <InforWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                
                                
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                       
                                <BtnWrap>
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
