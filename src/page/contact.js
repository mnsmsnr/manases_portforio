import React from 'react';
import { ContactUs } from "../contact/contactUs.js";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height:'100vh',
    },
  }));

export const Contact = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ContactUs/>
        </div>
    );
};