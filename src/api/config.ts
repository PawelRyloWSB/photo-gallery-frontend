import axios from 'axios';
import { enqueueSnackbar } from 'notistack'

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
});

instance.interceptors.response.use(
    (response) => response,
    (error) => {
      const { response } = error;

      if (response) {
        const { data, status } = response;
        enqueueSnackbar(data.message, { variant: 'error' });

        if (status === 401) {
          window.location.href = '/';
        }
      } else {
        enqueueSnackbar('Błąd sieci', { variant: 'error' });
      }

      return error;
    }
);

export default instance;