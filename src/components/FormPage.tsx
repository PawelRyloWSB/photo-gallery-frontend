import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';

function FormPage() {
    const { control, handleSubmit } = useForm();
    const [open, setOpen] = useState(false);

    const onSubmit = (data) => {
        if (data.title && data.username) {
            console.log(data);
            axios.post("", data).then((response) => {
                window.location.href = "/"
            }).catch(response => {
                setOpen(true);
            })
        }
    };

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        borderRadius: 10,
        boxShadow: 24,
        p: 4,
    };

    return (
        <Box sx={{ p: 2 }}>
            <Button variant="contained" href="/">
                Back to general page
            </Button>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    control={control}
                    name="title"
                    defaultValue=""
                    rules={{ required: 'This field is required' }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Title"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{ shrink: true }}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="username"
                    defaultValue=""
                    rules={{ required: 'This field is required' }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Username"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{ shrink: true }}
                        />
                    )}
                />
                <Controller
                    name="photo"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'This field is required' }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            type="file"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
                <Button type="submit" variant="contained" color="success" endIcon={<SendIcon />} onChange={handleSubmit(onSubmit)} sx={{ mt: 2 }}>
                    Add photo
                </Button>
            </form>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Warning
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Something went wrongs!
                    </Typography>
                    <Button color="error" onClick={() => setOpen(false)}>close</Button>
                </Box>
            </Modal>
        </Box>
    );
}

export default FormPage;
