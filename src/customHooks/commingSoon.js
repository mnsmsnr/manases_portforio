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
                        loop={true}
                        to={[
                            { opacity: 1, color: 'white' },
                            { opacity: 0, color: 'white' },
                        ]}
                        from={{ opacity: 0, color: 'white' }}>
                    {styles => (
                        <>
                            <animated.div style={styles}>{props.message}</animated.div>
                        </>
                    )}
                </Spring>
            </div>
        </div>
    );
};