import React from "react";
import { Spring, animated } from 'react-spring'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    top: {
        backgroundColor: `black`,
        backgroundSize:'cover',
        display: 'grid',
        width: '100vw',
        height:'100vh',
        position: 'relative',
        alignContent: 'center',
    },
    title: {
        display: 'grid',
        justifyContent: 'center',
        alignContent: 'center',
        fontSize:'500%',
        font:'bold',
        fontFamily:'robot',
    },
  }));

export const CommingSoon = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.top}>
            <div className={classes.title + " " + classes.name}>
                <Spring
                    from={{ opacity: 0, color: 'white' }}
                    to={[
                        { opacity: 0.1, color: 'white' },
                        { opacity: 0.3, color: 'white' },
                        { opacity: 0.5, color: 'white' },
                        { opacity: 0.7, color: 'white' },
                        { opacity: 0.9, color: 'white' },
                        { opacity: 1.0, color: 'white' },
                    ]}>
                    {styles => (
                        <>
                            <animated.div style={styles}>{props.message}</animated.div>
                        </>
                    )}
                </Spring>
            </div>
            <a href = {props.url} rel="noreferrer" target="_blank">{props.linkMessage}</a>
            <a href = {props.GithubUrl} rel="noreferrer" target="_blank">{props.GithubLinkMessage}</a>
            <br/>
            <a href = {props.url2} rel="noreferrer" target="_blank">{props.linkMessage2}</a>
            <a href = {props.GithubUrl2} rel="noreferrer" target="_blank">{props.GithubLinkMessage2}</a>
        </div>
    );
};