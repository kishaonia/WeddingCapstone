import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import CreateComment from "../Comment/CreateComment";
import DeleteComment from "./DeleteComment";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import UpdateComment from "./UpdateComment"


const Comment = ({ comment }) => {
    const currentUser = useSelector((state) => state.session.user);

    return (
        <div className="comment-container">
            <div className="comment-details">
                <h4 className="comment-author">
                    {comment?.User?.firstName} {comment?.User?.lastName}
                </h4>
                <p className="comment-text">{comment?.commentText}</p>
              {comment?.url}
                <div className="update-delete">
                    {currentUser?.id === comment?.User?.id ? (
                        <OpenModalMenuItem
                            itemText="Delete"
                            modalComponent={<DeleteComment commentId={comment?.id} />}
                        />
                    ) : (
                        <></>
                    )}
                    {currentUser?.id === comment?.User?.id ? (
                        <OpenModalMenuItem
                            itemText="Update"
                            modalComponent={<UpdateComment comment={comment} />}
                        />
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Comment;