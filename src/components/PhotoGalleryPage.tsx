import * as React from 'react';
import {Box, CircularProgress, Grid, Container, Typography} from '@mui/material';
import Button from '@mui/material/Button';
import Modal from "./Modal";
import AddPhotoForm from "./AddPhotoForm";
import {getPhotos, uploadPhoto} from "../api/photos";
import {useDispatch, useSelector} from "react-redux";
import {setUserData} from "../store/userSlice";
import {useNavigate} from "react-router-dom";
import {logout} from "../api/auth";
import {useCallback, useEffect, useState} from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal as RiModal, ModalGateway } from "react-images";
import {RootState} from "../store/store";

function PhotoGalleryPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [photos, setPhotos] = useState<any>([]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const user = useSelector((state: RootState) => state.user);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const aspectRatio = (height, width) => {
        if (height > width) {
            return { width: 1, height: height / width }
        } else {
            return { height: 1, width: width / height }
        }
    }
    const loadPhotos = () => {
        setIsLoading(true);
        getPhotos().then((response) => {
            const convertedPhotos = response.data.map((photo: any) => {
                const img = new Image();
                img.src = photo.data;

                const aspect = aspectRatio(img.height, img.width);

                return {
                    src: photo.data,
                    width: aspect.width,
                    height: aspect.height,
                }
            })

            setPhotos(convertedPhotos);
        }).finally(() => {
            setTimeout(() => {  setIsLoading(false); }, 200);
        })
    }
    const onSubmit = (data) => {
        const file = data.file[0];
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = () => {
            const buffer = reader.result;
            const formData = new FormData();

            formData.append('file', new Blob([buffer], { type: file.type }), file.name);
            uploadPhoto(formData);

            setTimeout(() => {
                setIsModalOpen(false);
                loadPhotos()
            }, 200);
        }
    };

    const logoutUser = () => {
        logout().then(() => {
            dispatch(setUserData({email: null, refreshToken: null, id: null}));
            navigate('/');
        })
    }

    useEffect(() => {
        if (user.id){
            loadPhotos()
        } else {
            navigate('/');
        }
    }, []);


    return (
        <Container maxWidth="lg">
        <Grid container spacing={3}>
            <Grid item xs={12} >
                <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button variant="contained" onClick={logoutUser}>Wyloguj</Button>
                </Box>
            </Grid>
            <Grid item xs={12} md={12}>
                <Typography variant="h4" align="center">
                    Moja galeria zdjęć
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Button variant="contained" onClick={() => setIsModalOpen(true)}>
                    Add photo
                </Button>
            </Grid>
            <Grid item xs={12} >
                {isLoading ? <CircularProgress /> : (
                    <Gallery photos={photos} onClick={openLightbox} />
                )}
            </Grid>


            <Modal open={isModalOpen} title="Add photo" handleClose={() => setIsModalOpen(false)}>
                <AddPhotoForm onSubmit={onSubmit}/>
            </Modal>
            <ModalGateway>
                {viewerIsOpen ? (
                    <RiModal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photos.map(x => ({
                                ...x

                            }))}
                        />
                    </RiModal>
                ) : null}
            </ModalGateway>
        </Grid>
        </Container>
    );
}

export default PhotoGalleryPage;
