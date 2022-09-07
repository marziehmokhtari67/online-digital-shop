import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container :{padding: "20px 40px",
display:'flex',
flexDirection:'column',
},
  table:{
    
        maxWidth:'80%',
        margin:'10px auto'

  },
  modal:{
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height:100,
  border: '3px solid  #eee1f3',
  backgroundColor: 'rgb(255 ,255, 255)',
  boxShadow: 24,
  p: 4,
  
},

buttonsContainer:{
display:'flex',gap:'5px',margin:'10px'},
lastRow:{
    display: "flex",
    justifyContent: "space-around",
    marginTop: "30px",
  }

})