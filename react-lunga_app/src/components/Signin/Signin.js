import React from 'react'
import Background from '../../images/icon.png';
import * as emailjs from "emailjs-com";

 
import {
  Container, 
  FormWrap, 
  Icon, 
  FormButton, 
  FormContent, 
  Form,
  FormInput, 
  FormLabel,
  FormH1,
  Text
  
} from './formElements'


export default function ContactUs() {

  function sendEmail(e) {
      e.preventDefault();

  emailjs.sendForm('service_1lt4mw3', 'template_z35dd9w', e.target, 'user_2KUde5NoXsx3xpgmHJ9DX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
  
 
      
  return (
    <>
    <Container id="signin">
      
      <FormWrap>
        <Icon to="/">Ubuhlebezwe</Icon>
        <FormContent src={Background}>
          <Form id="template_hnggpeh" onSubmit={sendEmail}>
            <FormH1>Send us an email</FormH1>
            <FormLabel htmlFor='for'>Name</FormLabel>
              <FormInput  type="text"  placeholder="Name" name="name" required/>
            <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput  type="email" placeholder="Email Address" name="email" required/>
              <FormLabel htmlFor='Subject'>Subject</FormLabel>
               <FormInput  type="text"  placeholder="Subject" name="subject" required/>
               <FormLabel htmlFor='massege'>massege</FormLabel>
              <Text  placeholder="Your message" name="message"></Text>
              <br />
             
              <FormButton type="submit">Submit</FormButton>
          </Form>
        </FormContent>
      </FormWrap>
      <br />
    </Container>
      {/* <br /> */}
    </>
  )
 
}
