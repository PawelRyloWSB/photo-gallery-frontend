import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage";
import FormPage from "./components/FormPage";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />
    },
    {
        path: "/form-page",
        element: <FormPage />
    }
]);
