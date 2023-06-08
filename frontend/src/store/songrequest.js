import { csrfFetch } from "./csrf";
const CREATE_SONG_REQUEST = 'songRequests/createSongRequest'
const UPDATE_SONG_REQUEST = 'songRequests/updateSongRequest'
const DELETE_SONG_REQUEST = 'songRequests/deleteSongRequest'
const GET_SONG_REQUESTS = 'songRequests/getSongRequests'

const getSongRequest = (songRequests) => {
  return {
    type: GET_SONG_REQUESTS,
    songRequests
  }
}

const createSongRequest = (songRequest) => {
    return {
        type: CREATE_SONG_REQUEST,
        songRequest,
        
    }
}

const updateSongRequest = (songRequest) => {
    return {
        type: UPDATE_SONG_REQUEST,
        songRequest
    }
}

const deleteSongRequest = (songRequestId) => {
    return {
        type: DELETE_SONG_REQUEST,
        songRequestId
    }
}

export const getSongRequests = () => async (dispatch) => {
  const res = await fetch('/api/songRequests');
  if (res.ok) {
    const list = await res.json();
    dispatch(getSongRequest(list));
  }
};

// export const createOneSongRequest = (songRequest, userId) => async dispatch => {
//     const response = await csrfFetch(`/api/users/${userId}/songRequests`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(songRequest)
//     });

//     if (response.ok) {
//      const success = await response.json()
//      success.userId = userId;
//      dispatch(createSongRequest(success))
//      return success
//     }
// }
export const createOneSongRequest = (songRequest, userId) => async dispatch => {
  const response = await csrfFetch(`/api/users/${userId}/songRequests`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(songRequest)
  });

  console.log(response); // Add this line for debugging

  if (response.ok) {
    try {
      const success = await response.json();
      success.userId = userId;
      dispatch(createSongRequest(success));
      return success;
    } catch (error) {
      console.error("Error parsing JSON:", error);
      // Handle the error appropriately (e.g., display an error message)
    }
  }
};

// export const updateOneSongRequest = (songRequest, songRequestId) => async dispatch => {
//     const response = await csrfFetch(`/api/songRequests/${songRequestId}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(songRequest),
//     });

//     if (response.ok) {
//         const updated = await response.json()
//         dispatch(updateSongRequest(updated))
//         return updated
//     }
// }

export const updateOneSongRequest = (songRequest, songRequestId) => async (dispatch) => {
    const response = await csrfFetch(`/api/songRequests/${songRequestId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(songRequest),
    });
 
    if (response.ok) {
      const updatedSong = await response.json();
      dispatch(updateSongRequest(updatedSong));
      return updatedSong;
      
    }
  }


export const deleteOneSongRequest = (songRequestId) => async dispatch => {
    const response = await csrfFetch(`/api/songRequests/${songRequestId}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        dispatch(deleteSongRequest(songRequestId))
    }
}


const songRequestReducer = (prevState = {}, action) => {
  let nextState;
  switch (action.type) {
    case GET_SONG_REQUESTS:
      nextState = {}
      action?.songRequests?.SongRequests?.forEach(songRequest => {
        nextState[songRequest.id] = songRequest
      })
      return nextState
    case CREATE_SONG_REQUEST:
      nextState = { ...prevState }
      nextState[action.songRequest.id] = action.songRequest
      return nextState;
    case UPDATE_SONG_REQUEST:
      nextState = { ...prevState }
      nextState[action.songRequest.id] = action.songRequest
      return nextState;
    case DELETE_SONG_REQUEST:
      nextState = { ...prevState }
      delete nextState[action.songRequestId]
      return nextState;
    default:
      return prevState;
  }
};

export default songRequestReducer;
