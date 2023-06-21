import { csrfFetch } from "./csrf";

const CREATE_PHOTO = 'photos/createPhoto';
const UPDATE_PHOTO = 'photos/updatePhoto';
const DELETE_PHOTO = 'photos/deletePhoto';
const GET_PHOTOS = 'photos/getPhotos';

const getPhotos = (photos) => {
  return {
  type: GET_PHOTOS,
  photos
  }
}
 const createPhoto = (photo) => {
  return {
  type: CREATE_PHOTO,
  photo
}
 };
const updatePhoto = (photo) => {
  return{
  type: UPDATE_PHOTO,
  photo
}
};
 const deletePhoto = (photoId) => {
  return {
  type: DELETE_PHOTO,
  photoId
}
 };

// Thunks
export const fetchPhotos = () => async (dispatch) => {
  const res = await fetch(`/api/photos`);
  if (res.ok) {
    const photos = await res.json();
    dispatch(getPhotos(photos));
  }
};

export const createPhotoRequest = (photo, userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/users/${userId}/photos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(photo),
  });

  if (response.ok) {
    const success = await response.json();
    success.userId = userId;
    dispatch(createPhoto(success));
    return success;
  }
};

export const updatePhotoRequest = (photo, photoId) => async (dispatch) => {
  const response = await csrfFetch(`/api/photos/${photoId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(photo),
  });

  if (response.ok) {
    const updated = await response.json();
    dispatch(updatePhoto(updated));
    return updated;
  }
};

export const deletePhotoRequest = (photoId) => async (dispatch) => {
  const response = await csrfFetch(`/api/photos/${photoId}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    dispatch(deletePhoto(photoId));
  }
};


const photoReducer = (prevState = {}, action) => {
  let nextState;
  switch (action.type) {
    case GET_PHOTOS:
    nextState = {}
    action.photos.Photos.forEach(photo => {
      nextState[photo.id] = photo
    })
    return nextState
    case CREATE_PHOTO:
    nextState = {...prevState}
    nextState[action.photo.id] = action.photo
      return nextState;
    case UPDATE_PHOTO:
    nextState = {...prevState}
    nextState[action.photo.id] = action.photo
    return nextState;
    case DELETE_PHOTO:
    nextState = {...prevState}
    delete nextState[action.photoId]
    return nextState;
    default:
      return prevState;
  }
};

export default photoReducer;




