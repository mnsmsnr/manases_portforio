import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { makeStyles } from '@material-ui/core/styles';
import { ParallaxInnerScroll } from '../parallax/parallaxInnerScroll';

const useStyles = makeStyles((theme) => ({
    contentHeight: {
        marginTop: '100vh',
    },
  }));

export const ParallaxScroll = () => {
    const classes = useStyles();
    return(
        <>
            <>
                <Parallax pages={2} style={{ top: '0', left: '0' }}>
                    <ParallaxLayer
                        offset={0}
                        speed={2.5}
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <p>page1</p>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#ff6d6d' }} />
                    <ParallaxLayer
                        offset={1}
                        speed={0.5}
                        style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                        }}>
                        ここに挿入
                        <ParallaxInnerScroll/>
                    </ParallaxLayer>
                </Parallax>
            </>
            <div className = {classes.contentHeight}>
            </div>
        </>

    )
}