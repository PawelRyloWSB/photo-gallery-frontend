import instance from './config';

export const login = (email: string, password: string) => {
  return instance.post('/auth/login', {email, password});
}

export const register = (email: string, password: string) => {
  return instance.post('/auth/register', {email, password});
}

export const logout = () => {
  return instance.get('/auth/logout');
}