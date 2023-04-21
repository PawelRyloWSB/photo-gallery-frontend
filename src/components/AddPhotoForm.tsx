import { Controller, useForm } from 'react-hook-form';
import { Box, Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import {uploadPhoto} from "../../api/photos";

interface AddPhotoFormProps {
    onSubmit: (data: any) => void;
}
function AddPhotoForm({ onSubmit }: AddPhotoFormProps) {
    const { register, handleSubmit } = useForm();

    return (
        <Box sx={{ p: 2 }}>
            <form onSubmit={handleSubmit(onSubmit)}>

                        <TextField
                            {...register('file')}
                            type="file"
                            fullWidth
                            margin="normal"
                        />


                <Button type="submit" variant="contained" endIcon={<SendIcon />} onChange={handleSubmit(onSubmit)} sx={{ mt: 2 }}>
                    Add photo
                </Button>
            </form>
        </Box>
    );
}

export default AddPhotoForm;
