// import { csrfFetch } from "./csrf";

// // Action Types
// const CREATE_FILE = 'files/createFile';
// const DELETE_FILE = 'files/deleteFile';
// const GET_FILES = 'files/getFiles';

// // Action Creators
// const createFile = (file) => {
//   return {
//     type: CREATE_FILE,
//     file
//   };
// };

// const deleteFile = (fileId) => {
//   return {
//     type: DELETE_FILE,
//     fileId
//   };
// };

// const getFiles = (files) => {
//     return {
//       type: GET_FILES,
//       files
//     };
//   };
  
// // Thunks
// export const fetchFiles = () => async (dispatch) => {
//     const response = await fetch(`/api/files`)
//     if (response.ok) {
//       const files = await response.json();
//       dispatch(getFiles(files));
//     }
//   }  
  

//   export const createFileRequest = (fileId, userId) => async (dispatch) => { 
//     const response = await csrfFetch(`/api/${fileId}/files`, {
//       method: 'POST',   
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(),
//     });

//     if (response.ok) {
//       const success = await response.json();
//       dispatch(createFile(success));
//       return success;
//     }
//   };



// export const deleteFileRequest = (fileId) => async (dispatch) => {
//     const response = await csrfFetch(`/api/files/${fileId}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       dispatch(deleteFile(fileId));
//     }
//   } 



// // Reducer

// const fileReducer = (prevState = {}, action) => {
//   let nextState;
//   switch (action.type) {
//     case GET_FILES:
//         nextState = {};
//      action.files.Files.forEach(file => {
//             nextState[file.id] = file
//           })
//         return nextState;
//     case CREATE_FILE:
//       nextState = { ...prevState };
//       nextState[action.file.id] = action.file;
//       return nextState;
//     case DELETE_FILE:
//       nextState = { ...prevState };
//       delete nextState[action.fileId];
//       return nextState;
//     default:
//       return prevState;
//   }
// };

// export default fileReducer;
