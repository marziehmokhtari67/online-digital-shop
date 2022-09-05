import { makeStyles } from '@mui/styles'
import * as React from 'react';

import clsx from 'clsx';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
export const useStyles = makeStyles((theme)=>({
    container:{
    display:'flex',
    flexDirection:'column',
        gap:'10px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    hight:500,
    backgroundColor: 'rgb(255 ,255, 255)',
    border: '3px solid #eee1f3',
    boxShadow: 24,
    padding:'10px',
    [theme.breakpoints.down('sm')]:{
        width:'100vw',
        height:'100vh',
    }
},
header:{
    display:'flex',
    justifyContent:'space-between'
},
table:{
    border:'2px solid rgb(244 244 244)'
},
form:{
    display:'flex',
    flexDirection:'column',
    fontFamily:'Vazir-Medium',
    textAilgn:'right',
    fontSize:'12px',
   
},
input:{
    fontFamily:'Vazir-Medium',
    padding:'5px'  
},
btn:{
width:'10%',

},
ckEditor:{
    width:'500px'
}


}))


export const BackdropUnstyled = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ 'MuiBackdrop-open': open }, className)}
      ref={ref}
      {...other}
    />
  );
});
export const style = (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    direction: 'ltr',
    fontFamily: theme.typography.fontFamily,
    fontWeight: 800,
    width: 400,
    bgcolor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
    border: '1px solid #3D4C56',
    padding: '16px 32px 24px 32px',
    });
    



export const Modal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Backdrop = styled(BackdropUnstyled)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;



