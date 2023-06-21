import { csrfFetch } from "./csrf";

const CREATE_GUESTLIST = 'guestlist/createGuestlist';
const UPDATE_GUESTLIST = 'guestlist/updateGuestlist';
const DELETE_GUESTLIST = 'guestlist/deleteGuestlist';
const GET_GUESTLISTS = 'guestlist/getGuestlists';

const getGuestlist = (guestlists) => {
  return {
  type: GET_GUESTLISTS,
  guestlists
  }
}
 const createGuestlist = (guestlist) => {
  return {
  type: CREATE_GUESTLIST,
  guestlist
}
 };
const updateGuestlist = (guestlist) => {
  return{
  type: UPDATE_GUESTLIST,
  guestlist
}
};
 const deleteGuestlist = (guestlistId) => {
  return {
  type: DELETE_GUESTLIST,
  guestlistId
}
 };

// Thunks
export const fetchGuestlists = () => async (dispatch) => {
  const res = await fetch(`/api/guestlists`);
  if (res.ok) {
    const guests = await res.json();
    dispatch(getGuestlist(guests));
  }
};

export const createGuestlistRequest = (guestlist, userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/users/${userId}/guestlists`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(guestlist),
  });

  if (response.ok) {
    const success = await response.json();
    success.userId = userId;
    dispatch(createGuestlist(success));
    return success;
  }
};

export const updateGuestlistRequest = (guestlist, guestlistId) => async (dispatch) => {
  const response = await csrfFetch(`/api/guestlists/${guestlistId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(guestlist),
  });

  if (response.ok) {
    const updated = await response.json();
    dispatch(updateGuestlist(updated));
    return updated;
  }
};

export const deleteGuestlistRequest = (guestlistId) => async (dispatch) => {
  const response = await csrfFetch(`/api/guestlists/${guestlistId}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    dispatch(deleteGuestlist(guestlistId));
  }
};


const guestlistReducer = (prevState = {}, action) => {
  let nextState;
  switch (action.type) {
    case GET_GUESTLISTS:
    nextState = {}
    action.guestlists.Guestlists.forEach(guestlist => {
      nextState[guestlist.id] = guestlist
    })
    return nextState
    case CREATE_GUESTLIST:
    nextState = {...prevState}
    nextState[action.guestlist.id] = action.guestlist
      return nextState;
    case UPDATE_GUESTLIST:
    nextState = {...prevState}
    nextState[action.guestlist.id] = action.guestlist
    return nextState;
    case DELETE_GUESTLIST:
    nextState = {...prevState}
    delete nextState[action.guestlistId]
    return nextState;
    default:
      return prevState;
  }
};

export default guestlistReducer;




