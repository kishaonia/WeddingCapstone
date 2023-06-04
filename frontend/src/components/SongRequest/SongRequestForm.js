// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useHistory, useParams } from "react-router-dom";
// import "./SongRequest.css"
// import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
// import DeleteSongRequest from "./DeleteSongRequest";
// import UpdateSongRequest from "./UpdateSongRequest";


// const SongRequest = ({ songRequest }) => {
//   const currentUser = useSelector((state) => state.session.user);

//   return (
//     <div className="song-request-container">
//       <div className="song-request-slideshow">
//         <h4 className="song-request-name">
//           {songRequest?.User?.firstName} {songRequest?.User?.lastName}
//         </h4>
//         <p className="song-request-item-title">{songRequest?.songRequestItem}</p>
//         {songRequest?.url}
//         <div className="update-delete">
//           {currentUser?.id === songRequest?.User?.id ? (
//             <OpenModalMenuItem
//               itemText="Delete"
//               modalComponent={<DeleteSongRequest songRequestId={songRequest?.id} />}
//             />
//           ) : (
//             <></>
//           )}
//           {currentUser?.id === songRequest?.User?.id ? (
//             <OpenModalMenuItem
//               itemText="Update"
//               modalComponent={<UpdateSongRequest songRequest={songRequest} />}
//             />
//           ) : (
//             <></>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SongRequest;

