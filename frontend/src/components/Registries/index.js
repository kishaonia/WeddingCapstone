import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./Registries.css";
import { getComments } from "../../store/comments";
import CreateRegistry from "./CreateRegistry";
import DeleteRegistry from "./DeleteRegistry";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import UpdateRegistry from "./EditRegistry";
import CreateComment from "../Comment/CreateComment";


const Registry = ({ registry }) => {
  const registryId = registry?.id
  const dispatch = useDispatch();
  const comments = useSelector(state => state?.comments)
  const commentsVal = Object?.values(comments)
  console.log('Comments', commentsVal)
 const currentUser = useSelector(state => state.session.user)
 
 useEffect(() => {
  dispatch(getComments(registryId))
 },[dispatch])

  return (
            

    <div className="registry-container">
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
    </div>

    
    
  );
 
};

export default Registry;
