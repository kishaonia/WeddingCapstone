import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import { createOneComment } from "../../store/comments";

const CreateComment = ({registryId}) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const comments = useSelector(state => state?.comments)
    const [comment, setComment] = useState("");
    const commentsVal = Object?.values(comments)
    console.log('Comments', commentsVal)
    // const usersVal = Object?.values(users);

    const onSubmit = async(e) => {
        e.preventDefault();

        const newComment = {
            comment: comment
         
        };

        const success = await dispatch(createOneComment(newComment, registryId));
        if (success) {
          
            setComment('');
            
        }
    };

    return (
        <div className="comment-form-pop-up">
        Leave a note? 
        {commentsVal?.map(comment => {
            return(
            <div className="comment-in-reg"> {comment?.comment}</div>
            )
          })}
            <form className="comment-form" onSubmit={onSubmit}>
                <label className="comment-text-label"></label>
                <input
                    className="input-registry"
                    type="text"
                    placeholder="enter your note!"
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    required
                />
                <br />
                <br />
                <button className="submit-comments">Submit</button>
            </form>
        </div>
    );
};

export default CreateComment;
