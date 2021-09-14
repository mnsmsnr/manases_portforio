import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import emailjs from 'emailjs-com';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  contactTextCenter: {
    textAlign: 'center',
  },
  pageTitle: {
    fontSize:'500%',
    font:'bold',
    fontFamily:'Allura',
  },
  contactMessage: {
    fontSize:'200%',
    fontFamily:'Nothing You Could Do',
  },
  formError: {
    color: 'red',
  },
  sendSuccessMessage: {
    fontSize:'300%',
    font:'bold',
    fontFamily:'Nothing You Could Do',
    color: 'blue',
    backgroundColor:'rgba(0,0,255,0.5)',
  },
  emailToMe: {
    fontFamily:'Chango',
    fontStyle:'italic',
    paddingTop:'10vh'
  },
}));

export function MailForm() {
  const classes = useStyles();
  const regexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
  const [disabled, setDisabled] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const { register, 
          formState: {errors, isValid},
        } = useForm({
          mode: "onChange",
          criteriaMode: "all",
          shouldFocusError: false,
        });

  function sendEmail(e) {
    setDisabled(!disabled);
    console.log(e);
    e.preventDefault();
    emailjs.sendForm('service_wdu9cbf', 'template_vrk75w6', e.target, 'user_HSH46wolFXqbkvABJjLaW')
      .then((result) => {
          console.log(result.text);
          setSendSuccess(true);
      }, (error) => {
          console.log(error.text);
          setDisabled(!disabled);
      });
  }

  return (
    <div className={classes.contactTextCenter}>
      <div className={classes.pageTitle}>
        <p>Contact me</p>
      </div>
      <div className={classes.sendSuccessMessage}>
        {sendSuccess ? <p>Thank you for sending the message!</p> : <></> }
      </div>
      <div className={classes.contactMessage}>
        <p>Thank you for visiting. <br/>
            If you have any comments about this site or me, <br/>
            please use the form below.</p>
      </div>
      <div>
        <form onSubmit={sendEmail}>
          <TextField label="Email" type="email" name="user_email"
            {...register("user_email", {
              required: true,
              pattern: regexp,
            })}
          />
          <br/>
          <TextField label="Message" name="message"
            {...register("message", {
              required: true,
          })}/>
          <br/>
          <div className={classes.formError} >
            {errors.user_email?.types?.required && "メールアドレスを入力して下さい"}
            {errors.user_email?.types?.pattern && "メールアドレスの形式ではありません"}
            <br/>
            {errors.message?.types?.required && "メッセージを入力して下さい"}
            <br/>
          </div>
          <Button type="submit" disabled={!isValid || disabled} variant="contained" color="primary">
            <SendIcon />Send
          </Button>
          <p className={classes.emailToMe}>or send an email directly: masanori.manase0127@gmail.com</p>
        </form>
      </div>
      <div>{errors.user_email?.message}</div>
      <div>{errors.message?.message}</div>
    </div>
  );
}