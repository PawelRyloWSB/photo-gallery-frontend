import * as React from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import {FormContainer, PasswordElement, PasswordRepeatElement, TextFieldElement} from "react-hook-form-mui";
import {login, register} from "../api/auth";
import {Container} from "@mui/system";
import {useDispatch} from "react-redux";
import {setUserData} from "../store/userSlice";
import {useNavigate} from "react-router-dom";
import {UserData} from "../types/userTypes";

const StyledGrid = styled(Grid)({
  flexGrow: 1,
  margin: 'auto',
  padding: '20px',
});

interface LoginAndRegistrationFormFields {
    email: string;
    password: string;
}

function MainPage() {
    const [isLoginMode, setIsLoginMode] = React.useState<boolean>(true);
    const defaultValues = { email: '', password: '' };
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginUser = (userData: UserData) => {
        dispatch(setUserData(userData));
        navigate('/photo-gallery');
    }
    const onSubmit = ({email, password}: LoginAndRegistrationFormFields) => {
        if(isLoginMode) {
            login(email, password).then((response) => {
                loginUser(response.data)
            })
        } else {
            register(email, password).then((response) => {
                loginUser(response.data);
            });
        }
    }

  return (
      <Container maxWidth="md">
    <StyledGrid container spacing={3}>
        <Grid item xs={12}>
            {
                isLoginMode ? (
                    <FormContainer defaultValues={defaultValues} onSuccess={onSubmit}>
                        <Grid container spacing={2} sx={{ mt: 1 }}>
                            <Grid item xs={12}>
                                <TextFieldElement fullWidth name={'email'} label={'Email'} required />
                            </Grid>
                            <Grid item xs={12}>
                                <PasswordElement fullWidth name={'password'} label={'Hasło'}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" type="submit">Zaloguj</Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="contained" onClick={() => setIsLoginMode(false)}>Rejestracja</Button>
                            </Grid>
                        </Grid>
                    </FormContainer>
                ) : (
                    <FormContainer defaultValues={defaultValues} onSuccess={onSubmit}>
                        <Grid container spacing={2} sx={{ mt: 1 }}>
                            <Grid item xs={12}>
                                <TextFieldElement fullWidth name={'email'} label={'Email'} required />
                            </Grid>
                            <Grid item xs={12}>
                                <PasswordElement
                                    fullWidth
                                    name={'password'}
                                    label={'Hasło'}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <PasswordRepeatElement
                                    fullWidth
                                    passwordFieldName={'password'}
                                    name={'password-repeat'}
                                    label={'Powtórz hasło'}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" type="submit">Zarejestruj</Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="contained" onClick={() => setIsLoginMode(true)}>Logowanie</Button>
                            </Grid>
                        </Grid>
                    </FormContainer>
                )
            }
        </Grid>
    </StyledGrid>
      </Container>
  );
}

export default MainPage;
