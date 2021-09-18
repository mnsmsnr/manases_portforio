import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    center: {
        textAlign:'center',

        height:'auto'
    },
}));

export const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.center}>
            © 2021 Masanori Manase
        </div>
    );
};