import React from 'react'
import ReactDOM from 'react-dom/client'
import {router} from "./router";
import {RouterProvider} from "react-router-dom";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {LocalizationProvider} from "@mui/x-date-pickers";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <RouterProvider router={router} />
      </LocalizationProvider>
  </React.StrictMode>
)
