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
        boxShadow: 'none'
      },
    title: {
      flexGrow: 1,
    },
    menu: {
        paddingRight: 10,
    },
  }));

  export const Header = () => {
    const classes = useStyles();
        return (
            <div className={classes.root}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <TypoGraphy variant="h6" className={classes.title}>
                            <Box textAlign="left" color='black'>Manase's Portforio</Box>
                        </TypoGraphy>
                        <Button className={classes.menu}>
                            <TypoGraphy variant="h6"component={Link} to="">TOP</TypoGraphy>
                        </Button>
                        <Button className={classes.menu}>
                            <TypoGraphy variant="h6"component={Link} to="about">ABOUT</TypoGraphy>
                        </Button>
                        <Button className={classes.menu}>
                            <TypoGraphy variant="h6"component={Link} to="skill">SKILL</TypoGraphy>
                        </Button>
                        <Button className={classes.menu}>
                            <TypoGraphy variant="h6"component={Link} to="product">PRODUCT</TypoGraphy>
                        </Button>
                        <Button className={classes.menu}>
                            <TypoGraphy variant="h6"component={Link} to="contact">CONTACT</TypoGraphy>
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    };