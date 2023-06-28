// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory, useParams } from "react-router-dom";
// import "./Registries.css";
// import { getComments } from "../../store/comments";
// import CreateRegistry from "./CreateRegistry";
// import DeleteRegistry from "./DeleteRegistry";
// import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
// import UpdateRegistry from "./EditRegistry";
// import CreateComment from "../Comment/CreateComment";

// const Registry = ({ registry }) => {
//   const registryId = registry?.id;
//   const dispatch = useDispatch();
//   const comments = useSelector((state) => state?.comments);
//   const commentsVal = Object?.values(comments);
//   console.log("Comments", commentsVal);
//   const currentUser = useSelector((state) => state.session.user);

//   useEffect(() => {
//     dispatch(getComments(registryId));
//   }, [dispatch]);

//   return (
//     <div className="registry-container">
     
//         <div className="name-and-registry">
//           <div className="registry-name">
//             {registry?.User?.firstName} {registry?.User?.lastName}
//             <p className="registry-item-title">{registry?.registryItem}</p>
//           </div>
//           {/*            
//           <OpenModalMenuItem
//               itemText={
//                 <>
//                post
                
//                 </>
//               }
//               modalComponent={<CreateRegistry registry={registry} />}
//             /> */}
//         </div>


//         <div className="registry-photos">
//           <img src={registry?.url} alt="User Registry" class="image-registry" />
//         </div>



//         <div className="update-delete-reg">
//           {currentUser?.id === registry?.User?.id && (
//             <OpenModalMenuItem
//               itemText={
//                 <>
//                   delete
//                 </>
//               }
//               modalComponent={<DeleteRegistry registryId={registry?.id} />}
//             />
//           )}


//           {currentUser?.id === registry?.User?.id && (
//             <OpenModalMenuItem
//               itemText={
//                 <>
//                   edit
//                   {/* <i class="fas fa-undo"></i> */}
//                 </>
//               }
//               modalComponent={<UpdateRegistry registry={registry} />}
//             />
//           )}
//           {currentUser?.id === registry?.User?.id && (
//             <>
//               {/* <i class="fas fa-comment-dots"></i> */}
//               <CreateComment registryId={registry?.id} />
//             </>
//           )}
//         </div>


        
//     </div>
//   );
// };

// export default Registry;

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory, useParams } from "react-router-dom";
// import "./Registries.css";
// import { getComments } from "../../store/comments";
// import CreateRegistry from "./CreateRegistry";
// import DeleteRegistry from "./DeleteRegistry";
// import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
// import UpdateRegistry from "./EditRegistry";
// import CreateComment from "../Comment/CreateComment";

// const Registry = ({ registry }) => {
//   const registryId = registry?.id;
//   const dispatch = useDispatch();
//   const comments = useSelector((state) => state?.comments);
//   const commentsVal = Object?.values(comments);
//   console.log("Comments", commentsVal);
//   const currentUser = useSelector((state) => state.session.user);

//   useEffect(() => {
//     dispatch(getComments(registryId));
//   }, [dispatch]);

//   return (
  
//         <div className="registry-container">
//           <div className="reg-left">
//           <div className="name-and-registry">
//             <div className="registry-name">
//               {registry?.User?.firstName} {registry?.User?.lastName}
//               <p className="registry-item-title">{registry?.registryItem}</p>
//             </div>
//           </div>

//           <div className="registry-photos">
//             <img src={registry?.url} alt="User Registry" className="image-registry" />
//           </div>

          
//           </div>
//           <div className="reg-right">
//           <div className="update-delete-reg">
//               <>


//               {/* <OpenModalMenuItem
//                 itemText={<><i class='far fa-comment-dots'></i>
//                 </>}
//                 modalComponent={ <CreateComment registryId={registry?.id} />}
//               /> */}
//                 <CreateComment registryId={registry?.id} /> {commentsVal?.map(comment => {
//         return(
//         <div>{comment?.comment}</div>
//         )
//       })}
//               </>
            

//             {currentUser?.id === registry?.User?.id && (
//               <OpenModalMenuItem
//                 itemText={<><i className="fas fa-trash-alt"></i></>}
//                 modalComponent={<DeleteRegistry registryId={registry?.id} />}
//               />
//             )}

//             {currentUser?.id === registry?.User?.id && (
//               <OpenModalMenuItem
//                 itemText={<><i className="fas fa-edit"></i></>}
//                 modalComponent={<UpdateRegistry registry={registry} />}
//               />
//             )}

//             {/* {currentUser?.id === registry?.User?.id && ( */}
            
//           </div>
//           <div className="comments-section">
          
//       </div>
//           </div>
//         </div>
//   );
// };

// // export default Registry;
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory, useParams } from "react-router-dom";
// import "./Registries.css";
// import { getComments } from "../../store/comments";
// import CreateRegistry from "./CreateRegistry";
// import DeleteRegistry from "./DeleteRegistry";
// import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
// import UpdateRegistry from "./EditRegistry";
// import CreateComment from "../Comment/CreateComment";

// const Registry = ({ registry }) => {
//   const registryId = registry?.id;
//   const dispatch = useDispatch();
//   const comments = useSelector((state) => state?.comments);
//   const commentsVal = Object?.values(comments);
//   console.log("Comments", commentsVal);
//   const currentUser = useSelector((state) => state.session.user);

//   useEffect(() => {
//     dispatch(getComments(registryId));
//   }, [dispatch]);

//   // Filter comments for the specific registry
//   const registryComments = commentsVal.filter(
//     (comment) => comment.registryId === registryId
//   );

//   return (
//     <div className="registry-container">
//       <div className="reg-left">
        
//         <div className="name-and-registry">
//           <div className="registry-name">
//             {registry?.User?.firstName} {registry?.User?.lastName}
//             <p className="registry-item-title">{registry?.registryItem}</p>
//           </div>
          
//         </div>

//         <div className="registry-photos">
//           <img
//             src={registry?.url}
//             alt="User Registry"
//             className="image-registry"
//           />
//         </div>
//         <div className="buttons-reg">
//           {currentUser?.id === registry?.User?.id && (
//             <OpenModalMenuItem
//               itemText={<><i className="fas fa-trash-alt"></i></>}
//               modalComponent={<DeleteRegistry registryId={registry?.id} />}
//             />
//           )}

//           {currentUser?.id === registry?.User?.id && (
//             <OpenModalMenuItem
//               itemText={<><i className="fas fa-edit"></i></>}
//               modalComponent={<UpdateRegistry registry={registry} />}
//             />
//           )}
//           </div>
//       </div>

//       <div className="reg-right">
//         <div className="update-delete-reg">
//           <>
            
//             <CreateComment registryId={registry?.id} />
//             {registryComments.map((comment) => (
//               <div className="comment-reg" key={comment.id}>{comment?.comment}</div>
//             ))}
//           </>
        
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Registry;

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory, useParams } from "react-router-dom";
// import "./Registries.css";
// import { getComments } from "../../store/comments";
// import CreateRegistry from "./CreateRegistry";
// import DeleteRegistry from "./DeleteRegistry";
// import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
// import UpdateRegistry from "./EditRegistry";
// import CreateComment from "../Comment/CreateComment";
// import DeleteComment from "../Comment/DeleteComment";
// import Comment from "../Comment";

// const Registry = ({ registry }) => {
//   const registryId = registry?.id;
//   const dispatch = useDispatch();
//   const comments = useSelector((state) => state?.comments);
//   const commentsVal = Object?.values(comments);
//   // console.log("Comments", commentsVal);
//   const currentUser = useSelector((state) => state.session.user);

//   useEffect(() => {
//     dispatch(getComments(registryId));
//   }, [dispatch]);

//   return (
//     <div className="registry-container">
      
//         <div className="name-and-registry">
      
//             {registry?.User?.firstName} {registry?.User?.lastName}
//             <p className="registry-item-title">{registry?.registryItem}</p>
          
          
//         </div>
    
//         <div className="registry-photos">
//           <img
//             src={registry?.url}
//             alt="User Registry"
//             style={{ height: '350px', maxwidth: '550px' }}
//             className="image-registry"
//           />
//           <div className="buttons-reg">
//           {currentUser?.id === registry?.User?.id && (
//             <OpenModalMenuItem
//             className="trash-reg"
//               itemText={<><i className="fas fa-trash-alt"></i></>}
//               modalComponent={<DeleteRegistry registryId={registry?.id} />}
//             />
//           )}
          
//           {currentUser?.id === registry?.User?.id && (
//             <OpenModalMenuItem
//             className="update-reg"
//               itemText={<><i className="fas fa-edit"></i></>}
//               modalComponent={<UpdateRegistry registry={registry} />}
//             />
//           )}
//         </div>
//         </div>
        
      

   
     
      
//         {currentUser?.id === registry?.User?.id && (
//         <>
//   {/* <i class="fas fa-comment-dots"></i> */}
//   <Comment/>
//   {/* <CreateComment registryId={registry?.id} /> */}
  
// </>
//         )}
//       </div>

//   );
// };

// export default Registry;


import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./Registries.css";
import { getComments } from "../../store/comments";
import CreateRegistry from "./CreateRegistry";
import DeleteRegistry from "./DeleteRegistry";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import UpdateRegistry from "./EditRegistry";
import CreateComment from "../Comment/CreateComment";
import DeleteComment from "../Comment/DeleteComment";
import Comment from "../Comment";

const Registry = ({ registry }) => {
  const registryId = registry?.id;
  const dispatch = useDispatch();
  const comments = useSelector((state) => state?.comments);
  const commentsVal = Object?.values(comments);
  // console.log("Comments", commentsVal);
  const currentUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getComments(registryId));
  }, [dispatch]);

  return (
    <div className="registry-container">
      <div className="name-and-registry">
            <span>{registry?.User?.firstName} {registry?.User?.lastName}</span>
          <p className="registry-item-title">{registry?.registryItem}</p>
     
        <div className="buttons-reg">
          {currentUser?.id === registry?.User?.id && (
            <OpenModalMenuItem
              className="trash-reg"
              itemText={<><i className="fas fa-trash-alt"></i></>}
              modalComponent={<DeleteRegistry registryId={registry?.id} />}
            />
          )}

          {currentUser?.id === registry?.User?.id && (
            <OpenModalMenuItem
              className="update-reg"
              itemText={<><i className="fas fa-edit"></i></>}
              modalComponent={<UpdateRegistry registry={registry} />}
            />
          )}

      {/* {currentUser?.id === registry?.User?.id && (
        <>
        <OpenModalMenuItem
        itemText={<i class="fas fa-comment-dots"></i>}
          modalComponent={   <CreateComment registryId={registry?.id} />}
       />
        </>
      )} */}
        </div>
      </div>

      <div className="registry-photos">
        <img
          src={registry?.url}
          alt="User Registry"
          style={{ height: '350px', maxwidth: '550px' }}
          className="image-registry"
        />
        
      </div>

    </div>
  );
};

export default Registry;
