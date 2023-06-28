import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import CreateComment from "../Comment/CreateComment";
import DeleteComment from "./DeleteComment";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import UpdateComment from "./UpdateComment"
import { getComments } from "../../store/comments";
import { useDispatch } from "react-redux";
import { useState } from "react";


const Comment = ({ Comments }) => {
    const commentId = Comments?.id;
    const currentUser = useSelector((state) => state.session.user);
    const comments = useSelector((state) => state?.comments);
    const [comment, setComment] = useState(Comments?.comment);
    const dispatch = useDispatch();
    const history = useHistory();
    const User = useSelector((state) => state?.users);

    const commentsVal = Object?.values(comments);
    if (!currentUser) {
        history.push("/");
      }

    useEffect(() => {
      
        dispatch(getComments());
      }, [
        dispatch,
        JSON.stringify(comments),
        JSON.stringify(currentUser),
        JSON.stringify(commentId),
      ]);

    return (
        <div className="comment-container">
           

             {Comments?.map((Comments) => (
                <div className="commentss">
                    <Comments key={Comments?.id} comment={Comments}/>
                </div>

) 
            )} 

<CreateComment/>
            <div className="comment-details">
                <h4 className="comment-author" key={Comments?.id}>
                    {/* {`${Comments?.firstName} ${Comments?.User?.lastName}`} */}
                    {Comments?.User?.firstName} {Comments?.User.lastName} 
                </h4>
                <p className="comment-text">{Comments?.comment}</p>
                <div className="update-delete-comments">
                    {currentUser?.id === Comments?.User?.id && (
                        <OpenModalMenuItem
                            itemText="Delete"
                            modalComponent={ 
                            <DeleteComment
                             commentId={Comments?.id} />}
                        />
                 )}
                    {currentUser?.id === Comments?.User?.id && (
                        <OpenModalMenuItem
                            itemText="Update"
                            modalComponent={<UpdateComment UpdateComment={Comments} />}
                        />
                    )}
                        <></>
                
                </div>
            </div>
        </div>
    );
};

export default Comment;

// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
// import CreateComment from "../Comment/CreateComment";
// import DeleteComment from "./DeleteComment";
// import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
// import UpdateComment from "./UpdateComment";
// import { getComments } from "../../store/comments";
// import { useState } from "react";

// const Comment = () => {
//   const currentUser = useSelector((state) => state.session.user);
//   const comments = useSelector((state) => state.comments);
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const [comment, setComment] = useState(null);
//   const commentArray = comment ? Object.values(comments) : []

//   if (!currentUser) {
//     history.push("/");
//   }

//   useEffect(() => {
//     dispatch(getComments());
//   }, [dispatch]);

//   return (
//     <div className="comment-container">
//       {commentArray.map((comment) => (
//         <div className="comments" key={comment?.id}>
//           <div className="comment-details">
//             <h4 className="comment-author">
//               {`${comment?.User?.firstName} ${comment?.User?.lastName}`}
//             </h4>
//             <p className="comment-text">{comment?.comment}</p>
//             <div className="update-delete-comments">
//               {currentUser?.id === comment.User?.id && (
//                 <OpenModalMenuItem
//                   itemText="Delete"
//                   modalComponent={
//                   <DeleteComment commentId={comment?.id}
//                    />
//                   }
//                 />
//                )} 
//               {/* {currentUser?.id === comment.User?.id && (
//                 <OpenModalMenuItem
//                   itemText="Update"
//                   modalComponent={<UpdateComment UpdateComment={comment} />}
//                 />
//               )} */}
//             </div>
//           </div>
//         </div>
//       ))}
//       <CreateComment />
//     </div>
//   );
// };

// export default Comment;
