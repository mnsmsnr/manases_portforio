import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appBar: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        boxShadow: 'none',
        height:'9vh',
        minHeight: '64px',
    },
    toolBar: {
        height: '100%',
        margin: 'auto',
    },
    button: {
        paddingRight: 50,
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
                        {/* <TypoGraphy variant="h6" className={classes.title}>
                            <Box textAlign="left" color='black'>Manase's Portforio</Box>
                        </TypoGraphy> */}
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