import { csrfFetch } from "./csrf";

// Action Types
const CREATE_LIKE = 'likes/createLike';
const UPDATE_LIKE = 'likes/updateLike';
const DELETE_LIKE = 'likes/deleteLike';

// Action Creators
const createLike = (like) => {
  return {
    type: CREATE_LIKE,
    like
  }
};

const updateLike = (like) => {
  return {
    type: UPDATE_LIKE,
    like
  }
};

const deleteLike = (likeId) => {
  return {
    type: DELETE_LIKE,
    likeId
  }
};

// Thunks
// export const createLikeRequest = (like) => async (dispatch) => {
//   try {
//     const response = await csrfFetch('/api/likes', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(like),
//     });

//     if (response.ok) {
//       const createdLike = await response.json();
//       dispatch(createLike(createdLike));
//       return createdLike;
//     }
//   } catch (error) {
//     console.error('Failed to create like:', error);
//   }
// };
export const createLikeRequest = (like) => async (dispatch) => {
  try {
    const response = await csrfFetch('/api/likes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(like),
    });

    if (response.ok) {
      const createdLike = await response.json();
      dispatch(createLike(createdLike.like));
      return createdLike.like;
    } else {
      const errorData = await response.json();
      throw new Error(errorData.error);
    }
  } catch (error) {
    console.error('Failed to create like:', error);
  }
};


export const updateLikeRequest = (like, likeId) => async (dispatch) => {
  try {
    const response = await csrfFetch(`/api/likes/${likeId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(like),
    });

    if (response.ok) {
      const updatedLike = await response.json();
      dispatch(updateLike(updatedLike));
      return updatedLike;
    }
  } catch (error) {
    console.error('Failed to update like:', error);
  }
};

export const deleteLikeRequest = (likeId) => async (dispatch) => {
  try {
    const response = await csrfFetch(`/api/likes/${likeId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      dispatch(deleteLike(likeId));
    }
  } catch (error) {
    console.error('Failed to delete like:', error);
  }
};

// Reducer
const likeReducer = (prevState = {}, action) => {
  let nextState;
  switch (action.type) {
    case CREATE_LIKE:
      nextState = { ...prevState };
      nextState[action.like.id] = action.like;
      return nextState;
    case UPDATE_LIKE:
      nextState = { ...prevState };
      nextState[action.like.id] = action.like;
      return nextState;
    case DELETE_LIKE:
      nextState = { ...prevState };
      delete nextState[action.likeId];
      return nextState;
    default:
      return prevState;
  }
};

export default likeReducer;
