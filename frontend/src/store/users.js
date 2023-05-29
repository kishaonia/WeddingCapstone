import { csrfFetch } from "./csrf";

const GET_USERS_INFO = 'users/getUsersInfo';


const getUsersInfo = (users) => {
    return {
        type: GET_USERS_INFO,
        users
    }
}


export const getUsers = () => async (dispatch) => {
    try {
      const users = await csrfFetch('/api/users');
      if (users.ok) {
        const usersList = await users.json();
        dispatch(getUsersInfo(usersList)); // Dispatch the action with the usersList data
      }
    }
     catch (error) {
      console.error('Error fetching users:', error);
    }
  };


const userReducer = (prevState = {}, action) => {
    let nextState;
    switch (action.type) {
    case GET_USERS_INFO:
    nextState = {};
    action?.users?.Users?.forEach(user => {
        nextState[user.id] = user
    })
    return nextState
    default: return prevState
    }
}

export default userReducer