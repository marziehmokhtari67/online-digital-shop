import { makeStyles } from "@mui/styles";
import aks from './../../assets/images/digital.jpg'
export const useStyles = makeStyles((theme) => ({
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    backgroundImage:`url(${aks})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    // background:'linear-gradient(to right, #fff7fa , #fef2ee , #eee1f3 100% )',
    borderRadius:'10px'
  },
  header: {
    textAlign: "center",
    color:'blue'
  },
  formContainer: {
    position: "static",
    zIndex: "55",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    padding: "10px 0px",
    alignItems: "center",
    width: "35%",
    height: "55%",
    backgroundColor: "white",
    borderRadius: "10px",
    color: "rgba(255,255,255,0.8)",
  },
  input: {
    display: "flex",
    alignItems: "flex-end",
  },
  btn: {
    fontFamily: "iran",
    color: "rgba(255,255,255,0.8)",
    backgroundColor: "#42a5f5",
  },
  
 
}));
