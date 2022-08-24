import { makeStyles } from '@mui/styles'
export const useStyles = makeStyles((theme)=>({
    container:{
    display:'flex',
    flexDirection:'column',
        gap:'10px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    hight:500,
    backgroundColor: 'rgb(255 ,255, 255)',
    border: '3px solid #eee1f3',
    boxShadow: 24,
    padding:'10px',
    [theme.breakpoints.down('md')]:{
        width:'100vw',
        height:'100vh',
    }
},
header:{
    display:'flex',
    justifyContent:'space-between'
},



}))