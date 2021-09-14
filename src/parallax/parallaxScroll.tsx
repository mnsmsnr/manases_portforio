import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { makeStyles } from '@material-ui/core/styles';
import { ParallaxInnerScroll } from '../parallax/parallaxInnerScroll';
import { MindMap } from "../amCharts/mindMap";
import { UseForceUpdate } from "../customHooks/useForceUpdate";

const useStyles = makeStyles(() => ({
    contentHeight: {
        marginTop: '100vh',
    },
  }));

export const ParallaxScroll = () => {
    const forceUpdate = UseForceUpdate();
    const classes = useStyles();
    return(
        <>
            <>
                <Parallax pages={2} style={{ top: '0', left: '0' }}>
                    {/* page1内容 */}
                    <ParallaxLayer
                        offset={0}
                        speed={2.5}
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <p onClick={() => forceUpdate()}>強制的にアップデート</p>
                    <MindMap/>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#ff6d6d' }} />
                    {/* page2内容 */}
                    <ParallaxLayer
                        offset={1}
                        speed={0.5}
                        style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                        }}>
                        <ParallaxInnerScroll/>
                    </ParallaxLayer>
                </Parallax>
            </>
            {/* footer表示のため調整 */}
            <div className = {classes.contentHeight}>
            </div>
        </>

    )
}