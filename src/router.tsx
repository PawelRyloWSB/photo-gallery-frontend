import { createBrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage";
import PhotoGalleryPage from "./components/PhotoGalleryPage";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />
    },
    {
        path: "photo-gallery",
        element: <PhotoGalleryPage />
    }
]);