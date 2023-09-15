import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import styles from '../style/styles.module.css'
import { FaExternalLinkAlt,FaGithub } from "react-icons/fa"
import { Button } from '@material-ui/core';
import { ModalDialog } from '../customHooks/modalDialog';

interface PageProps {
  offset: number
  gradient: string
  onClick: () => void
  PJinfo: any
}

const Page = ({ offset, gradient, onClick, PJinfo }: PageProps) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className={styles.slopeBegin} />
    </ParallaxLayer>
    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
    </ParallaxLayer>
    <ParallaxLayer className={styles.event} offset={offset} speed={0.3}>
      <div className={styles.contents}>
        <p className={styles.puroductName}>0{offset + 1}.{PJinfo.PJName}</p>
        <img src={PJinfo.img} className={styles.img} alt="制作物イメージ"/>
      </div>
      <div className={styles.linkIcons}>
        <div>
          <ModalDialog PJinfo = {PJinfo} />
        </div>
        <div>
          <Button href={PJinfo.github} target="_blank">
            <FaGithub className={styles.linkIcon}/>
          </Button>
        </div>
        <div>
          <Button href={PJinfo.link} target="_blank">
            <FaExternalLinkAlt className={styles.linkIcon}/>
          </Button>
        </div>
      </div>
    </ParallaxLayer>
  </>
)

export function ParallaxSlide(PJprops:any) {
  const parallax = useRef<IParallax>(null)
  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to)
    }
  }
  return (
    <>
      <div className={styles.headerMargin}></div>
      <>
        <Parallax className={styles.container} ref={parallax} pages={4} horizontal>
          <Page offset={0} gradient="pink" onClick={() => scroll(1)} PJinfo = {PJprops.PJs.PJ1}/>
          <Page offset={1} gradient="teal" onClick={() => scroll(2)} PJinfo = {PJprops.PJs.PJ2}/>
          <Page offset={2} gradient="tomato" onClick={() => scroll(3)} PJinfo = {PJprops.PJs.PJ3}/>
          <Page offset={3} gradient="pink" onClick={() => scroll(0)} PJinfo = {PJprops.PJs.PJ4}/>
        </Parallax>
      </>
      <div className={styles.footerMargin}></div>
    </>
  )
}