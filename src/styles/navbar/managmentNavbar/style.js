import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "linear-gradient(to right, #fff7fa , #fef2ee , #eee1f3 100% )",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    padding: "5px 40px",
  },
  toolbar: {
    justifyContent: "space-between",
  },
  name: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    color: "black",
  },
  menuContainer: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      marginRight: "2px",
    },
    flexGrow: 1,
    menu: {
      display: "none",
      [theme.breakpoints.down("md")]: {
        display: "block",
      },
    },
  },
  name1: {
    color: "black",
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "flex",
    },
  },

}));
