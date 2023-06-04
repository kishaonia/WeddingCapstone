import { updateOneComment } from "../../../store/comments";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useModal } from "../../../context/Modal";
import { useSelector } from "react-redux";


const UpdateComment = ({ comment }) => {
    const commentId = comment?.id;
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    const [comment, setComment] = useState(comment?.comment);
    const [error, setError] = useState({});

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!comment) {
            setError({ comment: "Comment is required" });
            return;
        }
      
        const newComment = {
            comment
        };
        dispatch(updateOneComment(newComment, commentId)).then(closeModal);
    };

    const onCancel = (e) => {
        e.preventDefault();
        closeModal();
    };

    return (
        <>
            <div className="comment-form-pop-up">
                <form className="comment-form" onSubmit={onSubmit}>
                    <label className="comment-label">Editing a Comment?</label>
                    <input
                        type="text"
                        placeholder="Comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    />
                    {error.comment && <span className="error">{error.comment}</span>}
                    <br />
                    <button className="submit-comments" type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};

export default UpdateComment;
