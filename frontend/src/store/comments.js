import { csrfFetch } from "./csrf";

const CREATE_COMMENT = "comments/createcomment";
const UPDATE_COMMENT = "comments/updatecomment";
const DELETE_COMMENT = "comments/deletecomment";
const GET_COMMENTS = "comments/getcomments";

const getComment = (comments) => {
  return {
    type: GET_COMMENTS,
    comments
  };
};
const createComment = (comment) => {
  return {
    type: CREATE_COMMENT,
    comment,
  };
};

const updateComment = (comment) => {
  return {
    type: UPDATE_COMMENT,
    comment,
  };
};

const deleteComment = (commentId) => {
  return {
    type: DELETE_COMMENT,
    commentId,
  };
};


// Thunks
export const getComments = () => async (dispatch) => {
    const res = await fetch(`/api/comment`);
    if (res.ok) {
      const listed = await res.json();
      dispatch(getComment(listed));
    }
  };
  
  export const createOneComment = (comment, userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${userId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    });
  
    if (response.ok) {
      const success = await response.json();
      success.userId = userId;
      dispatch(createComment(success));
      return success;
    }
  };
  
  export const updateOneComment = (comment, commentId) => async (dispatch) => {
    const response = await csrfFetch(`/api/comments/${commentId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    });
  
    if (response.ok) {
      const updated = await response.json();
      dispatch(updateComment(updated));
      return updated;
    }
  };
  
  export const deleteOneComment = (commentId) => async (dispatch) => {
    const response = await csrfFetch(`/api/comments/${commentId}`, {
      method: 'DELETE',
    });
  
    if (response.ok) {
      dispatch(deleteComment(commentId));
    }
  };

const commentReducer = (prevState = {}, action) => {
  let nextState;
  switch (action?.type) {
    case GET_COMMENTS:
      nextState = {};
    action?.comments?.Comments?.forEach(comment => {
      nextState[comment?.id] = comment
    })
    return nextState
    case CREATE_COMMENT:
      nextState = { ...prevState };
      nextState[action.comment.id] = action.comment;
      return nextState;
    case UPDATE_COMMENT:
      nextState = { ...prevState };
      nextState[action.comment.id] = action.comment;
      return nextState;
    case DELETE_COMMENT:
      nextState = { ...prevState };
      delete nextState[action.commentId];
      return nextState;
    default:
      return prevState;
  }
};

export default commentReducer;
