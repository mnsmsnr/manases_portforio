import React from 'react';
import { DragList } from '../useSprings/dragList.tsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    test: {
        width:'50%',
        float:'left',
    },
  }));

export const Skill = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.test}>
                <DragList />
            </div>
            <div className={classes.test}>
                <DragList />
            </div>
        </div>
    );
};