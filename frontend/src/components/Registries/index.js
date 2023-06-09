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

<<<<<<< HEAD
=======

>>>>>>> parent of edfbe6e (did a lot of styling!)
const Registry = ({ registry }) => {
  const registryId = registry?.id;
  const dispatch = useDispatch();
<<<<<<< HEAD
  const comments = useSelector((state) => state?.comments);
  const commentsVal = Object?.values(comments);
  console.log("Comments", commentsVal);
  const currentUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getComments(registryId));
  }, [dispatch]);

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
=======
  const comments = useSelector(state => state?.comments)
  const commentsVal = Object?.values(comments)
  console.log('Comments', commentsVal)
 const currentUser = useSelector(state => state.session.user)
 
 useEffect(() => {
  dispatch(getComments(registryId))
 },[dispatch])
>>>>>>> parent of edfbe6e (did a lot of styling!)

  return (
    <div className="registry-container">
<<<<<<< HEAD
      <div className={`registry-slideshow ${isFlipped ? "" : "flipped"}`} onClick={handleClick}>

      
      <div className="update-delete">
          
          {currentUser?.id === registry?.User?.id && (
            <OpenModalMenuItem
              itemText={
                <>
                  <i class="fas fa-undo"></i>
                </>
              }
              modalComponent={<UpdateRegistry registry={registry} />}
            />
          )}
          {currentUser?.id === registry?.User?.id && (
            <OpenModalMenuItem
              itemText={
                <>
                  <i className="fas fa-trash-alt"></i>
                </>
              }
              modalComponent={<DeleteRegistry registryId={registry?.id} />}
            />
          )}
        </div>
        <div className="registry-photos">
       
          <img src={registry?.url} alt="User Registry" />
        </div>
        <div className="name-and-registry">
          <h4 className="registry-name">
            {registry?.User?.firstName} {registry?.User?.lastName}
            <p className="registry-item-title">{registry?.registryItem}</p>
          </h4>
        </div>
        {currentUser?.id === registry?.User?.id && (
        <>
  <i class="fas fa-comment-dots"></i>
 <div className="please"><CreateComment registryId={registry?.id} /></div> 
</>
        )}
      </div>

      <div className="registry-when-flipped"></div>
=======
      <div className="registry-slideshow">
        <h4 className="registry-name">
          {registry?.User?.firstName} {registry?.User?.lastName}
        </h4>
        <p className="registry-item-title">{registry?.registryItem}</p>
        <img src={registry?.url} alt="User Registry" />
        <div className="update-delete">
      {currentUser?.id === registry?.User?.id ? <OpenModalMenuItem itemText="Delete" modalComponent={<DeleteRegistry registryId={registry?.id}/>}/>:<></>}
      {currentUser?.id === registry?.User?.id ? <OpenModalMenuItem itemText="Update" modalComponent={<UpdateRegistry registry={registry}/>}/>:<></>}
      <OpenModalMenuItem itemText='Create Comment' modalComponent={<CreateComment registryId={registry?.id}/>}/>
      {commentsVal?.map(comment => {
        return(
        <div>{comment?.comment}</div>
        )
      })}
      </div>
      </div>
>>>>>>> parent of edfbe6e (did a lot of styling!)
    </div>
  );
};

export default Registry;
