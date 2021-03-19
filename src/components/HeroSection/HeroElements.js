// import React from 'react'
import styled from 'styled-components'
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    width: center;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0, 0, 0 ,0.2) 0% rgba(0,0,0,0,6) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`
export const HeroBg = styled.div`
    position: absolute;   
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    left: 2;
    -a-object-fit: cover;
    object-fit: cover;
    background: #000000;
    opacity: +0.4;
`
export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    positoin: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    color: #7FFF00;
    font-size: 150%;
    font-weight: 900;
    text-align: center;
    animation: text_reveal_name 5s ease forwards; 
    animation-delay: 3s;
    display: inline-block;
    padding: 10px 30px;
    color:white;
    background-color: transparent;
     border: 2px solid white;
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: .1.5rem;
    margin-top: 36px;
    transition: .3s ease;
    transition-property: background-color, color;
    &:hover {
        color: #white;
        background-color: white;
    }
  
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
html{
    font-size: 10xp;
    font-family: 'Montserrat', sans-serif;
}
a{
    text-decoration: none; 
}
.container{
    min-height: 100vh;
    width : 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.heroH1 {

    background-size: cover;
    background-position: top center;
    position: relative;
    z-index: 1;
}

#heroH1  .heroH1 {
    
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 50px;
    justify-content: flex-start;
}
.heroH1 {
    display: block;
    width:fit-content;
    font-size: 4rem;
    position: relative;
    color: transparent;
    animation: text_reveal 5s ease forwards;
    animation-delay: 1s;
}
.heroH1 :nth-child(1){
    animation-delay: 1s;
}
.heroH1 :nth-child(2){
    animation-delay: 2s;
}
.heroH1 :nth-child(3){
    animation: text_reveal_name 5s ease forwards; 
    animation-delay: 3s;
}
.heroH1  span{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    font-weight: 900;
    background-color: #01BF71;
    animation: text_reveal_box 1s ease;
    animation-delay: .5s;
}
.heroH1 :nth-child(1) span {
    animation-delay: .5s;
}
.heroH1 :nth-child(2) span {
    animation-delay: 1.5s;
}
.heroH1  h1:nth-child(3) span {
    animation-delay: 2.5s;
}
.heroH1  .cta {
    display: inline-block;
    padding: 10px 30px;
    color:white;
    background-color: transparent;
    border: 2px solid #01BF71;
    font-size: 2rem;
    width: 100%;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: .1rem;
    margin-top: 36px;
    transition: .3s ease;
    transition-property: background-color, color;
}
.heroH1 .cta:hover {
    color: white;
    background-color: crimson;
    width: 100%;
    font-weight: 900;
}

@keyframes text_reveal_box {
    50%{
        width: 100%;
        left: 0;
    }
    100%{
        width: 0;
        left: 100%;
    }
}

@keyframes text_reveal{
    100%{
        color: white;
    }
}

@keyframes text_reveal_name{
    100%{
        color: #01BF71;
        font-weight: 500;
        width: 100%;
        font-weight: 900;
    }
}

    @media screen and (max-width: 768px) {
        font-size: 60px;
    }

    @media screen and (max-width:480px) {
        font-size: 32px;
        width: 100%;
        font-weight: 900;
    }
`
export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width:480px) {
        font-size: 18px;
    }
`

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`
