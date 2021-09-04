import React from 'react';
import { Link } from 'react-router-dom';
import TypoGraphy from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appBar: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        boxShadow: 'none',
    },
    toolbar: {
        height: '10%',
    },
    title: {
        height: '100%',
        flexGrow: 1,
    },
    button: {
        paddingRight: 10,
        height: '100%',
        fontSize: '3vh',
        fontFamily:'Chango',
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.7)',
            fontSize: '4vh',
        }
    },
  }));

  export const Header = () => {
    const classes = useStyles();
        return (
            <div className={classes.root}>
                <AppBar className={classes.appBar}>
                    <Toolbar className={classes.toolBar}>
                        <TypoGraphy variant="h6" className={classes.title}>
                            <Box textAlign="left" color='black'>Manase's Portforio</Box>
                        </TypoGraphy>
                        <Button className={classes.button} component={Link} to="">TOP</Button>
                        <Button className={classes.button} component={Link} to="about">ABOUT</Button>
                        <Button className={classes.button} component={Link} to="skill">SKILL</Button>
                        <Button className={classes.button} component={Link} to="product">PRODUCT</Button>
                        <Button className={classes.button} component={Link} to="contact">CONTACT</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    };