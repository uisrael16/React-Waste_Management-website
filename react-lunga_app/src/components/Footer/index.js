import React from 'react'
import gatsbyIcon from "../../images/icon2.png";
import {
    FooterContainer, 
    FooterWrap,
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinksItems, 
    FooterLinkTitle, 
    FooterLink,
    SocialMedia, 
         SocialMediaWrap,
         SocialLogo, 
         WebsiteRights, 
         SocialIcons, 
         SocialIconLink,
         Img
         
        }from './FooterElements'
        import { FaInstagram,FaTwitter,FaFacebook} from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterContainer id="foot">
            <FooterWrap>
                <Img  src={gatsbyIcon} ></Img>
                <FooterLinksContainer >
                    <FooterLinksWrapper>
                       
                        <FooterLinksItems >
                          <FooterLinkTitle>Contact Us</FooterLinkTitle> 
                            <FooterLink to="/">8116 Phala Street</FooterLink>
                            <FooterLink to="/">Protea Glen</FooterLink>
                            <FooterLink to="/">Soweto</FooterLink>
                            <FooterLink to="/">1818</FooterLink>
                            <FooterLink to="/">0738561390</FooterLink>
                            <FooterLink to="/">0718966882</FooterLink>
                            <FooterLink to="/">0761429217</FooterLink>         
                           
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                          <FooterLinkTitle>Social Media</FooterLinkTitle> 
                            <FooterLink href="https://www.facebook.com/uwsolutions">Facebook</FooterLink>
                            <FooterLink href="https://mobile.twitter.com/solutions_uw?s=09">Tweeter</FooterLink>
                            <FooterLink href="https://www.instagram.com/invites/contact/?i=1beivjsg7l9ew&utm_content=l9dhap2">Instagram</FooterLink>
                            <FooterLink to="/">Whatsapp</FooterLink>        
                           
                        </FooterLinksItems>
                        <FooterLinksItems>
                          <FooterLinkTitle>Tools and Technology</FooterLinkTitle> 
                            <FooterLink to="/">SolidWorks</FooterLink>
                            <FooterLink to="/">ChemCad Simulation</FooterLink>
                            <FooterLink to="/">Anaerobic Digestor</FooterLink>
                            <FooterLink to="/">Reactors</FooterLink>
                            <FooterLink to="/">Process Inventory</FooterLink>         
                           
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Ubuhlebezwe</SocialLogo>
                        <WebsiteRights>
                        Ubuhlebezwe
                        Waste Solutions @{new Date().getFullYear()}
                        All rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/uwsolutions" target="_blank" aria-label="Facebook"><FaFacebook/></SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/invites/contact/?i=1beivjsg7l9ew&utm_content=l9dhap2" target="_blank" aria-label="Instagram"><FaInstagram/></SocialIconLink> 
                           
                            <SocialIconLink href="https://mobile.twitter.com/solutions_uw?s=09" target="_blank" aria-label="Twitter"><FaTwitter/></SocialIconLink>

                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
