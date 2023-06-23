
// // import React, { useEffect, useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { useHistory } from "react-router-dom";
// // import DeleteGuestlist from "./DeleteGuestlist";
// // import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
// // import UpdateGuestlist from "./UpdateGuestlist";
// // import CreateGuestlist from "./CreateGuestlist";
// // import  { fetchGuestlists } from "../../store/guestlists";

// // const Guestlist = () => {
// //   const currentUser = useSelector((state) => state.session.user);
// //   const guestlists = useSelector(( state ) => state.guestlists);
// //   const history = useHistory();
// //   const dispatch = useDispatch();
// // const guestlist = Object?.values(guestlists);
// // const guestlistArray = Object.values(guestlists);


// //   if (!currentUser) {
// //     history.push("/");
// //   }

// //   useEffect(() => {
// //     dispatch(fetchGuestlists());
// //   }, [dispatch]);

// //   return (
    
// //       <div className="guestlist-index">
// //         {guestlistArray.map((guestlists) => (
// //           <div className="guestlist" key={guestlists.id}/>

// //         ))}
// //       <div className="guestlist" key={guestlistId}>
// //         {`${guestlists?.User?.firstName} ${guestlists?.User?.lastName}`}
// //       </div>
// //       <div className="guestlist-plus"> {guestlists?.guest}</div>
// //       <div className="guestlist-descripion">{guestlists?.description}</div>


// //         {/* <div key={guestlist?.id}>
// //           <div
// //             className="guestlist"
// //             src={guestlist?.guestlist}
// //             // style={{ maxHeight: '200px', maxWidth: '350px' }}
// //             // alt="Uploaded Photo"
// //           />
// //           {guestlist?.User?.firstName} {guestlist?.User?.lastName}
// //           <div className="gallery-info">
// //             <p className="gallery-name">{guestlist?.User?.firstName} {guestlist?.User?.lastName}</p>
// //             <p className="gallery-description">{guestlist?.description}</p>
// //           </div>

// //           <div className="update-delete">
// //             {currentUser?.id === guestlist?.userId ? (
// //               <OpenModalMenuItem itemText={<><i className="fas fa-trash-alt"></i></>} modalComponent={<DeleteGuestlist guestlistId={guestlist?.id} />} />
// //             ) : (
// //               <></>
// //             )}
// //             {currentUser?.id === guestlist?.userId ? (
// //               <OpenModalMenuItem itemText={<><i className='fas fa-undo'></i></>} modalComponent={<UpdateGuestlist guestlist={guestlist} />} />
// //             ) : (
// //               <></>
// //             )}
// //           </div>

// //           <div>
// //             <h3>Uploaded Files:</h3>
// //             {guestlist.map((guest, index) => (
// //               <a key={index} href={url} target="_blank" rel="noopener noreferrer">
// //                 {url}
// //               </a>
// //             ))} 
// //           </div>
// //         </div> */}
// //       </div>
    
// //   );
// // };

// // export default Guestlist;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { fetchGuestlists } from "../../store/guestlists";
// import CreateGuestlist from "./CreateGuestlist";

// const Guestlist = () => {
//   const currentUser = useSelector((state) => state.session.user);
//   const guestlists = useSelector((state) => state.guestlists);
//   const history = useHistory();
//   const dispatch = useDispatch();

//   const guestlistArray = guestlists ? Object.values(guestlists) : [];

//   if (!currentUser) {
//     history.push("/");
//   }

//   useEffect(() => {
//     dispatch(fetchGuestlists());
//   }, [dispatch]);

//   return (
//     <div className="guestlist-index">
//       <CreateGuestlist />
      
//       {guestlistArray.map((guestlist) => (
//         <div className="guestlist" key={guestlist?.id}>
//           {`${guestlist?.User?.firstName} ${guestlist?.User?.lastName}`}
//           <div className="guestlist-plus">{guestlist?.guest}</div>
//           <div className="guestlist-descripion">{guestlist?.description}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Guestlist;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { fetchGuestlists } from "../../store/guestlists";
// import CreateGuestlist from "./CreateGuestlist";
// import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
// import DeleteGuestlist from "./DeleteGuestlist";
// import UpdateGuestlist from "./UpdateGuestlist";
// import "./Guestlist.css"

// const Guestlist = () => {
//   const currentUser = useSelector((state) => state.session.user);
//   const guestlists = useSelector((state) => state.guestlists);
//   const history = useHistory();
//   const dispatch = useDispatch();

//   const guestlistArray = guestlists ? Object.values(guestlists) : [];

//   if (!currentUser) {
//     history.push("/");
//   }

//   useEffect(() => {
//     dispatch(fetchGuestlists());
//   }, [dispatch]);

//   return (
//     <div className="guestlist-index">
//       <CreateGuestlist />

//       {guestlistArray.map((guestlist) => (
//         <div className="guestlist" key={guestlist?.id}>
//           {`${guestlist?.User?.firstName} ${guestlist?.User?.lastName}`}
//           <div className="guestlist-plus">{guestlist?.guest}</div>
//           <div className="guestlist-descripion">{guestlist?.description}</div>
//           <div className="update-delete">
//             {currentUser?.id === guestlist?.userId && (
//               <OpenModalMenuItem
//                 itemText={<><i className="fas fa-trash-alt"></i></>}
//                 modalComponent={<DeleteGuestlist guestlistId={guestlist?.id} />}
//               />
//             )}
//             {/* {currentUser?.id === guestlist?.userId && (
//               <OpenModalMenuItem
//                 itemText={<><i className='fas fa-undo'></i></>}
//                 modalComponent={<UpdateGuestlist guestlist={guestlist} />}
//               />
//             )} */}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Guestlist;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { fetchGuestlists } from "../../store/guestlists";
// import CreateGuestlist from "./CreateGuestlist";
// import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
// import DeleteGuestlist from "./DeleteGuestlist";
// import UpdateGuestlist from "./UpdateGuestlist";
// import "./Guestlist.css"

// const Guestlist = () => {
//   const currentUser = useSelector((state) => state.session.user);
//   const guestlists = useSelector((state) => state.guestlists);
//   const history = useHistory();
//   const dispatch = useDispatch();

//   const guestlistArray = guestlists ? Object.values(guestlists) : [];

//   if (!currentUser) {
//     history.push("/");
//   }

//   useEffect(() => {
//     dispatch(fetchGuestlists());
//   }, [dispatch]);

//   return (
//     <div className="guestlist-container">
//       <div className="guestlist-background"></div>
//       <div className="guestlist-index">
//         <CreateGuestlist />

//         {guestlistArray.map((guestlist) => (
//           <div className="guestlist" key={guestlist?.id}>
//             {`${guestlist?.User?.firstName} ${guestlist?.User?.lastName}`}
//             <div className="guestlist-plus">{guestlist?.guest}</div>
//             <div className="guestlist-description">{guestlist?.description}</div>
//             <div className="update-delete">
//               {currentUser?.id === guestlist?.userId && (
//                 <OpenModalMenuItem
//                   itemText={<><i className="fas fa-trash-alt"></i></>}
//                   modalComponent={<DeleteGuestlist guestlistId={guestlist?.id} />}
//                 />
//               )}
//               {/* {currentUser?.id === guestlist?.userId && (
//                 <OpenModalMenuItem
//                   itemText={<><i className='fas fa-undo'></i></>}
//                   modalComponent={<UpdateGuestlist guestlist={guestlist} />}
//                 />
//               )} */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Guestlist;
