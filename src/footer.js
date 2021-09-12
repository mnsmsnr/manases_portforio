import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    center: {
        textAlign:'center',
    },
}));

export const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.center}>
            <p>© 2021 Masanori Manase</p>
        </div>
    );
};