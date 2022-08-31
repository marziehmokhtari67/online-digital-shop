import { makeStyles } from '@mui/styles'
export const useStyles=makeStyles((theme)=>({
    container:{
        display:'flex',
        flexDirection:'column',
        
        alignItems:'center'
    },
header:{
    flexGrow: 1, 
    color:'inherit',
    width:'100%',
},
toolBar:{
justifyItems:'center',
color: "black",
justifyContent: "space-between",
backgroundColor:'white',
padding: "2% 11%",
},
tableContainer:{
  display:'flex',
  justifyContent:'center'
    
},
table:{
    maxWidth:'80%'
},
pagination:{
   marginTop:'40px',
   [theme.breakpoints.down('md')]: {
    marginTop:'5px',
  },
    // backgroundColor:'#c7fdda'
    
},
buttonsContainer:{
    flexDirection:'row',
    [theme.breakpoints.down('md')]: {
        flexDirection:'column',
        gap:'5px'
      },

}
    
}))