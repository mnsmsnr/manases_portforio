import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

const useStyles = makeStyles(() => ({
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
    menuBack: {
        backgroundColor: 'rgba(255,255,255,0.4)',
        boxShadow: 'none',
    },
    button: {
        paddingRight: 30,
        paddingLeft: 30,
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
                        <Button className={classes.button} component={Link} to="">TOP</Button>
                        <PopupState>
                            {(popupState) => (
                                <React.Fragment>
                                    <Button className={classes.button} {...bindTrigger(popupState)}>
                                        PROFILE
                                    </Button>
                                    <Menu {...bindMenu(popupState)} className={classes.menuBack}>
                                        <MenuItem onClick={popupState.close} 
                                                    className={classes.button}
                                                    component={Link} to="mind">MIND</MenuItem>
                                        <MenuItem onClick={popupState.close} 
                                                    className={classes.button}
                                                    component={Link} to="history">HISTORY</MenuItem>
                                    </Menu>
                                </React.Fragment>
                            )}
                        </PopupState>
                        <Button className={classes.button} component={Link} to="skill">SKILL</Button>
                        <Button className={classes.button} component={Link} to="product">PRODUCT</Button>
                        <Button className={classes.button} component={Link} to="contact">CONTACT</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    };