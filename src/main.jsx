import React from 'react'
import ReactDOM from 'react-dom/client'
import {router} from "./router";
import {RouterProvider} from "react-router-dom";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {Provider} from "react-redux";
import store from "./store/store";
import {SnackbarProvider} from "notistack";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Provider store={store}>
              <SnackbarProvider>
                <RouterProvider router={router} />
              </SnackbarProvider>
          </Provider>
          </LocalizationProvider>

  </React.StrictMode>
)
