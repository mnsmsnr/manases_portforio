import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { FaQuestionCircle, FaRegWindowClose} from "react-icons/fa"
import styles from '../style/styles.module.css'

export function ModalDialog(PJinfo:any) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const whatProduct = PJinfo.PJinfo.product
  const whyDevelopment = PJinfo.PJinfo.development
  const whatLEARNED = PJinfo.PJinfo.learn
  let whatSkills = ''
  for(const skill in PJinfo.PJinfo.skills){
    whatSkills = whatSkills + '['
    whatSkills = whatSkills + PJinfo.PJinfo.skills[skill];
    whatSkills = whatSkills + ']'
  }
  const account = PJinfo.PJinfo.account

  return (
    <div>
      <Button onClick={handleClickOpen}>
        <FaQuestionCircle className={styles.linkIcon}/>
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
      >
        <div className={styles.productInfo}>
          <h3>WHAT PRODUCT</h3>
          <p>{whatProduct}</p>
          <h3>WHY DEVELOPMENT</h3>
          <p>{whyDevelopment}</p>
          <h3>WHAT LEARNED</h3>
          <p>{whatLEARNED}</p>
          <h3>WHAT SKILLS</h3>
          <p>{whatSkills}</p>
          <p>{account}</p>
        </div>
        <button onClick={handleClose} className={styles.closeButton}>
            <FaRegWindowClose className={styles.closeButtonIcon}/>
        </button>
      </Dialog>
    </div>
  );
}
