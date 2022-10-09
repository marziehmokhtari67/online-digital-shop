import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) => ({
    image:{
        width:'100vw',
        height:'400px',
        display:'block',
        [theme.breakpoints.down('sm')]:{
            width:'100%',
            height:'250px'
        }
    }
}))