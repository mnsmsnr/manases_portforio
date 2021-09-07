import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MailForm }  from "../customHooks/mailForm";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        height:'100vh',
    },
  }));

export const Contact = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <MailForm/>
        </div>
    );
};