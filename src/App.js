import React from "react";
import Rout from "./routes";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { injectStore } from "./API/http";
import {theme} from './styles/config/style'
import { ThemeProvider } from '@mui/material'
import "react-toastify/dist/ReactToastify.min.css"
injectStore(store);

function App() {
  return (
    <Provider store={store}>
      <ToastContainer draggable={false} theme="colored"/>
      <ThemeProvider theme={theme}>
        <Rout />
        </ThemeProvider>
    </Provider>
  );
}

export default App;
