import React from 'react';
import { DragList } from '../useSprings/dragList.tsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    pageTitle: {
        fontSize:'500%',
        font:'bold',
        textAlign:'center',
        fontFamily:'Alice',
        height:'30vh',
    },
    headMargin: {
        height:'9vh',
        minHeight:'64px',
    },
    contents: {
        width:'100vw',
        height:'800px',//リスト要素数*100px
    },
    draggableList: {
        width:'30vw',
        height:'100%',
        float:'left',
        backgroundColor:'#f0f0f0',
        paddingTop:'50px',
    },
    left:{
        paddingLeft: '20vw',
    },
    right:{
        paddingRight: '20vw',
    }
  }));

export const Skill = () => {
    const classes = useStyles();
    let props={
        businessSkills:'HTML/CSS jQuery Java C# Javascript OracleSQL PostgreSQL SQLServer',
        selfStudySkills:'Ruby TypeScript React RubyonRails MySQL AWS Bootstrap Linux'
    }
    return (
        <>
            <div className={classes.headMargin}></div>
            <div className={classes.pageTitle}>
                <p>Skill Set</p>
            </div>
            <div className={classes.contents}>
                <div className={classes.draggableList + ' ' + classes.left}>
                    <DragList skillSet = {props.businessSkills} />
                </div>
                <div className={classes.draggableList + ' ' + classes.right}>
                    <DragList skillSet = {props.selfStudySkills}/>
                </div>
            </div>
        </>
    );
};