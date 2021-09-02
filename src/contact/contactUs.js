import React from 'react';
import emailjs from 'emailjs-com';
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

export function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_wdu9cbf', 'template_vrk75w6', e.target, 'user_HSH46wolFXqbkvABJjLaW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <TextField label="Email" type="email" name="user_email"/>
      <TextField label="Message" name="message"/>
      {/* valid emailが空　messageが空 emailフォーマット message長すぎ */}
      <Button type="submit">Submit</Button>
    </form>
  );
}