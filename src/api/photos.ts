import instance from "./config";

export const getPhotos = async () => {
  return await instance.get('/photos');
}

export const getPhoto = async () => {
  return await instance.get('/photos/2');
}

export const uploadPhoto = async (data) => {
  return await instance.post('/photos/upload', data, {headers: {'Content-Type': 'multipart/form-data'}});
}