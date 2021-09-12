import React from "react";
import { Spring, animated } from 'react-spring'
import { makeStyles } from '@material-ui/core/styles';
import { SnowAnimation } from '../snow/snow';
import Image from '../snow/biei.jpg'

const useStyles = makeStyles((theme) => ({
    top: {
        backgroundImage: `url(${Image})`,
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
    },
    name: {
        fontSize:'700%',
        fontFamily:'Allura',
    },
    job: {
        fontSize:'200%',
    },
}));

export const Top = () => {
    const classes = useStyles();
    return (
        <div className={classes.top}>
            <>
                {[...Array(30)].map(index =>
                    <SnowAnimation 
                    key={index} 
                    left={Math.floor(Math.random() * 90)} 
                    delay={Math.floor(Math.random() * 20)}/>
                )}
            </>
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
                    <animated.div style={styles}>Masanori Manase</animated.div>
                    )}
                </Spring>
            </div>
            <div className={classes.title + " " + classes.job}>
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
                    <animated.div style={styles}>WEB DEVELOPER</animated.div>
                    )}
                </Spring>
            </div>
        </div>
    );
};