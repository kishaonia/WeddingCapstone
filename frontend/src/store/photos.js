import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Define the initial state
const initialState = {
  photos: [],
  error: null
};

// Define the actions
const FETCH_PHOTOS_REQUEST = 'FETCH_PHOTOS_REQUEST';
const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
const FETCH_PHOTOS_FAILURE = 'FETCH_PHOTOS_FAILURE';

const fetchPhotosRequest = () => ({
  type: FETCH_PHOTOS_REQUEST
});

const fetchPhotosSuccess = (photos) => ({
  type: FETCH_PHOTOS_SUCCESS,
  payload: photos
});

const fetchPhotosFailure = (error) => ({
  type: FETCH_PHOTOS_FAILURE,
  payload: error
});

const fetchPhotos = () => {
  return async (dispatch) => {
    dispatch(fetchPhotosRequest());

    try {
      // Perform the fetch request
      const response = await fetch('/api/photos');
      if (!response.ok) {
        throw new Error('Failed to fetch photos');
      }
      const data = await response.json();

      dispatch(fetchPhotosSuccess(data));
    } catch (error) {
      dispatch(fetchPhotosFailure(error.message));
    }
  };
};

// Define the reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_REQUEST:
      return {
        ...state,
        error: null
      };
    case FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: action.payload,
        error: null
      };
    case FETCH_PHOTOS_FAILURE:
      return {
        ...state,
        photos: [],
        error: action.payload
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
