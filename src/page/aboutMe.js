import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Particles from 'react-particles-js';
import ParticlesParams from '../assets/particlesjs-config.json';

const useStyles = makeStyles(() => ({
    whiteSpace: {
        height: '10vh',
    },
    container: {
        width:'90vw',
        whiteSpace: 'pre-wrap',
    },
    backgroundParticle: {
        position:'absolute',
        height: '90vh',
    },
    pageTitle: {
        fontSize:'500%',
        textAlign: 'center',
    },
    content: {
        display: 'flex',
    },
    title: {
        width: '30vw',
        marginLeft: '5vw',
        fontSize: '3vw',
    },
    text: {
        width: '60vw',
        marginRight: '5vw',
        fontSize:'1.5vw',
    },
}));

export const AboutMe = () => {
    const classes = useStyles();
    const aboutMe1={title:'simple is best',
                text:'シンプルな生活・思考を人生のモットーにしています。\n' +
                '本ページも出来る限りシンプルにと考えた結果、' +
                '「主義」「興味」「仕事観」の３つに絞ることにしました。',
    }
    const aboutMe2={title:'study lifetime',
                text:'知的好奇心を満たすことが生きがいです。\n' +
                '以前より読書が趣味で雑読でしたが、頃年はITスキル習得に集中。' +
                '学習効率化のための運動習慣や食事管理にも興味を持ち学習・実践しています。',
    }
    const aboutMe3={title:'promise for work',
                text:'チームで仕事をする以上コミュニケーションを最も重要と捉えています。\n' +
                '良質なコミュニケーションは心理的安全性の確保・認識相違の防止・' +
                '課題の発見に貢献し、生産性を1+1=2以上にしてくれると考えます。',
    }
    return (
        <>
            <div className={classes.backgroundParticle}>
                <Particles params={ParticlesParams} height={'110vh'}/>
            </div>
            <div className={classes.container}>
                {/* 上部のParticles空白防止 */}
                <div className={classes.whiteSpace}></div>
                <div className={classes.pageTitle}>
                    <p>About me</p>
                </div>
                <div className={classes.content}>
                    <p className={classes.title}>{aboutMe1.title}</p>
                    <p className={classes.text}>{aboutMe1.text}</p>
                </div>
                <div className={classes.content}>
                    <p className={classes.title}>{aboutMe2.title}</p>
                    <p className={classes.text}>{aboutMe2.text}</p>
                </div>
                <div className={classes.content}>
                    <p className={classes.title}>{aboutMe3.title}</p>
                    <p className={classes.text}>{aboutMe3.text}</p>
                </div>
            </div>
        </>
    );
};